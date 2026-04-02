const API_URL = "https://cashflow.starlinksatellitewifi.workers.dev/api/flow-dashboard";

const el = {
  topMetrics: document.getElementById("topMetrics"),
  dominantSide: document.getElementById("dominantSide"),
  leadGom: document.getElementById("leadGom"),
  leadXa: document.getElementById("leadXa"),

  summaryCards: document.getElementById("summaryCards"),
  signalBox: document.getElementById("signalBox"),
  watchlistPanel: document.getElementById("watchlistPanel"),

  radarNodes: document.getElementById("radarNodes"),
  linkLayer: document.getElementById("linkLayer"),

  surgeGom: document.getElementById("surgeGom"),
  surgeXa: document.getElementById("surgeXa"),

  gomTable: document.getElementById("gomTable"),
  xaTable: document.getElementById("xaTable"),

  sectorHeat: document.getElementById("sectorHeat"),
  storyline: document.getElementById("storyline"),

  spark1: document.getElementById("spark1"),
  spark2: document.getElementById("spark2"),

  tickerText: document.getElementById("tickerText"),

  detailDrawer: document.getElementById("detailDrawer"),
  drawerContent: document.getElementById("drawerContent"),
  closeDrawer: document.getElementById("closeDrawer"),
};

let dashboardData = null;
let radarItems = [];

const nf = new Intl.NumberFormat("vi-VN");
const compact = new Intl.NumberFormat("vi-VN", {
  notation: "compact",
  maximumFractionDigits: 2,
});

function money(v) {
  const n = Number(v || 0);
  return `₫${nf.format(Math.round(n))}`;
}

function moneyCompact(v) {
  const n = Number(v || 0);
  return `${n < 0 ? "-" : ""}₫${compact.format(Math.abs(n))}`;
}

function signedMoneyCompact(v) {
  const n = Number(v || 0);
  return `${n >= 0 ? "+" : "-"}₫${compact.format(Math.abs(n))}`;
}

function qty(v) {
  return nf.format(Math.round(Number(v || 0)));
}

function pct(v) {
  return `${Number(v || 0).toFixed(2)}%`;
}

function safeArray(v) {
  return Array.isArray(v) ? v : [];
}

function sideClassFromTrend(trend) {
  return trend === "GOM" ? "buy" : trend === "XẢ" ? "sell" : "neutral";
}

function sideText(item) {
  const net = Number(item.net_value_today || 0);
  return net >= 0 ? "GOM" : "XẢ";
}

function normalizedStrength(item, maxValue) {
  const v = Math.abs(Number(item.net_value_today || 0));
  if (!maxValue) return 0.08;
  return Math.max(0.08, Math.min(1, v / maxValue));
}

function buildTopMetrics(data) {
  const summary = data.summary || {};
  const cards = [
    metricCard("DÒNG GOM HÔM NAY", moneyCompact(summary.gom_value_today || 0), "buy-t"),
    metricCard("DÒNG XẢ HÔM NAY", moneyCompact(summary.xa_value_today_abs || 0), "sell-t"),
    metricCard("TRẠNG THÁI", safeText(summary.dominant_side || "--"), summary.dominant_side === "GOM" ? "buy-t" : "sell-t"),
    metricCard("CẬP NHẬT", formatShortTime(data.updated_at), "amber-t"),
  ];
  el.topMetrics.innerHTML = cards.join("");
}

function metricCard(label, value, cls = "") {
  return `
    <div class="metric-chip">
      <div class="k">${label}</div>
      <div class="v ${cls}">${value}</div>
    </div>
  `;
}

function buildHero(data) {
  const summary = data.summary || {};
  el.dominantSide.textContent = summary.dominant_side || "--";
  el.dominantSide.className = `hero-kpi-value ${summary.dominant_side === "GOM" ? "buy-t" : "sell-t"}`;

  el.leadGom.textContent = summary.lead_gom_symbol || "--";
  el.leadGom.className = "hero-kpi-value buy-t";

  el.leadXa.textContent = summary.lead_xa_symbol || "--";
  el.leadXa.className = "hero-kpi-value sell-t";
}

