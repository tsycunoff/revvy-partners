import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(13, 110, 253, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13, 110, 253, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13, 110, 253, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-sm font-medium text-[#0D6EFD] mb-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span>Более 70 активных партнеров уже зарабатывают с нами</span>
          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
          <span className="block animate-fade-in-up">Зарабатывайте вместе с</span>
          <span className="block bg-gradient-to-r from-[#0D6EFD] via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Revvy
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Присоединяйтесь к нашей партнерской программе и получайте{' '}
          <span className="font-bold text-[#0D6EFD]">до 35% пожизненно</span>{' '}
          с каждого клиента или{' '}
          <span className="font-bold text-green-600">до 5 000 ₽ за рекомендацию</span>
        </p>

        {/* Key Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center flex flex-col items-center">
            <div className="text-3xl font-extrabold text-[#0D6EFD] h-12 flex items-center justify-center">35%</div>
            <div className="text-sm text-gray-600">комиссия*</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="h-12 flex items-center justify-center">
              <svg className="w-9 h-9 text-[#0D6EFD]" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M492 176.6c-9.9 1.2-26.7 4.9-36.1 8.0-13.7 4.4-35.8 15.5-47.9 24.1-12.3 8.8-34.6 31.1-43.2 43.3-12.9 18.2-23.9 43.2-28.2 64.0-3.1 15.2-3.6 25.2-3.6 68.5v44.1l-5.9-0.4c-8.8-0.6-20.0 2.2-31.9 8.0-16.6 8.1-30.1 22.3-36.7 38.7-5.7 14.0-5.6 9.4-5.3 148.6l0.3 128.0 2.7 8.0c9.2 26.7 29.2 45.4 55.8 52.1 7.2 1.8 14.6 1.9 199.5 1.9 215.5 0 198.7 0.6 215.1-7.4 21.4-10.4 35.2-27.5 41.7-51.6 2.1-7.9 2.1-8.9 2.3-118.5 0-60.8-0.2-119.1-0.6-129.5-0.6-17.0-1.0-19.8-3.4-27.0-7.0-20.6-21.7-36.1-42.6-45.2-8.1-3.5-24.5-6.8-29.7-6.0l-3.1 0.5-0.5-49.6c-0.4-49.2-0.4-49.8-3.0-61.8-3.5-16.1-7.5-27.2-15.2-42.9-8.3-16.7-17.2-29.0-31.5-43.8-26.7-27.7-57.0-44.2-94.5-51.7-8.7-1.8-15.2-2.3-31.0-2.5-11.0-0.2-21.6-0.1-23.5 0.1zm32.5 65.5c24.4 3.0 47.7 14.1 65.4 31.3 18.3 17.7 29.1 36.8 34.3 61.1 0.9 4.4 1.3 17.9 1.3 50.0v44.0l-113.4 0-113.5 0 0.1-43.5c0.1-39.5 0.3-44.4 2.1-53.1 4.4-21.2 13.8-38.4 30.2-54.9 10.7-10.8 19.1-17.0 31.5-23.3 9.4-4.7 23.3-9.2 32.5-10.6 4.1-0.6 8.6-1.3 10.0-1.5 5.1-0.7 10.7-0.6 19.5 0.5zm5.8 285.2c10.6 5.2 18.3 13.1 23.8 24.1 3.9 7.9 4.2 9.3 4.7 18.4 0.8 17.0-4.0 28.5-17.1 40.8-4.3 4.0-8.3 7.4-8.9 7.4-0.5 0-0.7 0.8-0.4 1.7 0.9 3.2 11.6 90.0 11.6 94.5 0 2.4-0.7 5.4-1.6 6.6-3.3 4.8-5.6 5.2-31.1 5.2-21.5 0-24.1-0.2-26.9-1.9-6.4-3.9-6.4-3.2 0-56.9 5.0-42.2 5.6-48.6 4.3-49.4-4.7-2.6-13.0-10.6-16.5-15.8-14.1-21.0-11.6-46.8 6.2-64.6 10.5-10.5 20.4-14.5 34.7-14.1 8.8 0.2 10.3 0.6 17.2 4.0z"/>
              </svg>
            </div>
            <div className="text-sm text-gray-600">закрепление сделок</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="text-3xl font-extrabold text-[#0D6EFD] h-12 flex items-center justify-center">∞</div>
            <div className="text-sm text-gray-600">пожизненно</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#join"
            className="group relative overflow-hidden bg-gradient-to-r from-[#0D6EFD] to-blue-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center">
              Стать партнёром Revvy
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="#calculator"
            className="group flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Рассчитать доход
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Без скрытых комиссий
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Прозрачные выплаты
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Персональная поддержка
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            * Процент зависит от вашего уровня в агентской модели
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;