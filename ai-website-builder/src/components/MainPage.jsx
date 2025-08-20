import React from 'react';

const MainPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    window.location.reload();
  };

  return (
    <div className="main-page-bg min-h-screen text-white flex flex-col items-center font-montserrat p-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">SiteGenie</div>
        <button
          onClick={handleLogout}
          className="bg-white/10 border border-gray-700 text-white py-2 px-6 rounded-lg text-sm hover:bg-white/20 transition-colors duration-300"
        >
          Logout
        </button>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
           <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Create a Website with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">AI</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Just describe the website you want to build. Our AI will generate the design, content, and code for you in seconds.
          </p>
        </div>

        {/* Prompt Input Area */}
        <div className="w-full max-w-3xl bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <textarea
                placeholder="e.g., 'A modern landing page for a new coffee shop in New York City...'"
                className="w-full h-24 bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            ></textarea>
            <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition-opacity">
            Generate Website
          </button>
        </div>

        {/* Output/Preview Area */}
        <div className="w-full max-w-3xl mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <h2 className="text-2xl font-bold mb-4">Your Generated Website</h2>
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-gray-800 h-64 flex items-center justify-center">
                <p className="text-gray-500">The website preview will appear here...</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
