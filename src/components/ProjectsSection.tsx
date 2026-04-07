import { useState } from 'react';

const projects = [
  {
    name: 'Shekvetili Forest Beach',
    location: 'Шекветили',
    price: '$66 190',
    tag: 'Премиум резорт',
    tagColor: 'bg-iberia-orange',
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80',
  },
  {
    name: 'Dreamland Oasis',
    location: 'Чакви',
    price: '$70 732',
    tag: 'Рассрочка $500/мес.',
    tagColor: 'bg-iberia-orange',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&q=80',
  },
  {
    name: 'Solo Residence',
    location: 'Батуми',
    price: '$29 802',
    tag: 'Рассрочка $500/мес.',
    tagColor: 'bg-iberia-orange',
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=500&q=80',
  },
  {
    name: 'Buknari Resort',
    location: 'Буквари',
    price: '$96 040',
    tag: 'Старт продаж!',
    tagColor: 'bg-iberia-orange',
    img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&q=80',
  },
  {
    name: 'Parkline',
    location: 'Батуми',
    price: '$48 471',
    tag: 'Рассрочка до 50 мес.',
    tagColor: 'bg-iberia-orange',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80',
  },
  {
    name: 'Solana',
    location: 'Кобулети',
    price: '$42 000',
    tag: 'Рассрочка до 60 мес.',
    tagColor: 'bg-iberia-orange',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=80',
  },
  {
    name: 'Grand Tower',
    location: 'Батуми',
    price: '$43 840',
    tag: 'Сдача в 2026 году',
    tagColor: 'bg-iberia-orange',
    img: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=500&q=80',
  },
  {
    name: 'Ikon',
    location: 'Батуми',
    price: '$51 102',
    tag: 'Для жизни, аренды',
    tagColor: 'bg-iberia-orange',
    img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=500&q=80',
  },
  {
    name: 'Nite',
    location: 'Чакви',
    price: '$50 700',
    tag: null,
    tagColor: '',
    img: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=500&q=80',
  },
  {
    name: 'Address',
    location: 'Батуми',
    price: '$43 800',
    tag: null,
    tagColor: '',
    img: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500&q=80',
  },
  {
    name: 'Serenade',
    location: 'Батуми',
    price: '$44 280',
    tag: null,
    tagColor: '',
    img: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&q=80',
  },
  {
    name: 'Summer 365',
    location: 'Батуми',
    price: '$41 243',
    tag: null,
    tagColor: '',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=80',
  },
  {
    name: 'Piazza',
    location: 'Батуми, Старый город',
    price: '$100 620',
    tag: 'Формат курорта',
    tagColor: 'bg-iberia-orange',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80',
  },
  {
    name: 'Batumi Villas',
    location: 'Батуми',
    price: '$109 890',
    tag: null,
    tagColor: '',
    img: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?w=500&q=80',
  },
  {
    name: 'Riviera Grand',
    location: 'Квариати',
    price: '$697 545',
    tag: null,
    tagColor: '',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80',
  },
];

const SHOW_STEP = 6;

const ProjectsSection = () => {
  const [showCount, setShowCount] = useState(SHOW_STEP);
  const visible = projects.slice(0, showCount);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-iberia-dark mb-12">
          Лучшие инвестиционные проекты <span className="text-iberia-orange">Батуми</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.tag && (
                  <div className={`absolute top-3 right-3 ${p.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full text-center leading-tight`}>
                    {p.tag}
                  </div>
                )}
              </div>
              <h3 className="text-iberia-orange font-bold text-lg mb-0.5">{p.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{p.location}</p>
              <p className="text-iberia-dark font-semibold">{p.price}</p>
            </div>
          ))}
        </div>

        {showCount < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowCount((c) => Math.min(c + SHOW_STEP, projects.length))}
              className="px-8 py-3 border-2 border-iberia-dark text-iberia-dark font-semibold rounded-xl hover:bg-iberia-dark hover:text-white transition-all"
            >
              Показать ещё
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
