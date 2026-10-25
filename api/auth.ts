import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { passcode } = req.body || {};
  if (passcode === 'nova2026') {
    return res.status(200).json({
      success: true,
      token: 'nova_jwt_token_verified_session',
      role: 'studio_director',
    });
  }

  return res.status(401).json({
    success: false,
    error: 'Noto‘g‘ri studiya paroli.',
  });
}
