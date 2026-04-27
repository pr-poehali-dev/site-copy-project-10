import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-iberia-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/73703746-f374-48ae-820b-9925f900d621.png"
              alt="Saginadze Estate"
              className="h-20 w-auto"
            />
          </div>

          <p className="text-white/50 text-sm mb-1">I/E 145971605 Georgii Saginadze</p>
          <p className="text-white/50 text-sm mb-1">Батуми, проспект Жиули Шартава, 3</p>
          <p className="text-white/50 text-sm mb-6">ORBI CITY Блок D2, 45-й этаж, офис 4517</p>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/saginadze.estate" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="Instagram" size={18} className="text-white" />
            </a>
            <a href="https://wa.me/995599254769" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="MessageCircle" size={18} className="text-white" />
            </a>
            <a href="https://t.me/SaginadzeEstate" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="Send" size={18} className="text-white" />
            </a>
            <a href="mailto:saginadzeestate@gmail.com" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="Mail" size={18} className="text-white" />
            </a>
            <a href="tel:+995599254769" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="Phone" size={18} className="text-white" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/30 text-xs">© 2025 Saginadze Estate. Все права защищены. Агентство недвижимости в Батуми, Грузия.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;