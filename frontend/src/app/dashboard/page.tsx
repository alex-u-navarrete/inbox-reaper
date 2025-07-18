'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Shield, LogOut, Search, Loader2 } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/status', {
        credentials: 'include'
      });
      
      if (!response.ok) {
        setIsAuthenticated(false);
        return;
      }
      
      const data = await response.json();
      setIsAuthenticated(data.authenticated);
      
      if (!data.authenticated) {
        // Redirect to home if not authenticated
        router.push('/');
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setIsAuthenticated(false);
      router.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleTestConnection = async () => {
    try {
      const response = await fetch('http://localhost:3001/gmail/test', {
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        alert(`Gmail connection successful! ${data.message}`);
      } else {
        alert('Gmail connection failed. Please try reconnecting.');
      }
    } catch (error) {
      console.error('Test connection error:', error);
      alert('Failed to test connection.');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-primary-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Inbox Reaper</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Connected
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Gmail Connected</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gmail Subscription Manager
          </h1>
          <p className="text-gray-600">
            Scan your inbox for unwanted subscriptions and clean them up with one click.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Connected</h3>
                <p className="text-sm text-gray-600">Gmail OAuth2 Active</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Ready to Scan</h3>
                <p className="text-sm text-gray-600">Email analysis available</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Scan Inbox</h3>
                <p className="text-sm text-gray-600">Find subscriptions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Started</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleTestConnection}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Test Gmail Connection
            </button>
            <button
              onClick={() => alert('Email scanning feature coming soon!')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Scan for Subscriptions
            </button>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
                             <strong>Next Steps:</strong> Test your Gmail connection, then scan your inbox for unwanted subscriptions. 
               You&rsquo;ll be able to unsubscribe and delete emails in bulk.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 