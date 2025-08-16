import React, { useState } from 'react';

const HowItWorks: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'referral' | 'agent'>('referral');

  const referralSteps = [
    {
      icon: (
        <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ),
      title: 'Передаёте лид',
      description: 'Отправляете нам контакты потенциального клиента через PRM-систему',
      detailedDescription: 'Получайте согласие клиента голосом при работе, зашивайте в свои рекламные материалы, статьи и прочее просто ссылку с UTM-метками. Можете зарабатывать через любые каналы продвижения.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Мы работаем с клиентом',
      description: 'Наша команда продаж проводит переговоры и внедрение',
      detailedDescription: 'Продает наш отдел продаж, все делается прозрачно. В PRM видно текущий статус по лидам. Средняя конверсия ОП по входящим заявкам порядка 45%.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Клиент начинает работать',
      description: 'После первой оплаты клиента вы получаете фиксированное вознаграждение',
      detailedDescription: 'После получения оплаты от клиента статус в PRM меняется, и вам начисляется вознаграждение. Система автоматически фиксирует успешное подключение.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Получаете вознаграждение',
      description: 'Выплата от 2 500 до 5 000 ₽ в зависимости от количества лидов',
      detailedDescription: 'В начале месяца вам доступен отчет о начисленном вознаграждении за прошлый месяц и мы производим выплату. Полная прозрачность всех операций.',
    },
  ];

  const agentSteps = [
    {
      icon: (
        <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Проводите переговоры',
      description: 'Самостоятельно ведёте продажи и презентуете Revvy клиенту',
      detailedDescription: 'Проводите переговоры и презентации, доводите до выставления счета. Мы обучаем как это сделать эффективно, предоставляем все материалы для продаж.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Доводите до сделки',
      description: 'Сопровождаете клиента до выставления первого счёта',
      detailedDescription: 'Доводите клиента до выставления счета - когда он готов, передаете информацию нам, и мы выставляем клиенту счет. Полное сопровождение на этапе закрытия сделки.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Передаёте клиента',
      description: 'Наши менеджеры берут на себя внедрение и дальнейшее сопровождение',
      detailedDescription: 'Передаете нам на внедрение после оплаты - наши специалисты внедряют и занимаются последующим выставлением счетов при продлении. Вы освобождаетесь от рутины.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Получаете lifetime-комиссию',
      description: 'Зарабатываете 25-35% с каждого платежа клиента пожизненно',
      detailedDescription: 'Получаете ежемесячно комиссию при продлении (если остаетесь в нашей партнерской программе). Пассивный доход на всю жизнь с минимальными усилиями.',
    },
  ];

  const StepCard: React.FC<{ 
    icon: React.ReactNode; 
    title: string; 
    description: string; 
    detailedDescription: string;
    index: number;
  }> = ({ icon, title, description, detailedDescription, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsFlipped(true);
    };

    const handleBackClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsFlipped(false);
    };

    return (
      <div className="group perspective-1000 h-80 transition-all duration-500 hover:scale-105">
        <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}>
          {/* Front Side */}
          <div className={`absolute inset-0 w-full h-full backface-hidden bg-white p-6 rounded-3xl border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-2xl overflow-hidden ${
            isFlipped ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
          }`}>
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating Orb */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100 opacity-0"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0D6EFD] text-white rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-110">
                {index + 1}
              </div>
              
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300 group-hover:from-[#0D6EFD] group-hover:to-blue-600">
                  <div className="group-hover:[&>svg]:text-white transition-colors duration-300">
                    {icon}
                  </div>
                </div>
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#0D6EFD] transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {description}
                  </p>
                </div>

                {/* Кнопка подробнее */}
                {!isFlipped && (
                  <button
                    onClick={handleFlip}
                    className="mt-4 flex items-center text-[#0D6EFD] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4 self-start hover:text-blue-700"
                  >
                    <span>Подробнее</span>
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Border Animation */}
            <div className="absolute inset-0 rounded-3xl border-2 border-[#0D6EFD] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* Back Side */}
          <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-[#0D6EFD] to-blue-600 rounded-3xl shadow-2xl p-6 text-white flex flex-col justify-center ${
            isFlipped ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}>
            <div className="text-center">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4 border border-white/30">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-blue-100 mb-6">
                {detailedDescription}
              </p>
              {isFlipped && (
                <button
                  onClick={handleBackClick}
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-6 py-3 rounded-xl border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Назад
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Как это работает
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Выберите подходящую модель работы
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-8">
            Две модели сотрудничества для разных потребностей и возможностей
          </p>

          {/* Model Toggle - поднят выше */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-2xl inline-flex">
              <button
                onClick={() => setActiveModel('referral')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeModel === 'referral'
                    ? 'bg-white text-[#0D6EFD] shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Реферальная модель
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;