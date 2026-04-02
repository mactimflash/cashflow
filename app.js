const dataset = [
  { date:'2026-04-02', symbol:'AAA', buy_qty:0, sell_qty:200, net_qty:-200, net_value:-1404000, avg_price:7020, trend:'XA', net_qty_7d:-200, net_value_7d:-1404000, trend_7d:'XA', sector:'Công nghiệp', actor:'Cụm Atlas-3' },
  { date:'2026-04-02', symbol:'AAS', buy_qty:11500, sell_qty:0, net_qty:11500, net_value:97750000, avg_price:8500, trend:'GOM', net_qty_7d:11500, net_value_7d:97750000, trend_7d:'GOM', sector:'Chứng khoán', actor:'Cụm Sigma Bắc' },
  { date:'2026-04-02', symbol:'AAT', buy_qty:0, sell_qty:300, net_qty:-300, net_value:-879000, avg_price:2930, trend:'XA', net_qty_7d:-300, net_value_7d:-879000, trend_7d:'XA', sector:'Tiêu dùng', actor:'Cụm Atlas-3' },
  { date:'2026-04-02', symbol:'ACB', buy_qty:52000, sell_qty:4000, net_qty:48000, net_value:1126300000, avg_price:23478.57, trend:'GOM', net_qty_7d:48000, net_value_7d:1126300000, trend_7d:'GOM', sector:'Ngân hàng', actor:'Cụm Lam Delta' },
  { date:'2026-04-02', symbol:'ACV', buy_qty:300, sell_qty:0, net_qty:300, net_value:13870000, avg_price:46233.33, trend:'GOM', net_qty_7d:300, net_value_7d:13870000, trend_7d:'GOM', sector:'Hàng không', actor:'Cụm Lam Delta' },
  { date:'2026-04-02', symbol:'ANV', buy_qty:500, sell_qty:300, net_qty:200, net_value:4780000, avg_price:23700, trend:'GOM', net_qty_7d:200, net_value_7d:4780000, trend_7d:'GOM', sector:'Thực phẩm', actor:'Cụm Tinh Vân 7' },
  { date:'2026-04-02', symbol:'APG', buy_qty:500, sell_qty:0, net_qty:500, net_value:2870000, avg_price:5740, trend:'GOM', net_qty_7d:500, net_value_7d:2870000, trend_7d:'GOM', sector:'Chứng khoán', actor:'Cụm Tinh Vân 7' },
  { date:'2026-04-02', symbol:'ASM', buy_qty:0, sell_qty:100, net_qty:-100, net_value:-565000, avg_price:5650, trend:'XA', net_qty_7d:-100, net_value_7d:-565000, trend_7d:'XA', sector:'Đa ngành', actor:'Cụm Atlas-3' },
  { date:'2026-04-02', symbol:'ASP', buy_qty:0, sell_qty:1200, net_qty:-1200, net_value:-6000000, avg_price:5000, trend:'XA', net_qty_7d:-1200, net_value_7d:-6000000, trend_7d:'XA', sector:'Năng lượng', actor:'Cụm Đèn Đỏ' },
  { date:'2026-04-02', symbol:'BID', buy_qty:7800, sell_qty:6000, net_qty:1800, net_value:72825000, avg_price:39695, trend:'GOM', net_qty_7d:1800, net_value_7d:72825000, trend_7d:'GOM', sector:'Ngân hàng', actor:'Cụm Lam Delta' },
  { date:'2026-04-02', symbol:'BMC', buy_qty:0, sell_qty:2000, net_qty:-2000, net_value:-27000000, avg_price:13500, trend:'XA', net_qty_7d:-2000, net_value_7d:-27000000, trend_7d:'XA', sector:'Vật liệu', actor:'Cụm Đèn Đỏ' },
  { date:'2026-04-02', symbol:'BMP', buy_qty:1100, sell_qty:2000, net_qty:-900, net_value:-120210000, avg_price:129500, trend:'XA', net_qty_7d:-900, net_value_7d:-120210000, trend_7d:'XA', sector:'Vật liệu', actor:'Cụm Đèn Đỏ' },
  { date:'2026-04-02', symbol:'BMS', buy_qty:0, sell_qty:2000, net_qty:-2000, net_value:-29800000, avg_price:14900, trend:'XA', net_qty_7d:-2000, net_value_7d:-29800000, trend_7d:'XA', sector:'Chứng khoán', actor:'Cụm Đèn Đỏ' },
  { date:'2026-04-02', symbol:'BSR', buy_qty:24600, sell_qty:13500, net_qty:11100, net_value:289145000, avg_price:26010.71, trend:'GOM', net_qty_7d:11100, net_value_7d:289145000, trend_7d:'GOM', sector:'Năng lượng', actor:'Cụm Sigma Bắc' },
  { date:'2026-04-02', symbol:'BVB', buy_qty:24400, sell_qty:0, net_qty:24400, net_value:302770000, avg_price:12450, trend:'GOM', net_qty_7d:24400, net_value_7d:302770000, trend_7d:'GOM', sector:'Ngân hàng', actor:'Cụm Lam Delta' },
  { date:'2026-04-02', symbol:'BVH', buy_qty:0, sell_qty:3535, net_qty:-3535, net_value:-307010500, avg_price:86536.36, trend:'XA', net_qty_7d:-3535, net_value_7d:-307010500, trend_7d:'XA', sector:'Bảo hiểm', actor:'Cụm Đèn Đỏ' },
  { date:'2026-04-02', symbol:'BVS', buy_qty:1, sell_qty:2000, net_qty:-1999, net_value:-54972500, avg_price:27500, trend:'XA', net_qty_7d:-1999, net_value_7d:-54972500, trend_7d:'XA', sector:'Chứng khoán', actor:'Cụm Atlas-3' },
  { date:'2026-04-02', symbol:'CAP', buy_qty:100, sell_qty:0, net_qty:100, net_value:4650000, avg_price:46500, trend:'GOM', net_qty_7d:100, net_value_7d:4650000, trend_7d:'GOM', sector:'Công nghiệp', actor:'Cụm Tinh Vân 7' },
  { date:'2026-04-02', symbol:'CEO', buy_qty:400, sell_qty:2700, net_qty:-2300, net_value:-37990000, avg_price:16525, trend:'XA', net_qty_7d:-2300, net_value_7d:-37990000, trend_7d:'XA', sector:'Bất động sản', actor:'Cụm Atlas-3' },
  { date:'2026-04-02', symbol:'CII', buy_qty:1000, sell_qty:45280, net_qty:-44280, net_value:-818738000, avg_price:18464.28, trend:'XA', net_qty_7d:-44280, net_value_7d:-818738000, trend_7d:'XA', sector:'Hạ tầng', actor:'Cụm Đèn Đỏ' },
];

const watchlist = ['ACB', 'BVB', 'BSR', 'CII', 'BVH'];
const container = {
  topMetrics: document.getElementById('topMetrics'),
  symbolIndex: document.getElementById('symbolIndex'),
  strategyCards: document.getElementById('strategyCards'),
  congressTrades: document.getElementById('congressTrades'),
  clusterPanel: document.getElementById('clusterPanel'),
  sectorHeat: document.getElementById('sectorHeat'),
  signalSurge: document.getElementById('signalSurge'),
  confirmBox: document.getElementById('confirmBox'),
  storyline: document.getElementById('storyline'),
  feed: document.getElementById('feed'),
  radarNodes: document.getElementById('radarNodes'),
  linkLayer: document.getElementById('linkLayer'),
  tickerText: document.getElementById('tickerText'),
  detailDrawer: document.getElementById('detailDrawer'),
  drawerContent: document.getElementById('drawerContent'),
  closeDrawer: document.getElementById('closeDrawer'),
};

const nf = new Intl.NumberFormat('vi-VN');
const currencyCompact = new Intl.NumberFormat('vi-VN', { notation: 'compact', maximumFractionDigits: 2 });
const signedCompact = (n) => `${n >= 0 ? '+' : '-'}₫${currencyCompact.format(Math.abs(n))}`;
const absMax = Math.max(...dataset.map(d => Math.abs(d.net_value)));
const totalNet = dataset.reduce((a, b) => a + b.net_value, 0);
const buyCount = dataset.filter(d => d.net_value > 0).length;
const sellCount = dataset.filter(d => d.net_value < 0).length;
const dominant = totalNet >= 0 ? 'TRẠNG THÁI GOM CHỦ ĐẠO' : 'TRẠNG THÁI XẢ CHỦ ĐẠO';

function normalizeScore(v) {
  return Math.max(0.08, Math.min(1, Math.abs(v) / absMax));
}

