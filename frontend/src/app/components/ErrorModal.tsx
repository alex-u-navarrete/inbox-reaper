'use client';

import { X, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function ErrorModal({ 
  isOpen, 
  onClose, 
  title = "Connection Failed",
  message = "Sorry, we couldn't connect to your Gmail account. Please try again."
}: ErrorModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleReturnHome = () => {
    onClose();
    router.push('/');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Error icon */}
        <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-4">
          <AlertTriangle className="w-6 h-6 text-red-600" />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-6">
            {message}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleReturnHome}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Return to Home
            </button>
            <button
              onClick={() => window.location.href = 'http://localhost:3001/auth/google'}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 