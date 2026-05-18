import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SerеnadeModal from '@/components/SerеnadeModal';

type Project = {
  name: string;
  location: string;
  price: string;
  tag: string | null;
  tagColor: string;
  img: string;
  modal?: boolean;
  route?: string;
};

const projects: Project[] = [
  {
    name: 'Shekvetili Forest Beach by Paragraph',
    location: 'Шекветили',
    price: 'От $67 353',
    tag: 'Свой пляж 46 м',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/f414d436-fbe1-405d-9211-ae6fc45d19c2.jpg',
    modal: true,
    route: '/shekvetili-forest-beach',
  },
  {
    name: 'Nite',
    location: 'Чакви',
    price: 'От $50 700',
    tag: 'Доходность 10,5%',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/c16ff710-80f8-408e-bc4c-248c761713e1.jpg',
    modal: true,
    route: '/nite',
  },
  {
    name: 'Petra Sea Resort',
    location: 'Цихисдзири',
    price: 'От $39 319',
    tag: 'Частный пляж',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/8e4a3b9e-34ca-43a4-a06d-515f7fb8be45.jpg',
    modal: true,
    route: '/petra-sea-resort',
  },
  {
    name: 'Solo Residence',
    location: 'Чакви',
    price: 'От $29 802',
    tag: 'От $500/мес.',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/7590daf0-84f4-4f3d-8ae4-865378f2e3ed.jpg',
    modal: true,
    route: '/solo-residence',
  },
  {
    name: 'Buknari Resort',
    location: 'Букнари',
    price: 'От $66 000',
    tag: '20 м до моря',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/848fa05f-75d9-419c-9d38-282993caf4cf.jpg',
    modal: true,
    route: '/buknari-resort',
  },
  {
    name: 'Parkline',
    location: 'Батуми',
    price: 'От $48 471',
    tag: 'Рассрочка до 50 мес.',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/fcc08d71-e86c-49d0-aab7-19bec3ca0dc3.jpg',
    modal: true,
    route: '/parkline',
  },
  {
    name: 'Solana',
    location: 'Кобулети',
    price: 'От $42 000',
    tag: 'Рассрочка до 60 мес.',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/bdd16b6b-b7ae-4b2b-a41a-08599ade192c.jpg',
    modal: true,
    route: '/solana',
  },
  {
    name: 'Grand Towers',
    location: 'Батуми, центр',
    price: 'От $43 840',
    tag: 'Панорамные виды',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/3672359d-c111-4006-a14e-22b6d6fbd4d1.jpg',
    modal: true,
    route: '/grand-towers',
  },
  {
    name: 'Ikon',
    location: 'Батуми, Новый бульвар',
    price: 'От $61 300',
    tag: 'Сдача май 2027',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/c8eea22a-017a-47fc-9236-d66db1ccadb8.jpg',
    modal: true,
    route: '/ikon',
  },
  {
    name: "Queen's Residence",
    location: 'Батуми, Новый бульвар',
    price: 'От $49 000',
    tag: 'Ипотека для иностранцев',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/2967ac3b-0081-4800-a9ce-872dd840439c.jpg',
    modal: true,
    route: '/queens-residence',
  },
  {
    name: 'Intourist',
    location: 'Батуми',
    price: 'От $47 124',
    tag: 'Рассрочка 0% до 50 мес.',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/1429f53c-8006-429e-b081-a2664f99abf0.jpg',
    modal: true,
    route: '/intourist',
  },
  {
    name: 'Address',
    location: 'Батуми',
    price: 'От $56 110',
    tag: 'Рассрочка до 4 лет',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/82547b47-b3ce-4f97-8087-8646a5ca8eb6.jpg',
    modal: true,
    route: '/address',
  },
  {
    name: 'Serenade',
    location: 'Батуми',
    price: 'От $46 900',
    tag: 'Рассрочка до 40 мес.',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/5e516d5f-a4f5-425e-8b2b-44fce2b6e7f7.jpg',
    modal: true,
    route: '/serenade',
  },
  {
    name: 'Summer 365',
    location: 'Батуми, Новый бульвар',
    price: 'От $70 000',
    tag: 'Сдача 2026',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/f84ddc83-3df8-4af7-91b2-d852da103465.jpg',
    modal: true,
    route: '/summer-365',
  },
  {
    name: 'Piazza Batumi',
    location: 'Батуми, Старый город',
    price: 'От $100 620',
    tag: 'Рассрочка до 48 мес.',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/3b3dce3c-0676-4ffd-9b2b-4414a2f42b2f.jpg',
    modal: true,
    route: '/piazza-batumi',
  },
  {
    name: 'Batumi Villas',
    location: 'Батуми',
    price: 'От $109 890',
    tag: 'Собственный гараж',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/73514e30-f7f7-41ea-aa9a-7f2ef22b9f7a.jpg',
    modal: true,
    route: '/batumi-villas',
  },
  {
    name: 'Gonio Yachts & Marina',
    location: 'Гонио, побережье',
    price: 'По запросу',
    tag: '180 яхт-мест',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/1733e1fa-f06c-49a8-add9-aee4e23544d9.jpg',
    modal: true,
    route: '/gonio-yachts-marina',
  },
  {
    name: 'Tbilisi Waterfront',
    location: 'Тбилиси, Крцаниси',
    price: 'От $128 000',
    tag: '590 Га · Апарт. + Виллы',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/6993cb0b-9797-4276-b00c-60a478994e08.jpg',
    modal: true,
    route: '/tbilisi-waterfront',
  },
  {
    name: 'Montemar',
    location: 'Гонио',
    price: 'От $60 495',
    tag: 'Старт продаж!',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/58787c58-ebe3-49f3-9bec-0f0d1fb69f85.jpg',
    modal: true,
    route: '/montemar',
  },
  {
    name: 'Ambassadori Island',
    location: 'Батуми, Порт',
    price: 'От $110 447',
    tag: 'Первая линия',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/a738dc14-7095-46cf-a7d1-2f98ffc06879.jpg',
    modal: true,
    route: '/ambassadori-island',
  },
  {
    name: 'Sunrise Palace',
    location: 'Батуми, Аллея героев',
    price: 'От $69 000',
    tag: '39 этажей',
    tagColor: 'bg-iberia-orange',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/cb93355b-40d5-4002-9c04-13a770f45eab.jpg',
    modal: true,
    route: '/sunrise-palace',
  },
];

