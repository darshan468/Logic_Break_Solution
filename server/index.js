import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure database directory and files exist
const dbFolder = path.join(__dirname, '../database');
const dbFile = path.join(dbFolder, 'projects.json');
const csvFile = path.join(dbFolder, 'projects.csv');

if (!fs.existsSync(dbFolder)) {
  fs.mkdirSync(dbFolder, { recursive: true });
}

if (!fs.existsSync(dbFile)) {
  fs.writeFileSync(dbFile, JSON.stringify([], null, 2));
}

// Function to update/generate CSV file formatted for Google Sheets / Excel
const updateCSVDatabase = (bookings) => {
  const headers = ['ID', 'Timestamp', 'Name', 'Phone', 'Email', 'Service', 'Budget', 'Message'];
  
  const escapeCSV = (str) => {
    if (!str) return '""';
    const cleanStr = String(str).replace(/"/g, '""');
    return `"${cleanStr}"`;
  };

  const rows = bookings.map((b) => [
    escapeCSV(b.id),
    escapeCSV(b.timestamp),
    escapeCSV(b.name),
    escapeCSV(b.phone || 'N/A'),
    escapeCSV(b.email),
    escapeCSV(b.service),
    escapeCSV(b.budget || 'N/A'),
    escapeCSV(b.message)
  ].join(','));

  const csvContent = [headers.join(','), ...rows].join('\n');
  fs.writeFileSync(csvFile, csvContent, 'utf8');
};

// Initialize CSV if empty
if (!fs.existsSync(csvFile)) {
  const initialData = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
  updateCSVDatabase(initialData);
}

// Endpoint to receive project bookings
app.post('/api/book-project', (req, res) => {
  try {
    const bookingData = req.body;
    
    // Read existing database
    const fileData = fs.readFileSync(dbFile, 'utf8');
    const db = JSON.parse(fileData);
    
    // Add new booking with timestamp and ID
    const newBooking = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...bookingData
    };
    
    db.push(newBooking);
    
    // Write JSON database
    fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));

    // Write CSV (Google Sheets format) database
    updateCSVDatabase(db);
    
    res.status(201).json({ 
      success: true, 
      message: 'Project booked successfully! Saved to JSON and Google Sheets CSV format.',
      csvPath: csvFile 
    });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ success: false, message: 'Failed to save booking.' });
  }
});

// Endpoint to view/download CSV (Google Sheets format) file
app.get('/api/projects.csv', (req, res) => {
  if (fs.existsSync(csvFile)) {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="logic_break_projects.csv"');
    return res.sendFile(csvFile);
  }
  res.status(404).send('CSV database file not found.');
});

app.listen(PORT, () => {
  console.log(`Backend server is running at http://localhost:${PORT}`);
  console.log(`Database folder is located at: ${dbFolder}`);
  console.log(`Google Sheets CSV file: ${csvFile}`);
});
