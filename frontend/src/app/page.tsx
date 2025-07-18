import { Shield, Mail, Trash2, CheckCircle, Search, Unlink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">Inbox Reaper</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#security" className="text-gray-600 hover:text-gray-900 transition-colors">
              Security
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How it Works
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Reclaim Your
            <span className="gradient-primary bg-clip-text text-transparent"> Gmail Inbox</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Automatically detect, unsubscribe from, and bulk delete unwanted email subscriptions. 
            Secure, private, and built for your peace of mind.
          </p>
          
          {/* Trust Badges */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="flex items-center text-success-600">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">OAuth2 Secure</span>
            </div>
            <div className="flex items-center text-success-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">No Data Stored</span>
            </div>
            <div className="flex items-center text-success-600">
              <Mail className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Gmail Official API</span>
            </div>
          </div>

          <button className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105">
            Connect Your Gmail
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            Free to use • No registration required • Works in seconds
          </p>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built with Security First
            </h2>
            <p className="text-gray-600">
              Your privacy and security are our top priorities. Here&rsquo;s how we protect you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">OAuth2 Authentication</h3>
              <p className="text-gray-600">
                Uses Google&rsquo;s official OAuth2 flow. We never see your password, 
                and you can revoke access anytime.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Data Storage</h3>
              <p className="text-gray-600">
                We don&rsquo;t store your emails or personal data. Everything happens 
                in real-time and stays with you.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Official Gmail API</h3>
              <p className="text-gray-600">
                Direct integration with Gmail&rsquo;s official API. Secure, reliable, 
                and following Google&rsquo;s best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Clean Your Inbox in 3 Simple Steps
            </h2>
            <p className="text-gray-600">
              Get started in under a minute. No complex setup required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">1. Connect</h3>
                <p className="text-gray-600">
                  Securely connect your Gmail account using Google&rsquo;s OAuth2. 
                  One click and you&rsquo;re authenticated.
                </p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-20 w-full h-0.5 bg-primary-200 -z-10"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">2. Scan</h3>
                <p className="text-gray-600">
                  We analyze your inbox for subscription emails with 
                  unsubscribe links and show you what we found.
                </p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-20 w-full h-0.5 bg-primary-200 -z-10"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trash2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">3. Clean</h3>
                <p className="text-gray-600">
                  Choose what to unsubscribe from and delete. 
                  Bulk actions make cleanup fast and easy.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Inbox Reaper. Built with privacy and security in mind.</p>
          <p className="mt-2 text-sm">
            This tool connects directly to your Gmail account. We don&rsquo;t store any of your data.
          </p>
        </div>
      </footer>
    </div>
  );
}
