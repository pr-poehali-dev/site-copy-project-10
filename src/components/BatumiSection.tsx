const BatumiSection = () => {
  return (
    <section id="batumi" className="py-20 bg-iberia-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-iberia-dark mb-12">
          Почему <span className="text-iberia-orange">Батуми</span> — это отличное место
          <br />для жизни и инвестиций
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] bg-iberia-dark row-span-2 md:row-span-1 lg:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80"
              alt="Батуми"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-iberia-dark/80 via-iberia-dark/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-bold text-xl mb-3">
                Батуми посещает более 3.6 млн туристов ежегодно
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Батуми - это европейские улицы и площади старая и новая архитектура, исторический порт, семикилометровая набережная уникальный Ботанический сад, гостиницы международных брендов, бары и рестораны
              </p>
              <button className="w-full bg-iberia-orange text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors tracking-wider text-sm">
                КОНСУЛЬТАЦИЯ
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 flex flex-col justify-between min-h-[160px]">
            <p className="text-iberia-dark font-semibold text-lg">Отсутствие налога на недвижимость для нерезидентов</p>
            <p className="text-6xl font-bold text-iberia-light-bg mt-4">0%</p>
          </div>

          <div className="bg-[#d8ecd5] rounded-3xl p-6 min-h-[160px]">
            <p className="font-bold text-iberia-dark text-lg mb-2">Динамика роста цен на недвижимость</p>
            <p className="text-sm text-iberia-dark/70 mb-4">Рынок недвижимость в Грузии ежегодно растет за счет повышенного спроса и выгодных условий</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-iberia-dark/60">Рост цены за м.кв</span>
              <span className="bg-[#a8d5a2] text-iberia-dark font-bold text-sm px-3 py-1 rounded-full">+36%</span>
            </div>
            <div className="mt-3 h-12 relative">
              <svg viewBox="0 0 200 40" className="w-full h-full">
                <path d="M0 35 Q20 30 40 28 Q60 26 70 25 Q90 23 100 20 Q120 15 140 12 Q160 8 180 5 L200 3" stroke="#1e3a5f" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <path d="M0 35 Q20 30 40 28 Q60 26 70 25 Q90 23 100 20 Q120 15 140 12 Q160 8 180 5 L200 3 L200 40 L0 40 Z" fill="#1e3a5f" fillOpacity="0.1"/>
              </svg>
            </div>
            <p className="text-xs text-iberia-dark/40 mt-1">*Данные приведены TBC Capital за 2022-2023</p>
          </div>

          <div className="bg-iberia-dark rounded-3xl p-6 min-h-[180px]">
            <p className="text-white font-bold text-lg mb-2">Выгодные условия покупки</p>
            <p className="text-white/60 text-sm mb-5">Застройщики в Батуми предоставляют рассрочку под 0% с минимальным первоначальным взносом</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 rounded-xl p-3">
                <p className="text-white font-bold text-lg">от 10.500$</p>
                <p className="text-white/50 text-xs">Первый взнос от 20%</p>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <p className="text-white font-bold text-lg">до 46 мес.</p>
                <p className="text-white/50 text-xs">Беспроцентная рассрочка</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 min-h-[180px]">
            <p className="font-bold text-iberia-dark text-lg mb-2">Экология</p>
            <p className="text-iberia-dark/60 text-sm">Горы, море и чистый воздух</p>
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
              alt="Море"
              className="w-full h-24 object-cover rounded-xl mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatumiSection;
