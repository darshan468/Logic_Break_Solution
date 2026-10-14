// Vercel Serverless Function: /api/counter/increment
// Handles POST /api/counter/increment

import counterHandler from '../counter.js';

export default function handler(req, res) {
  req.method = 'POST';
  return counterHandler(req, res);
}