function enrichRows(rows) {
  return rows.map(d => {
    const continuation = d.trend === d.trend_7d ? 1 : 0.35;
    const watchBoost = watchlist.includes(d.symbol) ? 0.12 : 0;
    const score = (normalizeScore(d.net_value) * 0.55) + (Math.min(1, Math.abs(d.net_qty) / 50000) * 0.2) + (continuation * 0.15) + watchBoost + (d.net_value > 0 ? 0.04 : 0);
    return {
      ...d,
      side: d.net_value >= 0 ? 'buy' : 'sell',
      score: Math.min(0.99, score),
      scorePct: Math.round(Math.min(0.99, score) * 100),
      intensityPct: Math.round(normalizeScore(d.net_value) * 100),
      cycle: null
    };
  }).sort((a, b) => Math.abs(b.net_value) - Math.abs(a.net_value));
}

let rows = enrichRows(dataset);
rows = rows.map(r => ({ ...r, cycle: getCycleLabel(r) }));

function getPositiveRank(symbol) {
  const arr = rows.filter(r => r.net_value > 0).sort((a,b) => b.net_value - a.net_value);
  return arr.findIndex(r => r.symbol === symbol) + 1;
}

function getNegativeRank(symbol) {
  const arr = rows.filter(r => r.net_value < 0).sort((a,b) => a.net_value - b.net_value);
  return arr.findIndex(r => r.symbol === symbol) + 1;
}

function getCycleLabel(d) {
  const posRank = d.net_value > 0 ? getPositiveRank(d.symbol) : 0;
  const negRank = d.net_value < 0 ? getNegativeRank(d.symbol) : 0;

  if (d.net_value > 0 && posRank === 1 && d.trend === 'GOM' && d.trend_7d === 'GOM') {
    return { phase: 'KÉO DẪN DẮT', note: 'Dòng tiền vào lớn nhất, đồng pha 7 ngày', short: 'kéo dẫn dắt' };
  }
  if (d.net_value > 0 && d.trend === 'GOM' && d.trend_7d === 'GOM' && Math.abs(d.net_value) >= 80000000) {
    return { phase: 'GOM HÀNG', note: 'Dòng tiền vào duy trì, xu hướng tiếp tục tích cực', short: 'gom hàng' };
  }
  if (d.net_value > 0 && d.trend === 'GOM') {
    return { phase: 'HẤP THỤ CUNG', note: 'Lực mua đang hấp thụ lượng bán ra', short: 'hấp thụ cung' };
  }
  if (d.net_value < 0 && negRank === 1 && d.trend === 'XA' && d.trend_7d === 'XA') {
    return { phase: 'XẢ HÀNG', note: 'Bán ròng áp đảo, áp lực thoát vị thế rất mạnh', short: 'xả hàng' };
  }
  if (d.net_value < 0 && d.trend === 'XA' && d.trend_7d === 'XA' && Math.abs(d.net_value) >= 100000000) {
    return { phase: 'PHÂN PHỐI', note: 'Áp lực bán kéo dài, dòng tiền rút ra rõ', short: 'phân phối' };
  }
  if (d.net_value < 0 && d.trend === 'XA') {
    return { phase: 'RÚT DÒNG TIỀN', note: 'Tiền đang rời khỏi mã, cần theo dõi thêm', short: 'rút dòng tiền' };
  }
  return { phase: 'TRUNG TÍNH', note: 'Chưa đủ tín hiệu để xác định mẫu hành vi', short: 'trung tính' };
}


function renderTopMetrics() {
  const focus = rows[0];
  const topSell = rows.find(r => r.side === 'sell');
  container.topMetrics.innerHTML = [
    metric('DÒNG TIỀN RÒNG', signedCompact(totalNet), totalNet >= 0 ? 'buy-t' : 'sell-t'),
    metric('GOM / XẢ', `${buyCount}/${sellCount}`, 'amber-t'),
    metric('TÂM ĐIỂM', focus.symbol, focus.side === 'buy' ? 'buy-t' : 'sell-t'),
    metric('CẢNH BÁO', topSell.symbol, 'sell-t')
  ].join('');
}
function metric(label, value, cls='') {
  return `<div class="metric-chip"><div class="k">${label}</div><div class="v ${cls}">${value}</div></div>`;
}

