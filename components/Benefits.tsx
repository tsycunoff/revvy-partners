
import * as React from 'react';
import { CheckIcon } from './icons/CheckIcon';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, children, delay = 0 }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`group relative bg-white p-8 rounded-3xl border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Floating Orb */}
      <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl transition-all duration-700 ${
        isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
      }`}></div>

      <div className="relative z-10">
        {/* Icon Container */}
        <div className={`flex items-center gap-4 mb-6 transition-all duration-300 ${
          isHovered ? 'transform translate-x-2' : ''
        }`}>
          <div className={`relative bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-2xl transition-all duration-300 group-hover:shadow-lg ${
            isHovered ? 'scale-110 rotate-3' : ''
          }`}>
            {icon}
            {/* Icon Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-[#0D6EFD]/20 to-blue-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </div>
          
          <h3 className={`text-xl font-bold text-gray-900 transition-all duration-300 ${
            isHovered ? 'text-[#0D6EFD]' : ''
          }`}>
            {title}
          </h3>
        </div>

        {/* Content */}
        <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
          isHovered ? 'text-gray-700' : ''
        }`}>
          {children}
        </p>

        {/* Hover Indicator */}
        <div className={`mt-4 flex items-center text-[#0D6EFD] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
          isHovered ? 'translate-x-0' : 'translate-x-4'
        }`}>
          <span>Подробнее</span>
          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Border Animation */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-[#0D6EFD] opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefitsData = [
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      title: "Высокая комиссия",
      content: "Получайте до 35% с каждого платежа привлеченного клиента. Пожизненно.",
    },
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      title: "Длительные Cookies",
      content: "Cookie-файлы хранятся 90 дней. Вы получите комиссию, даже если клиент оплатит не сразу.",
    },
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      title: "Прозрачная статистика",
      content: "Отслеживайте переходы, регистрации и оплаты в реальном времени в удобном личном кабинете.",
    },
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>,
      title: "Маркетинговые материалы",
      content: "Мы предоставляем готовые баннеры, креативы и тексты для эффективного продвижения.",
    },
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>,
      title: "Персональный менеджер",
      content: "Ваш личный менеджер поможет с любыми вопросами и подскажет, как увеличить доход.",
    },
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>,
      title: "Регулярные выплаты",
      content: "Стабильно выводите заработанные средства удобным для вас способом каждый месяц.",
    },
  ];

  return (
    <section id="benefits" className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Партнерские преимущества
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Что вы получаете как партнер
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Мы создали все условия для вашего комфорта и высокого заработка. 
            Присоединяйтесь к экосистеме успешных партнеров.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              delay={index * 100}
            >
              {benefit.content}
            </BenefitCard>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-[#0D6EFD] to-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
              <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20 opacity-50"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Готовы начать зарабатывать?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к программе прямо сейчас и получите доступ ко всем инструментам и поддержке нашей команды.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#join"
                  className="group bg-white text-[#0D6EFD] font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="flex items-center">
                    Стать партнером
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                
                <a
                  href="#calculator"
                  className="group border-2 border-white/30 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Рассчитать доход
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-blue-100">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Быстрая регистрация
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Без вложений
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Поддержка 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;