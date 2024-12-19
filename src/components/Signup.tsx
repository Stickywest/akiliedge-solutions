import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { auth } from './firebaseConfig'; // Adjust path if necessary
import { signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const provider = new GoogleAuthProvider(); // Initialize Google Auth Provider

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle email/password signup
  const handleEmailSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful!');
      navigate('/dashboard'); // Redirect to the dashboard after successful signup
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Handle Google signup
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Google signup successful!');
      navigate('/dashboard'); // Redirect to the dashboard after successful signup
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10 sm:mt-16 md:mt-24">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Email and Password Signup */}
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fcdc12]"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fcdc12]"
          placeholder="Enter your password"
        />
      </div>
      <button
        onClick={handleEmailSignup}
        className="w-full bg-[#fcdc12] text-[#972425] p-2 rounded-lg hover:bg-[#e0b812] transition duration-200"
      >
        Sign Up with Email
      </button>

      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-2 text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Google Signup */}
      <button
        onClick={handleGoogleSignup}
        className="w-full flex items-center justify-center bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-200"
      >
        <FaGoogle className="mr-2" /> Sign Up with Google
      </button>
    </div>
  );
};

export default Signup;
