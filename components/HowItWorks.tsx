
import React from 'react';
import { RegistrationIcon } from './icons/RegistrationIcon';
import { LinkIcon } from './icons/LinkIcon';
import { RecommendIcon } from './icons/RecommendIcon';
import { IncomeIcon } from './icons/IncomeIcon';

const StepCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full text-center shadow-sm">
    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <RegistrationIcon className="w-8 h-8 text-[#0D6EFD]" />,
      title: 'Быстрая регистрация',
      description: 'Заполните простую форму, чтобы присоединиться к программе. Это займет не больше двух минут.',
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-[#0D6EFD]" />,
      title: 'Получите ссылку',
      description: 'В личном кабинете вы найдете свою уникальную партнерскую ссылку и промо-материалы.',
    },
    {
      icon: <RecommendIcon className="w-8 h-8 text-[#0D6EFD]" />,
      title: 'Рекомендуйте Revvy',
      description: 'Делитесь ссылкой со своей аудиторией, клиентами или размещайте на своих ресурсах.',
    },
    {
      icon: <IncomeIcon className="w-8 h-8 text-[#0D6EFD]" />,
      title: 'Получайте доход',
      description: 'Зарабатывайте пожизненный процент с каждого платежа привлеченного вами клиента.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Как это работает?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Всего 4 простых шага к вашему стабильному доходу</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StepCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;