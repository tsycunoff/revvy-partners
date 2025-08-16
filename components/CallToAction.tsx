import React, { useState } from 'react';

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    channel: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const channels = [
    'Маркетинговое агентство',
    'Блогер/Инфлюенсер',
    'Бизнес-консультант',
    'Веб-студия/Разработчик',
    'SaaS платформа',
    'Реселлер ПО',
    'Другое'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Присоединяйтесь прямо сейчас
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Готовы начать зарабатывать с Revvy?
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            Присоединяйтесь к сотням партнеров, которые уже получают стабильный доход, 
            помогая бизнесу расти. Заполните форму и получите доступ к партнерской программе.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Что вы получите после регистрации:
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: '🚀',
                    title: 'Мгновенный доступ',
                    description: 'Доступ к личному кабинету и реферальной ссылке в течение 24 часов'
                  },
                  {
                    icon: '📊',
                    title: 'Подробная аналитика',
                    description: 'Детальная статистика по переходам, конверсиям и доходам'
                  },
                  {
                    icon: '🎨',
                    title: 'Маркетинговые материалы',
                    description: 'Готовые баннеры, тексты и креативы для продвижения'
                  },
                  {
                    icon: '👨‍💼',
                    title: 'Персональный менеджер',
                    description: 'Индивидуальная поддержка и консультации по развитию'
                  },
                  {
                    icon: '💰',
                    title: 'Первые выплаты',
                    description: 'Получите первые комиссионные уже через месяц работы'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-gradient-to-br group-hover:from-[#0D6EFD] group-hover:to-blue-600 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFD]/20 to-blue-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                        {benefit.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#0D6EFD] transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-bold text-gray-900 mb-4">Почему выбирают нас:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-600 group">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="group-hover:text-gray-700 transition-colors duration-300">Более 70 активных партнеров</span>
                </div>
                <div className="flex items-center text-gray-600 group">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#0D6EFD]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="group-hover:text-gray-700 transition-colors duration-300">Топ-партнер заработал 1,4 млн ₽</span>
                </div>
                <div className="flex items-center text-gray-600 group">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors duration-300">
                    <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="group-hover:text-gray-700 transition-colors duration-300">Быстрые ежемесячные выплаты</span>
                </div>
                <div className="flex items-center text-gray-600 group">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors duration-300">
                    <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="group-hover:text-gray-700 transition-colors duration-300">Прозрачная PRM-отчетность</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 lg:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Заявка на участие
                  </h3>
                  <p className="text-gray-600">
                    Заполните форму, и мы свяжемся с вами в течение 24 часов
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D6EFD] focus:border-transparent transition-all duration-300"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D6EFD] focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Компания
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D6EFD] focus:border-transparent transition-all duration-300"
                      placeholder="Название компании"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D6EFD] focus:border-transparent transition-all duration-300"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="channel" className="block text-sm font-medium text-gray-700 mb-2">
                    Канал продвижения *
                  </label>
                  <select
                    id="channel"
                    name="channel"
                    required
                    value={formData.channel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D6EFD] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Выберите ваш тип деятельности</option>
                    {channels.map((channel) => (
                      <option key={channel} value={channel}>
                        {channel}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Дополнительная информация
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D6EFD] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Расскажите о своей аудитории, планах по продвижению или задайте вопросы..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#0D6EFD] to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-600 hover:to-indigo-600'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправляем заявку...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center">
                      Стать партнером
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="https://revvy.ai/privacy" target="_blank" rel="noopener noreferrer" className="text-[#0D6EFD] hover:underline">
                    политикой конфиденциальности
                  </a>,{' '}
                  <a href="#" className="text-[#0D6EFD] hover:underline">
                    условиями партнерской программы
                  </a>{' '}
                  и даёте{' '}
                  <a href="https://revvy.ai/consent-marketing-newsletter" target="_blank" rel="noopener noreferrer" className="text-[#0D6EFD] hover:underline">
                    согласие на обработку персональных данных
                  </a>
                </p>
              </form>
            ) : (
              // Success State
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Заявка отправлена!
                </h3>
                <p className="text-gray-600 mb-6">
                  Спасибо за интерес к нашей партнерской программе. 
                  Мы свяжемся с вами в течение 24 часов для обсуждения деталей.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Что дальше?</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Проверьте почту — мы отправили подтверждение</li>
                    <li>• Наш менеджер свяжется с вами для онбординга</li>
                    <li>• Получите доступ к партнерскому кабинету</li>
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href="https://revvy.ai"
                    className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors duration-300 text-center"
                  >
                    На главную
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        channel: '',
                        message: ''
                      });
                    }}
                    className="flex-1 bg-[#0D6EFD] text-white font-semibold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-300"
                  >
                    Новая заявка
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;