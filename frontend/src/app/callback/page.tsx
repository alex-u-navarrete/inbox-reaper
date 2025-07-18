'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing your Gmail connection...');

  useEffect(() => {
    const error = searchParams.get('error');
    const code = searchParams.get('code');

    if (error) {
      // OAuth error from Google
      setStatus('error');
      setMessage('Authorization was canceled or failed. Please try again.');
      
      // Redirect to home with error after 3 seconds
      setTimeout(() => {
        router.push('/?error=oauth_failed');
      }, 3000);
      return;
    }

    if (!code) {
      // No authorization code
      setStatus('error');
      setMessage('No authorization code received. Please try again.');
      
      setTimeout(() => {
        router.push('/?error=no_code');
      }, 3000);
      return;
    }

    // We have a code, which means Google redirected here successfully
    // The backend should have already processed this at /auth/google/callback
    // Let's check the authentication status
    checkAuthStatus();
  }, [searchParams, router]);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/status', {
        credentials: 'include' // Include cookies for session
      });
      
      if (!response.ok) {
        throw new Error('Failed to check auth status');
      }
      
      const data = await response.json();
      
      if (data.authenticated) {
        setStatus('success');
        setMessage('Gmail connected successfully! Redirecting to dashboard...');
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      } else {
        setStatus('error');
        setMessage('Authentication failed. Please try again.');
        
        setTimeout(() => {
          router.push('/?error=auth_failed');
        }, 3000);
      }
    } catch (error) {
      console.error('Auth status check error:', error);
      setStatus('error');
      setMessage('Failed to verify connection. Please try again.');
      
      setTimeout(() => {
        router.push('/?error=verification_failed');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        {/* Status Icon */}
        <div className="mb-6">
          {status === 'loading' && (
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
          )}
          
          {status === 'success' && (
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          )}
          
          {status === 'error' && (
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          )}
        </div>

        {/* Status Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {status === 'loading' && 'Connecting...'}
          {status === 'success' && 'Success!'}
          {status === 'error' && 'Connection Failed'}
        </h2>
        
        <p className="text-gray-600 mb-6">
          {message}
        </p>

        {/* Manual actions for error state */}
        {status === 'error' && (
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => router.push('/')}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Return Home
            </button>
            <button
              onClick={() => window.location.href = 'http://localhost:3001/auth/google'}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Loading indicator for success */}
        {status === 'success' && (
          <div className="flex items-center justify-center text-gray-500">
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            <span className="text-sm">Redirecting...</span>
          </div>
        )}
      </div>
    </div>
  );
} 