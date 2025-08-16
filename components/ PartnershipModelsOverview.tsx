import React from 'react';

const PartnershipModelsOverview: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Выбирайте, как зарабатывать с Revvy
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Две модели сотрудничества для разных потребностей и возможностей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Реферальная модель */}
          <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Реферальная модель</h3>
                <p className="text-green-600 font-semibold">Рекомендуйте и получайте</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Передаёте нам лид — получаете разовое вознаграждение. 
              Мы берём на себя продажи и внедрение.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">1–5 лидов</span>
                <span className="text-lg font-bold text-green-600">2 500 ₽</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">6–15 лидов</span>
                <span className="text-lg font-bold text-green-600">3 000 ₽</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg border border-green-200">
                <span className="text-sm font-medium text-gray-700">51+ лидов</span>
                <span className="text-xl font-extrabold text-green-600">5 000 ₽</span>
              </div>
            </div>

            <div className="text-center">
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Быстрый старт
              </span>
            </div>
          </div>

          {/* Агентская модель */}
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Агентская модель</h3>
                <p className="text-[#0D6EFD] font-semibold">Продавайте и зарабатывайте</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Продаёте наш сервис — получаете комиссию с каждого платежа клиента 
              на протяжении всего сотрудничества.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">1–3 подключения</span>
                <span className="text-lg font-bold text-[#0D6EFD]">25% lifetime</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">4–14 подключений</span>
                <span className="text-lg font-bold text-[#0D6EFD]">30% lifetime</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg border border-blue-200">
                <span className="text-sm font-medium text-gray-700">15+ подключений</span>
                <span className="text-xl font-extrabold text-[#0D6EFD]">35% lifetime</span>
              </div>
            </div>

            <div className="text-center">
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-[#0D6EFD] text-sm font-medium rounded-full">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Максимальный доход
              </span>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-semibold text-gray-900">Средний чек клиента:</span> 7 836 ₽/месяц • 
              <span className="font-semibold text-gray-900"> Средний срок работы:</span> 26 месяцев
            </p>
            <p className="text-lg font-bold text-[#0D6EFD]">
              Потенциальный доход с одного клиента при 35%: до 71 360 ₽
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipModelsOverview;