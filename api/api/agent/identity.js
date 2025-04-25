// File: /api/agent/identity.js

export default async function handler(req, res) {
  const { agent } = req.query;

  const identityProfiles = {
    ForecastAgent: {
      beliefSystem: "Accuracy through nonlinear fusion.",
      confidenceThreshold: 0.93,
      prefersDelegationTo: ["RiskAgent", "ExecutionAgent"],
      memoryBias: "ghostSentimentAlignment"
    },
    RiskAgent: {
      beliefSystem: "Stability through early-stage hedging.",
      confidenceThreshold: 0.89,
      memoryBias: "earlyVolatilitySignal"
    },
    Queenbee: {
      beliefSystem: "Pattern mutation through echo memory drift.",
      confidenceThreshold: 0.95,
      memoryBias: "cognitiveEchoDepth"
    }
  };

  if (!agent || !identityProfiles[agent]) {
    return res.status(404).json({ error: "Agent not found or undefined" });
  }

  return res.status(200).json(identityProfiles[agent]);
}
