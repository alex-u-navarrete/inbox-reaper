# Product Requirements Document (PRD)
## Inbox Reaper - Personal Email Subscription Manager

---

## Summary

**Inbox Reaper** is a personal standalone web application designed to help users regain control of their Gmail inbox by automatically detecting, managing, and bulk-removing unwanted email subscriptions. The app connects to a user's Gmail account via OAuth, scans for emails with unsubscribe capabilities, and provides a simple dashboard to either unsubscribe from or delete all emails from specific senders with one click.

**Target User:** Personal use (single user - the developer)  
**Core Value Proposition:** Transform hours of manual email cleanup into minutes of automated subscription management.

---

## Key Features

### Core Functionality
1. **Gmail Integration**
   - OAuth 2.0 authentication with Gmail
   - Read-only inbox scanning capabilities
   - Email deletion and modification permissions

2. **Subscription Detection**
   - Scan inbox for emails containing "List-Unsubscribe" headers
   - Identify promotional/newsletter emails automatically
   - Group emails by sender domain and sender address

3. **Management Dashboard**
   - Visual list of detected subscription senders
   - Email count and last received date per sender
   - Preview of email subjects from each sender
   - Toggle switches for bulk actions

4. **Bulk Actions**
   - **Unsubscribe:** Automatically follow "List-Unsubscribe" header links
   - **Delete All:** Remove all emails from a specific sender via Gmail API
   - **Keep:** Mark sender as trusted (exclude from future scans)

5. **Safety Features**
   - Confirmation dialogs for destructive actions
   - Dry-run mode to preview changes
   - Undo capability for recent deletions (where Gmail supports it)

### User Experience
- Single-page application with clean, intuitive interface
- Real-time progress indicators during scanning
- Success/error notifications for all actions
- Responsive design for desktop and mobile use

---

## Tech Stack

### Frontend
- **React 18+** with functional components and hooks
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling and responsive design
- **React Query/TanStack Query** for API state management
- **React Router** for client-side routing (if needed)

### Backend
- **Node.js** with Express.js framework
- **Google APIs Client Library** for Gmail integration
- **dotenv** for environment variable management
- **cors** for cross-origin request handling

### Alternative Backend Option
- **Firebase Functions** (serverless option)
- **Firebase Hosting** for static frontend deployment

### Development & Deployment
- **Cursor IDE** for development
- **Git** for version control
- **Vercel** or **Netlify** for frontend hosting
- **Railway** or **Render** for backend hosting (if not using Firebase)

---

## High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend│    │ Node.js Backend │    │   Gmail API     │
│                 │    │                 │    │                 │
│ • Dashboard     │◄──►│ • OAuth Handler │◄──►│ • Read Messages │
│ • Auth Flow     │    │ • Gmail Service │    │ • Delete Messages│
│ • Action Buttons│    │ • Unsubscribe   │    │ • Modify Labels │
│                 │    │   Service       │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Data Flow
1. User initiates Gmail OAuth through frontend
2. Backend receives authorization code and exchanges for tokens
3. Backend scans Gmail inbox using Gmail API
4. Backend processes emails to identify subscriptions
5. Frontend displays subscription dashboard
6. User actions trigger backend API calls to Gmail
7. Frontend updates to reflect changes

---

## API Integrations

### Gmail API Scopes Required
```
https://www.googleapis.com/auth/gmail.readonly     # Read emails and headers
https://www.googleapis.com/auth/gmail.modify      # Delete emails and modify labels
```

### Key Gmail API Endpoints
- **OAuth 2.0:** `accounts.google.com/o/oauth2/auth`
- **List Messages:** `gmail.googleapis.com/gmail/v1/users/me/messages`
- **Get Message:** `gmail.googleapis.com/gmail/v1/users/me/messages/{id}`
- **Delete Message:** `gmail.googleapis.com/gmail/v1/users/me/messages/{id}`
- **Batch Delete:** `gmail.googleapis.com/gmail/v1/users/me/messages/batchDelete`

### External Services
- **List-Unsubscribe Headers:** Standard RFC 2369 implementation
- **HTTP/HTTPS Unsubscribe Links:** Direct API calls to unsubscribe URLs

