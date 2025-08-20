import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5001/api/users/login', {
        email: email,
        password: password,
      });

      localStorage.setItem('userToken', response.data.token);

      window.location.reload();

    } catch (err) {
      console.error('Login failed:', err.response ? err.response.data : err.message);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 font-montserrat overflow-hidden">
      {/* Animated SVG Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w.org/2000/svg">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: 'rgba(79, 70, 229, 0.4)', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: 'rgba(79, 70, 229, 0)', stopOpacity: 1}} />
            </radialGradient>
            <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: 'rgba(217, 70, 239, 0.3)', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: 'rgba(217, 70, 239, 0)', stopOpacity: 1}} />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)">
             <animate attributeName="x" from="-100%" to="100%" dur="15s" repeatCount="indefinite" />
          </rect>
           <rect width="100%" height="100%" fill="url(#grad2)">
             <animate attributeName="x" from="100%" to="-100%" dur="20s" repeatCount="indefinite" />
          </rect>
           <circle cx="20%" cy="30%" r="150" fill="rgba(255,255,255,0.05)" className="float" />
           <circle cx="80%" cy="70%" r="200" fill="rgba(255,255,255,0.05)" className="float-reverse" />
           <circle cx="50%" cy="50%" r="100" fill="rgba(255,255,255,0.03)" className="float" />
        </svg>
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex flex-col m-6 space-y-8 bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* Left Side */}
        <form onSubmit={handleLogin} className="flex flex-col justify-center p-8 md:p-14 text-white">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-300 mb-8">
            Welcome back! Please enter your details
          </span>
          {error && <div className="bg-red-500 text-white p-2 rounded-md mb-4">{error}</div>}
          <div className="py-4">
            <span className="mb-2 text-md text-gray-200">Email</span>
            <input
              type="email"
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md text-gray-200">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 bg-transparent border border-gray-500 rounded-md placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between w-full py-4 items-center">
            <div className="flex items-center">
              <input type="checkbox" name="ch" id="ch" className="mr-2 h-4 w-4 bg-gray-700 border-gray-600 text-indigo-500 focus:ring-indigo-500" />
              <span className="text-md text-gray-300">Remember me</span>
            </div>
            <span className="font-bold text-md cursor-pointer text-indigo-400 hover:underline">Forgot password</span>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-lg mb-6 hover:bg-indigo-700 transition-colors duration-300"
          >
            Sign in
          </button>
          <button
            type="button"
            className="w-full border border-gray-500 text-md p-2 rounded-lg mb-6 hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
          >
            <img src="https://placehold.co/20x20/E9E9E9/000000?text=G" alt="Google logo" className="w-6 h-6 inline mr-2 bg-white rounded-full p-1" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Don't have an account?
            <span className="font-bold text-indigo-400 cursor-pointer hover:underline"> Sign up for free</span>
          </div>
        </form>
        {/* Right Side */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x570/CCCCCC/FFFFFF?text=Image+Not+Found'; }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;