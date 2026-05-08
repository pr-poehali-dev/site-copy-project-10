import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import ProjectCatalogButton from '@/components/ProjectCatalogButton';

const images = [
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/7590daf0-84f4-4f3d-8ae4-865378f2e3ed.jpg',
    alt: 'Solo Residence — вид с моря',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/7124b2b1-ed2b-4466-a69c-c66ec52e04c3.jpg',
    alt: 'Solo Residence — закатный вид',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/45cb4d65-8281-4bc7-afcc-e6313bef043b.jpg',
    alt: 'Solo Residence — ночной вид',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/38d32d02-e7b9-4da8-a0c9-0501b426cfe0.jpg',
    alt: 'Solo Residence — бассейн и таунхаусы',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/a00ff9f4-db72-48e1-bca6-56f80c811427.jpg',
    alt: 'Solo Residence — паркинг и таунхаусы',
  },
];

const specs = [
  { label: 'Локация', value: 'Чакви' },
  { label: 'Стоимость квартир', value: 'От $29 802' },
  { label: 'Стоимость м²', value: 'От $950/м²' },
  { label: 'Размер ПВ', value: '20%' },
  {
    label: 'Рассрочка',
    value: 'ПВ 20%, далее $500/месяц и остаток по окончанию строительства (в т.ч. переход в ипотеку)',
  },
  { label: 'Срок сдачи', value: '2 кв-л 2028' },
  { label: 'Планировки', value: 'Студия, 1 спальня, 2 спальни' },
  { label: 'Площадь', value: 'От 31 м² до 72,2 м²' },
  { label: 'Этажность', value: '15 этажей + 8 таунхаусов' },
  { label: 'До моря', value: '250 м' },
  { label: 'Виды', value: 'Море, горы' },
  { label: 'Отделка', value: '«Чёрный каркас», «белый каркас», «с ремонтом под ключ»' },
  {
    label: 'Инфраструктура',
    value: '3 бассейна с аквапарком (в т.ч. детский). Гипермаркет, фитнес-центр, коворкинг, рестораны, зона барбекю. Закрытая территория 5 082 м². Рядом Ботанический сад и школа.',
  },
];

const SoloResidence = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, activeImg]);

  const prev = () => setActiveImg((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveImg((i) => (i + 1) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) { next(); } else { prev(); }
    }
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/73703746-f374-48ae-820b-9925f900d621.png"
              alt="Saginadze Estate"
              className="h-10 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <span
                className="font-bold tracking-widest uppercase text-base"
                style={{ color: '#C9A84C', fontFamily: "'Cinzel', serif", letterSpacing: '0.12em' }}
              >
                Saginadze
              </span>
              <span
                className="font-light tracking-[0.3em] uppercase text-xs"
                style={{ color: '#A07830', fontFamily: "'Cinzel', serif" }}
              >
                Estate
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-iberia-dark hover:text-iberia-orange transition-colors"
            >
              <Icon name="ArrowLeft" size={16} />
              Назад к проектам
            </Link>
            <a
              href="tel:+995599254769"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-iberia-orange text-white text-sm font-semibold rounded-xl hover:bg-[#e26e60] transition-all"
            >
              <Icon name="Phone" size={16} />
              <span className="hidden sm:inline">+995-599-254-769</span>
              <span className="sm:hidden">Позвонить</span>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-iberia-orange transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/" className="hover:text-iberia-orange transition-colors">Проекты</Link>
            <span>/</span>
            <span className="text-iberia-dark font-medium">Solo Residence</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">

            <div className="lg:w-[55%] flex-shrink-0">
              <div
                className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 mb-3 cursor-zoom-in"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={images[activeImg].src}
                  alt={images[activeImg].alt}
                  className="w-full h-full object-cover"
                  onClick={() => setLightbox(true)}
                />
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
                >
                  <Icon name="ChevronLeft" size={22} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
                >
                  <Icon name="ChevronRight" size={22} />
                </button>
                <div className="absolute bottom-4 right-4 bg-black/40 text-white text-xs px-3 py-1 rounded-full">
                  {activeImg + 1} / {images.length}
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`rounded-xl overflow-hidden aspect-[4/3] border-2 transition ${
                      i === activeImg
                        ? 'border-iberia-orange'
                        : 'border-transparent hover:border-iberia-orange/40'
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h1
                className="font-bold text-iberia-orange mb-1"
                style={{ fontSize: '2rem', lineHeight: '1.2' }}
              >
                Solo Residence
              </h1>
              <p className="text-3xl font-bold text-iberia-dark mb-5">От $29 802</p>

              <div className="mb-6">
                <ProjectCatalogButton />
              </div>



              <div className="space-y-0 divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex gap-4 px-5 py-3 hover:bg-gray-50 transition">
                    <span className="text-sm text-gray-400 w-40 flex-shrink-0 pt-0.5">{spec.label}</span>
                    <span className="text-sm font-medium text-iberia-dark">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-iberia-light-bg rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-iberia-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="MessageCircle" size={20} className="text-iberia-orange" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-iberia-dark mb-1">Нужна консультация?</p>
                  <p className="text-sm text-gray-500 mb-3">Расскажем о квартирах, таунхаусах и гибких условиях покупки от $500/мес.</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:+995599254769"
                      className="inline-flex items-center gap-2 bg-iberia-dark text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-iberia-dark/90 transition"
                    >
                      <Icon name="Phone" size={14} />
                      Позвонить
                    </a>
                    <a
                      href="https://wa.me/995599254769"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#1ebe5d] transition"
                    >
                      <Icon name="MessageCircle" size={14} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold text-iberia-dark mb-6">О проекте</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-iberia-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Waves" size={24} className="text-iberia-orange" />
                </div>
                <h3 className="font-semibold text-iberia-dark mb-2">250 м до моря</h3>
                <p className="text-sm text-gray-500">Первая линия в Чакви у Ботанического сада. 3 бассейна с аквапарком прямо на закрытой территории.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-iberia-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Home" size={24} className="text-iberia-orange" />
                </div>
                <h3 className="font-semibold text-iberia-dark mb-2">Башня + 8 таунхаусов</h3>
                <p className="text-sm text-gray-500">Уникальный формат: 15-этажный дом и 8 таунхаусов с единой закрытой территорией 5 082 м².</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-iberia-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="CreditCard" size={24} className="text-iberia-orange" />
                </div>
                <h3 className="font-semibold text-iberia-dark mb-2">Платёж от $500/мес.</h3>
                <p className="text-sm text-gray-500">Гибкая схема: ПВ 20%, фиксированный платёж $500/мес., остаток — при сдаче или через ипотеку.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full w-12 h-12 flex items-center justify-center transition"
          >
            <Icon name="ChevronLeft" size={26} className="text-white" />
          </button>
          <img
            src={images[activeImg].src}
            alt={images[activeImg].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full w-12 h-12 flex items-center justify-center transition"
          >
            <Icon name="ChevronRight" size={26} className="text-white" />
          </button>
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full w-10 h-10 flex items-center justify-center transition"
          >
            <Icon name="X" size={20} className="text-white" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {activeImg + 1} / {images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SoloResidence;