
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex-shrink-0">
            <a href="https://revvy.ai" target="_blank" rel="noopener noreferrer" className="text-3xl font-extrabold text-[#0D6EFD]">
                Revvy
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="https://revvy.ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0D6EFD] transition-colors">Основной сайт</a>
            <a href="#" className="text-gray-600 hover:text-[#0D6EFD] transition-colors">Условия программы</a>
            <a href="#" className="text-gray-600 hover:text-[#0D6EFD] transition-colors">Вход для партнеров</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Revvy.ai. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
