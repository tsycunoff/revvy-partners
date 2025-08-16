
import * as React from 'react';

const HowItWorks: React.FC = () => {
  const [activeModel, setActiveModel] = React.useState<'referral' | 'agent'>('referral');

  const referralSteps = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: 'Передаёте лид',
      description: 'Отправляете нам контакты потенциального клиента через PRM-систему',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Мы работаем с клиентом',
      description: 'Наша команда продаж проводит переговоры и внедрение',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Клиент начинает работать',
      description: 'После первой оплаты клиента вы получаете фиксированное вознаграждение',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Получаете вознаграждение',
      description: 'Выплата от 2 500 до 5 000 ₽ в зависимости от количества лидов',
    },
  ];

  const agentSteps = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Проводите переговоры',
      description: 'Самостоятельно ведёте продажи и презентуете Revvy клиенту',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Доводите до сделки',
      description: 'Сопровождаете клиента до выставления первого счёта',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Передаёте клиента',
      description: 'Наши менеджеры берут на себя внедрение и дальнейшее сопровождение',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Получаете lifetime-комиссию',
      description: 'Зарабатываете 25-35% с каждого платежа клиента пожизненно',
    },
  ];

  const StepCard: React.FC<{ icon: React.ReactNode; title: string; description: string; index: number }> = ({ 
    icon, title, description, index 
  }) => (
    <div className="relative bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group">
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0D6EFD] text-white rounded-full flex items-center justify-center text-sm font-bold">
        {index + 1}
      </div>
      
      <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#0D6EFD] transition-colors duration-300">
          <div className="group-hover:[&>svg]:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#0D6EFD] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Как это работает
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Выберите подходящую модель работы
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Две схемы сотрудничества для разных потребностей и возможностей
          </p>
        </div>

        {/* Model Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-2xl inline-flex">
            <button
              onClick={() => setActiveModel('referral')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeModel === 'referral'
                  ? 'bg-white text-[#0D6EFD] shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Реферальная схема
            </button>
            <button
              onClick={() => setActiveModel('agent')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeModel === 'agent'
                  ? 'bg-white text-[#0D6EFD] shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Агентская модель
            </button>
          </div>
        </div>

        {/* Model Description */}
        <div className="text-center mb-12">
          {activeModel === 'referral' ? (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Передаёте нам лид — получаете разовое вознаграждение
              </h3>
              <p className="text-gray-600 mb-6">
                Мы берём на себя продажи и внедрение. Вы получаете фиксированный бонус за каждого клиента, который начал работать с Revvy.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-xl p-4 border border-green-200">
                  <div className="font-bold text-gray-900">1–5 лидов</div>
                  <div className="text-2xl font-extrabold text-green-600">2 500 ₽</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-green-200">
                  <div className="font-bold text-gray-900">6–15 лидов</div>
                  <div className="text-2xl font-extrabold text-green-600">3 000 ₽</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-green-200">
                  <div className="font-bold text-gray-900">16–25 лидов</div>
                  <div className="text-2xl font-extrabold text-green-600">3 500 ₽</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-green-200">
                  <div className="font-bold text-gray-900">26–35 лидов</div>
                  <div className="text-2xl font-extrabold text-green-600">4 000 ₽</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-green-200">
                  <div className="font-bold text-gray-900">36–50 лидов</div>
                  <div className="text-2xl font-extrabold text-green-600">4 500 ₽</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-green-200">
                  <div className="font-bold text-gray-900">51+ лидов</div>
                  <div className="text-2xl font-extrabold text-green-600">5 000 ₽</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Продаёте наш сервис — получаете комиссию с каждого платежа клиента на протяжении всего сотрудничества
              </h3>
              <p className="text-gray-600 mb-6">
                Вы доводите клиента до выставления первого счёта, а дальше с ним работают наши аккаунт-менеджеры.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="font-bold text-gray-900">1–3 подключения</div>
                  <div className="text-2xl font-extrabold text-[#0D6EFD]">25% lifetime</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="font-bold text-gray-900">4–14 подключений</div>
                  <div className="text-2xl font-extrabold text-[#0D6EFD]">30% lifetime</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="font-bold text-gray-900">15+ подключений</div>
                  <div className="text-2xl font-extrabold text-[#0D6EFD]">35% lifetime</div>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-xl p-4 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Почему это выгодно:</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold text-[#0D6EFD]">Средний чек:</span><br/>
                    7 836 ₽/месяц
                  </div>
                  <div>
                    <span className="font-semibold text-[#0D6EFD]">Средний срок:</span><br/>
                    26 месяцев
                  </div>
                  <div>
                    <span className="font-semibold text-[#0D6EFD]">Доход с клиента:</span><br/>
                    до 71 360 ₽*
                  </div>
                  <div>
                    <span className="font-semibold text-[#0D6EFD]">Отчётность:</span><br/>
                    revvy.prmonline.ru
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * При комиссии 35% и среднем сроке работы клиента
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(activeModel === 'referral' ? referralSteps : agentSteps).map((step, index) => (
            <StepCard key={`${activeModel}-${index}`} {...step} index={index} />
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 max-w-4xl mx-auto">
            <h4 className="font-bold text-amber-800 mb-2">Условия партнёрства:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-amber-700">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Если 6 месяцев нет подключений — партнёрство прекращается
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Вся работа только через PRM для прозрачности
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Выплаты безналично, на основании акта и счёта
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