function renderIndex() {
  container.symbolIndex.innerHTML = rows.slice(0, 8).map(r => {
    const width = Math.round(normalizeScore(r.net_value) * 100);
    return `
      <div class="index-row" data-symbol="${r.symbol}">
        <div class="row-top"><div class="sym">${r.symbol}</div><span class="badge ${r.side}">${r.side === 'buy' ? 'GOM' : 'XẢ'}</span></div>
        <div class="meta-line"><span>${signedCompact(r.net_value)}</span><span>${r.scorePct}%</span></div>
        <div class="bar"><div class="fill ${r.side}" style="width:${width}%"></div></div>
      </div>`;
  }).join('');
}

function renderStrategies() {
  const positive = rows.filter(r => r.side === 'buy').slice(0, 3);
  const negative = rows.filter(r => r.side === 'sell').slice(0, 2);
  const cards = [
    { title: 'Dòng tiền chủ lực', pct: '+88.4%', sub: `Tiền vào mạnh tập trung tại ${positive[0].symbol}` },
    { title: 'Quét nhóm ngân hàng', pct: '+74.2%', sub: `Được nhiều cụm hỗ trợ: ${positive.filter(x => x.sector === 'Ngân hàng').map(x => x.symbol).join(', ')}` },
    { title: 'Vùng né áp lực bán', pct: '-62.8%', sub: `Ưu tiên tránh khu vực xả mạnh quanh ${negative[0].symbol}` }
  ];
  container.strategyCards.innerHTML = cards.map(c => `
    <div class="strategy-row">
      <div class="row-top"><div>${c.title}</div><div class="${c.pct.startsWith('+') ? 'buy-t' : 'sell-t'}">${c.pct}</div></div>
      <div class="meta-line"><span>${c.sub}</span></div>
    </div>`).join('');
}

function renderCongress() {
  const items = [
    ['TK tham chiếu 01', 'ACB', 'MUA'],
    ['TK tham chiếu 02', 'BSR', 'MUA'],
    ['TK tham chiếu 03', 'CII', 'BÁN'],
  ];
  container.congressTrades.innerHTML = items.map(([name, sym, action]) => `
    <div class="trade-row">
      <div class="row-top"><span>${name}</span><span class="badge ${action === 'MUA' ? 'buy' : 'sell'}">${action}</span></div>
      <div class="meta-line"><span>Trọng tâm vị thế</span><span>${sym}</span></div>
    </div>`).join('');
}

function renderClusters() {
  const phaseMap = rows.reduce((acc, r) => {
    const key = r.cycle.phase;
    acc[key] ||= { phase: key, net: 0, count: 0, note: r.cycle.note };
    acc[key].net += r.net_value;
    acc[key].count += 1;
    return acc;
  }, {});
  const phases = Object.values(phaseMap).sort((a, b) => Math.abs(b.net) - Math.abs(a.net));
  container.clusterPanel.innerHTML = phases.map(a => `
    <div class="cluster-row">
      <div class="row-top"><div class="sym">${a.phase}</div><span class="badge ${a.net >= 0 ? 'buy' : 'sell'}">${a.net >= 0 ? 'NGHIÊNG GOM' : 'NGHIÊNG XẢ'}</span></div>
      <div class="meta-line"><span>${a.count} mã</span><span>${signedCompact(a.net)}</span></div>
      <div class="meta-line"><span>${a.note}</span></div>
      <div class="bar"><div class="fill ${a.net >= 0 ? 'buy' : 'sell'}" style="width:${Math.round(Math.min(100, Math.abs(a.net) / absMax * 100))}%"></div></div>
    </div>`).join('');
}

function renderSectorHeat() {
  const sectorMap = rows.reduce((acc, r) => {
    acc[r.sector] ||= { sector: r.sector, net: 0 };
    acc[r.sector].net += r.net_value;
    return acc;
  }, {});
  const sectors = Object.values(sectorMap).sort((a, b) => Math.abs(b.net) - Math.abs(a.net));
  container.sectorHeat.innerHTML = sectors.map(s => `
    <div class="sector-row">
      <div class="row-top"><span>${s.sector}</span><span class="${s.net >= 0 ? 'buy-t' : 'sell-t'}">${signedCompact(s.net)}</span></div>
      <div class="bar"><div class="fill ${s.net >= 0 ? 'buy' : 'sell'}" style="width:${Math.round(Math.min(100, Math.abs(s.net) / absMax * 100))}%"></div></div>
    </div>`).join('');
}

