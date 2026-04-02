const API_BASE = window.API_BASE || 'https://cashflow.starlinksatellitewifi.workers.dev';
const API_ENDPOINT = window.API_ENDPOINT || `${API_BASE}/api/flow-dashboard`;

const fallbackPayload = {
  asOf: '2026-04-02',
  summary: {
    updated_at: '2026-04-02T18:40:36+07:00',
    total_buy_symbols: 10,
    total_sell_symbols: 10,
  },
  gom: [
    {symbol:'HCM',hot_score:100.00,buy_qty_today:280400,sell_qty_today:24200,net_qty_today:256200,net_value_today:6052660000,avg_price_today:23570.454545454544,net_qty_7d:256200,net_value_7d:6052660000,trend_today:'GOM',trend_7d:'GOM',label:'GOM BỀN + GOM TRONG NGÀY',sector:'Chứng khoán'},
    {symbol:'VHM',hot_score:32.86,buy_qty_today:44000,sell_qty_today:21800,net_qty_today:22200,net_value_today:2616690000,avg_price_today:117800,net_qty_7d:22200,net_value_7d:2616690000,trend_today:'GOM',trend_7d:'GOM',label:'GOM BỀN + GOM TRONG NGÀY',sector:'Bất động sản'},
    {symbol:'VIC',hot_score:23.64,buy_qty_today:16500,sell_qty_today:2800,net_qty_today:13700,net_value_today:1905700000,avg_price_today:139047.8260869565,net_qty_7d:13700,net_value_7d:1905700000,trend_today:'GOM',trend_7d:'GOM',label:'GOM BỀN + GOM TRONG NGÀY',sector:'Đa ngành'},
    {symbol:'ACB',hot_score:18.65,buy_qty_today:52000,sell_qty_today:4000,net_qty_today:48000,net_value_today:1126300000,avg_price_today:23478.571428571428,net_qty_7d:48000,net_value_7d:1126300000,trend_today:'GOM',trend_7d:'GOM',label:'GOM BỀN + GOM TRONG NGÀY',sector:'Ngân hàng'},
    {symbol:'MBB',hot_score:16.89,buy_qty_today:40249,sell_qty_today:100,net_qty_today:40149,net_value_today:1054188700,avg_price_today:26171.428571428572,net_qty_7d:40149,net_value_7d:1054188700,trend_today:'GOM',trend_7d:'GOM',label:'GOM BỀN + GOM TRONG NGÀY',sector:'Ngân hàng'},
    {symbol:'MSR',hot_score:10.74,buy_qty_today:17200,sell_qty_today:1200,net_qty_today:16000,net_value_today:766640000,avg_price_today:47880,net_qty_7d:16000,net_value_7d:766640000,trend_today:'GOM',trend_7d:'GOM',label:'GOM BỀN + GOM TRONG NGÀY',sector:'Tài nguyên'},
    {symbol:'EVF',hot_score:7.60,buy_qty_today:27600,sell_qty_today:0,net_qty_today:27600,net_value_today:377410000,avg_price_today:13712.5,net_qty_7d:27600,net_value_7d:377410000,trend_today:'GOM',trend_7d:'GOM',label:'GOM BỀN + GOM TRONG NGÀY',sector:'Tài chính'},
    {symbol:'SCR',hot_score:6.50,buy_qty_today:37400,sell_qty_today:3000,net_qty_today:34400,net_value_today:213589000,avg_price_today:6228.75,net_qty_7d:34400,net_value_7d:213589000,trend_today:'GOM',trend_7d:'GOM',label:'GOM BỀN + GOM TRONG NGÀY',sector:'Bất động sản'},
    {symbol:'BVB',hot_score:6.36,buy_qty_today:24400,sell_qty_today:0,net_qty_today:24400,net_value_today:302770000,avg_price_today:12450,net_qty_7d:24400,net_value_7d:302770000,trend_today:'GOM',trend_7d:'GOM',label:'GOM BỀN + GOM TRONG NGÀY',sector:'Ngân hàng'},
    {symbol:'VCK',hot_score:5.22,buy_qty_today:10310,sell_qty_today:500,net_qty_today:9810,net_value_today:352082000,avg_price_today:35925,net_qty_7d:9810,net_value_7d:352082000,trend_today:'GOM',trend_7d:'GOM',label:'GOM BỀN + GOM TRONG NGÀY',sector:'Công nghiệp'}
  ],
  xa: [
    {symbol:'SHB',hot_score:100.00,buy_qty_today:86600,sell_qty_today:675100,net_qty_today:-588500,net_value_today:-9073895000,avg_price_today:15512.5,net_qty_7d:-2524968,net_value_7d:-37890552200,trend_today:'XẢ',trend_7d:'XẢ',label:'XẢ BỀN + XẢ TRONG NGÀY',sector:'Ngân hàng'},
    {symbol:'VHM',hot_score:70.24,buy_qty_today:13811,sell_qty_today:188000,net_qty_today:-174189,net_value_today:-16291653700,avg_price_today:94752.94117647059,net_qty_7d:-216462,net_value_7d:-19800266000,trend_today:'XẢ',trend_7d:'XẢ',label:'XẢ BỀN + XẢ TRONG NGÀY',sector:'Bất động sản'},
    {symbol:'SSI',hot_score:53.44,buy_qty_today:1505,sell_qty_today:48600,net_qty_today:-47095,net_value_today:-1554156500,avg_price_today:32954.76190476191,net_qty_7d:319337,net_value_7d:10125608850,trend_today:'XẢ',trend_7d:'GOM',label:'CHỐT LỜI / PHÂN PHỐI NGẮN',sector:'Chứng khoán'},
    {symbol:'PVD',hot_score:49.12,buy_qty_today:200,sell_qty_today:50900,net_qty_today:-50700,net_value_today:-2215715000,avg_price_today:43442.857142857145,net_qty_7d:104349,net_value_7d:3488675150,trend_today:'XẢ',trend_7d:'GOM',label:'CHỐT LỜI / PHÂN PHỐI NGẮN',sector:'Năng lượng'},
    {symbol:'PVT',hot_score:46.77,buy_qty_today:400,sell_qty_today:61400,net_qty_today:-61000,net_value_today:-1665375000,avg_price_today:27123.684210526317,net_qty_7d:-226718,net_value_7d:-5246034500,trend_today:'XẢ',trend_7d:'XẢ',label:'XẢ BỀN + XẢ TRONG NGÀY',sector:'Vận tải'},
    {symbol:'DXG',hot_score:44.88,buy_qty_today:400,sell_qty_today:108900,net_qty_today:-108500,net_value_today:-1572870000,avg_price_today:14525,net_qty_7d:-6487,net_value_7d:-149692450,trend_today:'XẢ',trend_7d:'XẢ',label:'XẢ BỀN + XẢ TRONG NGÀY',sector:'Bất động sản'},
    {symbol:'OIL',hot_score:43.16,buy_qty_today:14000,sell_qty_today:66000,net_qty_today:-52000,net_value_today:-1304800000,avg_price_today:23833.333333333332,net_qty_7d:-200,net_value_7d:-465120000,trend_today:'XẢ',trend_7d:'XẢ',label:'XẢ NỀN 7D',sector:'Năng lượng'},
    {symbol:'VCG',hot_score:40.95,buy_qty_today:5000,sell_qty_today:35100,net_qty_today:-30100,net_value_today:-572425000,avg_price_today:18950,net_qty_7d:-734887,net_value_7d:-16459417650,trend_today:'XẢ',trend_7d:'XẢ',label:'XẢ BỀN + XẢ TRONG NGÀY',sector:'Xây dựng'},
    {symbol:'DPM',hot_score:39.86,buy_qty_today:23600,sell_qty_today:64700,net_qty_today:-41100,net_value_today:-1265360000,avg_price_today:30884.48275862069,net_qty_7d:-118204,net_value_7d:-3980432900,trend_today:'XẢ',trend_7d:'XẢ',label:'XẢ BỀN + XẢ TRONG NGÀY',sector:'Hóa chất'},
    {symbol:'CII',hot_score:38.11,buy_qty_today:20700,sell_qty_today:15300,net_qty_today:5400,net_value_today:89830000,avg_price_today:16322.727272727272,net_qty_7d:-402020,net_value_7d:-6707422900,trend_today:'GOM',trend_7d:'XẢ',label:'XẢ NỀN 7D',sector:'Hạ tầng'}
  ]
};

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
const compact = new Intl.NumberFormat('vi-VN', { notation: 'compact', maximumFractionDigits: 2 });
const toCompactMoney = (n) => `${n < 0 ? '-' : '+'}₫${compact.format(Math.abs(n || 0))}`;
const toMoney = (n) => `₫${nf.format(Math.round(n || 0))}`;
const toPct = (n) => `${Number(n || 0).toFixed(2)}%`;

