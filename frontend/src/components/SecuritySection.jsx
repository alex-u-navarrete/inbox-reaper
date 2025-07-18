import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  EyeSlashIcon, 
  ClockIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: LockClosedIcon,
      title: "OAuth2 Security",
      description: "Google's industry-standard authentication. No passwords stored, complete access control."
    },
    {
      icon: EyeSlashIcon,
      title: "Zero Data Storage",
      description: "We scan and act, never store your emails. Your data stays in your Gmail account."
    },
    {
      icon: ClockIcon,
      title: "Revoke Anytime",
      description: "Disconnect Inbox Reaper instantly through your Google Account settings."
    },
    {
      icon: UserGroupIcon,
      title: "Personal Use Only",
      description: "Single-user application. No sharing, no corporate access, just you."
    },
    {
      icon: GlobeAltIcon,
      title: "Minimal Permissions",
      description: "Only requests access to read emails and delete/modify subscription messages."
    },
    {
      icon: ShieldCheckIcon,
      title: "Open Source Trust",
      description: "Transparent code you can review. No hidden functionality or data collection."
    }
  ]

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Security & Privacy</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Your Gmail, Your Control
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            Built with security-first principles. Inbox Reaper uses Google's own OAuth2 system 
            to ensure your Gmail account stays safe and under your complete control.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="relative group hover:scale-105 transition-transform duration-200"
              >
                <div className="rounded-2xl border border-secondary-200 bg-white p-6 shadow-soft hover:shadow-medium transition-shadow duration-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-secondary-900">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-secondary-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* OAuth Explanation */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-r from-primary-50 to-secondary-50 p-8 shadow-soft">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                How OAuth2 Keeps You Safe
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-secondary-900 mb-2">You Grant Permission</h4>
                  <p className="text-sm text-secondary-600">Google asks your permission before allowing Inbox Reaper access</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Limited Access Token</h4>
                  <p className="text-sm text-secondary-600">Google provides a secure token with only the permissions you approved</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-secondary-900 mb-2">You Stay in Control</h4>
                  <p className="text-sm text-secondary-600">Revoke access instantly through your Google Account settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecuritySection 