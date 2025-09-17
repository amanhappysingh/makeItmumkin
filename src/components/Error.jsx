import React, { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft, Sparkles, Zap } from 'lucide-react';

export default function Error() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Create floating elements
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }));
    setFloatingElements(elements);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`
            }}
          />
        ))}
      </div>

      {/* Interactive gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* 404 Number with glitch effect */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse select-none">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-white opacity-10 animate-ping">
            404
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-bounce">
            Oops! Page Not Found
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-gray-300">
            <Sparkles className="text-yellow-400 animate-spin" size={24} />
            <span>Looks like you've wandered into the digital void</span>
            <Sparkles className="text-yellow-400 animate-spin" size={24} />
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          The page you're looking for seems to have vanished into cyberspace. 
          But don't worry, even the best explorers sometimes take a wrong turn!
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => window.history.back()}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3"
          >
            <ArrowLeft className="transition-transform group-hover:-translate-x-1" size={20} />
            Go Back
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3"
          >
            <Home className="transition-transform group-hover:scale-110" size={20} />
            Home Page
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          </button>
        </div>


       

        {/* Fun interactive element */}
        <div className="relative">
          <div 
            className={`inline-flex items-center gap-2 text-gray-300 text-sm transition-all duration-300 ${
              isHovering ? 'text-yellow-400 scale-110' : ''
            }`}
          >
            <Zap className="animate-bounce" size={16} />
            <span>Click any button above to escape this dimension!</span>
            <Zap className="animate-bounce" size={16} />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-400/30 rounded-full animate-spin" />
      <div className="absolute top-20 right-20 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-pink-400/30 rounded-full animate-bounce" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-yellow-400/30 rounded-full animate-ping" />
    </div>
  );
}