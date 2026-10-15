/**
 * data.js — Insight Pack Sep 2026
 * Source: forecast_oct2026_contextflow.csv
 * Engine: Contextflow Holt-Winters alpha=0.3 beta=0.15
 * Agent: 6ad07a300638a42df94f24ee  Run: 2026-10-15 07:04 UTC
 */
window.MCP_DATA = {
  v1: {
    plants: ['P001','P002','P003','P004','P005','P006'],
    sep:    [24.1, 18.3, 16.7, 10.2,  8.4,  4.4],
    oct:    [23.6, 17.9, 16.3,  9.9,  8.2,  4.3],
    nov:    [23.1, 17.5, 15.9,  9.7,  8.0,  4.2],
    dec:    [22.6, 17.1, 15.5,  9.5,  7.8,  4.1],
    total:  { sep: 82.1, oct: 80.2, nov: 78.4, dec: 76.6 }
  },
  v2: {
    byPlant: { labels: ['P001','P002','P003','P004','P005','P006'], lines: [22,14,18,8,9,4] },
    byGroup: { labels: ['Mechanical','Electrical','Instrumentation','Civil','Piping','Other'], values: [1.4,0.9,0.8,0.5,0.4,0.2] },
    topLines: [
      { mat:'ZSPR-10042', desc:'Bearing Assembly 6205',   plant:'P001', stock:480, demand:120, excess:360, excessVal:432000, abc:'C', action:'Review for disposal' },
      { mat:'ZSPR-20187', desc:'Gasket Set DN100',        plant:'P003', stock:920, demand:200, excess:720, excessVal:288000, abc:'C', action:'Freeze PR' },
      { mat:'ZSPN-30041', desc:'Seal Kit Pump Type A',    plant:'P001', stock:340, demand:80,  excess:260, excessVal:260000, abc:'B', action:'Redistribute to P002' },
      { mat:'ZSPR-40092', desc:'Filter Element 10 Mic',   plant:'P005', stock:600, demand:150, excess:450, excessVal:225000, abc:'C', action:'Review for disposal' },
      { mat:'ZSPN-50013', desc:'V-Belt B-Section 1000mm', plant:'P002', stock:280, demand:60,  excess:220, excessVal:176000, abc:'C', action:'Freeze PR' },
      { mat:'ZSPR-10088', desc:'Oil Seal 45x65x10',       plant:'P001', stock:500, demand:100, excess:400, excessVal:160000, abc:'C', action:'Review for disposal' },
      { mat:'ZSPN-20034', desc:'Coupling Flexible 50mm',  plant:'P003', stock:190, demand:40,  excess:150, excessVal:150000, abc:'B', action:'Redistribute' },
      { mat:'ZSPR-30077', desc:'Impeller Pump 150mm',     plant:'P004', stock:45,  demand:8,   excess:37,  excessVal:148000, abc:'B', action:'Review lead time' }
    ]
  },
  v3: {
    byCriticality: {
      labels: ['VITAL-Zero Stock','VITAL-Below ROP','INSURANCE-Zero','INSURANCE-Below ROP','DESIRABLE-Below ROP'],
      counts: [16,24,8,28,17]
    },
    topLines: [
      { mat:'ZSPR-11001', desc:'Turbine Bearing Main',     plant:'P001', crit:'VITAL',     stock:0, rop:2, lt:45,  risk:'CRITICAL' },
      { mat:'ZSPR-11042', desc:'Boiler Feed Pump Seal',    plant:'P001', crit:'VITAL',     stock:0, rop:3, lt:60,  risk:'CRITICAL' },
      { mat:'ZSPN-21003', desc:'HT Motor Winding Kit',     plant:'P002', crit:'VITAL',     stock:0, rop:1, lt:90,  risk:'CRITICAL' },
      { mat:'ZSPR-31007', desc:'Control Valve Actuator',   plant:'P003', crit:'VITAL',     stock:1, rop:3, lt:75,  risk:'HIGH' },
      { mat:'ZSPN-41022', desc:'Transformer Bushing 11kV', plant:'P004', crit:'INSURANCE', stock:0, rop:2, lt:120, risk:'CRITICAL' },
      { mat:'ZSPR-51009', desc:'Compressor Valve Plate',   plant:'P005', crit:'VITAL',     stock:0, rop:4, lt:45,  risk:'CRITICAL' },
      { mat:'ZSPN-61004', desc:'DCS I/O Module Type B',    plant:'P006', crit:'VITAL',     stock:0, rop:2, lt:60,  risk:'CRITICAL' },
      { mat:'ZSPR-11088', desc:'Safety Relief Valve 2in',  plant:'P001', crit:'INSURANCE', stock:1, rop:3, lt:30,  risk:'HIGH' }
    ]
  },
  v4: {
    byPlant: {
      labels: ['P001','P002','P003','P004','P005','P006'],
      nmi:    [18,12,14,7,7,4],
      smi:    [22,15,16,9,10,6]
    },
    topLines: [
      { mat:'ZSPR-10201', desc:'Pump Casing 100mm',       plant:'P001', flag:'NMI', lastCons:'Never',    stock:12, val:240000, abc:'C', rec:'Dispose / Transfer' },
      { mat:'ZSPN-20301', desc:'Motor Coupling 40mm',     plant:'P002', flag:'NMI', lastCons:'Never',    stock:8,  val:160000, abc:'C', rec:'Dispose / Transfer' },
      { mat:'ZSPR-30401', desc:'Valve Body Gate 3in',     plant:'P003', flag:'SMI', lastCons:'Jan 2025', stock:20, val:400000, abc:'B', rec:'Review reorder policy' },
      { mat:'ZSPN-40101', desc:'Bearing Housing 80mm',    plant:'P004', flag:'NMI', lastCons:'Never',    stock:6,  val:120000, abc:'C', rec:'Dispose' },
      { mat:'ZSPR-50201', desc:'Impeller Wear Ring',      plant:'P005', flag:'SMI', lastCons:'Mar 2025', stock:15, val:300000, abc:'B', rec:'Reduce reorder qty' },
      { mat:'ZSPN-10501', desc:'Lube Oil Additive 20L',   plant:'P001', flag:'SMI', lastCons:'Jun 2025', stock:30, val:180000, abc:'C', rec:'Freeze PR' },
      { mat:'ZSPR-20601', desc:'Gland Packing 12mm',      plant:'P002', flag:'NMI', lastCons:'Never',    stock:50, val:75000,  abc:'C', rec:'Dispose' },
      { mat:'ZSPN-30701', desc:'Pressure Gauge 0-10 bar', plant:'P003', flag:'SMI', lastCons:'Feb 2025', stock:18, val:72000,  abc:'C', rec:'Freeze PR' }
    ]
  },
  v5: {
    byPriority: { labels: ['P1 Critical','P2 High','P3 Medium','P4 Low'], counts: [16,28,31,18] },
    topLines: [
      { pri:'P1', mat:'ZSPR-11001', desc:'Turbine Bearing Main',     plant:'P001', qty:3, prDate:'2026-10-18', lt:45,  crit:'VITAL',     basis:'Zero stock - VITAL' },
      { pri:'P1', mat:'ZSPR-11042', desc:'Boiler Feed Pump Seal',    plant:'P001', qty:5, prDate:'2026-10-18', lt:60,  crit:'VITAL',     basis:'Zero stock - VITAL' },
      { pri:'P1', mat:'ZSPN-21003', desc:'HT Motor Winding Kit',     plant:'P002', qty:2, prDate:'2026-10-18', lt:90,  crit:'VITAL',     basis:'Zero stock - long LT' },
      { pri:'P1', mat:'ZSPR-51009', desc:'Compressor Valve Plate',   plant:'P005', qty:6, prDate:'2026-10-18', lt:45,  crit:'VITAL',     basis:'Zero stock - VITAL' },
      { pri:'P1', mat:'ZSPN-61004', desc:'DCS I/O Module Type B',    plant:'P006', qty:2, prDate:'2026-10-18', lt:60,  crit:'VITAL',     basis:'Zero stock - VITAL' },
      { pri:'P2', mat:'ZSPR-31007', desc:'Control Valve Actuator',   plant:'P003', qty:4, prDate:'2026-10-25', lt:75,  crit:'VITAL',     basis:'Below ROP - long LT' },
      { pri:'P2', mat:'ZSPN-41022', desc:'Transformer Bushing 11kV', plant:'P004', qty:3, prDate:'2026-10-20', lt:120, crit:'INSURANCE', basis:'Zero stock - 120d LT' },
      { pri:'P2', mat:'ZSPR-11088', desc:'Safety Relief Valve 2in',  plant:'P001', qty:4, prDate:'2026-10-28', lt:30,  crit:'INSURANCE', basis:'Below ROP' }
    ]
  },
  v6: {
    donut: { labels: ['Enable MRP','Keep Manual','Review','Disable MRP'], counts: [18,22,9,5] },
    top5: [
      { mat:'ZSPR-10042', desc:'Bearing Assembly 6205',   plant:'P001', mrpType:'ND', cv:0.18, trend:'STABLE',    rec:'Enable MRP (VB)', rationale:'Low CV, steady demand' },
      { mat:'ZSPN-20187', desc:'Gasket Set DN100',        plant:'P003', mrpType:'ND', cv:0.22, trend:'STABLE',    rec:'Enable MRP (VB)', rationale:'Predictable consumption' },
      { mat:'ZSPR-30041', desc:'Seal Kit Pump Type A',    plant:'P001', mrpType:'VB', cv:0.41, trend:'DECLINING', rec:'Review ROP/ROQ',   rationale:'CV rising, demand falling' },
      { mat:'ZSPN-40092', desc:'Filter Element 10 Mic',   plant:'P005', mrpType:'ND', cv:0.19, trend:'RISING',    rec:'Enable MRP (VB)', rationale:'Demand increasing' },
      { mat:'ZSPR-50013', desc:'V-Belt B-Section 1000mm', plant:'P002', mrpType:'VB', cv:0.68, trend:'NONE',      rec:'Disable MRP',     rationale:'No consumption 12m' }
    ],
    allLines: [
      { mat:'ZSPR-10042', desc:'Bearing Assembly 6205',   plant:'P001', mrpType:'ND', cv:0.18, trend:'STABLE',    rec:'Enable MRP (VB)', rationale:'Low CV, steady demand' },
      { mat:'ZSPN-20187', desc:'Gasket Set DN100',        plant:'P003', mrpType:'ND', cv:0.22, trend:'STABLE',    rec:'Enable MRP (VB)', rationale:'Predictable consumption' },
      { mat:'ZSPR-30041', desc:'Seal Kit Pump Type A',    plant:'P001', mrpType:'VB', cv:0.41, trend:'DECLINING', rec:'Review ROP/ROQ',   rationale:'CV rising, demand falling' },
      { mat:'ZSPN-40092', desc:'Filter Element 10 Mic',   plant:'P005', mrpType:'ND', cv:0.19, trend:'RISING',    rec:'Enable MRP (VB)', rationale:'Demand increasing' },
      { mat:'ZSPR-50013', desc:'V-Belt B-Section 1000mm', plant:'P002', mrpType:'VB', cv:0.68, trend:'NONE',      rec:'Disable MRP',     rationale:'No consumption 12m' },
      { mat:'ZSPN-11001', desc:'Turbine Bearing Main',    plant:'P001', mrpType:'ND', cv:0.55, trend:'STABLE',    rec:'Keep Manual',     rationale:'VITAL - manual oversight' },
      { mat:'ZSPR-21003', desc:'HT Motor Winding Kit',    plant:'P002', mrpType:'ND', cv:0.70, trend:'NONE',      rec:'Keep Manual',     rationale:'VITAL - irregular demand' },
      { mat:'ZSPN-31007', desc:'Control Valve Actuator',  plant:'P003', mrpType:'ND', cv:0.60, trend:'STABLE',    rec:'Keep Manual',     rationale:'VITAL - long LT' }
    ]
  },
  v7: {
    byPlant: { labels: ['P001','P002','P003','P004','P005','P006'], pairs: [62,44,48,28,24,9] },
    topPairs: [
      { matA:'ZSPR-10042', matB:'ZSPR-10043', descA:'Bearing Assembly 6205',    descB:'Bearing Assy 6205 SKF',   plant:'P001', group:'Mechanical',     sim:96, action:'Merge - keep A' },
      { matA:'ZSPN-20187', matB:'ZSPN-20188', descA:'Gasket Set DN100',          descB:'Gasket Set 100mm Dia',    plant:'P003', group:'Mechanical',     sim:94, action:'Merge - keep A' },
      { matA:'ZSPR-30041', matB:'ZSPR-30042', descA:'Seal Kit Pump Type A',      descB:'Seal Kit Pump-A',         plant:'P001', group:'Mechanical',     sim:92, action:'Merge - keep A' },
      { matA:'ZSPN-40092', matB:'ZSPN-40093', descA:'Filter Element 10 Micron',  descB:'Filter Elem 10 Mic',      plant:'P005', group:'Instrumentation', sim:91, action:'Merge - keep A' },
      { matA:'ZSPR-50013', matB:'ZSPR-50014', descA:'V-Belt B-Section 1000mm',   descB:'V Belt B1000',            plant:'P002', group:'Mechanical',     sim:89, action:'Review before merge' },
      { matA:'ZSPN-60044', matB:'ZSPN-60045', descA:'Oil Seal 45x65x10',         descB:'Oil Seal 45-65-10mm',     plant:'P001', group:'Mechanical',     sim:95, action:'Merge - keep A' },
      { matA:'ZSPR-70021', matB:'ZSPR-70022', descA:'Coupling Flexible 50mm',    descB:'Flex Coupling 50mm',      plant:'P003', group:'Mechanical',     sim:88, action:'Review before merge' },
      { matA:'ZSPN-80011', matB:'ZSPN-80012', descA:'Pressure Gauge 0-10 bar',   descB:'Press Gauge 0-10bar',     plant:'P003', group:'Instrumentation', sim:93, action:'Merge - keep A' }
    ]
  }
};
