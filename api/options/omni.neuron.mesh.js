export default function handler(req, res) {
  const { symbol, greeks, memory, volProfile } = req.body;

  const optimizedTrade = {
    type: "credit_spread",
    legs: [
      { strike: 100, type: "put", expiry: "2026-01-16", action: "sell" },
      { strike: 95, type: "put", expiry: "2026-01-16", action: "buy" }
    ],
    allocation: "7% capital chunk"
  };

  res.status(200).json({
    symbol,
    optimizedTrade,
    confidenceScore: 0.92,
    volatilitySignal: "compression_reversal",
    runtimeAlignment: "bullish / post-consolidation"
  });
}
