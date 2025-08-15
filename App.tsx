
import * as React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import Benefits from './components/Benefits';
import Calculator from './components/Calculator';
import WhoIsItFor from './components/WhoIsItFor';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  React.useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden min-h-screen">
      {/* Header with improved sticky behavior */}
      <Header />
      
      {/* Main content */}
      <main className="pt-0">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* Partners Section */}
        <section id="partners">
          <Partners />
        </section>

        {/* Calculator Section */}
        <section id="calculator">
          <Calculator />
        </section>

        {/* Benefits Section */}
        <section id="benefits">
          <Benefits />
        </section>

        {/* Who Is It For Section */}
        <section id="who-is-it-for">
          <WhoIsItFor />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Call to Action Section */}
        <section id="join">
          <CallToAction />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Global Styles */}
      <style>{`
        /* Custom CSS Variables */
        :root {
          --primary-color: #0D6EFD;
          --primary-dark: #0b5ed7;
          --primary-light: #6ea8fe;
          --gray-50: #f9fafb;
          --gray-100: #f3f4f6;
          --gray-900: #111827;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--primary-color);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--primary-dark);
        }

        /* Animation classes */
        .animate-in {
          animation: slideInUp 0.8s ease-out forwards;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Focus styles */
        button:focus,
        a:focus,
        input:focus {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }

        /* Print styles */
        @media print {
          .no-print {
            display: none !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .text-gray-600 {
            color: #000000;
          }
          .text-gray-500 {
            color: #333333;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

// Back to Top Button Component
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`no-print fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#0D6EFD] text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0D6EFD] focus:ring-offset-2 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Вернуться наверх"
    >
      <svg
        className="w-6 h-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default App;
