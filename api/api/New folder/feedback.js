// File: /api/ghost/feedback.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST supported" });
  }

  const { symbol, scenario, expectedGain, pathId } = req.body;

  if (!symbol || !scenario || expectedGain == null || !pathId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Log ghost path feedback
  const feedback = {
    type: "ghostPathInjection",
    symbol,
    scenario,
    expectedGain,
    pathId,
    timestamp: new Date().toISOString()
  };

  return res.status(200).json({ status: "injected", data: feedback });
}
