
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 text-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
          Зарабатывайте вместе с <span className="text-[#0D6EFD]">Revvy</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Присоединяйтесь к нашей партнерской программе и получайте стабильный доход, рекомендуя лучшее решение для управления репутацией своим клиентам и аудитории.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="bg-[#0D6EFD] text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-700 transition-colors transform hover:scale-105 inline-block"
          >
            Присоединиться к программе
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;