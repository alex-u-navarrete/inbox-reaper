const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: "🔒",
      title: "OAuth2 Security",
      description: "Google's industry-standard authentication. No passwords stored, complete access control."
    },
    {
      icon: "👁️‍🗨️",
      title: "Zero Data Storage",
      description: "We scan and act, never store your emails. Your data stays in your Gmail account."
    },
    {
      icon: "⏰",
      title: "Revoke Anytime",
      description: "Disconnect Inbox Reaper instantly through your Google Account settings."
    },
    {
      icon: "👥",
      title: "Personal Use Only",
      description: "Single-user application. No sharing, no corporate access, just you."
    },
    {
      icon: "🌐",
      title: "Minimal Permissions",
      description: "Only requests access to read emails and delete/modify subscription messages."
    },
    {
      icon: "🛡️",
      title: "Open Source Trust",
      description: "Transparent code you can review. No hidden functionality or data collection."
    }
  ]

  return (
    <div className="security-section">
      <div className="container">
        <div className="text-center">
          <h2 className="text-lg" style={{color: 'var(--primary-600)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem'}}>
            Security & Privacy
          </h2>
          <h3 className="heading-lg">
            Your Gmail, Your Control
          </h3>
          <p className="text-lg" style={{maxWidth: '600px', margin: '0 auto'}}>
            Built with security-first principles. Inbox Reaper uses Google's own OAuth2 system 
            to ensure your Gmail account stays safe and under your complete control.
          </p>
        </div>
        
        <div className="security-grid">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="security-card">
              <div className="security-header">
                <div className="security-icon">
                  <span style={{fontSize: '1.5rem'}}>{feature.icon}</span>
                </div>
                <div>
                  <h4 className="heading-md" style={{marginBottom: '0'}}>
                    {feature.title}
                  </h4>
                </div>
              </div>
              <p className="text-lg" style={{fontSize: '0.875rem'}}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* OAuth Explanation */}
        <div className="oauth-explanation">
          <div className="text-center">
            <h3 className="heading-lg" style={{marginBottom: 'var(--spacing-md)'}}>
              How OAuth2 Keeps You Safe
            </h3>
            <div className="oauth-steps">
              <div className="oauth-step">
                <div className="oauth-number">1</div>
                <h4 className="heading-md" style={{fontSize: '1.125rem', marginBottom: 'var(--spacing-xs)'}}>
                  You Grant Permission
                </h4>
                <p style={{fontSize: '0.875rem', color: 'var(--secondary-600)'}}>
                  Google asks your permission before allowing Inbox Reaper access
                </p>
              </div>
              <div className="oauth-step">
                <div className="oauth-number">2</div>
                <h4 className="heading-md" style={{fontSize: '1.125rem', marginBottom: 'var(--spacing-xs)'}}>
                  Limited Access Token
                </h4>
                <p style={{fontSize: '0.875rem', color: 'var(--secondary-600)'}}>
                  Google provides a secure token with only the permissions you approved
                </p>
              </div>
              <div className="oauth-step">
                <div className="oauth-number">3</div>
                <h4 className="heading-md" style={{fontSize: '1.125rem', marginBottom: 'var(--spacing-xs)'}}>
                  You Stay in Control
                </h4>
                <p style={{fontSize: '0.875rem', color: 'var(--secondary-600)'}}>
                  Revoke access instantly through your Google Account settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecuritySection 