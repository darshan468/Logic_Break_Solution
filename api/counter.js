// Vercel Serverless Function: /api/counter
// Handles GET /api/counter and POST /api/counter (increment)

let inMemoryCount = 15;

export default function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Strict anti-cache headers to ensure cross-device consistency
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    inMemoryCount += 1;
    return res.status(200).json({ success: true, count: inMemoryCount });
  }

  // GET: Return current count
  return res.status(200).json({ success: true, count: inMemoryCount });
}
