# AI 创作小站（ai-station）独立剥离指南

> 适用场景：想把 `webProject` 里的「AI 创作小站」单独拆成一个可独立运行 / 部署的项目，
> 不再依赖 `webProject` 的其它页面（video-editor、watermark-remover 等）。

---

## 一、它到底包含哪些文件（完整依赖清单）

ai-station 是一个纯静态、零外链、零运行时依赖的站点，只用到下面 5 项：

| 文件 / 目录 | 作用 |
| --- | --- |
| `ai-station.html` | 入口页面（挂载点 + 引入 css/js） |
| `css/ai-station.css` | 全部样式。**`:root` 变量定义在文件内**，不依赖任何全局/共享 CSS |
| `js/ai-station.js` | 渲染逻辑（导航、网格、分组分页、详情弹层、连播） |
| `js/ai-station-data.js` | 全部数据 + 站点配置（`site` 段、各栏目 `columns`） |
| `assets/ai-station/` | 资源目录：`images/`（封面）、`videos/`（各栏目视频）、`plot/`、`avatars/` |

**关键确认（已核对 `ai-station.html`）**：页面仅引用了 `css/ai-station.css`、`js/ai-station-data.js`、`js/ai-station.js` 三项，
没有引入任何共享的 `js/index.js`、`common.js` 或其它 CSS，也没有任何 CDN / 外部字体 / 图表库。
所以剥离时**只要带走这 5 项，结构不破，原地就能跑**。

> 体积提示：`assets/ai-station/` 当前约 **1.8 GB**，大头是 `videos/` 下各栏目的视频文件。
> 封面图（`images/`）和 `plot/` 加起来很小，只有视频占空间。

---

## 二、两种剥离方案

### 方案 A：整包复制（最省心，推荐先试）

1. 新建一个空文件夹，例如 `ai-station-standalone/`。
2. 把下面 5 项**原样**拷过去，保持目录层级：

   ```
   ai-station-standalone/
   ├── ai-station.html
   ├── css/
   │   └── ai-station.css
   ├── js/
   │   ├── ai-station.js
   │   └── ai-station-data.js
   └── assets/
       └── ai-station/        ← 整个目录一起拷（images/videos/plot/avatars）
   ```

3. 直接双击 `ai-station.html` 即可（`file://` 下封面和视频都走相对路径，能正常显示）。

优点：绝对不会漏资源，复制即用。
缺点：会把 1.8G 视频一起带走。

### 方案 B：精简复制（只带用到的资源）

适合想瘦身、或只保留部分栏目的情况：

- 必拷：`ai-station.html` + `css/` + `js/` 两个文件。
- 资源只拷 `assets/ai-station/images/`、`assets/ai-station/plot/`、`assets/ai-station/videos/`
  （**务必保留 `videos/` 下的各栏目子目录结构**，例如 `videos/荒野剑君/`、`videos/莉诺的小人国/` 等）。
- `assets/ai-station/avatars/` 目前是空目录（数据里唯一一处 `avatars/xiaolan-still.jpg` 实际文件不存在），
  缺图时页面会自动显示「视频待上传」占位，**不影响运行**，可忽略。

⚠️ 精简复制的红线：**`js/ai-station-data.js` 里 `src`/`cover` 引用的每个路径都要在目标目录里存在**，
否则对应卡片走占位图（不会崩，但显示不完整）。不确定就退回方案 A。

---

## 三、独立后需要改的地方（按需）

1. **站点信息**：编辑 `js/ai-station-data.js` 顶部的 `site` 段：
   ```js
   site: {
     name: "AI 创作小站",
     slogan: "剧本 · 视频 · 数字人 · 短剧 —— 一个人也能跑的 AI 内容工厂",
     owner: "你的名字",          // 改成你自己的
     logo: ""                    // 可填一个图片路径，留空则不显示 logo
   }
   ```
2. **「返回首页」链接**：`ai-station.html` 里有
   ```html
   <a href="index.html">← 返回工作台首页</a>
   ```
   独立后没有 `index.html`，建议改成你自己的首页，或直接删掉这行。
3. **清理原项目入口**（仅当你还要保留 `webProject`）：
   如果 `index.html` 图标墙里登记了 ai-station 入口，记得把它移除，避免指向已删除的页面。

---

## 四、本地预览 / 部署

- **直接打开**：双击 `ai-station.html`（`file://` 即可，离线可用）。
- **本地静态服务（视频更稳，推荐）**：
  ```bash
  cd ai-station-standalone
  python -m http.server 8000
  # 浏览器访问 http://localhost:8000/ai-station.html
  ```
- **上线给手机访问**：用任意静态托管（CloudStudio 沙箱、GitHub Pages、Netlify、Vercel 等），
  把整个目录传上去即可。**无需构建步骤、无外部依赖**，传完就是在线站点。

> 注意：剧本类条目若配置了 `.txt/.md` 正文，在 `file://` 下因浏览器限制不会被 XHR 加载，
> 会走内联 `content` 兜底；用上面的 `http` 静态服务则正常加载。

---

## 五、日常维护

- **增删栏目 / 视频**：只改 `js/ai-station-data.js` 一个文件即可，前端无需动。
- **改样式**：只改 `css/ai-station.css`。
- **改交互逻辑**：只改 `js/ai-station.js`。
- 数据是「分组 + 分页」驱动的：每个视频条目带 `group` 字段（如「荒野剑君」），
  页面按 `group` 自动生成子栏目并分页（每页 8 个），新增栏目只要往数组里加带 `group` 的条目。

---

## 六、一句话总结

> ai-station 是自包含的静态站点，复制 `ai-station.html` + `css/ai-station.css` + `js/ai-station.js` + `js/ai-station-data.js` + `assets/ai-station/` 这 5 项到一个新目录，结构不变，原地就能跑；想瘦身就只带 `images/`、`plot/`、`videos/`，并确保 data 里引用的路径都存在。
