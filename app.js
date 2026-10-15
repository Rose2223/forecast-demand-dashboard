/**
 * app.js - Inventory Insight Pack Sep 2026
 * All 7 analysis views, dark/light mode, Chart.js 4
 */

/* THEME TOGGLE */
const themeToggle = document.getElementById('themeToggle');
const iconDark    = document.getElementById('iconDark');
const iconLight   = document.getElementById('iconLight');
const themeLabel  = document.getElementById('themeLabel');

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    iconDark.style.display = ''; iconLight.style.display = 'none';
    themeLabel.textContent = 'Dark';
  } else {
    iconDark.style.display = 'none'; iconLight.style.display = '';
    themeLabel.textContent = 'Light';
  }
  destroyAllCharts();
  renderAllCharts();
}

themeToggle.addEventListener('click', () => {
  applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
});

/* TAB NAVIGATION */
const tabBtns = document.querySelectorAll('.tab-btn');
const panels  = document.querySelectorAll('.panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.panel;
    tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
    panels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected','true');
    document.getElementById(target).classList.add('active');
  });
});

/* CHART PALETTE */
function palette() {
  const dark = getTheme() === 'dark';
  return {
    accent: '#4f8ef7', success: '#22c55e', warning: '#f59e0b', danger: '#ef4444', info: '#38bdf8',
    grid: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    text: dark ? '#8b92a8' : '#4b5563',
    plants: ['#4f8ef7','#22c55e','#f59e0b','#ef4444','#38bdf8','#a78bfa']
  };
}

/* CHART REGISTRY */
const charts = {};
function destroyAllCharts() {
  Object.keys(charts).forEach(k => { if (charts[k]) { charts[k].destroy(); delete charts[k]; } });
}

function baseOptions(p) {
  return {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: p.text, font: { family: 'Inter', size: 12 }, boxWidth: 12, padding: 16 } },
      tooltip: { backgroundColor: '#1a1d27', titleColor: '#f0f2f8', bodyColor: '#8b92a8', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1 }
    },
    scales: {
      x: { ticks: { color: p.text, font: { family: 'Inter', size: 11 } }, grid: { color: p.grid } },
      y: { ticks: { color: p.text, font: { family: 'Inter', size: 11 } }, grid: { color: p.grid } }
    }
  };
}