let state = {
  asOf: fallbackPayload.asOf,
  updatedAt: fallbackPayload.summary.updated_at,
  gom: [],
  xa: [],
  universe: [],
  maxAbsFlow: 1,
};

function normalizeTrend(value) {
  const v = String(value || '').toUpperCase().trim();
  if (v === 'XA' || v === 'XẢ' || v === 'BAN') return 'XẢ';
  if (v === 'GOM' || v === 'MUA') return 'GOM';
  return 'TRUNG TÍNH';
}

function deriveLabel(item, side) {
  if (item.label) return item.label;
  if (side === 'buy') {
    if (normalizeTrend(item.trend_today) === 'GOM' && normalizeTrend(item.trend_7d) === 'GOM') return 'GOM BỀN + GOM TRONG NGÀY';
    if (normalizeTrend(item.trend_today) === 'GOM') return 'BẮT ĐẦU GOM / HỒI';
    return 'GOM NỀN 7D';
  }
  if (normalizeTrend(item.trend_today) === 'XẢ' && normalizeTrend(item.trend_7d) === 'XẢ') return 'XẢ BỀN + XẢ TRONG NGÀY';
  if (normalizeTrend(item.trend_today) === 'XẢ') return 'CHỐT LỜI / PHÂN PHỐI NGẮN';
  return 'XẢ NỀN 7D';
}

