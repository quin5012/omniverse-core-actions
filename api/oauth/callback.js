// File: /api/oauth/callback.js

export default async function handler(req, res) {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Missing OAuth code from Schwab." });
  }

  const openaiRedirectUrl = `https://chat.openai.com/aip/g-c0e6132ffff20a50e4f455f9ebf411fb9257df60/oauth/callback`;

  const redirectUrl = new URL(openaiRedirectUrl);
  redirectUrl.searchParams.set("code", code);
  if (state) redirectUrl.searchParams.set("state", state);

  return res.redirect(302, redirectUrl.toString());
}