function buildSummaryCards(data) {
  const summary = data.summary || {};
  const items = [
    { label: "Ngày dữ liệu", value: data.asOf || "--" },
    { label: "Cập nhật", value: formatDateTime(data.updated_at) },
    { label: "Số mã đang gom", value: qty(summary.gom_count || 0), cls: "buy-t" },
    { label: "Số mã đang xả", value: qty(summary.xa_count || 0), cls: "sell-t" },
    { label: "Mã dẫn đầu gom", value: summary.lead_gom_symbol || "--", cls: "buy-t" },
    { label: "Mã dẫn đầu xả", value: summary.lead_xa_symbol || "--", cls: "sell-t" },
  ];

  el.summaryCards.innerHTML = items.map(item => `
    <div class="summary-card">
      <div class="label">${item.label}</div>
      <div class="value ${item.cls || ""}">${item.value}</div>
    </div>
  `).join("");
}

function buildSignalBox(data) {
  const gom = safeArray(data.gom);
  const xa = safeArray(data.xa);
  const leadGom = gom[0];
  const leadXa = xa[0];
  const dominant = data.summary?.dominant_side || "--";

  const items = [
    {
      title: "Phe chi phối",
      badge: dominant,
      badgeCls: dominant === "GOM" ? "buy" : "sell",
      line1: dominant === "GOM" ? "Dòng tiền gom đang chiếm ưu thế." : "Áp lực xả đang chiếm ưu thế.",
      line2: `Tổng gom ${moneyCompact(data.summary?.gom_value_today || 0)} • Tổng xả ${moneyCompact(data.summary?.xa_value_today_abs || 0)}`
    },
    leadGom ? {
      title: `Gom mạnh nhất: ${leadGom.symbol}`,
      badge: leadGom.trend_today,
      badgeCls: sideClassFromTrend(leadGom.trend_today),
      line1: `${leadGom.label}`,
      line2: `Net hôm nay ${signedMoneyCompact(leadGom.net_value_today)} • Điểm nóng ${pct(leadGom.hot_score)}`
    } : null,
    leadXa ? {
      title: `Xả mạnh nhất: ${leadXa.symbol}`,
      badge: leadXa.trend_today,
      badgeCls: sideClassFromTrend(leadXa.trend_today),
      line1: `${leadXa.label}`,
      line2: `Net hôm nay ${signedMoneyCompact(leadXa.net_value_today)} • Điểm nóng ${pct(leadXa.hot_score)}`
    } : null,
  ].filter(Boolean);

  el.signalBox.innerHTML = items.map(item => `
    <div class="signal-row">
      <div class="row-top">
        <div>${item.title}</div>
        <span class="badge ${item.badgeCls}">${item.badge}</span>
      </div>
      <div class="meta-line"><span>${item.line1}</span></div>
      <div class="meta-line"><span>${item.line2}</span></div>
    </div>
  `).join("");
}

function buildWatchlistPanel(data) {
  const picks = dedupeBySymbol([
    ...safeArray(data.gom).slice(0, 5),
    ...safeArray(data.xa).slice(0, 5)
  ]).slice(0, 8);

  const maxAbs = Math.max(...picks.map(x => Math.abs(Number(x.net_value_today || 0))), 1);

  el.watchlistPanel.innerHTML = picks.map(item => {
    const side = Number(item.net_value_today || 0) >= 0 ? "buy" : "sell";
    const width = Math.round(normalizedStrength(item, maxAbs) * 100);
    return `
      <div class="watch-row" data-symbol="${item.symbol}">
        <div class="row-top">
          <div class="sym">${item.symbol}</div>
          <span class="badge ${side}">${side === "buy" ? "GOM" : "XẢ"}</span>
        </div>
        <div class="meta-line">
          <span>${signedMoneyCompact(item.net_value_today)}</span>
          <span>${pct(item.hot_score)}</span>
        </div>
        <div class="meta-line">
          <span>${item.label}</span>
        </div>
        <div class="bar"><div class="fill ${side}" style="width:${width}%"></div></div>
      </div>
    `;
  }).join("");
}

function buildSurgeCards(data) {
  const gom = safeArray(data.gom)[0];
  const xa = safeArray(data.xa)[0];

  el.surgeGom.innerHTML = gom ? `
    <div class="meta-line"><span>Mã</span><span class="buy-t">${gom.symbol}</span></div>
    <div class="meta-line"><span>Net value</span><span class="buy-t">${signedMoneyCompact(gom.net_value_today)}</span></div>
    <div class="meta-line"><span>Net qty</span><span>${qty(gom.net_qty_today)}</span></div>
    <div class="meta-line"><span>Chu kỳ</span><span>${gom.label}</span></div>
  ` : `<div class="meta-line"><span>Không có dữ liệu</span></div>`;

  el.surgeXa.innerHTML = xa ? `
    <div class="meta-line"><span>Mã</span><span class="sell-t">${xa.symbol}</span></div>
    <div class="meta-line"><span>Net value</span><span class="sell-t">${signedMoneyCompact(xa.net_value_today)}</span></div>
    <div class="meta-line"><span>Net qty</span><span>${qty(xa.net_qty_today)}</span></div>
    <div class="meta-line"><span>Chu kỳ</span><span>${xa.label}</span></div>
  ` : `<div class="meta-line"><span>Không có dữ liệu</span></div>`;
}

