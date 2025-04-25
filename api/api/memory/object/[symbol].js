// File: /api/memory/object/[symbol].js

export default async function handler(req, res) {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ error: "Symbol required" });
  }

  // Placeholder memory profile
  const memoryMock = {
    symbol,
    trades: [],
    regretIndex: 0.18,
    sentimentHistory: [],
    ghostSimulations: [],
    agentLoops: [],
    lastUpdated: new Date().toISOString()
  };

  return res.status(200).json(memoryMock);
}
