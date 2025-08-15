
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-gray-50">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Готовы начать зарабатывать с Revvy?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Присоединяйтесь к сотням партнеров, которые уже получают стабильный доход, помогая бизнесу расти. Регистрация займет всего пару минут.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="bg-[#0D6EFD] text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-700 transition-colors transform hover:scale-105 inline-block"
          >
            Стать партнером сейчас
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;