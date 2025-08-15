
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const BenefitCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-blue-100 p-2 rounded-full">
        <CheckIcon className="w-6 h-6 text-[#0D6EFD]" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{children}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Что вы получаете как партнер</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Мы создали все условия для вашего комфорта и высокого заработка</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard title="Высокая комиссия">
            Получайте до 35% с каждого платежа привлеченного клиента. Пожизненно.
          </BenefitCard>
          <BenefitCard title="Длительные Cookies">
            Cookie-файлы хранятся 90 дней. Вы получите комиссию, даже если клиент оплатит не сразу.
          </BenefitCard>
          <BenefitCard title="Прозрачная статистика">
            Отслеживайте переходы, регистрации и оплаты в реальном времени в удобном личном кабинете.
          </BenefitCard>
          <BenefitCard title="Маркетинговые материалы">
            Мы предоставляем готовые баннеры, креативы и тексты для эффективного продвижения.
          </BenefitCard>
          <BenefitCard title="Персональный менеджер">
            Ваш личный менеджер поможет с любыми вопросами и подскажет, как увеличить доход.
          </BenefitCard>
          <BenefitCard title="Регулярные выплаты">
            Стабильно выводите заработанные средства удобным для вас способом каждый месяц.
          </BenefitCard>
        </div>
      </div>
    </section>
  );
};

export default Benefits;