/* RENDER ALL CHARTS */
function renderAllCharts() {
  const p = palette();
  const d = window.MCP_DATA;

  /* V1 - Line: Gross Inventory Forecast */
  const c1 = document.getElementById('chartV1');
  if (c1) {
    const o = baseOptions(p); o.plugins.legend.position = 'bottom';
    charts.v1 = new Chart(c1, {
      type: 'line',
      data: {
        labels: ['Sep 2026','Oct 2026','Nov 2026','Dec 2026'],
        datasets: d.v1.plants.map((pl, i) => ({
          label: pl, data: [d.v1.sep[i], d.v1.oct[i], d.v1.nov[i], d.v1.dec[i]],
          borderColor: p.plants[i], backgroundColor: p.plants[i] + '22',
          tension: 0.35, pointRadius: 4, pointHoverRadius: 6, fill: false
        }))
      },
      options: o
    });
  }

  /* V2 - Bar: Overstock by Plant */
  const c2p = document.getElementById('chartV2Plant');
  if (c2p) {
    charts.v2plant = new Chart(c2p, {
      type: 'bar',
      data: { labels: d.v2.byPlant.labels, datasets: [{ label: 'Overstock Lines', data: d.v2.byPlant.lines, backgroundColor: p.danger + 'cc', borderRadius: 4 }] },
      options: baseOptions(p)
    });
  }

  /* V2 - Doughnut: Overstock by Group */
  const c2g = document.getElementById('chartV2Group');
  if (c2g) {
    charts.v2group = new Chart(c2g, {
      type: 'doughnut',
      data: { labels: d.v2.byGroup.labels, datasets: [{ data: d.v2.byGroup.values, backgroundColor: p.plants, borderWidth: 0, hoverOffset: 8 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: p.text, font: { family: 'Inter', size: 12 }, boxWidth: 12, padding: 12 } }, tooltip: { backgroundColor: '#1a1d27', titleColor: '#f0f2f8', bodyColor: '#8b92a8' } } }
    });
  }

  /* V3 - Horizontal Bar: Criticality */
  const c3 = document.getElementById('chartV3');
  if (c3) {
    const o = baseOptions(p); o.indexAxis = 'y';
    charts.v3 = new Chart(c3, {
      type: 'bar',
      data: { labels: d.v3.byCriticality.labels, datasets: [{ label: 'Lines at Risk', data: d.v3.byCriticality.counts, backgroundColor: [p.danger+'cc',p.danger+'88',p.warning+'cc',p.warning+'88',p.info+'88'], borderRadius: 4 }] },
      options: o
    });
  }

  /* V4 - Grouped Bar: NMI/SMI by Plant */
  const c4 = document.getElementById('chartV4');
  if (c4) {
    charts.v4 = new Chart(c4, {
      type: 'bar',
      data: { labels: d.v4.byPlant.labels, datasets: [
        { label: 'NMI', data: d.v4.byPlant.nmi, backgroundColor: p.danger + 'cc', borderRadius: 4 },
        { label: 'SMI', data: d.v4.byPlant.smi, backgroundColor: p.warning + 'cc', borderRadius: 4 }
      ]},
      options: baseOptions(p)
    });
  }

  /* V5 - Doughnut: PR by Priority */
  const c5 = document.getElementById('chartV5');
  if (c5) {
    charts.v5 = new Chart(c5, {
      type: 'doughnut',
      data: { labels: d.v5.byPriority.labels, datasets: [{ data: d.v5.byPriority.counts, backgroundColor: [p.danger+'cc',p.warning+'cc',p.info+'cc',p.success+'88'], borderWidth: 0, hoverOffset: 8 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: p.text, font: { family: 'Inter', size: 12 }, boxWidth: 12, padding: 12 } }, tooltip: { backgroundColor: '#1a1d27', titleColor: '#f0f2f8', bodyColor: '#8b92a8' } } }
    });
  }

  /* V6 - Doughnut: MRP eligibility */
  const c6d = document.getElementById('chartV6Donut');
  if (c6d) {
    charts.v6donut = new Chart(c6d, {
      type: 'doughnut',
      data: { labels: d.v6.donut.labels, datasets: [{ data: d.v6.donut.counts, backgroundColor: [p.success+'cc',p.info+'cc',p.warning+'cc',p.danger+'cc'], borderWidth: 0, hoverOffset: 8 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: p.text, font: { family: 'Inter', size: 12 }, boxWidth: 12, padding: 12 } }, tooltip: { backgroundColor: '#1a1d27', titleColor: '#f0f2f8', bodyColor: '#8b92a8' } } }
    });
  }

  /* V6 - Bar: Top 5 MRP candidates */
  const c6b = document.getElementById('chartV6Bar');
  if (c6b) {
    charts.v6bar = new Chart(c6b, {
      type: 'bar',
      data: { labels: d.v6.top5.map(r => r.mat), datasets: [{ label: 'CV (lower = more MRP-eligible)', data: d.v6.top5.map(r => r.cv), backgroundColor: d.v6.top5.map(r => r.cv < 0.3 ? p.success+'cc' : r.cv < 0.5 ? p.warning+'cc' : p.danger+'cc'), borderRadius: 4 }] },
      options: baseOptions(p)
    });
  }

  /* V7 - Bar: Duplicate pairs by Plant */
  const c7 = document.getElementById('chartV7');
  if (c7) {
    charts.v7 = new Chart(c7, {
      type: 'bar',
      data: { labels: d.v7.byPlant.labels, datasets: [{ label: 'Candidate Duplicate Pairs', data: d.v7.byPlant.pairs, backgroundColor: p.warning + 'cc', borderRadius: 4 }] },
      options: baseOptions(p)
    });
  }
}

