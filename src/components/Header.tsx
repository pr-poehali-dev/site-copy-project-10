import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { openConsult } from '@/components/ConsultModal';

const navLinks = [
  { label: 'О компании', href: '#about' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Почему Батуми', href: '#batumi' },
  { label: 'Каталог', href: '#projects' },
  { label: 'Команда', href: '#team' },
  { label: 'Отзывы', href: '#reviews' },
];

const scrollToSection = (href: string) => {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

interface HeaderProps {
  backLink?: boolean;
}

const Header = ({ backLink = false }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    if (backLink) {
      sessionStorage.setItem('scrollTarget', href.replace('#', ''));
      navigate('/');
    } else {
      scrollToSection(href);
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/73703746-f374-48ae-820b-9925f900d621.png"
            alt="Saginadze Estate"
            className="h-10 w-auto"
          />
          <div className="flex flex-col leading-tight">
            <span
              className="font-bold tracking-widest uppercase text-base"
              style={{ color: '#C9A84C', fontFamily: "'Cinzel', serif", letterSpacing: '0.12em' }}
            >
              Saginadze
            </span>
            <span
              className="font-light tracking-[0.3em] uppercase text-xs"
              style={{ color: '#A07830', fontFamily: "'Cinzel', serif" }}
            >
              Estate
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-iberia-dark hover:text-iberia-orange transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openConsult}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-iberia-orange text-white text-sm font-semibold rounded-xl hover:bg-[#e26e60] transition-all"
          >
            <Icon name="MessageCircle" size={16} />
            Консультация
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition"
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-white border-t border-gray-100 px-6 py-4">
          {backLink && (
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-2.5 text-sm font-medium text-iberia-dark hover:text-iberia-orange mb-1"
            >
              <Icon name="ArrowLeft" size={14} />
              Назад к проектам
            </Link>
          )}
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-2.5 text-sm font-medium text-iberia-dark hover:text-iberia-orange"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { openConsult(); setMenuOpen(false); }}
            className="mt-3 w-full text-center px-5 py-2.5 bg-iberia-orange text-white text-sm font-semibold rounded-xl"
          >
            Консультация
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