function buildTables(data) {
  el.gomTable.innerHTML = renderTable(safeArray(data.gom), "gom");
  el.xaTable.innerHTML = renderTable(safeArray(data.xa), "xa");
}

function renderTable(rows, type) {
  const headline = type === "gom" ? "buy" : "sell";
  return `
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Hot Score</th>
          <th>Net Value Today</th>
          <th>Net Qty Today</th>
          <th>Avg Price</th>
          <th>Trend Today</th>
          <th>Trend 7D</th>
          <th>Label</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `
          <tr data-symbol="${row.symbol}">
            <td class="sym-cell">${row.symbol}</td>
            <td>${pct(row.hot_score)}</td>
            <td class="${Number(row.net_value_today) >= 0 ? "buy-t" : "sell-t"}">${signedMoneyCompact(row.net_value_today)}</td>
            <td>${qty(row.net_qty_today)}</td>
            <td>${money(row.avg_price_today)}</td>
            <td><span class="pill ${sideClassFromTrend(row.trend_today)}">${row.trend_today}</span></td>
            <td><span class="pill ${sideClassFromTrend(row.trend_7d)}">${row.trend_7d}</span></td>
            <td><span class="pill ${headline}">${row.label}</span></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function buildSectorHeat(data) {
  const all = [...safeArray(data.gom), ...safeArray(data.xa)];
  const map = new Map();

  all.forEach(item => {
    const sector = item.sector || "Khác";
    if (!map.has(sector)) {
      map.set(sector, { sector, net: 0, count: 0 });
    }
    const entry = map.get(sector);
    entry.net += Number(item.net_value_today || 0);
    entry.count += 1;
  });

  const sectors = [...map.values()].sort((a, b) => Math.abs(b.net) - Math.abs(a.net));
  const maxAbs = Math.max(...sectors.map(s => Math.abs(s.net)), 1);

  el.sectorHeat.innerHTML = sectors.map(s => `
    <div class="sector-row">
      <div class="row-top">
        <span>${s.sector}</span>
        <span class="${s.net >= 0 ? "buy-t" : "sell-t"}">${signedMoneyCompact(s.net)}</span>
      </div>
      <div class="meta-line">
        <span>${s.count} mã</span>
        <span>${s.net >= 0 ? "Nghiêng gom" : "Nghiêng xả"}</span>
      </div>
      <div class="bar"><div class="fill ${s.net >= 0 ? "buy" : "sell"}" style="width:${Math.round((Math.abs(s.net) / maxAbs) * 100)}%"></div></div>
    </div>
  `).join("");
}

function buildStoryline(data) {
  const gom = safeArray(data.gom);
  const xa = safeArray(data.xa);

  const storyItems = [
    gom[0] ? `<strong>${gom[0].symbol}</strong> đang là mã gom nổi bật nhất với giá trị ròng ${signedMoneyCompact(gom[0].net_value_today)} và nhãn <strong>${gom[0].label.toLowerCase()}</strong>.` : null,
    xa[0] ? `<strong>${xa[0].symbol}</strong> đang là mã bị xả mạnh nhất với áp lực ròng ${signedMoneyCompact(xa[0].net_value_today)} và nhãn <strong>${xa[0].label.toLowerCase()}</strong>.` : null,
    buildSectorStory([...gom, ...xa]),
    buildDominanceStory(data.summary),
  ].filter(Boolean);

  el.storyline.innerHTML = storyItems.map(s => `<div class="story-item">${s}</div>`).join("");
}

function buildSectorStory(all) {
  const sectorMap = new Map();
  all.forEach(item => {
    const sector = item.sector || "Khác";
    sectorMap.set(sector, (sectorMap.get(sector) || 0) + Number(item.net_value_today || 0));
  });
  const leader = [...sectorMap.entries()].sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))[0];
  if (!leader) return "";
  return `Nhóm ngành nổi bật nhất hiện tại là <strong>${leader[0]}</strong>, với độ nghiêng dòng tiền ${leader[1] >= 0 ? "về phía gom" : "về phía xả"} ở mức <strong>${signedMoneyCompact(leader[1])}</strong>.`;
}

function buildDominanceStory(summary) {
  if (!summary) return "";
  return `Thị trường hiện nghiêng về <strong>${summary.dominant_side || "--"}</strong>. Tổng dòng tiền gom là <strong>${moneyCompact(summary.gom_value_today || 0)}</strong>, trong khi tổng áp lực xả đạt <strong>${moneyCompact(summary.xa_value_today_abs || 0)}</strong>.`;
}

function buildRadar(data) {
  const radarGom = safeArray(data.gom).slice(0, 4).map(item => ({ ...item, radarSide: "buy" }));
  const radarXa = safeArray(data.xa).slice(0, 4).map(item => ({ ...item, radarSide: "sell" }));
  radarItems = [...radarGom, ...radarXa];

  const positions = [
    { x: 72, y: 26 },
    { x: 62, y: 40 },
    { x: 34, y: 31 },
    { x: 25, y: 50 },
    { x: 71, y: 59 },
    { x: 50, y: 19 },
    { x: 23, y: 72 },
    { x: 57, y: 73 },
  ];

  el.radarNodes.innerHTML = radarItems.map((item, idx) => {
    const p = positions[idx];
    const side = item.radarSide;
    return `
      <button class="node ${side}" style="left:${p.x}%; top:${p.y}%" data-symbol="${item.symbol}">
        <span class="glow"></span>
        <div class="node-title">
          <span>${item.symbol}</span>
          <span class="pct">${pct(item.hot_score)}</span>
        </div>
        <div class="node-sub">${item.label} | ${signedMoneyCompact(item.net_value_today)}</div>
      </button>
    `;
  }).join("");

  el.linkLayer.innerHTML = radarItems.map((item, idx) => {
    const p = positions[idx];
    const x1 = 500, y1 = 350;
    const x2 = p.x * 10, y2 = p.y * 7;
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2 - 45;
    return `
      <g>
        <path class="link-line ${item.radarSide === "buy" ? "active-buy" : "active-sell"}" d="M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}" />
        <path class="link-pulse" d="M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}" />
      </g>
    `;
  }).join("");
}

function buildTicker(data) {
  const all = [...safeArray(data.gom).slice(0, 5), ...safeArray(data.xa).slice(0, 5)];
  el.tickerText.textContent = all
    .map(item => `[${item.label}] ${item.symbol} ${signedMoneyCompact(item.net_value_today)} • ${item.trend_today}/${item.trend_7d}`)
    .join("  •  ");
}

function drawSparks(data) {
  const gomVals = safeArray(data.gom).map(x => Number(x.hot_score || 0));
  const xaVals = safeArray(data.xa).map(x => Number(x.hot_score || 0));
  drawSpark(el.spark1, gomVals.length ? gomVals : [0, 0, 0]);
  drawSpark(el.spark2, xaVals.length ? xaVals : [0, 0, 0]);
}

function drawSpark(canvas, values) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);

  ctx.strokeStyle = "rgba(77,226,255,0.95)";
  ctx.lineWidth = 2;
  ctx.beginPath();

  values.forEach((v, i) => {
    const x = (i / Math.max(values.length - 1, 1)) * (w - 12) + 6;
    const y = h - ((v - min) / Math.max(max - min, 1)) * (h - 18) - 9;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.stroke();

  ctx.strokeStyle = "rgba(255,178,74,0.35)";
  ctx.beginPath();
  ctx.moveTo(0, h - 10);
  ctx.lineTo(w, h - 10);
  ctx.stroke();
}

function buildDrawer(symbol) {
  const all = [...safeArray(dashboardData?.gom), ...safeArray(dashboardData?.xa)];
  const item = all.find(x => x.symbol === symbol);
  if (!item) return;

  const netClass = Number(item.net_value_today || 0) >= 0 ? "buy-t" : "sell-t";

  el.drawerContent.innerHTML = `
    <div class="drawer-grid">
      <div class="drawer-head">
        <h2>${item.symbol} · ${item.label}</h2>
        <p>Chi tiết hành vi dòng tiền của mã ${item.symbol} theo snapshot mới nhất từ Cashflow Command Center.</p>
      </div>

      <div class="kpi-grid">
        <div class="kpi">
          <div class="label">Hot Score</div>
          <div class="value amber-t">${pct(item.hot_score)}</div>
        </div>
        <div class="kpi">
          <div class="label">Sector</div>
          <div class="value">${item.sector || "Khác"}</div>
        </div>
        <div class="kpi">
          <div class="label">Net Value Today</div>
          <div class="value ${netClass}">${signedMoneyCompact(item.net_value_today)}</div>
        </div>
        <div class="kpi">
          <div class="label">Net Qty Today</div>
          <div class="value">${qty(item.net_qty_today)}</div>
        </div>
        <div class="kpi">
          <div class="label">Buy Qty Today</div>
          <div class="value">${qty(item.buy_qty_today)}</div>
        </div>
        <div class="kpi">
          <div class="label">Sell Qty Today</div>
          <div class="value">${qty(item.sell_qty_today)}</div>
        </div>
        <div class="kpi">
          <div class="label">Avg Price Today</div>
          <div class="value">${money(item.avg_price_today)}</div>
        </div>
        <div class="kpi">
          <div class="label">Net Value 7D</div>
          <div class="value">${signedMoneyCompact(item.net_value_7d)}</div>
        </div>
        <div class="kpi">
          <div class="label">Trend Today</div>
          <div class="value ${sideClassFromTrend(item.trend_today) === "buy" ? "buy-t" : sideClassFromTrend(item.trend_today) === "sell" ? "sell-t" : "amber-t"}">${item.trend_today}</div>
        </div>
        <div class="kpi">
          <div class="label">Trend 7D</div>
          <div class="value ${sideClassFromTrend(item.trend_7d) === "buy" ? "buy-t" : sideClassFromTrend(item.trend_7d) === "sell" ? "sell-t" : "amber-t"}">${item.trend_7d}</div>
        </div>
      </div>

      <div class="story-item"><strong>Diễn giải:</strong> ${item.symbol} hiện được phân loại là <strong>${item.label.toLowerCase()}</strong>, với xu hướng hôm nay là <strong>${item.trend_today}</strong> và xu hướng 7 ngày là <strong>${item.trend_7d}</strong>.</div>
    </div>
  `;

  el.detailDrawer.classList.add("open");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-symbol]");
    if (target) {
      buildDrawer(target.dataset.symbol);
    }
  });

  if (el.closeDrawer) {
    el.closeDrawer.addEventListener("click", () => {
      el.detailDrawer.classList.remove("open");
    });
  }

  if (el.detailDrawer) {
    el.detailDrawer.addEventListener("click", (event) => {
      if (event.target === el.detailDrawer) {
        el.detailDrawer.classList.remove("open");
      }
    });
  }
}

function safeText(v) {
  return v == null ? "" : String(v);
}

function dedupeBySymbol(items) {
  const seen = new Set();
  return items.filter(item => {
    if (!item || seen.has(item.symbol)) return false;
    seen.add(item.symbol);
    return true;
  });
}

function formatDateTime(v) {
  if (!v) return "--";
  return String(v).replace("T", " ");
}

function formatShortTime(v) {
  if (!v) return "--";
  const s = String(v);
  const match = s.match(/T(\d{2}:\d{2})/);
  return match ? match[1] : s;
}

async function fetchDashboard() {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`API ${res.status}`);
  }
  return res.json();
}

function render(data) {
  dashboardData = data;
  buildTopMetrics(data);
  buildHero(data);
  buildSummaryCards(data);
  buildSignalBox(data);
  buildWatchlistPanel(data);
  buildSurgeCards(data);
  buildTables(data);
  buildSectorHeat(data);
  buildStoryline(data);
  buildRadar(data);
  buildTicker(data);
  drawSparks(data);
}

function renderLoading() {
  el.summaryCards.innerHTML = `
    <div class="summary-card">
      <div class="label">Trạng thái</div>
      <div class="value amber-t">Đang tải dữ liệu...</div>
    </div>
  `;
}

function renderError(error) {
  const msg = error?.message || "Không tải được dữ liệu";
  el.summaryCards.innerHTML = `
    <div class="summary-card">
      <div class="label">Lỗi hệ thống</div>
      <div class="value sell-t">${msg}</div>
    </div>
  `;
  el.signalBox.innerHTML = `
    <div class="signal-row">
      <div class="row-top">
        <div>Không thể kết nối API</div>
        <span class="badge sell">ERROR</span>
      </div>
      <div class="meta-line"><span>${msg}</span></div>
      <div class="meta-line"><span>Kiểm tra Worker / CORS / endpoint</span></div>
    </div>
  `;
}

async function boot() {
  renderLoading();
  bindEvents();
  try {
    const data = await fetchDashboard();
    render(data);
  } catch (error) {
    console.error(error);
    renderError(error);
  }
}

boot();
