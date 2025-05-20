'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-orange-700 mb-4">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Please try refreshing the page or contact us if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300"
            >
              Refresh Page
            </button>
            <div className="mt-6 text-sm text-gray-700">
              <p>If the problem continues, please contact us:</p>
              <p className="mt-2">
                <span className="font-semibold">Phone:</span> <a href="tel:+16477793313" className="text-orange-700 hover:underline">+1 (647) 779-3313</a><br />
                <span className="font-semibold">Email:</span> <a href="mailto:masjidhawa786@gmail.com" className="text-orange-700 hover:underline">masjidhawa786@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 