
const rows = window.__FLOW_DATA__ || [];

function kindClass(kind){
  if(kind === 'phan_phoi') return 'phan_phoi';
  if(kind === 'theo_doi') return 'theo_doi';
  return 'gom';
}

function nodeCard(row){
  const cls = kindClass(row.kind);
  return `
    <article class="node-card ${cls}">
      <div class="node-top">
        <div class="sym">${row.symbol}</div>
        <div class="pct">${row.trend_pct}</div>
      </div>
      <div class="phase">${row.phase}</div>
      <div class="note">${row.note}</div>
    </article>
  `;
}

function renderMobile(){
  document.getElementById('mobileNodes').innerHTML = rows.map(nodeCard).join('');
}

function renderDesktop(){
  const layer = document.getElementById('desktopNodes');
  const positions = [
    {x:71,y:21},{x:57,y:36},{x:23,y:33},{x:7,y:55},
    {x:61,y:58},{x:9,y:76},{x:41,y:81},{x:31,y:8}
  ];
  layer.innerHTML = rows.map((row, i) => {
    const p = positions[i % positions.length];
    const cls = kindClass(row.kind);
    return `<article class="node-card ${cls}" style="left:${p.x}%;top:${p.y}%;transform:translate(-50%,-50%);">
      <div class="node-top">
        <div class="sym">${row.symbol}</div>
        <div class="pct">${row.trend_pct}</div>
      </div>
      <div class="phase">${row.phase}</div>
      <div class="note">${row.note}</div>
    </article>`;
  }).join('');
}

function renderList(){
  const el = document.getElementById('flowList');
  el.innerHTML = rows.map(r => {
    const cls = kindClass(r.kind);
    return `<div class="flow-row ${cls}">
      <div class="s">${r.symbol}</div>
      <div class="p">${r.trend_pct}</div>
      <div class="desc"><b>${r.phase}</b>${r.note}</div>
    </div>`;
  }).join('');
}

renderMobile();
renderDesktop();
renderList();
