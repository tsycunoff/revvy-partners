
import React from 'react';

const TargetAudienceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="border-t border-gray-200 py-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


const WhoIsItFor: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Для кого эта программа?</h2>
                <p className="mt-6 text-lg text-gray-600">
                    Наша партнерская программа идеально подходит для тех, кто работает с бизнесом и хочет предложить своим клиентам надежный инструмент для роста.
                </p>
                <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4b248b?q=80&w=1974&auto=format&fit=crop" 
                    alt="Partners collaborating" 
                    className="mt-8 rounded-2xl w-full object-cover aspect-video shadow-lg"
                />
            </div>
            <div>
                <TargetAudienceCard 
                    title="Маркетинговые агентства"
                    description="Расширьте спектр своих услуг и получайте дополнительный доход, предлагая Revvy своим клиентам для улучшения их онлайн-репутации."
                />
                <TargetAudienceCard 
                    title="Блогеры и инфлюенсеры"
                    description="Монетизируйте свою аудиторию, рекомендуя проверенный сервис для бизнеса. Мы предоставим все необходимые материалы."
                />
                 <TargetAudienceCard 
                    title="Бизнес-консультанты"
                    description="Повышайте ценность своих консультаций, советуя эффективное решение для работы с отзывами и ростом лояльности клиентов."
                />
                 <TargetAudienceCard 
                    title="Веб-студии и разработчики"
                    description="Интегрируйте Revvy в проекты своих клиентов и получайте пассивный доход, помогая им автоматизировать работу с отзывами."
                />
                <TargetAudienceCard 
                    title="SaaS в сфере food-tech"
                    description="Предлагайте Revvy вашим клиентам из ресторанного бизнеса как дополнительную ценность, чтобы помочь им управлять отзывами и привлекать больше гостей."
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
