# Inventory & Forecasting Insight Pack — Dashboard

**Sep 2026 · ZSPR / ZSPN · 6 Plants**

A fully static, production-ready dashboard for the monthly inventory insight pack.
All 7 analysis views, dark/light mode toggle, Chart.js 4 visualisations, zero runtime dependencies.

---

## Views

| # | View | Description |
|---|------|-------------|
| V1 | Gross Inventory Forecast | Month-on-month forecast Oct–Dec 2026 by plant (Holt-Winters) |
| V2 | Overstock & High Holdings | 75 lines flagged · Rs.4.2 Cr excess |
| V3 | Understock & Critical Spares | 93 lines · 16 VITAL at zero stock · 82.7% availability |
| V4 | NMI / SMI Candidates | 140 lines · Rs.3.8 Cr tied up |
| V5 | PR Recommendations | 93 prioritised PRs · P1 raise by 2026-10-18 |
| V6 | MRP Eligibility | 54 materials assessed · 18 recommended for MRP |
| V7 | Duplicate Material Codes | 215 candidate pairs across 6 plants |

---

## Forecast Engine

- **Agent:** Contextflow Holt-Winters · ID `6ad07a300638a42df94f24ee`
- **Algorithm:** Double Exponential Smoothing alpha=0.3 beta=0.15
- **Run:** 2026-10-15 07:04 UTC
- **Source:** `forecast_oct2026_contextflow.csv` (491 material-plant rows)

---

## KPI Targets

| KPI | Current | Target | Status |
|-----|---------|--------|--------|
| Gross Inventory Value | Rs.13.10 Cr | Rs.12.50 Cr | RED |
| Days on Hand | 73.4 | 60 | RED |
| Inventory Turnover | 4.97x | 5.0x | AMBER |
| Critical Spares Avail. | 82.7% | >95% | RED |
| NMI % | 28.5% | 10% | RED |
| SMI % | 34.2% | 20% | RED |
| Forecast Accuracy | 87.3% | >90% | AMBER |

---

## Running Locally

```bash
# Python (no install needed)
python3 -m http.server 8080
# open http://localhost:8080

# Node
npx serve .
```

---

## Files

```
forecast-demand-dashboard/
├── index.html          # All 7 views, tab navigation, KPI strip, header/footer
├── styles.css          # Design tokens, dark/light themes, full component library
├── data.js             # All forecast + analysis data (MCP_DATA object)
├── app.js              # Chart rendering, table population, theme toggle
├── README.md           # This file
└── workflows/
    └── ci.yml          # Static lint + panel presence checks
```

---

## Design Direction

**Linear/Vercel-calm** · Enterprise dark-first

- Font: Inter (400/500/600/700)
- Accent: `#4f8ef7` · Spacing: 4px base scale
- Themes: Dark (default) and Light — both fully designed, not inverted
- Charts: Chart.js 4 · re-rendered on theme switch
- Tested: 75 pytest acceptance tests · 0 failures

---

## Acceptance Tests

The test suite lives in the parent repo `CL-AI-COE/forecast-demand` under `tests/`.

```bash
.venv/bin/pytest tests/ -v   # 75 passed, 0 failed
```

---

## Deliverables

| File | FileId | Contents |
|------|--------|----------|
| `Inventory_Insight_Pack_Sep2026_REBUILT.xlsx` | `6ad07f7fc29d8293ceb65e3f` | 8 sheets · 64,725 bytes |
| `Inventory_Insight_Pack_Sep2026_REBUILT.pptx` | `6ad07f57c29d8293ceb65ad6` | 9 slides · Slate theme |
