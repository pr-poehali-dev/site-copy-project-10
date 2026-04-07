import { useState } from 'react';
import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'О компании', href: '#about' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Почему Батуми', href: '#batumi' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Команда', href: '#team' },
  { label: 'Отзывы', href: '#reviews' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="4" fill="#1e3a5f"/>
                <path d="M16 4 L16 28 M4 16 L28 16 M8 8 L24 24 M24 8 L8 24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-iberia-dark text-lg leading-none">IBERIA</div>
              <div className="text-xs text-gray-500 leading-none">эксперты в недвижимости</div>
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-iberia-dark hover:text-iberia-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#consultation"
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-iberia-dark text-white text-sm font-semibold rounded-xl hover:bg-opacity-90 transition-all"
          >
            Консультация
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
          >
            <Icon name="Menu" size={20} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-iberia-dark hover:text-iberia-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consultation"
            className="mt-3 block text-center px-5 py-2.5 bg-iberia-dark text-white text-sm font-semibold rounded-xl"
          >
            Консультация
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
