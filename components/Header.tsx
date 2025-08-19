import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#how-it-works", label: "Как работает" },
    { href: "#benefits", label: "Преимущества" },
    { href: "#calculator", label: "Калькулятор" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
            : 'bg-white/80 backdrop-blur-sm border-b border-gray-200/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo with animated gradient */}
            <a 
              href="https://revvy.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center space-x-2"
            >
              <div className="relative">
                <span className="text-3xl font-extrabold animated-gradient transition-all duration-300 group-hover:scale-105">
                  Revvy
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0D6EFD] to-blue-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
              <span className="hidden sm:inline-block text-sm font-medium text-gray-500 bg-blue-50 px-2 py-1 rounded-full">
                Partners
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-gray-600 hover:text-[#0D6EFD] transition-all duration-300 font-medium group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0D6EFD] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://revvy.prmonline.ru" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block text-gray-600 hover:text-[#0D6EFD] transition-all duration-300 font-medium relative group"
              >
                Вход
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0D6EFD] transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a 
                href="https://revvy.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block text-gray-600 hover:text-[#0D6EFD] transition-all duration-300 font-medium relative group"
              >
                Основной сайт
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0D6EFD] transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {/* Enhanced CTA Button */}
              <a
                href="#join"
                className="relative overflow-hidden bg-gradient-to-r from-[#0D6EFD] to-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                <span className="relative z-10">Стать партнером</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#0D6EFD] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-[#0D6EFD] hover:bg-gray-100 transition-all duration-300"
              >
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="py-4 space-y-2 border-t border-gray-200/50">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-600 hover:text-[#0D6EFD] hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-200/50">
                <a
                  href="https://revvy.prmonline.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-600 hover:text-[#0D6EFD] hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                >
                  Вход
                </a>
                <a
                  href="https://revvy.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-600 hover:text-[#0D6EFD] hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                >
                  Основной сайт
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Animated Gradient Styles */}
      <style>{`
        .animated-gradient {
          background: linear-gradient(45deg, #0D6EFD, #3b82f6, #60a5fa, #0D6EFD, #3b82f6, #60a5fa);
          background-size: 400% 400%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientFlow 3s ease-in-out infinite;
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        /* Hover effect for logo */
        .group:hover .animated-gradient {
          animation-duration: 1.5s;
        }
      `}</style>
    </>
  );
};

export default Header;