// File: /api/capital/index.js

export default function handler(req, res) {
  const action = req.query.action;
  const now = new Date().toISOString();

  const flowmapNet = {
    status: "real-time-snapshot",
    projectedCashFlow: 725.4 - 210,
    netFlowTrend: "positive",
    sectorMap: {
      tech: "inflow",
      financials: "flat",
      consumer: "pullback",
      energy: "inflow",
      industrials: "outflow"
    },
    flowMomentum: "High-to-Tech, Low-to-Consumer",
    timestamp: now
  };

  const roiTrades = [
    { symbol: "PLTR", roi: 0.226, type: "equity" },
    { symbol: "XLI Call", roi: 1.46, type: "option" },
    { symbol: "ANET", roi: -0.09, type: "equity" }
  ];

  const trueRoiReactor = {
    status: "roi-evaluation-complete",
    averageROI: (
      roiTrades.reduce((acc, t) => acc + t.roi, 0) / roiTrades.length
    ).toFixed(3),
    topPerformer: roiTrades.reduce((a, b) => (a.roi > b.roi ? a : b)),
    underperformer: roiTrades.reduce((a, b) => (a.roi < b.roi ? a : b)),
    roiDistribution: roiTrades,
    timestamp: now
  };

  const portfolioAllocate = {
    status: "allocation-deployed",
    capitalTotal: 3100,
    reserve: 145.36,
    capitalDeployment: {
      growth: 931.20,
      stability: 931.20,
      options: 532.10,
      crypto: 266.05
    },
    strategy: "Balanced Compounding Grid v3.0",
    timestamp: now
  };

  const map = {
    flowmap: flowmapNet,
    roi: trueRoiReactor,
    allocate: portfolioAllocate
  };

  if (!map[action]) {
    return res.status(400).json({ error: "Missing or invalid action: use flowmap, roi, or allocate" });
  }

  res.status(200).json(map[action]);
}
