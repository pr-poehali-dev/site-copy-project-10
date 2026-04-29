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
              className="bg-iberia-dark/50 border border-white rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-white text-iberia-dark font-bold text-sm px-3 py-1.5 rounded-full">
                  {p.num}
                </div>
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-white text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;