import { 
  LinkIcon, 
  MagnifyingGlassIcon, 
  TrashIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Gmail Safely",
      description: "Secure OAuth2 connection to your Gmail account. Google handles authentication - we never see your password.",
      icon: LinkIcon,
      features: ["OAuth2 Security", "No Password Required", "Revoke Anytime"],
      color: "from-primary-500 to-primary-600"
    },
    {
      number: "02", 
      title: "Scan Subscriptions",
      description: "We analyze your inbox for emails with unsubscribe headers and group them by sender automatically.",
      icon: MagnifyingGlassIcon,
      features: ["Automatic Detection", "Smart Grouping", "Preview Before Action"],
      color: "from-secondary-500 to-secondary-600"
    },
    {
      number: "03",
      title: "Clean with One Click", 
      description: "Bulk unsubscribe or delete all emails from unwanted senders. Get your inbox back in minutes.",
      icon: TrashIcon,
      features: ["Bulk Unsubscribe", "Mass Delete", "Instant Results"],
      color: "from-success-500 to-success-600"
    }
  ]

  return (
    <div className="bg-secondary-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Clean your inbox in 3 simple steps
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            From Gmail connection to clean inbox - the entire process takes just minutes and prioritizes your security every step of the way.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent z-0" 
                       style={{ width: 'calc(100% - 2rem)', left: '2rem' }} />
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-secondary-200">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-medium`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-secondary-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature) => (
                        <div key={feature} className="flex items-center justify-center text-sm text-secondary-700">
                          <CheckCircleIcon className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center rounded-2xl bg-white px-6 py-4 shadow-soft border border-primary-200">
            <ShieldCheckIcon className="w-5 h-5 text-primary-500 mr-2" />
            <span className="text-sm font-medium text-secondary-700">
              <strong>Security First:</strong> Your emails never leave Google's servers
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessSteps 