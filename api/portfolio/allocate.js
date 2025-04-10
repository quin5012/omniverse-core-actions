export default async function handler(req, res) {
  const capital = 3100;
  const reserve = 145.36;
  const activeCapital = capital - reserve;

  const allocation = {
    growth: activeCapital * 0.35,
    stability: activeCapital * 0.35,
    options: activeCapital * 0.2,
    crypto: activeCapital * 0.1
  };

  res.status(200).json({
    status: "allocation-deployed",
    capitalTotal: capital,
    reserve,
    capitalDeployment: allocation,
    strategy: "Balanced Compounding Grid v3.0"
  });
}
