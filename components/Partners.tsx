import React from 'react';

const PartnerCard: React.FC<{ name: string; description: string }> = ({ name, description }) => (
    <div className="bg-white h-28 rounded-2xl shadow-sm transition-shadow hover:shadow-md flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front p-4">
                <span className="text-gray-700 font-bold text-lg text-center">{name}</span>
            </div>
            <div className="flip-card-back p-4">
                <p className="text-white text-sm">{description}</p>
            </div>
        </div>
    </div>
);

const Partners: React.FC = () => {
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

    return (
        <section className="py-20 sm:py-24 bg-gray-50 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1">
                        <p className="text-sm font-bold uppercase text-[#0D6EFD] tracking-widest">Партнёры</p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">Нам доверяют</h2>
                        <p className="mt-4 text-lg text-gray-600">С нами уже больше 70 партнёров. Вот лишь некоторые из них:</p>
                    </div>
                    <div className="lg:col-span-2 mt-8 lg:mt-0">
                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {partnerList.map(partner => <PartnerCard key={partner.name} {...partner} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;