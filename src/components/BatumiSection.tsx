const BatumiSection = () => {
  return (
    <section id="batumi" className="py-20 bg-[#dbeefb]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-iberia-dark mb-12">
          Почему <span className="text-iberia-orange">Батуми</span> — это отличное место
          <br />для жизни и инвестиций
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] bg-iberia-dark row-span-2 md:row-span-1 lg:row-span-2">
            <img
              src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/89c2fe0a-a049-4ce3-9c36-ba0594776c6a.jpg"
              alt="Статуи Али и Нино, Батуми"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-iberia-dark/90 via-iberia-dark/50 to-iberia-dark/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-bold text-xl mb-3">
                Батуми посещает более 3.6 млн туристов ежегодно
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Батуми - это европейские улицы и площади старая и новая архитектура, исторический порт, семикилометровая набережная уникальный Ботанический сад, гостиницы международных брендов, бары и рестораны
              </p>
              <button className="w-full bg-[#f08274] text-white font-bold py-3 rounded-full hover:bg-[#e26e60] transition-colors tracking-wider text-sm">
                КОНСУЛЬТАЦИЯ
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 flex flex-col justify-between min-h-[160px]">
            <p className="text-iberia-dark font-semibold text-lg">Отсутствие налога на недвижимость для нерезидентов</p>
            <p className="text-6xl font-bold text-[#bcdcf3] mt-4">0%</p>
          </div>

          <div className="bg-[#e8f5d8] rounded-3xl p-6 min-h-[160px]">
            <p className="font-bold text-iberia-dark text-lg mb-2">Динамика роста цен на недвижимость</p>
            <p className="text-sm text-iberia-dark/70 mb-4">Рынок недвижимость в Грузии ежегодно растет за счет повышенного спроса и выгодных условий</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-iberia-dark/60">Рост цены за м.кв</span>
              <span className="bg-[#c5e89c] text-iberia-dark font-bold text-sm px-3 py-1 rounded-full">+36%</span>
            </div>
            <div className="mt-3 h-12 relative">
              <svg viewBox="0 0 200 40" className="w-full h-full">
                <path d="M0 35 Q20 30 40 28 Q60 26 70 25 Q90 23 100 20 Q120 15 140 12 Q160 8 180 5 L200 3" stroke="#3a8fd1" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <path d="M0 35 Q20 30 40 28 Q60 26 70 25 Q90 23 100 20 Q120 15 140 12 Q160 8 180 5 L200 3 L200 40 L0 40 Z" fill="#3a8fd1" fillOpacity="0.15"/>
              </svg>
            </div>
            <p className="text-xs text-iberia-dark/40 mt-1">*Данные приведены TBC Capital за 2022-2023</p>
          </div>

          <div className="bg-iberia-dark rounded-3xl p-6 min-h-[180px]">
            <p className="text-white font-bold text-lg mb-2">Выгодные условия покупки</p>
            <p className="text-white/60 text-sm mb-5">Застройщики в Батуми предоставляют рассрочку под 0% с минимальным первоначальным взносом</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#e8f5d8] rounded-xl p-3">
                <p className="text-iberia-dark font-bold text-lg">от 10.500$</p>
                <p className="text-iberia-dark/60 text-xs">Первый взнос от 20%</p>
              </div>
              <div className="bg-[#cfe7f7] rounded-xl p-3">
                <p className="text-iberia-dark font-bold text-lg">до 46 мес.</p>
                <p className="text-iberia-dark/60 text-xs">Беспроцентная рассрочка</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden p-6 min-h-[180px]">
            <img
              src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/563446d8-d4ca-4a24-98a4-eccc66c7ef77.jpg"
              alt="Пляж в Батуми"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
            <div className="relative">
              <p className="font-bold text-iberia-dark text-lg mb-2">Экология</p>
              <p className="text-iberia-dark/70 text-sm">Горы, море и чистый воздух</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatumiSection;