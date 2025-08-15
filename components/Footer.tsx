
import * as React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Возможности', href: 'https://revvy.ai/features' },
      { name: 'Интеграции', href: 'https://revvy.ai/integrations' },
      { name: 'Тарифы', href: 'https://revvy.ai/pricing' },
      { name: 'Кейсы клиентов', href: 'https://revvy.ai/cases' }
    ],
    partners: [
      { name: 'Стать партнером', href: '#join' },
      { name: 'Условия программы', href: '#' },
      { name: 'Калькулятор дохода', href: '#calculator' },
      { name: 'Личный кабинет', href: '#' }
    ],
    support: [
      { name: 'База знаний', href: '#' },
      { name: 'Техподдержка', href: 'mailto:support@revvy.ai' },
      { name: 'Партнерская поддержка', href: 'mailto:partners@revvy.ai' },
      { name: 'API документация', href: '#' }
    ],
    company: [
      { name: 'О компании', href: 'https://revvy.ai/about' },
      { name: 'Блог', href: 'https://revvy.ai/blog' },
      { name: 'Карьера', href: 'https://revvy.ai/careers' },
      { name: 'Контакты', href: 'https://revvy.ai/contacts' }
    ]
  };

  const socialLinks = [
    {
      name: 'Telegram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <a 
                href="https://revvy.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center"
              >
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[#0D6EFD] to-blue-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-[#0D6EFD] transition-all duration-300">
                  Revvy
                </span>
                <span className="ml-2 text-sm font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                  Partners
                </span>
              </a>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Помогаем бизнесу управлять репутацией и увеличивать лояльность клиентов. 
              Присоединяйтесь к нашей партнерской программе и зарабатывайте вместе с нами.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-[#0D6EFD]">70+</div>
                <div className="text-xs text-gray-500">партнеров</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#0D6EFD]">35%</div>
                <div className="text-xs text-gray-500">комиссия</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#0D6EFD]">90</div>
                <div className="text-xs text-gray-500">дней cookie</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#0D6EFD] hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Продукт
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#0D6EFD] transition-colors duration-300 text-sm group flex items-center"
                  >
                    {link.name}
                    <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Партнерам
            </h3>
            <ul className="space-y-2">
              {footerLinks.partners.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#0D6EFD] transition-colors duration-300 text-sm group flex items-center"
                  >
                    {link.name}
                    {link.name === 'Стать партнером' && (
                      <span className="ml-2 text-xs bg-[#0D6EFD] text-white px-2 py-0.5 rounded-full">
                        Новое
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Поддержка
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#0D6EFD] transition-colors duration-300 text-sm group flex items-center"
                  >
                    {link.name}
                    {link.href.startsWith('mailto:') && (
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Компания
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#0D6EFD] transition-colors duration-300 text-sm group flex items-center"
                  >
                    {link.name}
                    <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">
                Получайте новости партнерской программы
              </h3>
              <p className="text-gray-400 text-sm">
                Узнавайте первыми о новых возможностях заработка и обновлениях
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D6EFD] focus:border-transparent"
                />
                <button className="px-6 py-2 bg-[#0D6EFD] text-white font-semibold rounded-r-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0D6EFD] focus:ring-offset-2 focus:ring-offset-gray-800">
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; {currentYear} Revvy.ai. Все права защищены.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#0D6EFD] transition-colors duration-300">
                  Политика конфиденциальности
                </a>
                <a href="#" className="hover:text-[#0D6EFD] transition-colors duration-300">
                  Условия использования
                </a>
                <a href="#" className="hover:text-[#0D6EFD] transition-colors duration-300">
                  Договор оферты
                </a>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center text-sm text-gray-400">
              <span>Сделано с</span>
              <svg className="w-4 h-4 mx-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>в Москве</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;