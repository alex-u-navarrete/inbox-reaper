const express = require('express');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const gmailRoutes = require('./routes/gmail');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Session configuration for OAuth state management
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-session-secret-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Routes
app.use('/auth', authRoutes);
app.use('/gmail', gmailRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Inbox Reaper Backend is running' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Inbox Reaper API',
    endpoints: {
      health: '/health',
      auth: '/auth/google',
      gmail_test: '/gmail/test',
      gmail_scan: '/gmail/scan'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Inbox Reaper Backend running on http://localhost:${PORT}`);
  console.log(`📧 Ready for Gmail OAuth2 integration`);
  console.log(`🔗 Start OAuth flow: http://localhost:${PORT}/auth/google`);
}); 