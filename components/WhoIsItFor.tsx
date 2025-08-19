import * as React from 'react';

const TargetAudienceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="border-t border-gray-200 py-8 group transition-all duration-300 hover:border-blue-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#0D6EFD] transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
    </div>
);


const WhoIsItFor: React.FC = () => {
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

    const section = document.getElementById('who-is-it-for');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="who-is-it-for" className="py-20 sm:py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Для кого эта программа?</h2>
                <p className="mt-6 text-lg text-gray-600">
                    Наша партнерская программа идеально подходит для тех, кто работает с бизнесом и хочет предложить своим клиентам надежный инструмент для роста.
                </p>
                
                {/* Адаптивная картинка */}
                <div className="mt-8 relative">
                  <div className="aspect-square w-full max-w-lg mx-auto lg:ml-0 lg:mr-8 relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src="https://i.ibb.co/W4B0qh2K/partners-2.png$0" 
                      alt="Partners collaborating" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
            </div>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
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