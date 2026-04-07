import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-iberia-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-3 mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="6" fill="#4a9c3f"/>
              <path d="M20 5 L20 35 M5 20 L35 20 M9 9 L31 31 M31 9 L9 31" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <div className="text-left">
              <div className="font-bold text-white text-2xl leading-none">IBERIA</div>
              <div className="text-xs text-white/40 leading-none">эксперты в недвижимости</div>
            </div>
          </div>

          <p className="text-white/50 text-sm mb-1">Адрес: 6010, Грузия, Батуми</p>
          <p className="text-white/50 text-sm mb-1">Батуми, ул.Пушкина, 182, 2 эт.</p>
          <p className="text-white/50 text-sm mb-6">Iberia LTD, код: 445518592</p>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="MessageCircle" size={18} className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="Send" size={18} className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="Phone" size={18} className="text-white" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/30 text-xs">© 2024 IBERIA™. Все права защищены. Агентство недвижимости в Батуми, Грузия.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
