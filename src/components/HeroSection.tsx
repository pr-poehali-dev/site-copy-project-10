import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/c24ebdab-2f86-421e-baa1-609efdc370c9.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-iberia-dark/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Недвижимость в Грузии у моря
            <br />напрямую от застройщиков
            <br />в рассрочку 0% от{' '}
            <span className="text-iberia-orange">44.500$</span>
          </h1>
        </div>

        <div className="bg-iberia-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-xl mb-10">
          <h3 className="text-white font-semibold text-lg mb-4">
            Получите каталог топ-15 новых проектов в Батуми!
          </h3>
          <div className="flex flex-wrap gap-4 mb-5">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="w-8 h-8 flex items-center justify-center bg-iberia-orange/20 rounded-full">
                <Icon name="DollarSign" size={16} className="text-iberia-orange" />
              </span>
              <span>Для жизни<br />и инвестиций</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="w-8 h-8 flex items-center justify-center bg-iberia-orange/20 rounded-full">
                <Icon name="FileText" size={16} className="text-iberia-orange" />
              </span>
              <span>В каталоге прайсы<br />и планировки</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="w-8 h-8 flex items-center justify-center bg-iberia-orange/20 rounded-full">
                <Icon name="Tag" size={16} className="text-iberia-orange" />
              </span>
              <span>Закрытые скидки<br />от застройщиков</span>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-iberia-orange text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors w-full sm:w-auto justify-center">
            <Icon name="Download" size={18} />
            Получить каталог
          </button>
          <p className="text-white/50 text-xs mt-2">PDF, 18 mb · Отправим в мессенджеры</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: 'Home', text: 'Первый взнос от 10.500$' },
            { icon: 'Percent', text: 'Рассрочка 0% до 46 мес.' },
            { icon: 'TrendingUp', text: 'Доходность от 13.5%' },
            { icon: 'Building2', text: 'Топовые застройщики' },
          ].map((item) => (
            <div
              key={item.text}
              className="bg-white rounded-2xl p-4 flex flex-col gap-3"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-iberia-light-bg">
                <Icon name={item.icon} size={20} className="text-iberia-dark" />
              </div>
              <p className="font-semibold text-iberia-dark text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;