/* POPULATE TABLES */
function populateTables() {
  const d = window.MCP_DATA;

  const v1tb = document.getElementById('v1Table');
  if (v1tb) {
    v1tb.innerHTML = d.v1.plants.map((pl, i) => {
      const delta = (d.v1.dec[i] - d.v1.sep[i]).toFixed(1);
      const cls = parseFloat(delta) < 0 ? 'success-text' : 'danger-text';
      return `<tr><td><strong>${pl}</strong></td><td class="num">${d.v1.sep[i].toFixed(2)}</td><td class="num">${d.v1.oct[i].toFixed(2)}</td><td class="num">${d.v1.nov[i].toFixed(2)}</td><td class="num">${d.v1.dec[i].toFixed(2)}</td><td class="num"><span class="${cls}">${parseFloat(delta) > 0 ? '+' : ''}${delta} Cr</span></td></tr>`;
    }).join('') + `<tr style="font-weight:700;border-top:2px solid var(--border-md)"><td>ALL PLANTS</td><td class="num">${d.v1.total.sep.toFixed(2)}</td><td class="num">${d.v1.total.oct.toFixed(2)}</td><td class="num">${d.v1.total.nov.toFixed(2)}</td><td class="num">${d.v1.total.dec.toFixed(2)}</td><td class="num success-text">${(d.v1.total.dec - d.v1.total.sep).toFixed(2)} Cr</td></tr>`;
  }

  const v2tb = document.getElementById('v2Table');
  if (v2tb) {
    v2tb.innerHTML = d.v2.topLines.map(r => `<tr><td><code style="font-size:11px;color:var(--accent)">${r.mat}</code></td><td>${r.desc}</td><td>${r.plant}</td><td class="num">${r.stock.toLocaleString()}</td><td class="num">${r.demand.toLocaleString()}</td><td class="num danger-text">${r.excess.toLocaleString()}</td><td class="num">Rs.${r.excessVal.toLocaleString()}</td><td><span class="pill pill-neutral">${r.abc}</span></td><td><span class="pill pill-warning">${r.action}</span></td></tr>`).join('');
  }

  const v3tb = document.getElementById('v3Table');
  if (v3tb) {
    v3tb.innerHTML = d.v3.topLines.map(r => {
      const rc = r.risk === 'CRITICAL' ? 'pill-danger' : 'pill-warning';
      const cc = r.crit === 'VITAL'    ? 'pill-danger' : 'pill-warning';
      return `<tr><td><code style="font-size:11px;color:var(--accent)">${r.mat}</code></td><td>${r.desc}</td><td>${r.plant}</td><td><span class="pill ${cc}">${r.crit}</span></td><td class="num ${r.stock === 0 ? 'danger-text' : ''}">${r.stock}</td><td class="num">${r.rop}</td><td class="num">${r.lt}</td><td><span class="pill ${rc}">${r.risk}</span></td></tr>`;
    }).join('');
  }

  const v4tb = document.getElementById('v4Table');
  if (v4tb) {
    v4tb.innerHTML = d.v4.topLines.map(r => {
      const fc = r.flag === 'NMI' ? 'pill-danger' : 'pill-warning';
      return `<tr><td><code style="font-size:11px;color:var(--accent)">${r.mat}</code></td><td>${r.desc}</td><td>${r.plant}</td><td><span class="pill ${fc}">${r.flag}</span></td><td class="num">${r.lastCons}</td><td class="num">${r.stock.toLocaleString()}</td><td class="num">Rs.${r.val.toLocaleString()}</td><td><span class="pill pill-neutral">${r.abc}</span></td><td>${r.rec}</td></tr>`;
    }).join('');
  }

  const v5tb = document.getElementById('v5Table');
  if (v5tb) {
    v5tb.innerHTML = d.v5.topLines.map(r => {
      const pc = r.pri === 'P1' ? 'pill-danger' : r.pri === 'P2' ? 'pill-warning' : 'pill-info';
      const cc = r.crit === 'VITAL' ? 'pill-danger' : 'pill-warning';
      return `<tr><td><span class="pill ${pc}">${r.pri}</span></td><td><code style="font-size:11px;color:var(--accent)">${r.mat}</code></td><td>${r.desc}</td><td>${r.plant}</td><td class="num">${r.qty}</td><td class="num">${r.prDate}</td><td class="num">${r.lt}</td><td><span class="pill ${cc}">${r.crit}</span></td><td>${r.basis}</td></tr>`;
    }).join('');
  }

  const v6tb = document.getElementById('v6Table');
  if (v6tb) {
    v6tb.innerHTML = d.v6.allLines.map(r => {
      const tc = r.trend === 'RISING' ? 'success-text' : (r.trend === 'DECLINING' || r.trend === 'NONE') ? 'danger-text' : '';
      const rc = r.rec.startsWith('Enable') ? 'pill-success' : r.rec.startsWith('Disable') ? 'pill-danger' : r.rec.startsWith('Review') ? 'pill-warning' : 'pill-neutral';
      return `<tr><td><code style="font-size:11px;color:var(--accent)">${r.mat}</code></td><td>${r.desc}</td><td>${r.plant}</td><td><span class="pill pill-neutral">${r.mrpType}</span></td><td class="num">${r.cv.toFixed(2)}</td><td class="${tc}">${r.trend}</td><td><span class="pill ${rc}">${r.rec}</span></td><td style="color:var(--text-secondary);font-size:12px">${r.rationale}</td></tr>`;
    }).join('');
  }

  const v7tb = document.getElementById('v7Table');
  if (v7tb) {
    v7tb.innerHTML = d.v7.topPairs.map(r => {
      const sc = r.sim >= 93 ? 'danger-text' : r.sim >= 88 ? 'warning-text' : '';
      const ac = r.action.startsWith('Merge') ? 'pill-danger' : 'pill-warning';
      return `<tr><td><code style="font-size:11px;color:var(--accent)">${r.matA}</code></td><td><code style="font-size:11px;color:var(--info)">${r.matB}</code></td><td style="font-size:12px">${r.descA}</td><td style="font-size:12px">${r.descB}</td><td>${r.plant}</td><td>${r.group}</td><td class="num ${sc}">${r.sim}%</td><td><span class="pill ${ac}">${r.action}</span></td></tr>`;
    }).join('');
  }
}

/* INIT */
document.addEventListener('DOMContentLoaded', () => {
  renderAllCharts();
  populateTables();
});
