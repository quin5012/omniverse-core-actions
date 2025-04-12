export default async function handler(req, res) {
  const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY; // stored securely in Vercel
  const { path = "", ...query } = req.query;

  if (!path) return res.status(400).json({ error: "Missing path" });

  // Append token to outgoing query
  const url = new URL(`https://finnhub.io/api/v1/${path}`);
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.set(key, value);
  }
  url.searchParams.set("token", FINNHUB_API_KEY);

  try {
    const response = await fetch(url.toString());
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Finnhub proxy error", details: err.message });
  }
}
