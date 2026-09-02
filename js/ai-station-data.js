/* =========================================================================
 * AI 创作小站 —— 内容数据
 * -------------------------------------------------------------------------
 * 这是小站唯一需要你维护的文件。改这里就能改全站内容，不用碰 HTML/CSS/JS。
 *
 * 你的资源放到哪？
 *   webProject/assets/ai-station/
 *     ├─ images/    封面图、剧照、数字人形象（jpg/png/webp/svg）
 *     ├─ videos/    视频、短剧、数字人演示（mp4/webm）
 *     ├─ plot/      剧本正文（.txt / .md / .html，写相对路径即可）
 *     └─ avatars/   数字人头像/形象特写
 *
 * 条目字段说明（每条 item）：
 *   id      唯一标识（随便写，不重复即可）
 *   title   标题
 *   cover   封面图路径（相对于站点根，例：assets/ai-station/images/cover-1.svg）
 *   desc    一句话简介
 *   tags    标签数组，如 ["科幻","3分钟"]
 *   date    发布日期 YYYY-MM-DD
 *   kind    渲染方式：
 *             "video"  → 点击弹出视频播放器（用 src 指向视频文件）
 *             "image"  → 点击弹出大图
 *             "script" → 点击弹出剧本正文（src 指向 .txt/.md 会异步加载；加载不到则用 content 兜底）
 *             "avatar" → 数字人卡片（可用 video 或 image 展示）
 *   src     资源文件路径（视频/图片/剧本 .txt/.md 文件），按需填
 *   content 剧本正文文本（kind:"script" 内联兜底；http 下优先用 src 指向的 .txt/.md，file:// 双击打开则用此内容）
 *   featured  true 会出现在「精选」首页
 * ========================================================================= */

