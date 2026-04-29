const params = [
  {
    num: '01',
    title: 'Стандарты строительства',
    desc: 'Вникаем в процессы строительства на всех ее этапах и сопоставляем проект дома от застройщика с проектом в мэрии Батуми',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/5314b4e8-3f31-41d0-9028-d972e5416c2c.jpg',
  },
  {
    num: '02',
    title: 'Надежность застройщика',
    desc: 'Оцениваем ее по 37 параметрам, включая проверку на наличие скрытых платежей в договорах и судебных тяжб',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/a7388257-69d7-43da-b767-f581aaecc653.jpg',
  },
  {
    num: '03',
    title: 'Соответствие обещаниям',
    desc: 'Мы получаем в мэрии Батуми реальные проекты дома и сопоставляем их с рекламными рендерами и обещаниями',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/5f12c86a-f138-46f3-9de5-5315a075b54b.png',
  },
  {
    num: '04',
    title: 'Изменения инфраструктуры',
    desc: 'Изучаем план строительства всего жилого комплекса и района, чтобы понимать, как он будет меняться в ближайшие годы',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/300b9ece-e399-4cc3-90b5-120ffd681400.png',
  },
  {
    num: '05',
    title: 'Эффективность инвестиций',
    desc: 'Делаем глубокий анализ и подробный расчет ликвидности объекта, который станет для вас источником дохода',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/58382049-952b-4577-8ab4-2d1c13f46e58.png',
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-16 bg-iberia-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Предлагаем нашим клиентам только ликвидные объекты
          <br />недвижимости, отобранные по{' '}
          <span className="text-iberia-orange">5 параметрам</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="hidden lg:flex">
            <div className="w-full flex items-center justify-center">
              <img
                src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/d6de76bf-f0d4-454f-8f2f-69a916f6b1bd.png"
                alt="Иллюстрация"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
          </div>

          {params.map((p) => (
            <div
              key={p.num}
              className="bg-iberia-dark/50 border border-white/20 rounded-3xl flex flex-col relative pt-16 pb-6 px-6"
            >
              <div className="absolute top-4 left-4 bg-white text-iberia-dark font-bold text-sm px-3 py-1.5 rounded-full z-10">
                {p.num}
              </div>
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full overflow-hidden border-4 border-iberia-dark translate-x-3 -translate-y-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;