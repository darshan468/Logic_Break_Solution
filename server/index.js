import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Counter storage file configuration (lightweight server-side state, no database)
const counterFile = path.join(__dirname, 'counter.json');
const INITIAL_COUNT = 15;

// Helper to read counter from storage
const readCounter = () => {
  try {
    if (fs.existsSync(counterFile)) {
      const data = JSON.parse(fs.readFileSync(counterFile, 'utf8'));
      if (typeof data.count === 'number' && !isNaN(data.count)) {
        return data.count;
      }
    }
  } catch (error) {
    console.error('Error reading counter file:', error);
  }
  // Initialize with default starting count
  writeCounter(INITIAL_COUNT);
  return INITIAL_COUNT;
};

// Helper to write counter to storage
const writeCounter = (count) => {
  try {
    fs.writeFileSync(counterFile, JSON.stringify({ count, updatedAt: new Date().toISOString() }, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing counter file:', error);
  }
};

// GET /api/counter - Retrieve the current live client count
app.get('/api/counter', (req, res) => {
  const currentCount = readCounter();
  res.json({ success: true, count: currentCount });
});

// POST /api/counter/increment - Increment live client count by 1 upon form submission
app.post('/api/counter/increment', (req, res) => {
  try {
    let currentCount = readCounter();
    currentCount += 1;
    writeCounter(currentCount);
    res.json({ success: true, count: currentCount });
  } catch (error) {
    console.error('Error incrementing counter:', error);
    res.status(500).json({ success: false, message: 'Failed to increment counter' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Logic Break Counter Service running on port ${PORT}`);
  console.log(`Live Counter storage: ${counterFile}`);
});