function normalizeRow(raw, side, index) {
  const netValue = Number(raw.net_value_today ?? raw.net_value ?? 0);
  const netQty = Number(raw.net_qty_today ?? raw.net_qty ?? 0);
  const trendToday = normalizeTrend(raw.trend_today ?? raw.trend);
  const trend7d = normalizeTrend(raw.trend_7d);
  return {
    rank: index + 1,
    side,
    symbol: String(raw.symbol || '').toUpperCase(),
    hot_score: Number(raw.hot_score ?? 0),
    buy_qty_today: Number(raw.buy_qty_today ?? raw.buy_qty ?? 0),
    sell_qty_today: Number(raw.sell_qty_today ?? raw.sell_qty ?? 0),
    net_qty_today: netQty,
    net_value_today: netValue,
    avg_price_today: Number(raw.avg_price_today ?? raw.avg_price ?? 0),
    net_qty_7d: Number(raw.net_qty_7d ?? 0),
    net_value_7d: Number(raw.net_value_7d ?? 0),
    trend_today: trendToday,
    trend_7d: trend7d,
    label: deriveLabel(raw, side),
    sector: raw.sector || 'Chưa phân loại',
    actor: raw.actor || (side === 'buy' ? 'Cụm Gom Chủ Lực' : 'Cụm Xả Chủ Lực'),
    weight: 0,
  };
}

