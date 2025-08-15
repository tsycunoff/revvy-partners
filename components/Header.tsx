
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
            <a href="https://revvy.ai" target="_blank" rel="noopener noreferrer" className="text-3xl font-extrabold text-[#0D6EFD]">
                Revvy
            </a>
            <div className="hidden lg:flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-[#0D6EFD] transition-colors">Возможности</a>
                <a href="#" className="text-gray-600 hover:text-[#0D6EFD] transition-colors">Интеграции</a>
                <a href="#" className="text-gray-600 hover:text-[#0D6EFD] transition-colors">Направления</a>
                <a href="#" className="text-gray-600 hover:text-[#0D6EFD] transition-colors">Блог</a>
                <a href="#" className="text-gray-600 hover:text-[#0D6EFD] transition-colors">О нас</a>
            </div>
            <div className="flex items-center space-x-4">
            <a href="#" className="hidden sm:block text-gray-600 hover:text-[#0D6EFD] transition-colors font-medium">
                Вход
            </a>
            <a
                href="#"
                className="bg-[#0D6EFD] text-white font-bold py-2 px-5 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition-colors"
            >
                Стать партнером
            </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
