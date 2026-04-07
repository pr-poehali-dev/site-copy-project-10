import Icon from '@/components/ui/icon';

const CatalogSection = () => {
  return (
    <section id="catalog" className="py-20 bg-iberia-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-[#f0b8a8] rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-iberia-dark mb-6">
              Получите каталог новых
              <br />проектов у моря в Батуми
            </h2>

            <div className="flex flex-col gap-3 mb-8">
              {[
                'Топ-15 ЖК Батуми',
                'В каталоге прайсы и планировки',
                'Закрытые скидки от застройщиков',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-iberia-dark/40">
                    <Icon name="Check" size={14} className="text-iberia-dark" />
                  </div>
                  <span className="text-iberia-dark font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-iberia-orange text-white font-bold px-8 py-3.5 rounded-xl hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
              <Icon name="Download" size={18} />
              Получить каталог
            </button>
            <div className="flex items-center gap-2 mt-3 text-iberia-dark/60 text-xs">
              <span>PDF, 17 mb</span>
              <span>·</span>
              <span>Отправим в мессенджеры</span>
            </div>
          </div>

          <div className="relative flex-shrink-0 hidden md:block">
            <div className="absolute top-0 right-0 w-12 h-12 bg-iberia-orange/80 rounded-full flex items-center justify-center">
              <Icon name="FileText" size={20} className="text-white" />
            </div>
            <div className="w-56 h-72 bg-white rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="p-4 text-center">
                <div className="w-12 h-12 bg-iberia-dark rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="3" fill="#1e3a5f"/>
                    <path d="M12 3 L12 21 M3 12 L21 12 M6 6 L18 18 M18 6 L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-iberia-dark font-bold text-xs">КАТАЛОГ НОВЫХ<br />ПРОЕКТОВ</p>
                <p className="text-iberia-dark/60 text-xs mt-1">У БЕРЕГА МОРЯ<br />В БАТУМИ</p>
                <div className="mt-3 bg-iberia-light-bg rounded p-2">
                  <p className="text-iberia-dark/40 text-xs">и инвестиций</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
              alt="Консультант"
              className="h-full w-full object-cover object-top opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f0b8a8] via-[#f0b8a8]/20 to-transparent" />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Лучшие инвестиционные проекты <span className="text-iberia-orange">Батуми</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