function normalizePayload(payload) {
  const gom = (payload.gom || []).map((r, i) => normalizeRow(r, 'buy', i));
  const xa = (payload.xa || payload.xa_top || payload.sell || []).map((r, i) => normalizeRow(r, 'sell', i));
  const universe = [...gom, ...xa];
  const maxAbsFlow = Math.max(1, ...universe.map(r => Math.abs(r.net_value_today)), ...universe.map(r => Math.abs(r.net_value_7d)));
  universe.forEach(row => {
    row.weight = Math.max(8, Math.round((Math.abs(row.net_value_today) / maxAbsFlow) * 100));
  });
  return {
    asOf: payload.asOf || payload.date || fallbackPayload.asOf,
    updatedAt: payload.summary?.updated_at || payload.updated_at || new Date().toISOString(),
    gom,
    xa,
    universe,
    maxAbsFlow,
  };
}

async function fetchDashboard() {
  try {
    const res = await fetch(API_ENDPOINT, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return normalizePayload(data);
  } catch (err) {
    console.warn('Fallback to local payload because API fetch failed:', err.message);
    return normalizePayload(fallbackPayload);
  }
}

function metric(label, value, cls='') {
  return `<div class="metric-chip"><div class="k">${label}</div><div class="v ${cls}">${value}</div></div>`;
}

function renderTopMetrics() {
  const gomLead = state.gom[0];
  const xaLead = state.xa[0];
  const netBuy = state.gom.reduce((sum, r) => sum + r.net_value_today, 0);
  const netSell = state.xa.reduce((sum, r) => sum + Math.abs(r.net_value_today), 0);
  const balance = netBuy - netSell;

  container.topMetrics.innerHTML = [
    metric('CẬP NHẬT', state.asOf, 'amber-t'),
    metric('TỔNG GOM TOP10', `₫${compact.format(netBuy)}`, 'buy-t'),
    metric('TỔNG XẢ TOP10', `₫${compact.format(netSell)}`, 'sell-t'),
    metric('CÁN CÂN', `${balance >= 0 ? '+' : '-'}₫${compact.format(Math.abs(balance))}`, balance >= 0 ? 'buy-t' : 'sell-t'),
    metric('TÂM ĐIỂM GOM', gomLead ? gomLead.symbol : '--', 'buy-t'),
    metric('TÂM ĐIỂM XẢ', xaLead ? xaLead.symbol : '--', 'sell-t')
  ].join('');
}

function rowHtml(r) {
  return `
    <div class="index-row" data-symbol="${r.symbol}" data-side="${r.side}">
      <div class="row-top"><div class="sym">${r.symbol}</div><span class="badge ${r.side}">${r.side === 'buy' ? 'GOM' : 'XẢ'}</span></div>
      <div class="meta-line"><span>${toCompactMoney(r.net_value_today)}</span><span>${toPct(r.hot_score)}</span></div>
      <div class="meta-line"><span>KL ròng: ${nf.format(r.net_qty_today)}</span><span>${r.label}</span></div>
      <div class="bar"><div class="fill ${r.side}" style="width:${Math.min(100, Math.max(8, r.weight))}%"></div></div>
    </div>`;
}

function renderIndex() {
  const gomHtml = state.gom.map(rowHtml).join('');
  const xaHtml = state.xa.map(rowHtml).join('');
  container.symbolIndex.innerHTML = `
    <div class="split-board">
      <div class="split-col">
        <div class="split-head buy-t">TOP 10 GOM</div>
        ${gomHtml}
      </div>
      <div class="split-col">
        <div class="split-head sell-t">TOP 10 XẢ</div>
        ${xaHtml}
      </div>
    </div>`;
}

function renderStrategies() {
  const gomLead = state.gom[0];
  const xaLead = state.xa[0];
  const reversal = state.xa.find(r => r.trend_today === 'GOM' && r.trend_7d === 'XẢ') || state.xa.find(r => r.label.includes('NỀN 7D'));
  const cards = [
    { title: 'Mã dẫn sóng gom', pct: toPct(gomLead?.hot_score || 0), sub: gomLead ? `${gomLead.symbol} hút ròng ${toCompactMoney(gomLead.net_value_today)} trong ngày.` : 'Chưa có dữ liệu.' },
    { title: 'Mã xả áp lực mạnh', pct: toPct(xaLead?.hot_score || 0), sub: xaLead ? `${xaLead.symbol} chịu áp lực rút ròng ${toCompactMoney(xaLead.net_value_today)}.` : 'Chưa có dữ liệu.' },
    { title: 'Điểm cần soi chuyển pha', pct: reversal ? reversal.symbol : '--', sub: reversal ? `${reversal.symbol} có độ lệch giữa hôm nay và 7 ngày, phù hợp theo dõi bẫy hồi/chốt lời.` : 'Chưa phát hiện chuyển pha nổi bật.' }
  ];
  container.strategyCards.innerHTML = cards.map(c => `
    <div class="strategy-row">
      <div class="row-top"><div>${c.title}</div><div class="amber-t">${c.pct}</div></div>
      <div class="meta-line"><span>${c.sub}</span></div>
    </div>`).join('');
}

function renderCongress() {
  const refs = [
    {name:'Luồng gom tham chiếu', row: state.gom[0], action:'MUA'},
    {name:'Luồng đỡ lớp 2', row: state.gom[1], action:'MUA'},
    {name:'Luồng xả tham chiếu', row: state.xa[0], action:'BÁN'},
  ].filter(x => x.row);

  container.congressTrades.innerHTML = refs.map(({name, row, action}) => `
    <div class="trade-row">
      <div class="row-top"><span>${name}</span><span class="badge ${action === 'MUA' ? 'buy' : 'sell'}">${action}</span></div>
      <div class="meta-line"><span>${row.symbol}</span><span>${toCompactMoney(row.net_value_today)}</span></div>
      <div class="meta-line"><span>${row.label}</span></div>
    </div>`).join('');
}

function renderClusters() {
  const groups = state.universe.reduce((acc, row) => {
    const key = row.label;
    acc[key] ||= { label: key, net: 0, count: 0, side: row.side };
    acc[key].net += row.net_value_today;
    acc[key].count += 1;
    return acc;
  }, {});

  container.clusterPanel.innerHTML = Object.values(groups)
    .sort((a, b) => Math.abs(b.net) - Math.abs(a.net))
    .map(g => `
      <div class="cluster-row">
        <div class="row-top"><div class="sym">${g.label}</div><span class="badge ${g.net >= 0 ? 'buy' : 'sell'}">${g.count} mã</span></div>
        <div class="meta-line"><span>Dòng tiền cộng gộp</span><span>${toCompactMoney(g.net)}</span></div>
        <div class="bar"><div class="fill ${g.net >= 0 ? 'buy' : 'sell'}" style="width:${Math.max(8, Math.round(Math.abs(g.net)/state.maxAbsFlow*100))}%"></div></div>
      </div>`).join('');
}

function renderSectorHeat() {
  const sectors = state.universe.reduce((acc, row) => {
    acc[row.sector] ||= { sector: row.sector, net: 0 };
    acc[row.sector].net += row.net_value_today;
    return acc;
  }, {});

  container.sectorHeat.innerHTML = Object.values(sectors)
    .sort((a,b) => Math.abs(b.net) - Math.abs(a.net))
    .map(s => `
      <div class="sector-row">
        <div class="row-top"><span>${s.sector}</span><span class="${s.net >= 0 ? 'buy-t' : 'sell-t'}">${toCompactMoney(s.net)}</span></div>
        <div class="bar"><div class="fill ${s.net >= 0 ? 'buy' : 'sell'}" style="width:${Math.max(8, Math.round(Math.abs(s.net)/state.maxAbsFlow*100))}%"></div></div>
      </div>`).join('');
}

function renderSignalCards() {
  const gomLead = state.gom[0];
  const xaLead = state.xa[0];
  const gomSyms = state.gom.slice(0, 4).map(r => r.symbol).join(', ');
  const xaSyms = state.xa.slice(0, 4).map(r => r.symbol).join(', ');
  container.signalSurge.innerHTML = `
    <div class="meta-line"><span>Lead gom</span><span class="buy-t">${gomLead?.symbol || '--'}</span></div>
    <div class="meta-line"><span>Lead xả</span><span class="sell-t">${xaLead?.symbol || '--'}</span></div>
    <div class="meta-line"><span>Cụm gom nóng</span><span>${gomSyms}</span></div>
    <div class="meta-line"><span>Cụm xả nóng</span><span>${xaSyms}</span></div>`;

  const balance = state.gom.reduce((s,r)=>s+r.net_value_today,0) + state.xa.reduce((s,r)=>s+r.net_value_today,0);
  container.confirmBox.innerHTML = `
    <div class="confirm-main ${balance >= 0 ? 'buy-t' : 'sell-t'}">${balance >= 0 ? 'DÒNG TIỀN NGHIÊNG GOM' : 'ÁP LỰC XẢ LẤN ÁT'}</div>
    <div class="confirm-sub">Chênh lệch Top10: ${toCompactMoney(balance)}</div>`;
}

function renderStoryline() {
  const stories = [
    `${state.gom[0].symbol} đang là mã gom mạnh nhất, hot score ${toPct(state.gom[0].hot_score)} và giá trị ròng ${toCompactMoney(state.gom[0].net_value_today)}.`,
    `${state.xa[0].symbol} là mã xả chủ đạo, áp lực bán ròng ${toCompactMoney(state.xa[0].net_value_today)} tạo vùng cảnh báo cho nhóm cùng ngành.`,
    `Nhóm gom nổi bật nhất hiện tại nghiêng về ${state.gom.slice(0,3).map(r => r.sector).filter((v,i,a)=>a.indexOf(v)===i).join(', ')}.`,
    `Nhóm xả mạnh cho thấy sự rút tiền tại ${state.xa.slice(0,3).map(r => r.sector).filter((v,i,a)=>a.indexOf(v)===i).join(', ')}.`
  ];
  container.storyline.innerHTML = stories.map(s => `<div class="story-item">${s}</div>`).join('');
}

function renderFeed() {
  const ts = new Date(state.updatedAt).toLocaleTimeString('vi-VN');
  const items = [
    `[API] Đồng bộ thành công dữ liệu ngày ${state.asOf}.`,
    `[GOM] ${state.gom[0].symbol} giữ lead với ${toCompactMoney(state.gom[0].net_value_today)}.`,
    `[XẢ] ${state.xa[0].symbol} tạo áp lực ${toCompactMoney(state.xa[0].net_value_today)}.`,
    `[7D] ${state.universe.filter(r => r.trend_today === r.trend_7d).length}/${state.universe.length} mã đang đồng pha với xu hướng 7 ngày.`,
    `[SECTOR] Ngành mạnh nhất theo tiền ròng đã được cập nhật ở bảng Nhiệt ngành.`
  ];
  container.feed.innerHTML = items.map(t => `<div class="feed-item"><div class="feed-time">${ts}</div><div>${t}</div></div>`).join('');
}

function renderTicker() {
  const text = [...state.gom.slice(0,5), ...state.xa.slice(0,5)]
    .map(r => `[${r.side === 'buy' ? 'GOM' : 'XẢ'}] ${r.symbol} ${toCompactMoney(r.net_value_today)} | ${r.label}`)
    .join('  •  ');
  container.tickerText.textContent = text;
}

function renderRadar() {
  const radarRows = [state.gom[0], state.gom[1], state.gom[2], state.gom[3], state.xa[0], state.xa[1], state.xa[2], state.xa[3]].filter(Boolean);
  const positions = [
    { x: 50, y: 18 }, { x: 72, y: 30 }, { x: 76, y: 54 }, { x: 56, y: 72 },
    { x: 26, y: 30 }, { x: 22, y: 53 }, { x: 36, y: 70 }, { x: 48, y: 84 }
  ];

  container.radarNodes.innerHTML = radarRows.map((r, i) => {
    const p = positions[i];
    return `
      <button class="node ${r.side}" style="left:${p.x}%; top:${p.y}%" data-symbol="${r.symbol}">
        <span class="glow"></span>
        <div class="node-title"><span>${r.symbol}</span><span class="pct">${toPct(r.hot_score)}</span></div>
        <div class="node-sub">${r.label}</div>
      </button>`;
  }).join('');

  container.linkLayer.innerHTML = radarRows.map((r, i) => {
    const p = positions[i];
    const x1 = 500, y1 = 350;
    const x2 = p.x * 10, y2 = p.y * 7;
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2 - (r.side === 'buy' ? 50 : -30);
    return `
      <g>
        <path class="link-line ${r.side === 'buy' ? 'active-buy' : 'active-sell'}" d="M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}" />
        <path class="link-pulse" d="M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}" />
      </g>`;
  }).join('');
}

function openDrawer(symbol) {
  const row = state.universe.find(r => r.symbol === symbol);
  if (!row) return;
  container.drawerContent.innerHTML = `
    <div class="drawer-grid">
      <div class="drawer-head">
        <h2>${row.symbol} · ${row.side === 'buy' ? 'CỤM GOM' : 'CỤM XẢ'}</h2>
        <p>Dữ liệu đã chuẩn hóa theo schema API Cloudflare Worker để đọc trực tiếp từ D1/KV.</p>
      </div>
      <div class="kpi-grid">
        <div class="kpi"><div class="label">Hot score</div><div class="value amber-t">${toPct(row.hot_score)}</div></div>
        <div class="kpi"><div class="label">Net value hôm nay</div><div class="value ${row.side === 'buy' ? 'buy-t' : 'sell-t'}">${toCompactMoney(row.net_value_today)}</div></div>
        <div class="kpi"><div class="label">Net qty hôm nay</div><div class="value">${nf.format(row.net_qty_today)}</div></div>
        <div class="kpi"><div class="label">Giá bình quân</div><div class="value">${toMoney(row.avg_price_today)}</div></div>
        <div class="kpi"><div class="label">Xu hướng hôm nay</div><div class="value">${row.trend_today}</div></div>
        <div class="kpi"><div class="label">Xu hướng 7 ngày</div><div class="value">${row.trend_7d}</div></div>
      </div>
      <div class="story-item"><strong>Nhãn hành vi:</strong> ${row.label}</div>
      <div class="story-item"><strong>Ngành:</strong> ${row.sector} · <strong>Cụm:</strong> ${row.actor}</div>
      <div class="story-item"><strong>7 ngày:</strong> ${toCompactMoney(row.net_value_7d)} / ${nf.format(row.net_qty_7d)} cổ phiếu ròng.</div>
    </div>`;
  container.detailDrawer.classList.add('open');
}

function bindEvents() {
  document.addEventListener('click', (e) => {
    const row = e.target.closest('[data-symbol]');
    if (row) openDrawer(row.dataset.symbol);
  });
  container.closeDrawer?.addEventListener('click', () => container.detailDrawer.classList.remove('open'));
  container.detailDrawer?.addEventListener('click', (e) => {
    if (e.target === container.detailDrawer) container.detailDrawer.classList.remove('open');
  });
}

function drawSpark(canvasId, values, color = 'rgba(67,229,255,0.9)') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  const max = Math.max(...values);
  const min = Math.min(...values);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  values.forEach((v, i) => {
    const x = (i / (values.length - 1)) * (w - 12) + 6;
    const y = h - ((v - min) / ((max - min) || 1)) * (h - 18) - 9;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

function render() {
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
  drawSpark('spark1', state.gom.map(r => Math.abs(r.net_value_today)), 'rgba(77,255,191,0.9)');
  drawSpark('spark2', state.xa.map(r => Math.abs(r.net_value_today)), 'rgba(255,90,125,0.9)');
}

async function boot() {
  state = await fetchDashboard();
  render();
  bindEvents();
}

boot();
