// File: /api/capital/index.js

export default function handler(req, res) {
  const now = new Date().toISOString();

  const capitalInflow = 725.4;
  const outflow = 210;
  const projectedCashFlow = capitalInflow - outflow;

  const roiTrades = [
    { symbol: "PLTR", roi: 0.226, type: "equity" },
    { symbol: "XLI Call", roi: 1.46, type: "option" },
    { symbol: "ANET", roi: -0.09, type: "equity" }
  ];
  const avgROI = roiTrades.reduce((acc, t) => acc + t.roi, 0) / roiTrades.length;

  const allocation = {
    growth: 931.20,
    stability: 931.20,
    options: 532.10,
    crypto: 266.05
  };

  const response = {
    flowmapNet: {
      status: "real-time-snapshot",
      projectedCashFlow,
      netFlowTrend: projectedCashFlow > 0 ? "positive" : "negative",
      sectorMap: {
        tech: "inflow",
        financials: "flat",
        consumer: "pullback",
        energy: "inflow",
        industrials: "outflow"
      },
      flowMomentum: "High-to-Tech, Low-to-Consumer",
      timestamp: now
    },
    trueROIReactor: {
      status: "roi-evaluation-complete",
      averageROI: avgROI.toFixed(3),
      topPerformer: roiTrades.reduce((a, b) => (a.roi > b.roi ? a : b)),
      underperformer: roiTrades.reduce((a, b) => (a.roi < b.roi ? a : b)),
      roiDistribution: roiTrades,
      timestamp: now
    },
    portfolioAllocate: {
      status: "allocation-deployed",
      capitalTotal: 3100,
      reserve: 145.36,
      capitalDeployment: allocation,
      strategy: "Balanced Compounding
