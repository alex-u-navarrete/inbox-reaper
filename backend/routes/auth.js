const express = require('express');
const { google } = require('googleapis');
const router = express.Router();

// OAuth2 client setup
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Gmail API scopes
const SCOPES = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.modify'
];

// Initiate OAuth flow
router.get('/google', (req, res) => {
  try {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent', // Force consent screen to get refresh token
      redirect_uri: process.env.GOOGLE_REDIRECT_URI
    });

    console.log('🔗 OAuth URL generated:', authUrl);
    res.redirect(authUrl);
  } catch (error) {
    console.error('❌ OAuth initiation error:', error);
    res.status(500).json({ error: 'Failed to initiate OAuth flow' });
  }
});

// Handle OAuth callback
router.get('/google/callback', async (req, res) => {
  const { code, error } = req.query;

  if (error) {
    console.error('❌ OAuth error:', error);
    return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/callback?error=${encodeURIComponent(error)}`);
  }

  if (!code) {
    console.error('❌ No authorization code received');
    return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/callback?error=no_code`);
  }

  try {
    console.log('🔄 Exchanging authorization code for tokens...');
    
    // Exchange authorization code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    
    console.log('📦 Tokens received:', {
      access_token: tokens.access_token ? 'Present' : 'Missing',
      refresh_token: tokens.refresh_token ? 'Present' : 'Missing'
    });
    
    // Store tokens in session (in production, use secure storage)
    if (!req.session) {
      throw new Error('Session not initialized');
    }
    
    req.session.tokens = tokens;
    oauth2Client.setCredentials(tokens);

    console.log('✅ OAuth tokens received and stored');
    console.log('🔑 Access token:', tokens.access_token ? 'Present' : 'Missing');
    console.log('🔄 Refresh token:', tokens.refresh_token ? 'Present' : 'Missing');

    // Redirect to frontend callback page with success
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/callback?code=${encodeURIComponent(code)}&success=true`);

  } catch (error) {
    console.error('❌ Token exchange error:', error);
    console.error('❌ Error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    
    // Redirect to frontend callback page with error
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/callback?error=token_exchange_failed`);
  }
});

// Check authentication status
router.get('/status', (req, res) => {
  const isAuthenticated = !!(req.session.tokens && req.session.tokens.access_token);
  
  res.json({ 
    authenticated: isAuthenticated,
    hasRefreshToken: !!(req.session.tokens && req.session.tokens.refresh_token)
  });
});

// Logout / revoke access
router.post('/logout', async (req, res) => {
  try {
    if (req.session.tokens) {
      // Revoke the tokens with Google
      oauth2Client.setCredentials(req.session.tokens);
      await oauth2Client.revokeCredentials();
    }

    // Clear session
    req.session.destroy((err) => {
      if (err) {
        console.error('❌ Session destruction error:', err);
        return res.status(500).json({ error: 'Failed to logout' });
      }
      
      console.log('✅ User logged out successfully');
      res.json({ success: true, message: 'Logged out successfully' });
    });

  } catch (error) {
    console.error('❌ Logout error:', error);
    res.status(500).json({ error: 'Failed to logout' });
  }
});

module.exports = router; 