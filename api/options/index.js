// File: /api/options/index.js

export default function handler(req, res) {
  const action = req.query.action || req.body?.action;

  if (!['leap', 'neuron'].includes(action)) {
    return res.status(400).json({ error: "Invalid action. Use 'leap' or 'neuron'" });
  }

  const now = new Date().toISOString();

  if (action === 'leap') {
    const { symbol = "PLTR", forecast = "bullish", memoryProfile = "HighConfluence" } = req.body || {};

    return res.status(200).json({
      symbol,
      optimizedTrade: {
        type: "long_call",
        strike: "ITM",
        expiry: "2027-01-15",
        premium: "$4.25",
        multiplierLeg: {
          type: "ratio_diagonal",
          alignment: "earnings run-up",
          trigger: "OmniFib 5:3"
        }
      },
      confidenceScore: 0.96,
      volatilitySignal: "IV Crush Recovery",
      entryZone: "Custom Legacy 420EMA bounce",
      runtimeAlignment: "high growth phase",
      timestamp: now
    });
  }

  if (action === 'neuron') {
    const { symbol = "AAPL", greeks, memory, volProfile } = req.body || {};

    return res.status(200).json({
      symbol,
      optimizedTrade: {
        type: "credit_spread",
        legs: [
          { strike: 100, type: "put", expiry: "2026-01-16", action: "sell" },
          { strike: 95, type: "put", expiry: "2026-01-16", action: "buy" }
        ],
        allocation: "7% capital chunk"
      },
      confidenceScore: 0.92,
      volatilitySignal: "compression_reversal",
      runtimeAlignment: "bullish / post-consolidation",
      timestamp: now
    });
  }
}