function renderSignalCards() {
  const focus = rows[0];
  const buyFocus = rows.filter(r => r.side === 'buy').slice(0, 4).map(r => r.symbol).join(', ');
  container.signalSurge.innerHTML = `
    <div class="meta-line"><span>Mã tâm điểm</span><span class="buy-t">${focus.symbol}</span></div>
    <div class="meta-line"><span>Điểm bắn tín hiệu</span><span>${buyCount}/${rows.length}</span></div>
    <div class="meta-line"><span>Áp lực ròng</span><span class="buy-t">${signedCompact(focus.net_value)}</span></div>
    <div class="meta-line"><span>Các mã đồng pha</span><span>${buyFocus}</span></div>`;

  const confirmed = rows.filter(r => r.side === 'buy').slice(0, 3).map(r => r.symbol).join(' • ');
  container.confirmBox.innerHTML = `
    <div class="confirm-main">${dominant}</div>
    <div class="confirm-sub">${confirmed}</div>
  `;
}

function renderStoryline() {
  const topBuy = rows.filter(r => r.side === 'buy').slice(0, 3);
  const topSell = rows.filter(r => r.side === 'sell').slice(0, 2);
  const stories = [
    `<strong>${topBuy[0].symbol}</strong> đang ở pha <strong>${topBuy[0].cycle.phase.toLowerCase()}</strong>, ghi nhận giá trị gom ròng lớn nhất và xu hướng 7 ngày vẫn đồng pha.`,
    `<strong>${topBuy[1].symbol}</strong> và <strong>${topBuy[2].symbol}</strong> cùng cho tín hiệu <strong>gom hàng</strong>, cho thấy lực đỡ đang lan tỏa thay vì chỉ dồn vào một mã.`,
    `<strong>${topSell[0].symbol}</strong> bước vào pha <strong>${topSell[0].cycle.phase.toLowerCase()}</strong>, trong khi <strong>${topSell[1].symbol}</strong> tiếp tục duy trì áp lực bán rõ rệt.`,
    `Độ nghiêng dòng tiền tích cực mạnh nhất đến từ <strong>ngành Ngân hàng</strong>, nổi bật với ACB, BVB và BID.`,
  ];
  container.storyline.innerHTML = stories.map(s => `<div class="story-item">${s}</div>`).join('');
}

function renderFeed() {
  const now = ['18:40:36','18:40:36','18:40:35','18:40:34','18:40:33'];
  const leadSell = rows.find(r => r.side === 'sell');
  const items = [
    `[CHU KỲ] ${rows[0].symbol} ghi nhận pha ${rows[0].cycle.phase.toLowerCase()}, điểm ${rows[0].scorePct}/100`,
    `[MÔ HÌNH] Có ${rows.filter(r => r.trend === r.trend_7d).length} mã đồng pha giữa hôm nay và 7 ngày`,
    `[CẢNH BÁO] ${leadSell.symbol} bước vào pha ${leadSell.cycle.phase.toLowerCase()}`,
    `[ĐỐI CHIẾU] Nhịp mua tham chiếu đang trùng pha với nhóm ngân hàng`,
    `[TÌNH BÁO] Thị trường vẫn nghiêng tích cực nhưng áp lực bán còn dồn vào hai mã chính`,
  ];
  container.feed.innerHTML = items.map((t, i) => `<div class="feed-item"><div class="feed-time">${now[i]}</div><div>${t}</div></div>`).join('');
}

function renderTicker() {
  const text = rows.slice(0, 8).map(r => `[${r.cycle.phase}] ${r.symbol} ${signedCompact(r.net_value)} điểm:${r.scorePct}%`).join('  •  ');
  container.tickerText.textContent = text;
}

