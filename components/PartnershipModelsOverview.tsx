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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Реферальная модель</h3>
                <p className="text-green-600 font-semibold">Рекомендуйте и получайте</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  До <span className="font-bold text-green-600">5 000 ₽ за каждого клиента</span>
                </p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  Не нужно проводить презентации или глубоко разбираться в продукте
                </p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  Достаточно просто <span className="font-bold text-green-600">порекомендовать Revvy</span> — мы сами доведём клиента до оплаты
                </p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  Формат для тех, кто хочет <span className="font-bold text-green-600">быстро заработать без лишних усилий</span>
                </p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Агентская модель</h3>
                <p className="text-[#0D6EFD] font-semibold">Продавайте и зарабатывайте</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#0D6EFD] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  До <span className="font-bold text-[#0D6EFD]">35% с каждого платежа клиента</span>
                </p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#0D6EFD] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  Вы доводите клиента до оплаты, а подключение и сопровождение берём на себя
                </p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#0D6EFD] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  Revvy даёт полную поддержку: обучение, материалы и помощь в закрытии сложных сделок
                </p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#0D6EFD] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  Формат для тех, кто хочет выйти на <span className="font-bold text-[#0D6EFD]">высокий и предсказуемый пассивный доход</span>
                </p>
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

        {/* Дополнительный блок */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 max-w-5xl mx-auto border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-gray-900">В любом формате Revvy усиливает ваш основной продукт.</span> 
            </p>
            <p className="text-gray-600">
              Работаете с локальным бизнесом? С Revvy вы предлагаете клиентам решение, которое укрепляет их позиции и увеличивает их прибыль — вместе с вами.
            </p>
          </div>
        </div>

        {/* Bottom stats - оставляем красивый блок */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 max-w-4xl mx-auto border border-blue-200">
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