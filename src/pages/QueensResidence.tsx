import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import ProjectCatalogButton from '@/components/ProjectCatalogButton';

const images = [
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/2967ac3b-0081-4800-a9ce-872dd840439c.jpg',
    alt: "Queen's Residence — закатный вид",
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/3d0ccb99-3ef9-4a73-b7ff-2c37befb80e3.jpg',
    alt: "Queen's Residence — фасад крупный план",
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/5b0dae1b-932a-4853-80dd-a76d8ce12053.jpg',
    alt: "Queen's Residence — ночной вид",
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/f5c39806-8e39-49ee-a651-774054a2e33f.jpg',
    alt: "Queen's Residence — уличный бассейн",
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/e8e7396f-def9-4276-a822-cefb1578c5d1.jpg',
    alt: "Queen's Residence — внутренний бассейн",
  },
];

const specs = [
  { label: 'Локация', value: 'Батуми, Новый бульвар' },
  { label: 'Стоимость квартир', value: 'От $49 000' },
  { label: 'Стоимость м2', value: '$1 200/м2' },
  { label: 'Размер ПВ', value: '20%' },
  { label: 'Беспроцентная рассрочка', value: 'От 14 месяцев' },
  { label: 'Срок сдачи', value: 'Дом 1 — готов на 95%, Дом 2 — декабрь 2026' },
  { label: 'Планировки', value: 'Студия, 1 спальня, 2 спальни, 3 спальни, Дюплекс (двухэтажная квартира)' },
  { label: 'Площадь', value: 'От 32,44 м² до 170 м²' },
  { label: 'Этажность', value: '16 этажей' },
  { label: 'До моря', value: '700 м' },
  { label: 'Виды', value: 'Море, горы, город' },
  { label: 'Отделка', value: '«белый каркас», «под ключ с мебелью», «под ключ с мебелью и техникой»' },
  {
    label: 'Инфраструктура',
    value: 'Два бассейна (уличный 25×11 м, закрытый 6×20 м), велнес-спа центр, кофейня, ресторан, лаундж-зона, детская игровая комната, ресепшн, охрана 24/7, внутренний двор, супермаркет. На крыше каждого дома терраса для жильцов — 2 000 м².',
  },
  {
    label: 'Акция от застройщика',
    value: 'Возможна ипотека для иностранцев на строящийся дом, длинная рассрочка.',
  },
];

const QueensResidence = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const touchStartX = useRef<number | null>(null);

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
      {/* Header */}
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
            <button
              onClick={() => window.history.back()}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-iberia-dark hover:text-iberia-orange transition-colors"
            >
              <Icon name="ArrowLeft" size={16} />
              Назад к проектам
            </button>
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

      {/* Контент */}
      <main className="pt-24 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">

          {/* Хлебные крошки */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-iberia-orange transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/" className="hover:text-iberia-orange transition-colors">Проекты</Link>
            <span>/</span>
            <span className="text-iberia-dark font-medium">Queen's Residence</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">

            {/* Левая колонка — галерея */}
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

              {/* Миниатюры */}
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

            {/* Правая колонка — инфо */}
            <div className="flex-1 min-w-0">
              <h1
                className="font-bold text-iberia-orange mb-1"
                style={{ fontSize: '2rem', lineHeight: '1.2' }}
              >
                Queen's Residence
              </h1>
              <p className="text-3xl font-bold text-iberia-dark mb-5">От $49 000</p>

              <div className="mb-6">
                <ProjectCatalogButton />
              </div>

              <a
                href="tel:+995599254769"
                className="inline-flex items-center gap-2 bg-iberia-orange hover:bg-[#e26e60] text-white font-semibold px-8 py-3 rounded-full transition mb-8 w-full sm:w-auto text-sm tracking-wide uppercase justify-center sm:justify-start"
              >
                <Icon name="Phone" size={16} />
                Получить каталог
              </a>

              {/* Характеристики */}
              <div className="divide-y divide-gray-200">
                {specs.map((s, i) => (
                  <div key={i} className="flex flex-col gap-0.5 py-3">
                    <span className="text-iberia-dark font-bold text-sm">{s.label}</span>
                    <span className="text-iberia-dark font-normal text-sm leading-snug">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white rounded-full w-11 h-11 flex items-center justify-center transition"
          >
            <Icon name="X" size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-11 h-11 flex items-center justify-center transition"
          >
            <Icon name="ChevronLeft" size={26} />
          </button>
          <img
            src={images[activeImg].src}
            alt={images[activeImg].alt}
            className="max-h-[88vh] max-w-[90vw] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-11 h-11 flex items-center justify-center transition"
          >
            <Icon name="ChevronRight" size={26} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 text-white text-sm px-4 py-1.5 rounded-full">
            {activeImg + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default QueensResidence;