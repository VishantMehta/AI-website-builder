import React, { useState } from 'react';
import axios from 'axios';
import { Sparkles } from 'lucide-react';

// We pass 'setShowRegister' as a prop to go back to the login page
const Register = ({ setShowRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5001/api/users/register', {
        name: name,
        email: email,
        password: password,
      });

      // After successful registration, save the token and reload to log the user in
      localStorage.setItem('userToken', response.data.token);
      window.location.reload();

    } catch (err) {
      console.error('Registration failed:', err.response ? err.response.data : err.message);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="main-page-bg min-h-screen relative flex items-center justify-center font-montserrat overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/50 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-900/50 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Register Form */}
      <div className="relative z-10 w-full max-w-md">
        <form 
          onSubmit={handleRegister} 
          className="flex flex-col justify-center p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-gray-800"
        >
          <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Create Your Account</span>
              </div>
              <h1 className="text-4xl font-bold text-white">Get Started</h1>
              <p className="text-gray-400 mt-2">Join us and start building with AI.</p>
          </div>
          
          {error && <div className="bg-red-500 text-white p-3 rounded-xl mb-4 text-center">{error}</div>}
          
          <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 backdrop-blur-sm"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 backdrop-blur-sm"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                 <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 backdrop-blur-sm"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
          </div>
          
          <button
            type="submit"
            className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            Create Account
          </button>
          
          <div className="text-center text-gray-400 mt-6 text-sm">
            Already have an account?
            <button type="button" onClick={() => setShowRegister(false)} className="font-medium text-purple-400 hover:underline ml-1 bg-transparent border-none">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
