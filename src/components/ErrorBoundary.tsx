import React, { Component, ReactNode } from "react";
import { motion } from "framer-motion";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("🚨 Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
          {/* Animated Glowing Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 rounded-full bg-red-600 bg-opacity-40 shadow-2xl animate-pulse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              className="w-16 h-16 text-white animate-spin-slow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v4m0 4h.01M4.293 4.293a1 1 0 011.414 0l14 14a1 1 0 01-1.414 1.414l-14-14a1 1 0 010-1.414z"
              />
            </svg>
          </motion.div>

          {/* Error Message */}
          <h1 className="mt-6 text-4xl font-extrabold text-white drop-shadow-lg">
            🚧 Critical System Error
          </h1>
          <p className="mt-2 text-lg text-gray-300 max-w-lg">
            Oops! Something went wrong. Please refresh the page or contact{" "}
            <span className="font-bold text-yellow-400">Akiliedge Support</span>.
          </p>

          {/* Futuristic Retry Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 text-lg font-bold text-black bg-yellow-400 hover:bg-yellow-500 rounded-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl"
            onClick={this.handleRetry}
          >
            🔄 Retry System
          </motion.button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
