# Inbox Reaper 🗡️📧

A personal standalone web application designed to help you regain control of your Gmail inbox by automatically detecting, managing, and bulk-removing unwanted email subscriptions.

## Overview

Inbox Reaper connects to your Gmail account via OAuth, scans for emails with unsubscribe capabilities, and provides a simple dashboard to either unsubscribe from or delete all emails from specific senders with one click.

**🎯 Core Value Proposition:** Transform hours of manual email cleanup into minutes of automated subscription management.

## Features

- 🔐 **Secure Gmail Integration** - OAuth 2.0 authentication
- 🔍 **Smart Detection** - Automatically finds emails with "List-Unsubscribe" headers
- 📊 **Management Dashboard** - Visual list of subscription senders with email counts
- ⚡ **Bulk Actions** - Unsubscribe or delete all emails from specific senders
- 🛡️ **Safety Features** - Confirmation dialogs and dry-run mode
- 📱 **Responsive Design** - Works on desktop and mobile

## Tech Stack

### Frontend
- React 18+ with Vite
- Tailwind CSS
- React Query/TanStack Query

### Backend
- Node.js with Express.js
- Google APIs Client Library
- Gmail API integration

## Getting Started

*Setup instructions will be added as development progresses.*

## Documentation

- [Product Requirements Document (PRD)](./docs/PRD.md) - Complete project specifications and development milestones

## Development Status

🚧 **In Development** - This project is currently being built according to the milestones outlined in the PRD.

## Security & Privacy

- Only accesses your Gmail account with your explicit consent
- Uses minimal required Gmail API scopes
- No data is stored permanently - operates on-demand
- Single user application (personal use only)

## License

Personal use project - not intended for redistribution.

---

**Note:** This is a personal project designed for single-user Gmail management. Use at your own discretion and always backup important emails before performing bulk operations. 