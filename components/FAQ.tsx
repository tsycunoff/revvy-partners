
import * as React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState(0);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div 
      className={`group border border-gray-200 rounded-2xl transition-all duration-500 hover:shadow-lg ${
        isOpen ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-md' : 'bg-white hover:border-gray-300'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        className="w-full flex justify-between items-center text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#0D6EFD] focus:ring-opacity-50 rounded-2xl"
        onClick={onClick}
      >
        <div className="flex items-center flex-1">
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
            isOpen 
              ? 'bg-[#0D6EFD] text-white scale-110' 
              : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-[#0D6EFD]'
          }`}>
            {index + 1}
          </div>
          <h3 className={`ml-4 text-lg font-semibold transition-all duration-300 ${
            isOpen ? 'text-[#0D6EFD]' : 'text-gray-900 group-hover:text-[#0D6EFD]'
          }`}>
            {question}
          </h3>
        </div>
        
        <div className={`flex-shrink-0 ml-4 transition-all duration-500 ${
          isOpen ? 'transform rotate-180' : 'transform rotate-0'
        }`}>
          <svg 
            className={`w-6 h-6 transition-colors duration-300 ${
              isOpen ? 'text-[#0D6EFD]' : 'text-gray-400 group-hover:text-[#0D6EFD]'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          height: isOpen ? `${contentHeight}px` : '0px',
        }}
      >
        <div ref={contentRef} className="px-6 pb-6">
          <div className={`pl-12 transition-all duration-500 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-gray-600 leading-relaxed">{answer}</p>
            
            {/* Additional help links for specific questions */}
            {index === 0 && (
              <div className="mt-4 flex items-center text-sm text-[#0D6EFD] hover:text-blue-700 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <a href="https://revvy.prmonline.ru" target="_blank" rel="noopener noreferrer" className="hover:underline">Посмотреть PRM-систему</a>
              </div>
            )}
            
            {index === 1 && (
              <div className="mt-4 flex items-center text-sm text-[#0D6EFD] hover:text-blue-700 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <a href="#" className="hover:underline">Шаблон договора</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('faq-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const faqData = [
    {
      question: 'Как отслеживаются мои рефералы?',
      answer: 'После перехода по ссылке и заполнения формы создается заявка в CRM-системе. Статус всех заявок можно прозрачно отслеживать через нашу PRM-систему в режиме реального времени.',
    },
    {
      question: 'Как и когда я смогу вывести деньги?',
      answer: 'Выплаты производятся раз в месяц по выставленному счету от ИП, ООО или самозанятого. Счет выставляется на основе предоставляемого отчета с нашей стороны. Отчет предоставляется не позднее 12 числа каждого месяца за предшествующий месяц.',
    },
    {
      question: 'Какие промо-материалы вы предоставляете?',
      answer: 'В личном кабинете партнера вы найдете обширную библиотеку готовых материалов: баннеры разных размеров, адаптированные для различных платформ, готовые тексты для постов в социальных сетях, email-шаблоны для рассылок, презентации продукта, кейсы успешных клиентов, скрипты продаж и редакционную политику. Все материалы регулярно обновляются.',
    },
    {
      question: 'Есть ли какие-то ограничения?',
      answer: 'Не допускается введение клиентов в заблуждение касаемо функционала продукта, запрещены спам-методы продвижения. Полный перечень ограничений есть в редакционной политике, а в договоре прописаны полные условия работы.',
    },
    {
      question: 'Когда я получу первую выплату?',
      answer: 'В реферальной схеме — после того как клиент, переданный вами, начнёт работать с Revvy и внесёт оплату. В агентской модели — комиссия начисляется с первого платежа клиента.',
    },
    {
      question: 'Что значит lifetime-выплаты?',
      answer: 'Вы получаете процент с каждого платежа клиента на протяжении всего времени его работы с Revvy при активном статусе партнёра.',
    },
    {
      question: 'Что будет, если клиент перестанет платить?',
      answer: 'Выплаты прекращаются, но возобновятся, если клиент вернётся. Соответственно, вы можете сами поспособствовать его скорейшему возврату к работе с сервисом.',
    },
    {
      question: 'Можно ли работать без ИП/юрлица?',
      answer: 'Все выплаты производятся только либо на расчётный счёт юрлица или ИП, либо для самозанятых.',
    },
    {
      question: 'Как закрепляется клиент за мной?',
      answer: 'Через PRM-систему: вы передаёте данные клиента, система фиксирует их, и он закрепляется за вами на весь период сотрудничества.',
    },
    {
      question: 'Что будет, если 6 месяцев нет подключений?',
      answer: 'Статус партнёра деактивируется, и выплаты по текущим клиентам прекращаются.',
    },
    {
      question: 'Можно ли отслеживать эффективность разных каналов?',
      answer: 'Конечно! Вы можете создавать различные UTM-метки для разных каналов продвижения и отслеживать их эффективность отдельно. В личном кабинете доступна подробная аналитика по источникам трафика, конверсиям и доходности каждого канала.',
    },
    {
      question: 'Предоставляете ли вы обучение партнерам?',
      answer: 'Да, мы проводим регулярные вебинары для партнеров, где рассказываем о лучших практиках продвижения, новых функциях продукта и стратегиях увеличения конверсии. Также у каждого партнера есть персональный менеджер, который поможет с вопросами и даст рекомендации по оптимизации.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Ответы на вопросы
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Частые вопросы
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Собрали ответы на самые популярные вопросы от наших партнеров. 
            Не нашли ответ? Напишите нам!
          </p>
        </div>

        {/* FAQ Items */}
        <div className={`space-y-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0D6EFD] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-bold text-gray-900">Остались вопросы?</h3>
                  <p className="text-gray-600 text-sm">Наша команда готова помочь</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <a
                  href="mailto:partners@revvy.ai"
                  className="group flex items-center px-6 py-3 bg-[#0D6EFD] text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Написать email
                </a>
                
                <a
                  href="#"
                  className="group flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 0.869,-7.314 0,-11.398c-0.082,-0.383 -0.354,-0.699 -0.724,-0.84c-0.37,-0.141 -0.785,-0.083 -1.107,0.145L12,14.779L5.616,9.991c-0.322,-0.228 -0.737,-0.285 -1.107,-0.145C4.139,10.006 3.867,10.322 3.785,10.705c-0.869,4.084 -0.869,7.314 0,11.398c0.082,0.383 0.354,0.699 0.724,0.84c0.37,0.141 0.785,0.083 1.107,-0.145L12,17.221L18.384,22.779z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
