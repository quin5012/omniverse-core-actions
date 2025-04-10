export default async function handler(req, res) {
  const volatilityIndex = 27.5;
  const marketDrawdown = 0.042;
  const hedgeStrategy = volatilityIndex > 25 ? "Long VIX Futures + Inverse ETFs" : "Passive Risk Overlay";

  res.status(200).json({
    status: "active",
    riskScore: volatilityIndex * 1.5,
    hedgeStrategy,
    capitalShielded: marketDrawdown > 0.03 ? "32%" : "10%",
    triggerThreshold: "VIX > 26 or SPX < -5%"
  });
}
