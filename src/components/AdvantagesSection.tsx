const params = [
  {
    num: '01',
    title: 'Стандарты строительства',
    desc: 'Вникаем в процессы строительства на всех ее этапах и сопоставляем проект дома от застройщика с проектом в мэрии Батуми',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
  },
  {
    num: '02',
    title: 'Надежность застройщика',
    desc: 'Оцениваем ее по 37 параметрам, включая проверку на наличие скрытых платежей в договорах и судебных тяжб',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80',
  },
  {
    num: '03',
    title: 'Соответствие обещаниям',
    desc: 'Мы получаем в мэрии Батуми реальные проекты дома и сопоставляем их с рекламными рендерами и обещаниями',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
  },
  {
    num: '04',
    title: 'Изменения инфраструктуры',
    desc: 'Изучаем план строительства всего жилого комплекса и района, чтобы понимать, как он будет меняться в ближайшие годы',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80',
  },
  {
    num: '05',
    title: 'Эффективность инвестиций',
    desc: 'Делаем глубокий анализ и подробный расчет ликвидности объекта, который станет для вас источником дохода',
    img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&q=80',
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 bg-iberia-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Предлагаем нашим клиентам только ликвидные объекты
          <br />недвижимости, отобранные по{' '}
          <span className="text-iberia-orange">5 параметрам</span>
        </h2>
        <p className="text-white/50 mb-12 text-sm">
          Каждый объект проходит тщательную проверку перед попаданием в наш каталог
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="hidden lg:flex items-end">
            <div className="w-full aspect-square flex items-center justify-center opacity-20">
              <svg viewBox="0 0 200 200" fill="none" className="w-48">
                <path d="M100 10 L100 60 M100 60 L140 100 M100 60 L60 100 M60 100 L60 150 L100 180 L140 150 L140 100" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="100" cy="130" r="40" stroke="white" strokeWidth="3"/>
                <path d="M30 130 Q50 80 100 70 Q150 80 170 130" stroke="white" strokeWidth="3" fill="none"/>
                <path d="M20 160 L180 160" stroke="white" strokeWidth="3"/>
                <rect x="75" y="110" width="50" height="70" stroke="white" strokeWidth="3"/>
              </svg>
            </div>
          </div>

          {params.map((p) => (
            <div
              key={p.num}
              className="bg-iberia-dark/50 border border-white/10 rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-white text-iberia-dark font-bold text-sm px-3 py-1.5 rounded-full">
                  {p.num}
                </div>
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
