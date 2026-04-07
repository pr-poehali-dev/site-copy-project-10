import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-iberia-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="4" fill="#f05a28"/>
                  <path d="M16 4 L16 28 M4 16 L28 16 M8 8 L24 24 M24 8 L8 24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-none">IBERIA</div>
                <div className="text-xs text-white/40 leading-none">эксперты в недвижимости</div>
              </div>
            </div>
            <p className="text-white/50 text-sm max-w-xs">
              Агентство недвижимости в Батуми с большим опытом работы и экспертизой с 2017 года
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Компания</h4>
              {['О компании', 'Команда', 'Отзывы'].map((item) => (
                <a key={item} href="#" className="block text-white/50 text-sm hover:text-white transition-colors mb-2">{item}</a>
              ))}
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Услуги</h4>
              {['Каталог', 'Преимущества', 'Почему Батуми'].map((item) => (
                <a key={item} href="#" className="block text-white/50 text-sm hover:text-white transition-colors mb-2">{item}</a>
              ))}
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Контакты</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Send" size={16} className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Phone" size={16} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-white/30 text-xs">© 2024 IBERIA™. Все права защищены.</p>
          <p className="text-white/30 text-xs">Агентство недвижимости в Батуми, Грузия</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
