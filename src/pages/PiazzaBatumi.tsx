import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import ProjectCatalogButton from '@/components/ProjectCatalogButton';
import Header from '@/components/Header';

const images = [
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/3b3dce3c-0676-4ffd-9b2b-4414a2f42b2f.jpg',
    alt: 'Piazza Batumi — ночной вид',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/e7ef8b61-b349-4640-a077-3b78331c1ff5.jpg',
    alt: 'Piazza Batumi — дневной вид',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/877c616c-a73b-42f2-8a11-cde5ac82e576.jpg',
    alt: 'Piazza Batumi — вид сбоку',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/61728a33-ded2-471f-93d0-3e48863df6af.jpg',
    alt: 'Piazza Batumi — вид с высоты',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/fb7368c6-85a4-4063-b95f-4a036b72fb59.jpg',
    alt: 'Piazza Batumi — панорама',
  },
];

const specs = [
  { label: 'Локация', value: 'Батуми, Старый город' },
  { label: 'Стоимость квартир', value: 'От $100 620' },
  { label: 'Стоимость м2', value: 'От $2 300/м2 («белый каркас»)' },
  { label: 'Размер ПВ', value: '30%' },
  { label: 'Беспроцентная рассрочка', value: 'До 48 месяцев' },
  { label: 'Срок сдачи', value: '4 кв-л 2027' },
  { label: 'Планировки', value: 'Студия, 1 спальня, 2 спальни, 3 спальни, пентхаусы' },
  { label: 'Площадь', value: '37,9 м² до 143,3 м²' },
  { label: 'Этажность', value: '19 этажей' },
  { label: 'До моря', value: '900 м' },
  { label: 'Виды', value: 'Море, горы, город' },
  { label: 'Отделка', value: '«белый каркас» — предчистовая, «под ключ»' },
  {
    label: 'Инфраструктура',
    value:
      'Уникально для старого центра Батуми — свой двор и территория. Первые 2 этажа — элитные рестораны, кафе, рабочие и рекреационные зоны. Внутри своя итальянская площадь с фонтаном, 13-метровыми колоннами и исторически архитектурный объект.',
  },
];

const PiazzaBatumi = () => {
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
      <Header backLink />

      {/* Контент */}
      <main className="pt-24 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">

          {/* Хлебные крошки */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-iberia-orange transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/" className="hover:text-iberia-orange transition-colors">Проекты</Link>
            <span>/</span>
            <span className="text-iberia-dark font-medium">Piazza Batumi</span>
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
                Piazza Batumi
              </h1>
              <p className="text-3xl font-bold text-iberia-dark mb-5">От $100 620</p>

              <div className="mb-6">
                <ProjectCatalogButton />
              </div>



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

export default PiazzaBatumi;