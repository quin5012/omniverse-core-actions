export default async function handler(req, res) {
  const dailyLoss = 0.018;
  const drawdownLimit = 0.05;
  const drawdownStatus = dailyLoss > drawdownLimit ? "halt-trading" : "active-monitoring";

  res.status(200).json({
    status: drawdownStatus,
    currentDrawdown: dailyLoss,
    protocolTrigger: drawdownLimit,
    capitalLockdown: drawdownStatus === "halt-trading" ? "74%" : "20%",
    contingency: "Switch to LEAPS hedging + cash parking"
  });
}
