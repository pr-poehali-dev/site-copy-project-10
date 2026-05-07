import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import ProjectCatalogButton from '@/components/ProjectCatalogButton';

const images = [
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/1429f53c-8006-429e-b081-a2664f99abf0.jpg',
    alt: 'Intourist — фасад, вид с улицы',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/ee458445-37ae-468b-9d13-34f39a788451.jpg',
    alt: 'Intourist — вид снизу вверх',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/1f35c61f-85d6-4623-a10a-49daa5984c9e.jpg',
    alt: 'Intourist — вид на башню и соседние здания',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/e7d325bc-5503-4fa7-a07f-f9b638d357cf.jpg',
    alt: 'Intourist — бассейн на территории',
  },
];

const specs = [
  { label: 'Локация', value: 'Батуми' },
  { label: 'Стоимость квартир', value: 'От $47 124' },
  { label: 'Стоимость м²', value: 'От $1 200/м²' },
  { label: 'Размер ПВ', value: '30%' },
  { label: 'Беспроцентная рассрочка', value: 'До 50 месяцев' },
  { label: 'Срок сдачи', value: '4 кв-л 2027' },
  { label: 'Планировки', value: 'Студия, 1 спальня, 2 спальни, 3 спальни' },
  { label: 'Площадь', value: '30,7 м² – 96 м²' },
  { label: 'Этажность', value: '45 этажей' },
  { label: 'До моря', value: '200 м' },
  { label: 'Виды', value: 'Море, горы, город' },
  { label: 'Отделка', value: '«Чёрный каркас», «белый каркас», «под ключ»' },
  { label: 'Инфраструктура', value: 'Паркинг, охрана, ресепшн' },
  { label: 'Акция от застройщика', value: 'Рассрочка 0% до 50 месяцев' },
];

const Intourist = () => {
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

      <main className="pt-24 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-iberia-orange transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/" className="hover:text-iberia-orange transition-colors">Проекты</Link>
            <span>/</span>
            <span className="text-iberia-dark font-medium">Intourist</span>
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

              <div className="grid grid-cols-4 gap-2">
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
                Intourist
              </h1>
              <p className="text-3xl font-bold text-iberia-dark mb-2">От $47 124</p>

              <div className="inline-flex items-center gap-2 bg-iberia-orange/10 text-iberia-orange text-sm font-semibold px-4 py-2 rounded-full mb-5">
                <Icon name="Tag" size={14} />
                Рассрочка 0% до 50 месяцев
              </div>

              <div className="mb-6">
                <ProjectCatalogButton />
              </div>

              <a
                href="tel:+995599254769"
                className="flex items-center gap-2 bg-iberia-orange hover:bg-[#e26e60] text-white font-semibold px-8 py-3 rounded-full transition mb-8 w-full sm:w-auto text-sm tracking-wide uppercase justify-center sm:justify-start sm:inline-flex"
              >
                <Icon name="Phone" size={16} />
                Получить каталог
              </a>

              <div className="divide-y divide-gray-200">
                {specs.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5 py-3">
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

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full w-10 h-10 flex items-center justify-center text-white transition"
            onClick={() => setLightbox(false)}
          >
            <Icon name="X" size={20} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full w-10 h-10 flex items-center justify-center text-white transition"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <img
            src={images[activeImg].src}
            alt={images[activeImg].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl select-none"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full w-10 h-10 flex items-center justify-center text-white transition"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <Icon name="ChevronRight" size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
            {activeImg + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Intourist;