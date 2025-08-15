
import * as React from 'react';

interface PartnerCardProps {
  name: string;
  description: string;
  delay?: number;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ name, description, delay = 0 }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`group perspective-1000 h-32 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center p-4 group-hover:shadow-lg transition-shadow duration-300">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-700 group-hover:text-[#0D6EFD] transition-colors duration-300">
              {name}
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#0D6EFD] to-blue-400 mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#0D6EFD] to-blue-600 rounded-2xl shadow-lg flex items-center justify-center p-4 text-white">
          <p className="text-sm text-center leading-relaxed opacity-95">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Partners: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const partnerList = [
    { name: "Starter", description: "Интегратор CRM-систем и IT-решений для автоматизации бизнеса." },
    { name: "Get it", description: "Платформа для автоматизации доставки и логистики в ресторанном бизнесе." },
    { name: "Лемма", description: "Разработчик программного обеспечения для автоматизации ресторанного бизнеса и ритейла." },
    { name: "Docs in Box", description: "Сервис электронного документооборота, специализирующийся на работе с поставщиками HoReCa." },
    { name: "Нет монет", description: "Популярный сервис для безналичных чаевых и отзывов в сфере услуг." },
    { name: "iiko", description: "Одна из ведущих систем автоматизации для ресторанов, кафе и баров." },
    { name: "R-keeper", description: "Надежная и многофункциональная система управления для ресторанного бизнеса." },
    { name: "Goulyash Tech", description: "IT-компания, создающая технологические решения для улучшения клиентского опыта." },
    { name: "Яндекс", description: "Крупнейшая технологическая компания, предоставляющая бизнесу рекламные и облачные сервисы." },
    { name: "Медрокет", description: "Платформа для автоматизации и управления медицинскими клиниками и центрами." },
    { name: "Nekassir", description: "Разработчик облачных кассовых решений и систем учета для малого и среднего бизнеса." },
    { name: "Premium Bonus", description: "Платформа для создания и управления программами лояльности и бонусами для клиентов." }
  ];

  const testimonials = [
    {
      name: "Александр К.",
      company: "Starter",
      text: "За 6 месяцев работы привлек 25 клиентов. Средний доход составляет 180К в месяц. Отличная поддержка и прозрачная отчетность.",
      revenue: "180K ₽/мес"
    },
    {
      name: "Мария Т.",
      company: "Digital Agency",
      text: "Revvy отлично дополняет наши услуги. Клиенты довольны результатами, а мы получаем стабильный дополнительный доход.",
      revenue: "120K ₽/мес"
    },
    {
      name: "Дмитрий П.",
      company: "Food-tech Blog",
      text: "Как блогер в сфере ресторанного бизнеса, легко рекомендую Revvy своей аудитории. Конверсия высокая, выплаты стабильные.",
      revenue: "95K ₽/мес"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left Column - Header & Stats */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Наши партнеры
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Нам доверяют лидеры рынка
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                С нами уже работают более 70 партнеров из разных сфер. 
                Вот лишь некоторые из них:
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                  <div className="text-2xl font-extrabold text-[#0D6EFD]">70+</div>
                  <div className="text-sm text-gray-600">партнеров</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                  <div className="text-2xl font-extrabold text-[#0D6EFD]">₽2.5M</div>
                  <div className="text-sm text-gray-600">выплачено</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                  <div className="text-2xl font-extrabold text-[#0D6EFD]">95%</div>
                  <div className="text-sm text-gray-600">удовлетворены</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                  <div className="text-2xl font-extrabold text-[#0D6EFD]">24/7</div>
                  <div className="text-sm text-gray-600">поддержка</div>
                </div>
              </div>

              {/* Testimonial Carousel */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Отзывы партнеров</h3>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTestimonial ? 'bg-[#0D6EFD] w-6' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="relative overflow-hidden h-40">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === currentTestimonial 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-full'
                      }`}
                    >
                      <blockquote className="text-sm text-gray-600 mb-4 italic">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-xs text-gray-500">{testimonial.company}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[#0D6EFD]">{testimonial.revenue}</div>
                          <div className="text-xs text-gray-500">доход</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Partners Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {partnerList.map((partner, index) => (
                <PartnerCard 
                  key={partner.name} 
                  {...partner} 
                  delay={index * 50}
                />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Хотите присоединиться к этому списку?
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Станьте частью нашего партнерского сообщества и начните зарабатывать уже сегодня
                </p>
                <a
                  href="#join"
                  className="inline-flex items-center px-6 py-3 bg-[#0D6EFD] text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Стать партнером
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
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

export default Partners;
