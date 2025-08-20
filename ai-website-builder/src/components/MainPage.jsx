import React, { useState, useEffect } from 'react';
import { Wand2, Sparkles, Code, Eye } from 'lucide-react';

const MainPage = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedSite, setGeneratedSite] = useState('');
  
  const [previewWidth, setPreviewWidth] = useState(window.innerWidth / 2);
  const [isResizing, setIsResizing] = useState(false);
  const [previewMode, setPreviewMode] = useState('preview');

  const handleEnhancePrompt = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      const enhanced = `Create a modern, responsive ${prompt} with clean design, intuitive navigation, mobile-first approach, SEO optimization, and engaging user experience. Include relevant sections, call-to-action buttons, and professional styling.`;
      setPrompt(enhanced);
      setIsGenerating(false);
    }, 1500);
  };

  const handleGenerateSite = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setShowPreview(true);
    
    setTimeout(() => {
      const sampleSite = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Generated Site</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Montserrat', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
            header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4rem 0; text-align: center; }
            h1 { font-size: 3rem; margin-bottom: 1rem; font-weight: 700; }
            .subtitle { font-size: 1.2rem; opacity: 0.9; max-width: 600px; margin: 0 auto; }
            .cta { background: rgba(255, 255, 255, 0.2); border: 2px solid white; color: white; padding: 1rem 2rem; font-size: 1.1rem; border-radius: 50px; margin-top: 2rem; cursor: pointer; transition: all 0.3s ease; }
            .cta:hover { background: white; color: #667eea; transform: translateY(-2px); }
            .features { padding: 6rem 0; background: #f8f9fa; }
            .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
            .feature { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center; }
            .feature h3 { font-size: 1.5rem; margin-bottom: 1rem; color: #667eea; }
          </style>
        </head>
        <body>
          <header>
            <div class="container">
              <h1>Your Amazing Website</h1>
              <p class="subtitle">Built with AI-powered technology to deliver exceptional user experiences</p>
              <button class="cta">Get Started Today</button>
            </div>
          </header>
          <section class="features">
            <div class="container">
              <div class="feature-grid">
                <div class="feature">
                  <h3>🚀 Fast & Modern</h3>
                  <p>Built with the latest technologies for optimal performance</p>
                </div>
                <div class="feature">
                  <h3>📱 Responsive</h3>
                  <p>Perfect viewing experience across all devices</p>
                </div>
                <div class="feature">
                  <h3>🎨 Beautiful Design</h3>
                  <p>Carefully crafted with attention to every detail</p>
                </div>
              </div>
            </div>
          </section>
        </body>
        </html>
      `;
      setGeneratedSite(sampleSite);
      setIsGenerating(false);
    }, 2000);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth > 400 && newWidth < window.innerWidth - 400) {
        setPreviewWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="main-page-bg min-h-screen relative overflow-hidden font-montserrat">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/50 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-900/50 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex h-screen">
        {/* Main Content Area */}
        <div 
          className="transition-all duration-500 ease-in-out p-8 flex flex-col"
          style={{ width: showPreview ? `calc(100% - ${previewWidth}px)` : '100%' }}
        >
           <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">AI-Powered Website Builder</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Your Personal
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  AI Website Builder
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
                Transform your ideas into stunning websites in seconds. Just describe what you want, and our AI will build it for you.
              </p>
            </div>

            {/* Prompt Input Area */}
            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Describe your website
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., Create a modern landing page for a tech startup..."
                  className="w-full h-32 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 resize-none backdrop-blur-sm"
                  disabled={isGenerating}
                />
                <div className="absolute bottom-3 right-3">
                  <Code className="w-5 h-5 text-gray-500" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEnhancePrompt}
                  disabled={!prompt.trim() || isGenerating}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-600/50 text-gray-300 rounded-xl font-medium hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                >
                  {isGenerating ? (
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Wand2 className="w-5 h-5" />
                  )}
                  Enhance Prompt
                </button>
                
                <button
                  onClick={handleGenerateSite}
                  disabled={!prompt.trim() || isGenerating}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isGenerating ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Sparkles className="w-5 h-5" />
                  )}
                  Generate Site
                </button>
              </div>
            </div>

            {/* Status Messages */}
            {isGenerating && (
              <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                  <span className="text-purple-300 font-medium">
                    {showPreview ? 'Generating your website...' : 'Enhancing your prompt...'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Draggable Resizer */}
        {showPreview && (
            <div 
                onMouseDown={handleMouseDown}
                className="w-2 cursor-col-resize bg-gray-600/50 hover:bg-purple-500 transition-colors duration-200"
            ></div>
        )}

        {/* Preview Area */}
        {showPreview && (
          <div 
            className="bg-gray-800/30 backdrop-blur-sm flex flex-col"
            style={{ width: `${previewWidth}px` }}
          >
            <div className="p-4 border-b border-gray-600/50 flex items-center justify-between">
              <div className="flex items-center gap-2 bg-gray-900/50 p-1 rounded-lg border border-gray-600/50">
                  <button 
                      onClick={() => setPreviewMode('preview')}
                      className={`px-3 py-1 text-sm rounded-md ${previewMode === 'preview' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
                  >
                      <Eye className="w-4 h-4 inline mr-1" />
                      Preview
                  </button>
                  <button
                      onClick={() => setPreviewMode('code')}
                      className={`px-3 py-1 text-sm rounded-md ${previewMode === 'code' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
                  >
                      <Code className="w-4 h-4 inline mr-1" />
                      Code
                  </button>
              </div>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                &times;
              </button>
            </div>
            
            <div className="flex-1 p-4">
              {isGenerating ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 border-2 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-300">Generating your website...</p>
                  </div>
                </div>
              ) : generatedSite ? (
                <>
                  {previewMode === 'preview' ? (
                     <iframe
                        srcDoc={generatedSite}
                        className="w-full h-full bg-white rounded-lg border border-gray-600/50"
                        title="Generated Website Preview"
                      />
                  ) : (
                    <pre className="w-full h-full bg-gray-900 text-white p-4 rounded-lg overflow-auto text-sm border border-gray-600/50">
                        <code>{generatedSite.trim()}</code>
                    </pre>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-gray-400">
                    <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Your generated website will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;