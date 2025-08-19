import * as React from 'react';
import { CheckIcon } from './icons/CheckIcon';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  detailContent: React.ReactNode;
  delay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, children, detailContent, delay = 0 }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleCardClick = () => {
    setIsExpanded(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsExpanded(false);
    document.body.style.overflow = 'unset';
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        handleClose();
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isExpanded]);

  return (
    <>
      <div 
        className={`group relative bg-white p-8 rounded-3xl border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
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
          <div className={`mt-4 flex items-center text-[#0D6EFD] font-medium text-sm opacity-100 transition-all duration-300 transform ${
            isHovered ? 'translate-x-0' : 'translate-x-0'
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

      {/* Modal Overlay */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleClose}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 scale-100 opacity-100">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Закрыть"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-2xl">
                  {icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="px-8 pb-8">
              {detailContent}
            </div>

            {/* Modal Footer */}
            <div className="px-8 pb-8">
              <button
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-[#0D6EFD] to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Вернуться к преимуществам
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Benefits: React.FC = () => {
  const benefitsData = [
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      title: "Высокие выплаты",
      content: "Получайте до 35% с каждого платежа привлеченного клиента. Пожизненно.",
      detailContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Вы получаете реальный доход с каждого клиента, которого привели. Мы предлагаем две модели с разными подходами к выплатам.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="text-xl font-bold text-[#0D6EFD] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Агентская модель
              </h4>
              <p className="text-gray-700 mb-4">
                <strong>До 35% со всех платежей клиента</strong> на протяжении всего времени его работы с Revvy. 
                Это реальный долгосрочный доход: чем больше клиентов подключаете, тем стабильнее поток выплат.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>1–3 подключения:</span>
                  <span className="font-bold text-[#0D6EFD]">25% lifetime</span>
                </div>
                <div className="flex justify-between">
                  <span>4–14 подключений:</span>
                  <span className="font-bold text-[#0D6EFD]">30% lifetime</span>
                </div>
                <div className="flex justify-between">
                  <span>15+ подключений:</span>
                  <span className="font-bold text-[#0D6EFD]">35% lifetime</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h4 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                Реферальная модель
              </h4>
              <p className="text-gray-700 mb-4">
                <strong>Фиксированное вознаграждение за регистрацию клиента</strong> — простой и быстрый способ 
                заработать без глубокого вовлечения в процесс продаж.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>1–5 лидов:</span>
                  <span className="font-bold text-green-600">2 500 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>6–15 лидов:</span>
                  <span className="font-bold text-green-600">3 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>51+ лидов:</span>
                  <span className="font-bold text-green-600">5 000 ₽</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="text-gray-700">
              <strong>Всё прозрачно и предельно понятно:</strong> хотите строить процесс на постоянных выплатах — выбирайте агентский формат. 
              Нужно быстро и просто — работает рефералка.
            </p>
          </div>
        </div>
      )
    },
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      title: "Надёжное закрепление клиентов",
      content: "Все привлеченные клиенты надежно закрепляются за вами через PRM-систему на весь период сотрудничества.",
      detailContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Каждый привлечённый вами клиент фиксируется в системе за вашим аккаунтом навсегда. 
            Вы всегда уверены, что ваши усилия не пропадут зря и клиенты остаются именно вашими.
          </p>
          
          <div className="grid gap-4">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="w-8 h-8 bg-[#0D6EFD] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Постоянные начисления</h4>
                <p className="text-gray-700">
                  Клиент может менять тариф, увеличивать количество филиалов — все начисления всё равно будут идти вам.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Возврат клиентов</h4>
                <p className="text-gray-700">
                  Если клиент на время отключился, а потом именно вы вернули его — доход также продолжит идти.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Честные правила</h4>
                <p className="text-gray-700">
                  Если клиент ушёл и вернулся сам, без вашего участия, выплаты не возобновляются. 
                  Это честно и справедливо: мы платим за результат вашей работы, а не случайность.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      title: "Прозрачная статистика",
      content: "Отслеживайте переходы, регистрации и оплаты в реальном времени в удобном личном кабинете.",
      detailContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Полный контроль в личном кабинете — каждое действие фиксируется и отображается без задержек. 
            Это касается и агентской, и реферальной модели — цифры честные и понятные всегда.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-[#0D6EFD] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Реальное время</h4>
              <p className="text-gray-600 text-sm">
                Каждый переход, регистрация, оплата и продление фиксируются мгновенно
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">24/7 доступ</h4>
              <p className="text-gray-600 text-sm">
                Данные доступны круглосуточно, без задержек и догадок
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Детальная аналитика</h4>
              <p className="text-gray-600 text-sm">
                Эффективность трафика, точки роста и реальная экономика потока клиентов
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-3">Что можно отслеживать:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0D6EFD] rounded-full"></div>
                  <span className="text-gray-700">Количество переходов по ссылкам</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0D6EFD] rounded-full"></div>
                  <span className="text-gray-700">Конверсия в регистрации</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0D6EFD] rounded-full"></div>
                  <span className="text-gray-700">Статусы сделок</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0D6EFD] rounded-full"></div>
                  <span className="text-gray-700">Суммы начислений</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0D6EFD] rounded-full"></div>
                  <span className="text-gray-700">История выплат</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0D6EFD] rounded-full"></div>
                  <span className="text-gray-700">Прогнозы доходов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>,
      title: "Маркетинговые материалы",
      content: "Готовые баннеры, креативы, тексты и скрипты продаж для эффективного продвижения.",
      detailContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Всё, что нужно, чтобы стартовать без лишней подготовки. Выбираете свой формат и начинаете зарабатывать без лишних затрат времени.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#0D6EFD] mb-4">Для агентской модели</h4>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-[#0D6EFD] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Обучающие материалы</h5>
                    <p className="text-gray-600 text-sm">Курсы по продажам и презентации продукта</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-[#0D6EFD] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Скрипты продаж</h5>
                    <p className="text-gray-600 text-sm">Готовые сценарии для звонков и встреч</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-[#0D6EFD] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Кейсы клиентов</h5>
                    <p className="text-gray-600 text-sm">Реальные истории успеха для убедительности</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-[#0D6EFD] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Презентации продукта</h5>
                    <p className="text-gray-600 text-sm">Готовые слайды для демонстрации возможностей</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-600 mb-4">Для реферальной модели</h4>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Готовые баннеры</h5>
                    <p className="text-gray-600 text-sm">Разные размеры для всех площадок</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Креативы для рекламы</h5>
                    <p className="text-gray-600 text-sm">Готовые объявления для соцсетей</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Тексты постов</h5>
                    <p className="text-gray-600 text-sm">Готовый контент для блогов и каналов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Email-шаблоны</h5>
                    <p className="text-gray-600 text-sm">Готовые письма для рассылок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Бонус: персональная поддержка
            </h4>
            <p className="text-gray-700">
              Наша команда поможет адаптировать любые материалы под вашу аудиторию и создать уникальный контент, 
              если стандартные решения не подходят.
            </p>
          </div>
        </div>
      )
    },
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>,
      title: "Персональный менеджер",
      content: "Ваш личный менеджер поможет с любыми вопросами и подскажет, как увеличить доход.",
      detailContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            За каждым партнёром закрепляется персональный менеджер. Его задача — не просто отвечать на вопросы, 
            а помогать выстраивать стратегию, показывать лучшие практики и подсказывать, как эффективнее монетизировать поток клиентов.
          </p>
          
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-[#0D6EFD] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Стратегическое планирование</h4>
                <p className="text-gray-700 text-sm">
                  Поможем определить оптимальные каналы продвижения, целевую аудиторию и подходящую модель сотрудничества
                </p>
              </div>
              
              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Оптимизация результатов</h4>
                <p className="text-gray-700 text-sm">
                  Анализируем вашу статистику и даём конкретные рекомендации по улучшению конверсии и увеличению дохода
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Что включает поддержка:
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Еженедельные созвоны по результатам</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Помощь в настройке рекламных кампаний</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Обучение лучшим практикам продаж</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Разбор сложных клиентских ситуаций</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Консультации по ценообразованию</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Доступ к закрытому чату партнёров</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Время ответа</h4>
                  <p className="text-gray-700">
                    Ваш менеджер отвечает на сообщения в течение 4 рабочих часов. 
                    Экстренные вопросы решаются в течение часа.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <svg className="w-7 h-7 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>,
      title: "Регулярные выплаты",
      content: "Стабильно выводите заработанные средства удобным для вас способом каждый месяц.",
      detailContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Все начисления перечисляются официально, раз в месяц, в срок. Закрывающие документы и удобный формат оплаты 
            позволяют планировать доходы и не переживать за бухгалтерию.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ИП</h4>
              <p className="text-gray-600 text-sm">
                Работаем с индивидуальными предпринимателями
              </p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-[#0D6EFD] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ООО</h4>
              <p className="text-gray-600 text-sm">
                Заключаем договоры с юридическими лицами
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Самозанятый</h4>
              <p className="text-gray-600 text-sm">
                Принимаем чеки от самозанятых
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              График выплат и документооборот:
            </h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0D6EFD] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">До 12 числа каждого месяца</h5>
                    <p className="text-gray-600 text-sm">Предоставляем отчёт по начислениям за предыдущий месяц</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0D6EFD] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">До 15 числа</h5>
                    <p className="text-gray-600 text-sm">Вы выставляете счёт на основании нашего отчёта</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0D6EFD] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">До 25 числа</h5>
                    <p className="text-gray-600 text-sm">Производим оплату и высылаем закрывающие документы</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-2">Документы включают:</h5>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Акт выполненных работ</li>
                    <li>• Справка о налоговых удержаниях</li>
                    <li>• Детализированный отчёт по сделкам</li>
                    <li>• Подтверждение перевода средств</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Никаких задержек</h4>
                <p className="text-gray-700">
                  За 3 года работы партнерской программы не было ни одной задержки выплат. 
                  Мы ценим доверие партнеров и всегда соблюдаем договоренности.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
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
            Выстроили экосистему для максимального комфорта и высокого заработка наших партнеров. 
            Присоединяйтесь к сообществу профессионалов, которые выбирают качество и стабильность.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              detailContent={benefit.detailContent}
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