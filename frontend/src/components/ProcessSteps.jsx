const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Gmail Safely",
      description: "Secure OAuth2 connection to your Gmail account. Google handles authentication - we never see your password.",
      icon: "🔗",
      features: ["OAuth2 Security", "No Password Required", "Revoke Anytime"]
    },
    {
      number: "02", 
      title: "Scan Subscriptions",
      description: "We analyze your inbox for emails with unsubscribe headers and group them by sender automatically.",
      icon: "🔍",
      features: ["Automatic Detection", "Smart Grouping", "Preview Before Action"]
    },
    {
      number: "03",
      title: "Clean with One Click", 
      description: "Bulk unsubscribe or delete all emails from unwanted senders. Get your inbox back in minutes.",
      icon: "🗑️",
      features: ["Bulk Unsubscribe", "Mass Delete", "Instant Results"]
    }
  ]

  return (
    <div className="process-section">
      <div className="container">
        <div className="text-center">
          <h2 className="text-lg" style={{color: 'var(--primary-600)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem'}}>
            How It Works
          </h2>
          <h3 className="heading-lg">
            Clean your inbox in 3 simple steps
          </h3>
          <p className="text-lg" style={{maxWidth: '600px', margin: '0 auto'}}>
            From Gmail connection to clean inbox - the entire process takes just minutes and prioritizes your security every step of the way.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              {/* Step Number */}
              <div className="step-number">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="step-icon">
                <span style={{fontSize: '2rem'}}>{step.icon}</span>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h4 className="heading-md">
                  {step.title}
                </h4>
                <p className="text-lg" style={{marginBottom: 'var(--spacing-lg)'}}>
                  {step.description}
                </p>
                
                {/* Features */}
                <div className="step-features">
                  {step.features.map((feature) => (
                    <div key={feature} className="step-feature">
                      <span className="icon icon-check"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center" style={{marginTop: 'var(--spacing-2xl)'}}>
          <div className="security-notice" style={{display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-xs)'}}>
            <span className="icon icon-shield"></span>
            <span>
              <strong>Security First:</strong> Your emails never leave Google's servers
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessSteps 