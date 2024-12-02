// src/components/Login.tsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { FaGoogle } from 'react-icons/fa';

const provider = new GoogleAuthProvider(); // Initialize Google Auth Provider

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
    } catch (err) {
      setError("Failed to log in with Google.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 shadow-md rounded-lg bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Log In</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fcdc12]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fcdc12]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="p-2 bg-[#fcdc12] text-[#972425] rounded-lg font-semibold hover:bg-[#e0b812] transition duration-200"
        >
          Log In
        </button>
      </form>
      
      <p className="text-center mt-4">
        <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
      </p>

      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-2 text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-200"
      >
        <FaGoogle className="mr-2" /> Log In with Google
      </button>
    </div>
  );
};

export default Login;