const SHOW_STEP = 6;

const ProjectsSection = () => {
  const [showCount, setShowCount] = useState(() => {
    const saved = sessionStorage.getItem('projectsShowCount');
    return saved ? parseInt(saved, 10) : SHOW_STEP;
  });
  const [serеnadeOpen, setSerеnadeOpen] = useState(false);
  const navigate = useNavigate();
  const visible = projects.slice(0, showCount);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-iberia-dark mb-12 uppercase">
          ЛУЧШИЕ ИНВЕСТИЦИОННЫЕ<br className="md:hidden" /> ПРОЕКТЫ <span className="text-iberia-orange">БАТУМИ</span>
        </h2>

        <SerеnadeModal open={serеnadeOpen} onClose={() => setSerеnadeOpen(false)} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <div
              key={p.name}
              className="group cursor-pointer"
              onClick={() => {
                if (p.route) {
                  sessionStorage.setItem('scrollY', String(window.scrollY));
                  navigate(p.route);
                }
              }}
            >
              <div className="relative rounded-3xl overflow-hidden mb-4 aspect-square bg-gray-100">
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
              onClick={() => setShowCount((c) => {
                const next = Math.min(c + SHOW_STEP, projects.length);
                sessionStorage.setItem('projectsShowCount', String(next));
                return next;
              })}
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