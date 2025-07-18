const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="hero-badge">
            <span className="icon icon-shield"></span>
            Secure Gmail Integration
          </div>
          
          {/* Main Heading */}
          <h1 className="hero-title animate-fade-in">
            Reclaim your inbox from{' '}
            <span className="highlight">unwanted subscriptions</span>
          </h1>
          
          <p className="hero-description animate-slide-up">
            Connect Gmail safely and clean up in minutes. Inbox Reaper automatically detects 
            subscription emails and lets you unsubscribe or delete them with one click.
          </p>
          
          {/* Trust Points */}
          <div className="hero-features">
            <div className="hero-feature">
              <span className="icon icon-lock"></span>
              OAuth2 Security
            </div>
            <div className="hero-feature">
              <span className="icon icon-trash"></span>
              No Data Storage
            </div>
            <div className="hero-feature">
              <span className="icon icon-user"></span>
              Revoke Anytime
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="hero-cta">
            <button className="btn btn-primary">
              🔗 Connect Gmail Safely
            </button>
            <button className="btn btn-secondary">
              How it works →
            </button>
          </div>
          
          {/* Security Notice */}
          <div className="security-notice">
            <p>
              <span className="icon icon-lock"></span>
              <strong>Your Gmail, Your Control:</strong> We use Google's secure OAuth2 system. 
              You can revoke access anytime in your Google Account settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 