---

## Development Milestones

### Phase 1: Foundation (Days 1-2)
- [ ] Set up React + Vite project structure
- [ ] Configure Tailwind CSS
- [ ] Create basic component structure (Header, Dashboard, ActionButton)
- [ ] Set up Node.js backend with Express
- [ ] Configure environment variables and project structure

### Phase 2: Gmail OAuth Integration (Days 3-4)
- [ ] Implement Google OAuth 2.0 flow
- [ ] Create Gmail API service module
- [ ] Handle token storage and refresh logic
- [ ] Test authentication with minimal Gmail API call
- [ ] Add error handling for auth failures

### Phase 3: Email Scanning Engine (Days 5-7)
- [ ] Implement Gmail message listing and fetching
- [ ] Create email header parser for List-Unsubscribe detection
- [ ] Build sender grouping and aggregation logic
- [ ] Add progress tracking for large inbox scans
- [ ] Implement basic caching to avoid re-scanning

### Phase 4: Dashboard UI (Days 8-10)
- [ ] Design and implement subscription list component
- [ ] Add sender information display (count, last email, preview)
- [ ] Create action buttons (Unsubscribe, Delete, Keep)
- [ ] Implement loading states and progress indicators
- [ ] Add responsive design for mobile devices

### Phase 5: Action Implementation (Days 11-13)
- [ ] Build unsubscribe service (HTTP requests to List-Unsubscribe URLs)
- [ ] Implement bulk email deletion via Gmail API
- [ ] Add confirmation dialogs for destructive actions
- [ ] Create success/error notification system
- [ ] Implement undo functionality where possible

### Phase 6: Safety & Polish (Days 14-15)
- [ ] Add dry-run mode for previewing changes
- [ ] Implement comprehensive error handling
- [ ] Add rate limiting for API calls
- [ ] Create user guide/help section
- [ ] Final testing and bug fixes

### Phase 7: Deployment (Day 16)
- [ ] Set up production environment variables
- [ ] Deploy backend to Railway/Render
- [ ] Deploy frontend to Vercel/Netlify
- [ ] Configure production OAuth credentials
- [ ] Final production testing

---

## Known Limitations & Risks

### Technical Limitations
1. **Gmail API Rate Limits:** 1 billion quota units per day, 250 quota units per user per second
2. **OAuth Token Expiry:** Refresh tokens may expire if unused for 6 months
3. **List-Unsubscribe Reliability:** Not all emails implement the header correctly
4. **Single User Constraint:** No multi-user support or user management

### Security Considerations
1. **OAuth Scope Sensitivity:** Gmail modify permissions are powerful and require careful handling
2. **Token Storage:** Secure storage of refresh tokens is critical
3. **HTTPS Requirement:** Production deployment must use HTTPS for OAuth
4. **Unsubscribe Privacy:** Some unsubscribe links may track that the email was opened

### Business Risks
1. **Google Policy Changes:** Gmail API terms or availability could change
2. **Subscription Evolution:** Email marketing practices may evolve to bypass detection
3. **Data Loss Risk:** Bulk deletion actions are irreversible
4. **Compliance:** GDPR/privacy regulations may affect functionality

### Mitigation Strategies
- Implement comprehensive logging for debugging
- Add multiple confirmation steps for destructive actions
- Create regular backups of important configuration data
- Monitor Gmail API quotas and implement graceful degradation
- Provide clear user education about risks and limitations

---

## Success Metrics

### Primary KPIs
- **Emails Processed:** Total number of emails scanned and categorized
- **Subscriptions Detected:** Number of unique subscription senders identified
- **Successful Unsubscribes:** Percentage of unsubscribe attempts that succeed
- **Time Saved:** Estimated time saved vs. manual email management

### Technical Metrics
- **API Response Time:** Average response time for Gmail API calls
- **Error Rate:** Percentage of failed API requests or unsubscribe attempts
- **User Session Duration:** Time spent in the application per session

---

*This PRD serves as the foundation for developing Inbox Reaper and should be updated as requirements evolve during development.*