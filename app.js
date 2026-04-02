const API_BASE = 'https://cashflow.starlinksatellitewifi.workers.dev';
const API_URL = `${API_BASE}/api/flow-dashboard`;

const $ = (id) => document.getElementById(id);
const el = {
  asOf: $('asOf'),
  updatedAt: $('updatedAt'),
  gomValue: $('gomValue'),
  xaValue: $('xaValue'),
  dominantSide: $('dominantSide'),
  leadPair: $('leadPair'),
  sourceText: $('sourceText'),
  gomCount: $('gomCount'),
  xaCount: $('xaCount'),
  gomTable: $('gomTable'),
  xaTable: $('xaTable'),
  highlights: $('highlights'),
  sectorHeat: $('sectorHeat'),
  statusLog: $('statusLog'),
  refreshBtn: $('refreshBtn'),
};

const numberVN = new Intl.NumberFormat('vi-VN');
const compactVN = new Intl.NumberFormat('vi-VN', { notation: 'compact', maximumFractionDigits: 2 });

function formatCompactCurrency(n) {
  const val = Number(n || 0);
  const sign = val > 0 ? '+' : val < 0 ? '-' : '';
  return `${sign}₫${compactVN.format(Math.abs(val))}`;
}

function formatSignedQty(n) {
  const val = Number(n || 0);
  const sign = val > 0 ? '+' : val < 0 ? '-' : '';
  return `${sign}${numberVN.format(Math.abs(val))}`;
}

function badgeClass(trend) {
  if (trend === 'GOM') return 'positive';
  if (trend === 'XẢ') return 'negative';
  return 'neutral';
}

function escapeHtml(text) {
  return String(text ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function rowHtml(row) {
  const todayClass = Number(row.net_value_today) >= 0 ? 'value-positive' : 'value-negative';
  return `
    <tr>
      <td>
        <div class="sym">${escapeHtml(row.symbol)}</div>
        <div class="panel-subtitle">${escapeHtml(row.sector || 'Khác')}</div>
      </td>
      <td>${Number(row.hot_score || 0).toFixed(2)}</td>
      <td>${formatSignedQty(row.net_qty_today)}</td>
      <td class="${todayClass}">${formatCompactCurrency(row.net_value_today)}</td>
      <td>${formatSignedQty(row.net_qty_7d)}</td>
      <td>
        <span class="badge ${badgeClass(row.trend_today)}">${escapeHtml(row.trend_today || 'N/A')}</span>
        <span class="badge ${badgeClass(row.trend_7d)}">7D ${escapeHtml(row.trend_7d || 'N/A')}</span>
      </td>
      <td>${escapeHtml(row.label || '')}</td>
    </tr>
  `;
}

function uniqueBySymbol(rows) {
  const map = new Map();
  for (const row of rows || []) {
    if (!map.has(row.symbol)) map.set(row.symbol, row);
  }
  return Array.from(map.values());
}

function buildHighlights(data) {
  const gomLead = data.gom?.[0];
  const xaLead = data.xa?.[0];
  const cards = [];

  if (gomLead) {
    cards.push({
      title: `Mã gom mạnh nhất: ${gomLead.symbol}`,
      desc: `${gomLead.label}. Giá trị hôm nay ${formatCompactCurrency(gomLead.net_value_today)}.`
    });
  }
  if (xaLead) {
    cards.push({
      title: `Mã xả mạnh nhất: ${xaLead.symbol}`,
      desc: `${xaLead.label}. Giá trị hôm nay ${formatCompactCurrency(xaLead.net_value_today)}.`
    });
  }

  const overlap = uniqueBySymbol([...(data.gom || []), ...(data.xa || [])])
    .filter(x => (data.gom || []).some(g => g.symbol === x.symbol) && (data.xa || []).some(s => s.symbol === x.symbol));

  if (overlap.length) {
    cards.push({
      title: 'Mã xuất hiện ở cả hai bảng',
      desc: overlap.map(x => x.symbol).join(', ') + '. Đây thường là nhóm có tín hiệu ngắn hạn và 7D trái chiều.'
    });
  }

  el.highlights.innerHTML = cards.map(card => `
    <div class="info-card">
      <h3>${escapeHtml(card.title)}</h3>
      <p>${escapeHtml(card.desc)}</p>
    </div>
  `).join('');
}

function buildSectorHeat(data) {
  const sectorMap = new Map();
  const all = [...(data.gom || []), ...(data.xa || [])];
  for (const row of all) {
    const key = row.sector || 'Khác';
    if (!sectorMap.has(key)) sectorMap.set(key, 0);
    sectorMap.set(key, sectorMap.get(key) + Number(row.net_value_today || 0));
  }

  const sectors = Array.from(sectorMap.entries())
    .map(([sector, net]) => ({ sector, net }))
    .sort((a, b) => Math.abs(b.net) - Math.abs(a.net));

  const maxAbs = Math.max(1, ...sectors.map(s => Math.abs(s.net)));

  el.sectorHeat.innerHTML = sectors.map(s => {
    const pct = Math.max(6, Math.round(Math.abs(s.net) / maxAbs * 100));
    const cls = s.net >= 0 ? 'positive' : 'negative';
    return `
      <div class="sector-row">
        <div class="kv-row"><strong>${escapeHtml(s.sector)}</strong><span class="${s.net >= 0 ? 'value-positive' : 'value-negative'}">${formatCompactCurrency(s.net)}</span></div>
        <div class="bar"><div class="fill ${cls}" style="width:${pct}%"></div></div>
      </div>
    `;
  }).join('');
}

function addLog(message) {
  const item = document.createElement('div');
  item.className = 'log-item';
  item.innerHTML = `<strong>${new Date().toLocaleTimeString('vi-VN')}</strong> — ${escapeHtml(message)}`;
  el.statusLog.prepend(item);
}

function render(data) {
  el.asOf.textContent = data.asOf || '--';
  el.updatedAt.textContent = data.updated_at || data.summary?.updated_at || '--';
  el.gomValue.textContent = formatCompactCurrency(data.summary?.gom_value_today || 0);
  el.xaValue.textContent = formatCompactCurrency(-(data.summary?.xa_value_today_abs || 0));
  el.dominantSide.textContent = data.summary?.dominant_side || '--';
  el.leadPair.textContent = `${data.summary?.lead_gom_symbol || '--'} / ${data.summary?.lead_xa_symbol || '--'}`;
  el.sourceText.textContent = `${data.source || 'unknown'} · ${API_URL}`;

  el.gomCount.textContent = `${(data.gom || []).length} mã`;
  el.xaCount.textContent = `${(data.xa || []).length} mã`;

  el.gomTable.innerHTML = (data.gom || []).map(rowHtml).join('');
  el.xaTable.innerHTML = (data.xa || []).map(rowHtml).join('');

  buildHighlights(data);
  buildSectorHeat(data);

  addLog(`Đã tải ${data.gom?.length || 0} mã gom và ${data.xa?.length || 0} mã xả cho ngày ${data.asOf || '--'}.`);
}

async function loadDashboard() {
  el.refreshBtn.disabled = true;
  addLog('Đang gọi API flow-dashboard...');
  try {
    const res = await fetch(API_URL, { method: 'GET' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    render(data);
  } catch (err) {
    addLog(`Lỗi tải dữ liệu: ${err.message}`);
    el.sourceText.textContent = `Lỗi kết nối tới ${API_URL}`;
  } finally {
    el.refreshBtn.disabled = false;
  }
}

el.refreshBtn.addEventListener('click', loadDashboard);
loadDashboard();
