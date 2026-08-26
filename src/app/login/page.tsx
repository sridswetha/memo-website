'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.push('/admin');
    } catch (error: any) {
      if (
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        setErrorMessage("Incorrect email or password. Please try again.");
      } else {
        setErrorMessage("An error occurred during login. Please check your connection.");
      }
    }
  };

  return (
    <div className="min-h-screen pt-12 sm:pt-16 flex items-start justify-center bg-[#DBF9FF] px-4">
      {/* Adjusted top margin to mt-16 to move it slightly lower */}
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md mt-20">
        <h1 
          className="text-2xl font-bold text-[#3b0d37] mb-6 text-center"
          style={{ fontFamily: 'Montserrat, Roboto, sans-serif' }}
        >
          Admin Login
        </h1>

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b0d37]"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b0d37]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#4C3442] text-white rounded-md font-bold hover:bg-[#3b0d37] transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}