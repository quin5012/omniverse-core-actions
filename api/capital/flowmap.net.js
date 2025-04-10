export default async function handler(req, res) {
  const capitalInflow = 725.4;
  const outflow = 210;
  const projectedCashFlow = capitalInflow - outflow;

  const sectors = {
    tech: "inflow",
    financials: "flat",
    consumer: "pullback",
    energy: "inflow",
    industrials: "outflow"
  };

  res.status(200).json({
    status: "real-time-snapshot",
    projectedCashFlow,
    netFlowTrend: projectedCashFlow > 0 ? "positive" : "negative",
    sectorMap: sectors,
    flowMomentum: "High-to-Tech, Low-to-Consumer"
  });
}