function renderRadar() {
    const focusRows = rows.slice(0, 8);
  const positions = [
    { x: 72, y: 27 }, { x: 65, y: 39 }, { x: 37, y: 33 }, { x: 24, y: 49 },
    { x: 71, y: 58 }, { x: 49, y: 20 }, { x: 21, y: 72 }, { x: 58, y: 73 }
  ];
  container.radarNodes.innerHTML = focusRows.map((r, i) => {
    const p = positions[i];
    const pct = r.net_value >= 0 ? `+${r.scorePct}%` : `-${r.scorePct}%`;
    return `
      <button class="node ${r.side}" style="left:${p.x}%; top:${p.y}%" data-symbol="${r.symbol}">
        <span class="glow"></span>
        <div class="node-title"><span>${r.symbol}</span><span class="pct">${pct}</span></div>
        <div class="node-sub">${r.cycle.phase} | ${r.cycle.note}</div>
      </button>`;
  }).join('');

  container.linkLayer.innerHTML = focusRows.map((r, i) => {
    const p = positions[i];
    const x1 = 500, y1 = 350;
    const x2 = p.x * 10, y2 = p.y * 7;
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2 - 45;
    return `
      <g>
        <path class="link-line ${r.side === 'buy' ? 'active-buy' : 'active-sell'}" d="M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}" />
        <path class="link-pulse" d="M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}" />
      </g>`;
  }).join('');
}

function openDrawer(symbol) {
  const d = rows.find(r => r.symbol === symbol);
  if (!d) return;
  container.drawerContent.innerHTML = `
    <div class="drawer-grid">
      <div class="drawer-head">
        <h2>${d.symbol} · ${d.cycle.phase}</h2>
        <p>Tóm tắt dòng tiền của nhóm tài khoản đã định vị trong ngày ${d.date}. Màn hình này dùng để tham khảo insight.</p>
      </div>
      <div class="kpi-grid">
        <div class="kpi"><div class="label">Giá trị ròng</div><div class="value ${d.side === 'buy' ? 'buy-t' : 'sell-t'}">${signedCompact(d.net_value)}</div></div>
        <div class="kpi"><div class="label">Khối lượng ròng</div><div class="value">${nf.format(d.net_qty)}</div></div>
        <div class="kpi"><div class="label">Giá bình quân</div><div class="value">₫${nf.format(Math.round(d.avg_price))}</div></div>
        <div class="kpi"><div class="label">Điểm mục tiêu</div><div class="value amber-t">${d.scorePct}/100</div></div>
        <div class="kpi"><div class="label">Xu hướng 7 ngày</div><div class="value">${d.trend_7d}</div></div>
        <div class="kpi"><div class="label">Chu kỳ dòng tiền</div><div class="value">${d.cycle.phase}</div></div>
      </div>
      <div class="story-item"><strong>Diễn giải:</strong> ${d.symbol} đang ở pha <strong>${d.cycle.phase.toLowerCase()}</strong>. ${d.cycle.note}.</div>
      <div class="story-item"><strong>Ý nghĩa:</strong> ${watchlist.includes(d.symbol) ? 'Mã này nằm trong danh sách theo dõi, vì vậy tín hiệu cần được ưu tiên rà soát.' : 'Tín hiệu này nằm ngoài danh sách theo dõi nhưng vẫn đáng chú ý do quy mô dòng tiền quan sát được.'}</div>
    </div>`;
  container.detailDrawer.classList.add('open');
}

function bindEvents() {
  document.addEventListener('click', (e) => {
    const row = e.target.closest('[data-symbol]');
    if (row) openDrawer(row.dataset.symbol);
  });
  container.closeDrawer.addEventListener('click', () => container.detailDrawer.classList.remove('open'));
  container.detailDrawer.addEventListener('click', (e) => {
    if (e.target === container.detailDrawer) container.detailDrawer.classList.remove('open');
  });
}

function drawSpark(canvasId, values) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  const max = Math.max(...values);
  const min = Math.min(...values);
  ctx.strokeStyle = 'rgba(67,229,255,0.9)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  values.forEach((v, i) => {
    const x = (i / (values.length - 1)) * (w - 12) + 6;
    const y = h - ((v - min) / ((max - min) || 1)) * (h - 18) - 9;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
  ctx.strokeStyle = 'rgba(255,179,71,0.35)';
  ctx.beginPath();
  ctx.moveTo(0, h - 10);
  ctx.lineTo(w, h - 10);
  ctx.stroke();
}

function boot() {
  renderTopMetrics();
  renderIndex();
  renderStrategies();
  renderCongress();
  renderClusters();
  renderSectorHeat();
  renderSignalCards();
  renderStoryline();
  renderFeed();
  renderTicker();
  renderRadar();
  drawSpark('spark1', [38, 41, 40, 44, 47, 48, 46, 49, 52, 50, 54]);
  drawSpark('spark2', [65, 61, 63, 62, 66, 64, 68, 71, 69, 72, 75]);
  bindEvents();
}

boot();
