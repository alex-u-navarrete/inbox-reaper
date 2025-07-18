const express = require('express');
const { google } = require('googleapis');
const router = express.Router();

// Middleware to check authentication
const requireAuth = (req, res, next) => {
  if (!req.session.tokens || !req.session.tokens.access_token) {
    return res.status(401).json({ error: 'Not authenticated. Please connect Gmail first.' });
  }
  
  // Set up OAuth client with stored tokens
  req.oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
  req.oauth2Client.setCredentials(req.session.tokens);
  
  next();
};

// Test Gmail connection
router.get('/test', requireAuth, async (req, res) => {
  try {
    const gmail = google.gmail({ version: 'v1', auth: req.oauth2Client });
    
    // Get user profile to verify connection
    const profile = await gmail.users.getProfile({ userId: 'me' });
    
    console.log('✅ Gmail connection test successful');
    console.log('📧 Email address:', profile.data.emailAddress);
    console.log('📊 Total messages:', profile.data.messagesTotal);

    res.json({
      success: true,
      emailAddress: profile.data.emailAddress,
      messagesTotal: profile.data.messagesTotal,
      threadsTotal: profile.data.threadsTotal
    });

  } catch (error) {
    console.error('❌ Gmail test error:', error);
    res.status(500).json({ error: 'Failed to connect to Gmail API' });
  }
});

// Scan for subscription emails
router.get('/scan', requireAuth, async (req, res) => {
  try {
    const gmail = google.gmail({ version: 'v1', auth: req.oauth2Client });
    
    console.log('🔍 Starting Gmail scan for subscription emails...');
    
    // Get messages with potential subscription indicators
    const listResponse = await gmail.users.messages.list({
      userId: 'me',
      maxResults: 50, // Start with 50 for testing
      q: 'unsubscribe OR newsletter OR subscription OR "mailing list"'
    });

    if (!listResponse.data.messages) {
      return res.json({ 
        subscriptions: [], 
        totalScanned: 0,
        message: 'No subscription emails found' 
      });
    }

    console.log(`🔍 Found ${listResponse.data.messages.length} potential subscription emails`);

    // Get message details for each message
    const subscriptions = [];
    const messagesToCheck = listResponse.data.messages.slice(0, 20); // Limit for testing

    for (const message of messagesToCheck) {
      try {
        const messageDetail = await gmail.users.messages.get({
          userId: 'me',
          id: message.id,
          format: 'metadata',
          metadataHeaders: ['From', 'Subject', 'List-Unsubscribe', 'Date']
        });

        const headers = messageDetail.data.payload.headers;
        const fromHeader = headers.find(h => h.name === 'From');
        const subjectHeader = headers.find(h => h.name === 'Subject');
        const unsubscribeHeader = headers.find(h => h.name === 'List-Unsubscribe');
        const dateHeader = headers.find(h => h.name === 'Date');

        if (unsubscribeHeader) {
          subscriptions.push({
            id: message.id,
            from: fromHeader?.value || 'Unknown',
            subject: subjectHeader?.value || 'No Subject',
            date: dateHeader?.value || 'Unknown',
            unsubscribeUrl: unsubscribeHeader.value,
            threadId: messageDetail.data.threadId
          });
        }

      } catch (msgError) {
        console.error(`❌ Error processing message ${message.id}:`, msgError.message);
      }
    }

    console.log(`✅ Found ${subscriptions.length} emails with unsubscribe headers`);

    res.json({
      success: true,
      subscriptions,
      totalScanned: messagesToCheck.length,
      totalFound: subscriptions.length,
      message: `Found ${subscriptions.length} subscription emails`
    });

  } catch (error) {
    console.error('❌ Gmail scan error:', error);
    res.status(500).json({ error: 'Failed to scan Gmail for subscriptions' });
  }
});

// Delete specific emails by IDs
router.post('/delete', requireAuth, async (req, res) => {
  try {
    const { messageIds } = req.body;
    
    if (!messageIds || !Array.isArray(messageIds)) {
      return res.status(400).json({ error: 'messageIds array is required' });
    }

    const gmail = google.gmail({ version: 'v1', auth: req.oauth2Client });
    
    console.log(`🗑️ Deleting ${messageIds.length} emails...`);
    
    // Delete messages in batch
    const batchDelete = await gmail.users.messages.batchDelete({
      userId: 'me',
      requestBody: {
        ids: messageIds
      }
    });

    console.log(`✅ Successfully deleted ${messageIds.length} emails`);

    res.json({
      success: true,
      deletedCount: messageIds.length,
      message: `Successfully deleted ${messageIds.length} emails`
    });

  } catch (error) {
    console.error('❌ Gmail delete error:', error);
    res.status(500).json({ error: 'Failed to delete emails' });
  }
});

module.exports = router; 