import { ShieldCheckIcon, LockClosedIcon, TrashIcon, UserMinusIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Trust Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20">
            <ShieldCheckIcon className="mr-1.5 h-4 w-4" />
            Secure Gmail Integration
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl animate-fade-in">
            Reclaim your inbox from{' '}
            <span className="text-primary-600">unwanted subscriptions</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-secondary-600 animate-slide-up">
            Connect Gmail safely and clean up in minutes. Inbox Reaper automatically detects 
            subscription emails and lets you unsubscribe or delete them with one click.
          </p>
          
          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-secondary-600">
            <div className="flex items-center">
              <LockClosedIcon className="mr-2 h-4 w-4 text-primary-500" />
              OAuth2 Security
            </div>
            <div className="flex items-center">
              <TrashIcon className="mr-2 h-4 w-4 text-primary-500" />
              No Data Storage
            </div>
            <div className="flex items-center">
              <UserMinusIcon className="mr-2 h-4 w-4 text-primary-500" />
              Revoke Anytime
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-xl bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-medium hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200 hover:scale-105">
              🔗 Connect Gmail Safely
            </button>
            <button className="text-base font-semibold leading-6 text-secondary-900 hover:text-primary-600 transition-colors">
              How it works <span aria-hidden="true">→</span>
            </button>
          </div>
          
          {/* Security Notice */}
          <div className="mt-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-primary-200 p-4 shadow-soft">
            <p className="text-sm text-secondary-700">
              <LockClosedIcon className="inline h-4 w-4 mr-1 text-primary-500" />
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