/* ===========================================================================
   webProject / index.js
   入口图标墙渲染。新增功能只需要改下面的 features 数组即可。
   ---------------------------------------------------------------------------
   每条记录字段：
     icon  : 图标路径，放 assets/ 下（建议 96×96 的 SVG 或 PNG）
     title : 图标下方显示的功能名
     file  : 点击后跳转的页面文件名（与 index.html 同层的 .html）
   =========================================================================== */

const features = [
  // —— 新增功能时，复制下面这一行并改成你的内容（不要删掉注释模板）——
  // { icon: 'assets/foo.svg', title: '我的功能', file: 'foo.html' },
  { icon: 'assets/learning-goals.svg', title: '学习目标管理台', file: 'learning-goals.html' },
  { icon: 'assets/body-fit.svg', title: '减脂健身追踪台', file: 'body-fit.html' },
  { icon: 'assets/wage-ledger.svg', title: '打工人小账本', file: 'wage-ledger.html' },
  { icon: 'assets/batch-report.svg', title: '批量处理报告', file: 'batch-report.html' },
  { icon: 'assets/ai-station.svg', title: 'AI 创作小站', file: 'ai-station.html' },
  { icon: 'assets/daily-life.svg', title: '每日生活管理', file: 'daily-life.html' },
  { icon: 'assets/whiteboard.svg', title: '协作白板', file: 'whiteboard.html' },
  { icon: 'assets/video-editor.svg', title: '视频剪辑台', file: 'video-editor.html' },
  { icon: 'assets/watermark-remover.svg', title: '图片去水印', file: 'watermark-remover.html' },
  { icon: 'assets/video-watermark-remover.svg', title: '视频去水印', file: 'video-watermark-remover.html' },
];

(function render() {
  const grid = document.getElementById('feature-grid');
  if (!grid) return;

  if (!features.length) {
    grid.innerHTML = '<div class="empty">暂无功能入口，按页面底部「新增功能指引」添加。</div>';
    return;
  }

  const frag = document.createDocumentFragment();
  features.forEach(function (f) {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = f.file;
    a.setAttribute('aria-label', f.title || f.file);

    const img = document.createElement('img');
    img.className = 'card__icon';
    img.alt = f.title || '';
    img.src = f.icon || 'assets/icon-default.svg';
    img.loading = 'lazy';
    // 图标加载失败回退到默认图标
    img.onerror = function () { img.src = 'assets/icon-default.svg'; };

    const span = document.createElement('span');
    span.className = 'card__title';
    span.textContent = f.title || f.file;

    a.appendChild(img);
    a.appendChild(span);
    frag.appendChild(a);
  });

  grid.appendChild(frag);
})();