window.AI_STATION = {
  site: {
    name: "AI 创作小站",
    slogan: "剧本 · 视频 · 数字人 · 短剧 —— 一个人也能跑的 AI 内容工厂",
    owner: "你的名字",
    // 顶部署名图（可选，留空则用文字 Logo）：assets/ai-station/images/logo.svg
    logo: ""
  },

  // 栏目顺序即导航顺序；key 用于内部切换，不要改
  columns: [
    {
      key: "featured",
      name: "精选",
      icon: "spark",
      items: [] // 自动从各栏目 featured=true 聚合，无需手写
    },
    {
      key: "screenplay",
      name: "AI 剧本",
      icon: "script",
      items: [
        {
          id: "sp-5", title: "《如愿》跨越时空的盛世告白",
          cover: "assets/ai-station/images/cover-ruyuan.png",
          desc: "90 秒国风动漫短剧，先辈浴血开路，后辈替他们看遍盛世人间。",
          tags: ["国风", "家国", "短剧"], date: "2026-08-16",
          kind: "script",
          src: "assets/ai-station/plot/如愿-跨越时空的盛世告白.txt",
          content: "《如愿》90秒动漫家国短剧｜跨越时空的盛世告白\n适配BGM：王菲《如愿》完整版（90秒卡点）\n风格：国风动漫、唯美治愈、悲壮温柔、时空交错\n核心主题：先辈浴血开路，后辈替他们看遍盛世人间\n人物设定\n1. 先辈少年：乱世年代，身穿旧布衣、眼神倔强、手握残破旗帜，是战火里的无名少年战士\n2. 现世少年：和平年代，校服干净、眉眼温柔，生活在繁华盛世的普通少年\n两人同一张脸、同一个眉眼，寓意：我们，就是他们的未来\n\n【0–15秒｜前奏温柔起笔：乱世孤灯】\n画面（冷色调、昏暗朦胧）\n战火纷飞的旧时代，断壁残垣、硝烟弥漫。乱世少年独自站在废墟之上，风吹破衣衫，手里紧紧攥着一面褪色的小旗帜。\n他抬头望向灰蒙蒙的天空，眼里有憧憬，也有无力。他从未见过太平盛世，只在心底默默期盼山河安稳、人间无恙。\n字幕：你曾身处黑暗，心向光明\n【15–35秒｜主歌切入：负重前行】\n画面（节奏渐缓、氛围感拉满）\n快速蒙太奇：乱世少年奔走救人、默默坚守、在寒夜里独自站岗、在绝境中不肯倒下。\n无数无名先辈身影一闪而过，皆是平凡普通人，却在用血肉之躯抵挡乱世风雨。\n镜头定格：少年望着远方繁华的方向，轻轻一笑，眼底藏着一生未能如愿的期盼。\n字幕：以渺小身躯，扛万家灯火\n【35–55秒｜时空转场：盛世降临】\n画面（冷暖瞬间切换、超级治愈）\n黑屏一瞬，冷色瞬间转暖。硝烟散尽、天光乍亮。\n现代都市画面缓缓铺开：车水马龙、春日繁花、街头烟火、孩童嬉笑、晚霞漫天。\n现世少年站在一模一样的方位，穿着干净校服，抬头望向澄澈的蓝天。\n时空重叠镜头：古今两个少年身影轻轻重叠，跨越百年遥遥相望。\n字幕：你未见的人间，我替你亲眼看见\n【55–75秒｜副歌高潮：如愿告白】\n画面（催泪核心、全篇高光）\n现世少年漫步盛世山河：走过繁花遍野的山野、灯火璀璨的街头、安稳祥和的校园。\n他抬手、轻轻触碰空气，仿佛在触摸百年前那个遗憾落幕的自己。\n幻境中，乱世少年站在光影尽头，静静看着眼前的盛世人间，眼中的遗憾慢慢化作温柔笑意。\n神级卡点字幕（贴合歌词）\n山河无恙，烟火寻常\n这便是你曾期盼的如愿人间\n【75–90秒｜结尾收尾：我辈勇往】\n画面（温柔升华、余味悠长）\n古今身影缓缓消散，最终只剩明媚盛世山河。\n镜头缓缓拉远：日出东方、山河锦绣，万家灯火次第亮起。\n结尾定格字幕，贴合歌曲终极情怀：\n愿不枉，愿勇往，盛世如你所愿\n\n整体内核总结（完全贴合《如愿》）\n没有悲壮嘶吼，只有最温柔的家国情怀：\n先辈困于乱世、倾尽所有、未能亲眼见证太平；\n我辈生于盛世、承其所愿、替他们看完世间繁华。\n最动人的家国，从来不是宏大口号，而是代代相传的热爱与奔赴。",
          featured: false
        },
		  {
          id: "sp-6", title: "《小小》-从前的马车很慢，书信很远",
          cover: "assets/ai-station/images/cover-xiaoxiao.jpeg",
          desc: "从前的马车很慢，书信很远，一生只爱一人",
          tags: ["国风", "家国", "短剧"], date: "2026-08-16",
          kind: "script",
          src: "assets/ai-station/plot/小小-从前的马车很慢，书信很远.txt",
		  content: "",
          featured: false
        }
      ]
    },
    {
      key: "video",
      name: "AI 视频",
      icon: "video",
      items: [
        {
          id: "vid-2", title: "产品种草 · 咖啡机",
          cover: "assets/ai-station/images/cover-6.svg",
          desc: "15 秒带货短视频，AI 配音 + 数字背景。",
          tags: ["种草", "带货"], date: "2026-08-05",
          kind: "video",
          src: "assets/ai-station/videos/coffee-ad.mp4",
          featured: false
        },
        /* —— 《荒野剑君》片段：与剧照同理，group 相同的条目在「AI 视频」里归到一个子栏目 —— */
        {
          id: "vid-hyjj-intro", title: "《荒野剑君》片头",
          cover: "assets/ai-station/images/cover-hyjj-intro.jpg",
          desc: "《荒野剑君》正式片头。",
          tags: ["荒野剑君", "片头"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片头.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-1", title: "《荒野剑君》片段一",
          cover: "assets/ai-station/images/cover-hyjj-1.jpg",
          desc: "《荒野剑君》正片片段 1。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段1.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-2", title: "《荒野剑君》片段二",
          cover: "assets/ai-station/images/cover-hyjj-2.jpg",
          desc: "《荒野剑君》正片片段 2。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段2.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-3", title: "《荒野剑君》片段三",
          cover: "assets/ai-station/images/cover-hyjj-3.jpg",
          desc: "《荒野剑君》正片片段 3。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段3.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-4", title: "《荒野剑君》片段四",
          cover: "assets/ai-station/images/cover-hyjj-4.jpg",
          desc: "《荒野剑君》正片片段 4。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段4.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-5", title: "《荒野剑君》片段五",
          cover: "assets/ai-station/images/cover-hyjj-5.jpg",
          desc: "《荒野剑君》正片片段 5。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段5.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-6", title: "《荒野剑君》片段六",
          cover: "assets/ai-station/images/cover-hyjj-6.jpg",
          desc: "《荒野剑君》正片片段 6。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段6.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-7", title: "《荒野剑君》片段七",
          cover: "assets/ai-station/images/cover-hyjj-7.jpg",
          desc: "《荒野剑君》正片片段 7。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段7.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-8", title: "《荒野剑君》片段八",
          cover: "assets/ai-station/images/cover-hyjj-8.jpg",
          desc: "《荒野剑君》正片片段 8。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段8.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-9", title: "《荒野剑君》片段九",
          cover: "assets/ai-station/images/cover-hyjj-9.jpg",
          desc: "《荒野剑君》正片片段 9。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段9.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-10", title: "《荒野剑君》片段十",
          cover: "assets/ai-station/images/cover-hyjj-10.jpg",
          desc: "《荒野剑君》正片片段 10。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段10.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-11", title: "《荒野剑君》片段十一",
          cover: "assets/ai-station/images/cover-hyjj-11.jpg",
          desc: "《荒野剑君》正片片段 11。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段11.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-12", title: "《荒野剑君》片段十二",
          cover: "assets/ai-station/images/cover-hyjj-12.jpg",
          desc: "《荒野剑君》正片片段 12。",
          tags: ["荒野剑君", "片段"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段12.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-13", title: "《荒野剑君》片段十三",
          cover: "assets/ai-station/images/cover-hyjj-13.jpg",
          desc: "《荒野剑君》片段十三。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段13.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-14", title: "《荒野剑君》片段十四",
          cover: "assets/ai-station/images/cover-hyjj-14.jpg",
          desc: "《荒野剑君》片段十四。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段14.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-15", title: "《荒野剑君》片段十五",
          cover: "assets/ai-station/images/cover-hyjj-15.jpg",
          desc: "《荒野剑君》片段十五。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段15.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-16", title: "《荒野剑君》片段十六",
          cover: "assets/ai-station/images/cover-hyjj-16.jpg",
          desc: "《荒野剑君》片段十六。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段16.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-17", title: "《荒野剑君》片段十七",
          cover: "assets/ai-station/images/cover-hyjj-17.jpg",
          desc: "《荒野剑君》片段十七。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段17.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-18", title: "《荒野剑君》片段十八",
          cover: "assets/ai-station/images/cover-hyjj-18.jpg",
          desc: "《荒野剑君》片段十八。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段18.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-19", title: "《荒野剑君》片段十九",
          cover: "assets/ai-station/images/cover-hyjj-19.jpg",
          desc: "《荒野剑君》片段十九。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段19.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-21", title: "《荒野剑君》片段二十一",
          cover: "assets/ai-station/images/cover-hyjj-21.jpg",
          desc: "《荒野剑君》片段二十一。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段21.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-22", title: "《荒野剑君》片段二十二",
          cover: "assets/ai-station/images/cover-hyjj-22.jpg",
          desc: "《荒野剑君》片段二十二。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段22.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-23", title: "《荒野剑君》片段二十三",
          cover: "assets/ai-station/images/cover-hyjj-23.jpg",
          desc: "《荒野剑君》片段二十三。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段23.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-24", title: "《荒野剑君》片段二十四",
          cover: "assets/ai-station/images/cover-hyjj-24.jpg",
          desc: "《荒野剑君》片段二十四。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段24.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-25", title: "《荒野剑君》片段二十五",
          cover: "assets/ai-station/images/cover-hyjj-25.jpg",
          desc: "《荒野剑君》片段二十五。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段25.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-26", title: "《荒野剑君》片段二十六",
          cover: "assets/ai-station/images/cover-hyjj-26.jpg",
          desc: "《荒野剑君》片段二十六。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段26.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-27", title: "《荒野剑君》片段二十七",
          cover: "assets/ai-station/images/cover-hyjj-27.jpg",
          desc: "《荒野剑君》片段二十七。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段27.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-28", title: "《荒野剑君》片段二十八",
          cover: "assets/ai-station/images/cover-hyjj-28.jpg",
          desc: "《荒野剑君》片段二十八。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段28.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-29-1", title: "《荒野剑君》片段二十九（上）",
          cover: "assets/ai-station/images/cover-hyjj-29-1.jpg",
          desc: "《荒野剑君》片段二十九（上）。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段29-1.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-29-2", title: "《荒野剑君》片段二十九（下）",
          cover: "assets/ai-station/images/cover-hyjj-29-2.jpg",
          desc: "《荒野剑君》片段二十九（下）。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段29-2.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-30", title: "《荒野剑君》片段三十",
          cover: "assets/ai-station/images/cover-hyjj-30.jpg",
          desc: "《荒野剑君》片段三十。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段30.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-31", title: "《荒野剑君》片段三十一",
          cover: "assets/ai-station/images/cover-hyjj-31.jpg",
          desc: "《荒野剑君》片段三十一。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段31.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-32", title: "《荒野剑君》片段三十二",
          cover: "assets/ai-station/images/cover-hyjj-32.jpg",
          desc: "《荒野剑君》片段三十二。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段32.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-33", title: "《荒野剑君》片段三十三",
          cover: "assets/ai-station/images/cover-hyjj-33.jpg",
          desc: "《荒野剑君》片段三十三。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段33.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-34", title: "《荒野剑君》片段三十四",
          cover: "assets/ai-station/images/cover-hyjj-34.jpg",
          desc: "《荒野剑君》片段三十四。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段34.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-35-1", title: "《荒野剑君》片段三十五（上）",
          cover: "assets/ai-station/images/cover-hyjj-35-1.jpg",
          desc: "《荒野剑君》片段三十五（上）。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段35-1.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-35-2", title: "《荒野剑君》片段三十五（下）",
          cover: "assets/ai-station/images/cover-hyjj-35-2.jpg",
          desc: "《荒野剑君》片段三十五（下）。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段35-2.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-36", title: "《荒野剑君》片段三十六",
          cover: "assets/ai-station/images/cover-hyjj-36.jpg",
          desc: "《荒野剑君》片段三十六。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段36.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-37", title: "《荒野剑君》片段三十七",
          cover: "assets/ai-station/images/cover-hyjj-37.jpg",
          desc: "《荒野剑君》片段三十七。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段37.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-38", title: "《荒野剑君》片段三十八",
          cover: "assets/ai-station/images/cover-hyjj-38.jpg",
          desc: "《荒野剑君》片段三十八。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段38.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-39", title: "《荒野剑君》片段三十九",
          cover: "assets/ai-station/images/cover-hyjj-39.jpg",
          desc: "《荒野剑君》片段三十九。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段39.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-40", title: "《荒野剑君》片段四十",
          cover: "assets/ai-station/images/cover-hyjj-40.jpg",
          desc: "《荒野剑君》片段四十。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段40.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-41", title: "《荒野剑君》片段四十一",
          cover: "assets/ai-station/images/cover-hyjj-41.jpg",
          desc: "《荒野剑君》片段四十一。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段41.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-42", title: "《荒野剑君》片段四十二",
          cover: "assets/ai-station/images/cover-hyjj-42.jpg",
          desc: "《荒野剑君》片段四十二。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段42.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-43", title: "《荒野剑君》片段四十三",
          cover: "assets/ai-station/images/cover-hyjj-43.jpg",
          desc: "《荒野剑君》片段四十三。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段43.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-44", title: "《荒野剑君》片段四十四",
          cover: "assets/ai-station/images/cover-hyjj-44.jpg",
          desc: "《荒野剑君》片段四十四。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段44.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-45", title: "《荒野剑君》片段四十五",
          cover: "assets/ai-station/images/cover-hyjj-45.jpg",
          desc: "《荒野剑君》片段四十五。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段45.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-46", title: "《荒野剑君》片段四十六",
          cover: "assets/ai-station/images/cover-hyjj-46.jpg",
          desc: "《荒野剑君》片段四十六。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段46.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-47", title: "《荒野剑君》片段四十七",
          cover: "assets/ai-station/images/cover-hyjj-47.jpg",
          desc: "《荒野剑君》片段四十七。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段47.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-48", title: "《荒野剑君》片段四十八",
          cover: "assets/ai-station/images/cover-hyjj-48.jpg",
          desc: "《荒野剑君》片段四十八。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段48.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-49", title: "《荒野剑君》片段四十九",
          cover: "assets/ai-station/images/cover-hyjj-49.jpg",
          desc: "《荒野剑君》片段四十九。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段49.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-50", title: "《荒野剑君》片段五十",
          cover: "assets/ai-station/images/cover-hyjj-50.jpg",
          desc: "《荒野剑君》片段五十。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段50.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-51", title: "《荒野剑君》片段五十一",
          cover: "assets/ai-station/images/cover-hyjj-51.jpg",
          desc: "《荒野剑君》片段五十一。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段51.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-52", title: "《荒野剑君》片段五十二",
          cover: "assets/ai-station/images/cover-hyjj-52.jpg",
          desc: "《荒野剑君》片段五十二。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段52.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-53", title: "《荒野剑君》片段五十三",
          cover: "assets/ai-station/images/cover-hyjj-53.jpg",
          desc: "《荒野剑君》片段五十三。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段53.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-54", title: "《荒野剑君》片段五十四",
          cover: "assets/ai-station/images/cover-hyjj-54.jpg",
          desc: "《荒野剑君》片段五十四。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段54.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-55", title: "《荒野剑君》片段五十五",
          cover: "assets/ai-station/images/cover-hyjj-55.jpg",
          desc: "《荒野剑君》片段五十五。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段55.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-56", title: "《荒野剑君》片段五十六",
          cover: "assets/ai-station/images/cover-hyjj-56.jpg",
          desc: "《荒野剑君》片段五十六。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段56.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-57", title: "《荒野剑君》片段五十七",
          cover: "assets/ai-station/images/cover-hyjj-57.jpg",
          desc: "《荒野剑君》片段五十七。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段57.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-58", title: "《荒野剑君》片段五十八",
          cover: "assets/ai-station/images/cover-hyjj-58.jpg",
          desc: "《荒野剑君》片段五十八。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段58.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-59", title: "《荒野剑君》片段五十九",
          cover: "assets/ai-station/images/cover-hyjj-59.jpg",
          desc: "《荒野剑君》片段五十九。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段59.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-hyjj-60", title: "《荒野剑君》片段六十",
          cover: "assets/ai-station/images/cover-hyjj-60.jpg",
          desc: "《荒野剑君》片段六十。",
          tags: ["荒野剑君", "片段"], date: "2026-08-22",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/片段60.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "vid-fqss-1", title: "《父亲写的散文诗》片段1",
          cover: "assets/ai-station/images/cover-fqss-1.jpg",
          desc: "《父亲写的散文诗》片段1。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗1.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-2", title: "《父亲写的散文诗》片段2",
          cover: "assets/ai-station/images/cover-fqss-2.jpg",
          desc: "《父亲写的散文诗》片段2。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗2.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-3", title: "《父亲写的散文诗》片段3",
          cover: "assets/ai-station/images/cover-fqss-3.jpg",
          desc: "《父亲写的散文诗》片段3。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗3.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-3-1", title: "《父亲写的散文诗》片段3-1",
          cover: "assets/ai-station/images/cover-fqss-3-1.jpg",
          desc: "《父亲写的散文诗》片段3-1。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗3-1.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-4", title: "《父亲写的散文诗》片段4",
          cover: "assets/ai-station/images/cover-fqss-4.jpg",
          desc: "《父亲写的散文诗》片段4。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗4.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-4-1", title: "《父亲写的散文诗》片段4-1",
          cover: "assets/ai-station/images/cover-fqss-4-1.jpg",
          desc: "《父亲写的散文诗》片段4-1。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗 4-1.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-5", title: "《父亲写的散文诗》片段5",
          cover: "assets/ai-station/images/cover-fqss-5.jpg",
          desc: "《父亲写的散文诗》片段5。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗5.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-6", title: "《父亲写的散文诗》片段6",
          cover: "assets/ai-station/images/cover-fqss-6.jpg",
          desc: "《父亲写的散文诗》片段6。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗6.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-6-1", title: "《父亲写的散文诗》片段6-1",
          cover: "assets/ai-station/images/cover-fqss-6-1.jpg",
          desc: "《父亲写的散文诗》片段6-1。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗6-1.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-7", title: "《父亲写的散文诗》片段7",
          cover: "assets/ai-station/images/cover-fqss-7.jpg",
          desc: "《父亲写的散文诗》片段7。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗7.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-8", title: "《父亲写的散文诗》片段8",
          cover: "assets/ai-station/images/cover-fqss-8.jpg",
          desc: "《父亲写的散文诗》片段8。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗8.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-fqss-9", title: "《父亲写的散文诗》片段9",
          cover: "assets/ai-station/images/cover-fqss-9.jpg",
          desc: "《父亲写的散文诗》片段9。",
          tags: ["父亲写的散文诗", "片段"], date: "2026-08-29",
          kind: "video",
          src: "assets/ai-station/videos/父亲写的散文诗/父亲写的散文诗9.mp4",
          group: "父亲写的散文诗", featured: false
        },
        {
          id: "vid-lxn-1", title: "《莉诺的小人国》片段1",
          cover: "assets/ai-station/images/cover-lxn-1.jpg",
          desc: "《莉诺的小人国》片段1。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段1.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-2", title: "《莉诺的小人国》片段2",
          cover: "assets/ai-station/images/cover-lxn-2.jpg",
          desc: "《莉诺的小人国》片段2。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段2.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-3", title: "《莉诺的小人国》片段3",
          cover: "assets/ai-station/images/cover-lxn-3.jpg",
          desc: "《莉诺的小人国》片段3。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段3.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-4", title: "《莉诺的小人国》片段4",
          cover: "assets/ai-station/images/cover-lxn-4.jpg",
          desc: "《莉诺的小人国》片段4。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段4.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-5", title: "《莉诺的小人国》片段5",
          cover: "assets/ai-station/images/cover-lxn-5.jpg",
          desc: "《莉诺的小人国》片段5。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段5.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-6", title: "《莉诺的小人国》片段6",
          cover: "assets/ai-station/images/cover-lxn-6.jpg",
          desc: "《莉诺的小人国》片段6。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段6.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-7", title: "《莉诺的小人国》片段7",
          cover: "assets/ai-station/images/cover-lxn-7.jpg",
          desc: "《莉诺的小人国》片段7。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段7.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-8", title: "《莉诺的小人国》片段8",
          cover: "assets/ai-station/images/cover-lxn-8.jpg",
          desc: "《莉诺的小人国》片段8。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段8.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-9", title: "《莉诺的小人国》片段9",
          cover: "assets/ai-station/images/cover-lxn-9.jpg",
          desc: "《莉诺的小人国》片段9。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段9.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-10", title: "《莉诺的小人国》片段10",
          cover: "assets/ai-station/images/cover-lxn-10.jpg",
          desc: "《莉诺的小人国》片段10。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段10.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-11", title: "《莉诺的小人国》片段11",
          cover: "assets/ai-station/images/cover-lxn-11.jpg",
          desc: "《莉诺的小人国》片段11。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段11.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-12", title: "《莉诺的小人国》片段12",
          cover: "assets/ai-station/images/cover-lxn-12.jpg",
          desc: "《莉诺的小人国》片段12。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段12.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-13", title: "《莉诺的小人国》片段13",
          cover: "assets/ai-station/images/cover-lxn-13.jpg",
          desc: "《莉诺的小人国》片段13。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段13.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-14", title: "《莉诺的小人国》片段14",
          cover: "assets/ai-station/images/cover-lxn-14.jpg",
          desc: "《莉诺的小人国》片段14。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段14.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-15", title: "《莉诺的小人国》片段15",
          cover: "assets/ai-station/images/cover-lxn-15.jpg",
          desc: "《莉诺的小人国》片段15。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段15.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-16", title: "《莉诺的小人国》片段16",
          cover: "assets/ai-station/images/cover-lxn-16.jpg",
          desc: "《莉诺的小人国》片段16。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段16.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-17", title: "《莉诺的小人国》片段17",
          cover: "assets/ai-station/images/cover-lxn-17.jpg",
          desc: "《莉诺的小人国》片段17。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段17.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-18", title: "《莉诺的小人国》片段18",
          cover: "assets/ai-station/images/cover-lxn-18.jpg",
          desc: "《莉诺的小人国》片段18。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段18.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-19", title: "《莉诺的小人国》片段19",
          cover: "assets/ai-station/images/cover-lxn-19.jpg",
          desc: "《莉诺的小人国》片段19。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段19.mp4",
          group: "莉诺的小人国", featured: false
        },
        {
          id: "vid-lxn-20", title: "《莉诺的小人国》片段20",
          cover: "assets/ai-station/images/cover-lxn-20.jpg",
          desc: "《莉诺的小人国》片段20。",
          tags: ["莉诺的小人国", "片段"], date: "2026-09-01",
          kind: "video",
          src: "assets/ai-station/videos/莉诺的小人国/片段20.mp4",
          group: "莉诺的小人国", featured: false
        }
      ]
    },
    {
      key: "avatar",
      name: "AI 数字人",
      icon: "avatar",
      items: [
        {
          id: "av-1", title: "测试主播 · 小澜",
          cover: "assets/ai-station/images/cover-9.svg",
          desc: "24 小时直播数字人，支持实时问答。",
          tags: ["主播", "实时"], date: "2026-08-11",
          kind: "avatar",
          src: "assets/ai-station/videos/数字人/xiaolan.mp4", // 数字人演示视频
          featured: true
        },
        {
          id: "av-2", title: "测试讲师 · 知微",
          cover: "assets/ai-station/images/cover-10.svg",
          desc: "课程讲解数字人，口型同步率 98%。",
          tags: ["讲师", "教育"], date: "2026-08-03",
          kind: "avatar",
          src: "assets/ai-station/videos/数字人/zhiwei.mp4",
          featured: false
        },
        {
          id: "av-3", title: "测试客服 · 安安",
          cover: "assets/ai-station/images/cover-11.svg",
          desc: "品牌客服数字人，多轮对话。",
          tags: ["客服"], date: "2026-07-25",
          kind: "avatar",
          src: "assets/ai-station/videos/数字人/anan.mp4",
          featured: false
        }
      ]
    },
    {
      key: "drama",
      name: "AI 短剧",
      icon: "drama",
      items: [
        /* —— 《荒野剑君》短剧：group 相同的条目会在「AI 短剧」里归到一个子栏目下 —— */
        {
          id: "dr-hyjj-1", title: "《荒野剑君》第一集",
          cover: "assets/ai-station/images/cover-hyjj-ep1.jpg",
          desc: "《荒野剑君》短剧第一集，封面取自视频首帧。",
          tags: ["荒野剑君", "短剧"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/荒野剑君-第一集.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "dr-hyjj-2", title: "《荒野剑君》第二集",
          cover: "assets/ai-station/images/cover-hyjj-ep2.jpg",
          desc: "《荒野剑君》短剧第二集，封面取自视频首帧。",
          tags: ["荒野剑君", "短剧"], date: "2026-08-16",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/荒野剑君-第二集.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "dr-hyjj-3", title: "《荒野剑君》第三集",
          cover: "assets/ai-station/images/cover-hyjj-ep3.jpg",
          desc: "《荒野剑君》短剧第三集，封面取自视频首帧。",
          tags: ["荒野剑君", "短剧"], date: "2026-08-19",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/荒野剑君-第三集.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "dr-hyjj-4", title: "《荒野剑君》第四集",
          cover: "assets/ai-station/images/cover-hyjj-ep4.jpg",
          desc: "《荒野剑君》短剧第四集，封面取自视频首帧。",
          tags: ["荒野剑君", "短剧"], date: "2026-08-21",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/荒野剑君-第四集.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "dr-hyjj-5", title: "《荒野剑君》第五集",
          cover: "assets/ai-station/images/cover-hyjj-ep5.jpg",
          desc: "《荒野剑君》短剧第五集，封面取自视频首帧。",
          tags: ["荒野剑君", "短剧"], date: "2026-08-23",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/荒野剑君-第五集.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "dr-hyjj-6", title: "《荒野剑君》第六集",
          cover: "assets/ai-station/images/cover-hyjj-ep6.jpg",
          desc: "《荒野剑君》短剧第六集，封面取自视频首帧。",
          tags: ["荒野剑君", "短剧"], date: "2026-08-24",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/荒野剑君-第六集.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "dr-hyjj-7", title: "《荒野剑君》第七集",
          cover: "assets/ai-station/images/cover-hyjj-ep7.jpg",
          desc: "《荒野剑君》短剧第七集，封面取自视频首帧。",
          tags: ["荒野剑君", "短剧"], date: "2026-08-27",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/荒野剑君-第七集.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "dr-hyjj-8", title: "《荒野剑君》第八集",
          cover: "assets/ai-station/images/cover-hyjj-ep8.jpg",
          desc: "《荒野剑君》短剧第八集，封面取自视频首帧。",
          tags: ["荒野剑君", "短剧"], date: "2026-08-27",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/荒野剑君-第八集.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "dr-hyjj-9", title: "《荒野剑君》第九集",
          cover: "assets/ai-station/images/cover-hyjj-ep9.jpg",
          desc: "《荒野剑君》短剧第九集，封面取自视频首帧。",
          tags: ["荒野剑君", "短剧"], date: "2026-08-28",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/荒野剑君-第九集.mp4",
          group: "荒野剑君", featured: false
        },
        {
          id: "dr-hyjj-10", title: "《荒野剑君》第十集",
          cover: "assets/ai-station/images/cover-hyjj-ep10.jpg",
          desc: "《荒野剑君》短剧第十集，封面取自视频首帧。",
          tags: ["荒野剑君", "短剧"], date: "2026-08-28",
          kind: "video",
          src: "assets/ai-station/videos/荒野剑君/荒野剑君-第十集.mp4",
          group: "荒野剑君", featured: false
        }
      ]
    },
    {
      key: "stills",
      name: "AI 剧照形象",
      icon: "stills",
      items: [
        /* —— 《荒野剑君》定妆照：group 相同的条目会在「AI 剧照形象」里被归到一个子栏目下 —— */
        {
          id: "st-hyjj-shenmu", title: "沈牧 · 定妆照",
          cover: "assets/ai-station/images/hyjj/沈牧.png",
          desc: "《荒野剑君》男主角，孤身行走荒野的剑客。",
          tags: ["荒野剑君", "定妆照"], date: "2026-08-16",
          kind: "image",
          src: "assets/ai-station/images/hyjj/沈牧.png",
          group: "荒野剑君", role: "男主角", featured: true
        },
        {
          id: "st-hyjj-qingluan", title: "青鸾 · 定妆照",
          cover: "assets/ai-station/images/hyjj/青鸾.png",
          desc: "《荒野剑君》女主角，身世成谜的神秘女子。",
          tags: ["荒野剑君", "定妆照"], date: "2026-08-16",
          kind: "image",
          src: "assets/ai-station/images/hyjj/青鸾.png",
          group: "荒野剑君", role: "女主角", featured: true
        },
        {
          id: "st-hyjj-laochen", title: "老陈 · 定妆照",
          cover: "assets/ai-station/images/hyjj/老陈.png",
          desc: "《荒野剑君》配角，荒野客栈的老板。",
          tags: ["荒野剑君", "定妆照"], date: "2026-08-16",
          kind: "image",
          src: "assets/ai-station/images/hyjj/老陈.png",
          group: "荒野剑君", role: "配角", featured: false
        },
        {
          id: "st-hyjj-ahe", title: "阿禾 · 定妆照",
          cover: "assets/ai-station/images/hyjj/阿禾.jpeg",
          desc: "《荒野剑君》配角，跟随沈牧的少年。",
          tags: ["荒野剑君", "定妆照"], date: "2026-08-16",
          kind: "image",
          src: "assets/ai-station/images/hyjj/阿禾.jpeg",
          group: "荒野剑君", role: "配角", featured: false
        },
        {
          id: "st-hyjj-weixuan", title: "魏玄 · 定妆照",
          cover: "assets/ai-station/images/hyjj/魏玄.png",
          desc: "《荒野剑君》角色魏玄的人物定妆照。",
          tags: ["荒野剑君", "定妆照"], date: "2026-08-22",
          kind: "image",
          src: "assets/ai-station/images/hyjj/魏玄.png",
          group: "荒野剑君", role: "配角", featured: false
        },
        /* —— 《如愿》定妆照 / 场景图：group 相同的条目会在「AI 剧照形象」里被归到一个子栏目下 —— */
        {
          id: "st-ruyuan-linwang", title: "林望 · 定妆照（乱世少年）",
          cover: "assets/ai-station/images/ry/乱世少年林望.jpeg",
          desc: "《如愿》乱世少年林望，跨越时空的关键人物。",
          tags: ["如愿", "定妆照"], date: "2026-08-16",
          kind: "image",
          src: "assets/ai-station/images/ry/乱世少年林望.jpeg",
          group: "如愿", role: "乱世少年", featured: true
        },
        {
          id: "st-ruyuan-chenyuan", title: "陈愿 · 定妆照（现世少年）",
          cover: "assets/ai-station/images/ry/现世少年陈愿.png",
          desc: "《如愿》现世少年陈愿，与林望遥相呼应的存在。",
          tags: ["如愿", "定妆照"], date: "2026-08-16",
          kind: "image",
          src: "assets/ai-station/images/ry/现世少年陈愿.png",
          group: "如愿", role: "现世少年", featured: true
        },
        {
          id: "st-ruyuan-feixu", title: "废墟站台 · 场景图",
          cover: "assets/ai-station/images/ry/废墟站台场景图.png",
          desc: "《如愿》废弃站台的战后废墟场景。",
          tags: ["如愿", "场景"], date: "2026-08-16",
          kind: "image",
          src: "assets/ai-station/images/ry/废墟站台场景图.png",
          group: "如愿", featured: false
        },
        {
          id: "st-ruyuan-xiaolu", title: "战后黎明小路 · 场景图",
          cover: "assets/ai-station/images/ry/战后黎明小路场景图.png",
          desc: "《如愿》战后黎明时分的小路场景。",
          tags: ["如愿", "场景"], date: "2026-08-16",
          kind: "image",
          src: "assets/ai-station/images/ry/战后黎明小路场景图.png",
          group: "如愿", featured: false
        },
        {
          id: "st-ruyuan-yuye", title: "雨夜屋檐 · 场景图",
          cover: "assets/ai-station/images/ry/雨夜屋檐场景图.jpeg",
          desc: "《如愿》雨夜屋檐下的静谧场景。",
          tags: ["如愿", "场景"], date: "2026-08-16",
          kind: "image",
          src: "assets/ai-station/images/ry/雨夜屋檐场景图.jpeg",
          group: "如愿", featured: false
        }
      ]
    }
  ]
};
