// File: /api/risk/index.js
export default function handler(req, res) {
  const { action } = req.query;

  const responses = {
    metahedge: {
      status: "active",
      riskScore: 27.5 * 1.5,
      hedgeStrategy: "Long VIX Futures + Inverse ETFs",
      capitalShielded: "32%",
      triggerThreshold: "VIX > 26 or SPX < -5%"
    },
    drawdown: {
      status: "active-monitoring",
      currentDrawdown: 0.018,
      protocolTrigger: 0.05,
      capitalLockdown: "20%",
      contingency: "Switch to LEAPS hedging + cash parking"
    }
  };

  if (!responses[action]) {
    return res.status(400).json({ error: 'Invalid or missing action parameter. Use `metahedge` or `drawdown`.' });
  }

  return res.status(200).json(responses[action]);
}
