import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { auth } from './firebaseConfig';
import { signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home page
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      await signInWithPopup(auth, provider);
      navigate('/'); // Redirect to home page
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 shadow-lg rounded-lg bg-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#972425]">Create Account</h2>
      
      <form onSubmit={handleEmailSignup} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcdc12]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcdc12]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-3 rounded-lg font-semibold transition duration-200 ${
            isLoading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#fcdc12] text-[#972425] hover:bg-[#e0b812]'
          }`}
        >
          {isLoading ? 'Creating account...' : 'Sign Up with Email'}
        </button>
      </form>

      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <button
        onClick={handleGoogleSignup}
        disabled={isLoading}
        className={`w-full flex items-center justify-center p-3 rounded-lg font-medium transition duration-200 ${
          isLoading
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-red-500 text-white hover:bg-red-600'
        }`}
      >
        <FaGoogle className="mr-3" /> 
        {isLoading ? 'Signing up...' : 'Continue with Google'}
      </button>

      <div className="text-center mt-6">
        <p className="text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-[#972425] font-semibold hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;