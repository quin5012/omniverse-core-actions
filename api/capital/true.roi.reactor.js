export default async function handler(req, res) {
  const trades = [
    { symbol: "PLTR", roi: 0.226, type: "equity" },
    { symbol: "XLI Call", roi: 1.46, type: "option" },
    { symbol: "ANET", roi: -0.09, type: "equity" }
  ];

  const averageROI = trades.reduce((acc, trade) => acc + trade.roi, 0) / trades.length;

  res.status(200).json({
    status: "roi-evaluation-complete",
    averageROI: averageROI.toFixed(3),
    topPerformer: trades.reduce((a, b) => (a.roi > b.roi ? a : b)),
    underperformer: trades.reduce((a, b) => (a.roi < b.roi ? a : b)),
    roiDistribution: trades
  });
}
