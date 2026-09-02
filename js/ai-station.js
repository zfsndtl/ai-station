/* ===================== AI 创作小站 · 逻辑 ===================== */
(function () {
  "use strict";
  var DATA = window.AI_STATION;
  DATA.site.owner ='花有重开日，人无再少年';
  if (!DATA) { console.error("AI_STATION 数据未加载"); return; }

  // 预聚合「精选」：从各栏目取 featured=true
  (function buildFeatured() {
    var feat = DATA.columns.filter(function (c) { return c.key !== "featured"; });
    var items = [];
    feat.forEach(function (col) {
      (col.items || []).forEach(function (it) {
        if (it.featured) {
          var copy = Object.assign({}, it);
          copy._col = col.name;
          items.push(copy);
        }
      });
    });
    var fcol = DATA.columns.filter(function (c) { return c.key === "featured"; })[0];
    if (fcol) fcol.items = items;
  })();

  // 内联 SVG 图标库
  var ICONS = {
    spark: '<path d="M12 2l2.4 6.2L21 11l-6.6 2.8L12 20l-2.4-6.2L3 11l6.6-2.8z" fill="currentColor"/>',
    script: '<path d="M6 3h9l4 4v14H6z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M14 3v5h5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 12h7M9 16h7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 10l5-3v10l-5-3z" fill="currentColor"/>',
    avatar: '<circle cx="12" cy="8.5" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" fill="none" stroke="currentColor" stroke-width="1.8"/>',
    drama: '<rect x="3" y="4" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 8.5l5 2.5-5 2.5z" fill="currentColor"/><path d="M8 21h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    stills: '<rect x="4" y="5" width="16" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="9" cy="10" r="1.8" fill="currentColor"/><path d="M5 17l4.5-4.5 3 3L16 12l3 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    play: '<path d="M8 5v14l11-7z" fill="#111"/>',
    close: '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    home: '<path d="M4 11l8-7 8 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M6 10v9h12v-9" fill="none" stroke="currentColor" stroke-width="1.8"/>',
    repeat: '<path d="M17 2l3 3-3 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 5H9a4 4 0 0 0 0 8h3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M7 22l-3-3 3-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 19h11a4 4 0 0 0 0-8H12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
  };
  function icon(name, size) {
    size = size || 20;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" aria-hidden="true">' +
      (ICONS[name] || ICONS.spark) + '</svg>';
  }

  var state = { col: "featured", pages: {}, autoplay: true };

  var side = document.getElementById("asNav");
  var tabbar = document.getElementById("asTabbar");
  var grid = document.getElementById("asGrid");
  var headTitle = document.getElementById("asTitle");
  var headSlogan = document.getElementById("asSlogan");
  var headOwner = document.getElementById("asOwner");
  var modal = document.getElementById("asModal");

  // 渲染导航
  function renderNav() {
    side.innerHTML = "";
    tabbar.innerHTML = "";
    DATA.columns.forEach(function (col) {
      var n = (col.items || []).length;
      var label = col.key === "featured" ? "精选" : col.name;
      var ic = col.key === "featured" ? "home" : (col.icon || "spark");
      var b = document.createElement("button");
      b.innerHTML = icon(ic, 20) + "<span>" + label + "</span>" +
        '<span class="count">' + n + "</span>";
      b.className = (col.key === state.col ? "active" : "");
      b.onclick = function () { switchCol(col.key); };
      side.appendChild(b);

      var tb = document.createElement("button");
      tb.innerHTML = icon(ic, 22) + "<span>" + label + "</span>";
      tb.className = (col.key === state.col ? "active" : "");
      tb.onclick = function () { switchCol(col.key); };
      tabbar.appendChild(tb);
    });
  }

  function switchCol(key) {
    state.col = key;
    renderNav();
    renderGrid();
  }

  function renderGrid() {
    var col = DATA.columns.filter(function (c) { return c.key === state.col; })[0] || DATA.columns[0];
    headTitle.textContent = col.key === "featured" ? "精选作品" : col.name;
    headSlogan.textContent = DATA.site.slogan;
    headOwner.textContent = "主理人：" + (DATA.site.owner || "—");
    grid.innerHTML = "";
    if (col.key === "video") {
      renderVideoGroups(col);
    } else {
      var prevGroup = "__init__";
      (col.items || []).forEach(function (it) {
        var g = it.group || null;
        if (g !== prevGroup) {
          if (g) grid.appendChild(groupHeader(g));
          prevGroup = g;
        }
        grid.appendChild(card(it, col));
      });
    }
    if (!(col.items || []).length) {
      grid.innerHTML = '<p style="color:var(--as-sub)">这个栏目还没有内容，去 js/ai-station-data.js 添加吧。</p>';
    }
  }

  // AI视频：按 group 分组，每组独立分页（每页 8 个）
  function renderVideoGroups(col) {
    var PER = 8;
    var items = col.items || [];
    var groups = [];
    var map = {};
    items.forEach(function (it) {
      var g = it.group || "未分组";
      if (!map[g]) { map[g] = []; groups.push(g); }
      map[g].push(it);
    });
    groups.forEach(function (g) {
      var list = map[g];
      grid.appendChild(groupHeader(g));
      var pk = col.key + "::" + g;
      var page = state.pages[pk] || 0;
      var total = Math.max(1, Math.ceil(list.length / PER));
      if (page >= total) { page = total - 1; state.pages[pk] = page; }
      var start = page * PER;
      var slice = list.slice(start, start + PER);
      var inner = document.createElement("div");
      inner.className = "as-grid-inner";
      slice.forEach(function (it) { inner.appendChild(card(it, col)); });
      grid.appendChild(inner);
      if (total > 1) grid.appendChild(renderPager(pk, page, total));
    });
  }

  function renderPager(pk, page, total) {
    var nav = document.createElement("div");
    nav.className = "as-pager";
    var prev = document.createElement("button");
    prev.type = "button";
    prev.className = "pg-btn";
    prev.textContent = "‹ 上一页";
    prev.disabled = page <= 0;
    prev.onclick = function (e) {
      e.stopPropagation();
      state.pages[pk] = Math.max(0, page - 1);
      renderGrid();
    };
    var info = document.createElement("span");
    info.className = "pg-info";
    info.textContent = "第 " + (page + 1) + " / " + total + " 页";
    var next = document.createElement("button");
    next.type = "button";
    next.className = "pg-btn";
    next.textContent = "下一页 ›";
    next.disabled = page >= total - 1;
    next.onclick = function (e) {
      e.stopPropagation();
      state.pages[pk] = Math.min(total - 1, page + 1);
      renderGrid();
    };
    nav.appendChild(prev);
    nav.appendChild(info);
    nav.appendChild(next);
    return nav;
  }

  function groupHeader(name) {
    var el = document.createElement("div");
    el.className = "as-group";
    el.textContent = "《" + name + "》";
    return el;
  }

  function card(it, col) {
    var el = document.createElement("div");
    el.className = "as-card";
    var showPlay = (it.kind === "video" || it.kind === "avatar");
    el.innerHTML =
      '<div class="thumb">' +
        '<img src="' + it.cover + '" alt="' + (it.title || "") + '" loading="lazy">' +
        (it._col ? '<span class="badge">' + it._col + "</span>" : "") +
        (it.role ? '<span class="badge role">' + it.role + "</span>" : "") +
        (showPlay ? '<div class="play"><span>' + icon("play", 22) + "</span></div>" : "") +
      "</div>" +
      '<div class="body">' +
        "<h3>" + (it.title || "") + "</h3>" +
        (it.desc ? '<p class="desc">' + it.desc + "</p>" : "") +
        '<div class="meta"><span>' + (it.date || "") + "</span><span>" + kindLabel(it.kind) + "</span></div>" +
        (it.tags && it.tags.length ? '<div class="tags">' + it.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>" : "") +
      "</div>";
    el.onclick = function () { openDetail(it, col); };
    return el;
  }

  function kindLabel(k) {
    return ({ video: "视频", image: "图片", script: "剧本", avatar: "数字人" })[k] || "作品";
  }

  function openDetail(it, col, autoStart) {
    var sheet = modal.querySelector(".sheet");
    var isVideo = (it.kind === "video" || it.kind === "avatar");
    var nx = isVideo && col ? getNextInGroup(it, col) : null;
    var hasNext = !!nx;
    var apBtn = "";
    if (hasNext) {
      apBtn = '<button type="button" class="ap' + (state.autoplay ? " on" : "") + '" data-autoplay>' +
        icon("repeat", 16) + "<span>" + (state.autoplay ? "连播" : "连播关") + "</span></button>";
    }
    var html = '<div class="top"><h3>' + (it.title || "") + "</h3>" +
      apBtn +
      '<button class="x" data-close>' + icon("close", 18) + "</button></div>" +
      '<div class="content">' +
      (it.role ? '<div class="role-chip">' + it.role + (it.group ? " · 《" + escapeHtml(it.group) + "》" : "") + "</div>" : "");
    if (isVideo) {
      if (it.src) {
        html += '<video controls src="' + it.src + '" poster="' + it.cover + '" data-video></video>';
      } else {
        html += placeholder("video", it.cover);
      }
    } else if (it.kind === "image") {
      if (it.src) html += '<img src="' + it.src + '">';
      else html += placeholder("image", it.cover);
    } else if (it.kind === "script") {
      var isTxt = it.src && /\.(txt|md)$/i.test(it.src);
      // 兜底：内联 content；若配置了 .txt/.md，先显示 loading 文案，加载成功后替换
      var body = it.content ||
        (isTxt ? "（正在加载剧本正文…）" : (it.src ? "（请打开 " + it.src + " 查看剧本正文）" : "（暂无正文）"));
      html += '<div class="script"' + (isTxt ? ' data-txt-src="' + it.src + '"' : "") + ">" +
        escapeHtml(body) + "</div>";
    }
    html += (it.desc ? '<p style="color:var(--as-sub);margin:14px 0 0">' + it.desc + "</p>" : "");
    if (it.tags && it.tags.length) {
      html += '<div class="info">' + it.tags.map(function (t) { return '<span class="t">' + t + "</span>"; }).join("") + "</div>";
    }
    if (hasNext) {
      html += '<div class="nextcue" data-nextcue>连播中：播完自动播放《' + escapeHtml(nx.title || "") + '》</div>';
    }
    html += "</div>";
    sheet.innerHTML = html;
    // 连播开关
    var apEl = sheet.querySelector("[data-autoplay]");
    if (apEl) {
      apEl.onclick = function (e) {
        e.stopPropagation();
        state.autoplay = !state.autoplay;
        apEl.className = "ap" + (state.autoplay ? " on" : "");
        apEl.querySelector("span").textContent = state.autoplay ? "连播" : "连播关";
        var cue = sheet.querySelector("[data-nextcue]");
        if (cue) cue.style.display = state.autoplay ? "" : "none";
      };
    }
    // 视频 / 数字人：若 src 指向的文件不存在（404 / 文件缺失），优雅降级为「视频待上传」默认展示
    var vEl = sheet.querySelector("video[data-video]");
    if (vEl) {
      vEl.addEventListener("error", function () {
        var box = document.createElement("div");
        box.className = "placeholder";
        box.innerHTML = '<img src="' + (it.cover || "") + '" style="width:120px;height:120px;border-radius:14px;object-fit:cover">' +
          "<div>视频待上传</div>" +
          "<div>把视频文件放到 <code>assets/ai-station/videos/数字人/</code><br>并在 js/ai-station-data.js 里确认该条目的 <code>src</code> 路径正确。</div>";
        if (vEl.parentNode) vEl.parentNode.replaceChild(box, vEl);
      });
      // 连播：播完自动加载同组下一个并续播
      vEl.addEventListener("ended", function () {
        if (!state.autoplay || !col) return;
        var next = getNextInGroup(it, col);
        if (next) openDetail(next, col, true);
      });
      // 由连播触发的下一集自动开始播放（同组会话内已存在用户手势，通常被允许；被拦截则静默降级为暂停）
      if (autoStart) vEl.play().catch(function () {});
    }
    // 若剧本配置了 .txt/.md，http 下异步加载真实文件（失败则用内联 content 兜底，file:// 双击即走兜底）
    if (it.kind === "script") {
      var sNode = sheet.querySelector(".script");
      var src = sNode && sNode.getAttribute("data-txt-src");
      if (src) loadScriptFile(src, sNode);
    }
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  // 取同组下一个条目（按 col.items 原始顺序，过滤出同一 group）
  function getNextInGroup(it, col) {
    var items = col.items || [];
    var g = it.group || "未分组";
    var list = items.filter(function (x) { return (x.group || "未分组") === g; });
    for (var i = 0; i < list.length; i++) {
      if (list[i] === it || (it.id && list[i].id === it.id)) {
        return i < list.length - 1 ? list[i + 1] : null;
      }
    }
    return null;
  }

  // 异步加载剧本 .txt/.md：成功则替换正文，失败（如 file:// 无服务/跨域）保持内联 content 不变
  function loadScriptFile(url, node) {
    if (!url || !node) return;
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 && xhr.responseText) {
            node.textContent = xhr.responseText; // 保留原换行（CSS pre-wrap）
          }
        }
      };
      xhr.onerror = function () {};
      xhr.send();
    } catch (e) { /* file:// 下 send 抛错，忽略，继续使用 content 兜底 */ }
  }

  function placeholder(kind, cover) {
    var path = kind === "video" ? "assets/ai-station/videos/" : "assets/ai-station/images/";
    return '<div class="placeholder">' +
      '<img src="' + cover + '" style="width:120px;height:120px;border-radius:14px;object-fit:cover">' +
      "<div>这是示例条目，还没有真实资源。</div>" +
      "<div>把你的文件放到 <code>" + path + "</code><br>并在 js/ai-station-data.js 里填写条目的 <code>src</code> 即可。</div>" +
      "</div>";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c];
    });
  }

  // 关闭弹窗
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.closest("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
  function closeModal() {
    modal.classList.remove("open");
    modal.querySelector(".sheet").innerHTML = "";
    document.body.style.overflow = "";
  }

  // 品牌区
  var brand = document.getElementById("asBrand");
  if (DATA.site.logo) {
    brand.innerHTML = '<img class="logo" src="' + DATA.site.logo + '" alt="logo">' +
      "<div><h1>" + DATA.site.name + "</h1><p>" + DATA.site.slogan + "</p></div>";
  } else {
    brand.innerHTML = '<div class="logo">' + icon("spark", 22) + "</div>" +
      "<div><h1>" + DATA.site.name + "</h1><p>" + DATA.site.slogan + "</p></div>";
  }

  renderNav();
  renderGrid();
})();
