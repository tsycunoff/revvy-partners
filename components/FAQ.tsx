
import React, { useState } from 'react';
import { ChevronIcon } from './icons/ChevronIcon';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <ChevronIcon
          className={`w-6 h-6 text-[#0D6EFD] transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
             <p className="pt-4 text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: 'Как отслеживаются мои рефералы?',
      answer:
        'Каждый партнер получает уникальную реферальную ссылку. Когда пользователь переходит по ней, мы устанавливаем cookie в его браузере на 90 дней. Все регистрации и оплаты, совершенные в течение этого периода, будут засчитаны вам.',
    },
    {
      question: 'Как и когда я смогу вывести деньги?',
      answer:
        'Выплаты производятся раз в месяц, в начале каждого календарного месяца, при достижении минимальной суммы в $50. Мы поддерживаем несколько способов вывода, включая банковский перевод и электронные кошельки.',
    },
    {
      question: 'Какие промо-материалы вы предоставляете?',
      answer:
        'В личном кабинете партнера вы найдете широкий выбор готовых материалов: баннеры разных размеров, тексты для постов в социальных сетях, email-шаблоны и кейсы наших клиентов, которые вы можете использовать.',
    },
    {
      question: 'Есть ли какие-то ограничения?',
      answer:
        'Запрещено использовать спам-методы для продвижения и регистрировать собственные аккаунты по своей реферальной ссылке. Также нельзя использовать контекстную рекламу с упоминанием бренда Revvy. Полный список правил доступен в личном кабинете.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Частые вопросы</h2>
        </div>
        <div>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;