import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import ProjectCatalogButton from '@/components/ProjectCatalogButton';

const images = [
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/6993cb0b-9797-4276-b00c-60a478994e08.jpg',
    alt: 'Tbilisi Waterfront — панорама днём',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/0f838f80-17ba-43b2-b1d4-5fe4c1b9bed8.jpg',
    alt: 'Tbilisi Waterfront — ночная панорама',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/37afebe3-548e-4ce9-a7ba-8ff3fef4d0b2.jpg',
    alt: 'Tbilisi Waterfront — вид на реку и парк',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/2fa6acf9-d31f-465e-8fe7-fec0ca8375e4.jpg',
    alt: 'Tbilisi Waterfront — таунхаусы',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/d5725783-badc-4b99-bc6a-bb5afbb0f3dc.jpg',
    alt: 'Tbilisi Waterfront — вилла с бассейном',
  },
];

const specs = [
  { label: 'Локация', value: 'Тбилиси, Крцаниси парк' },
  { label: 'Стоимость апартаментов', value: 'От $128 000' },
  { label: 'Стоимость таунхаусов', value: 'От $350 020' },
  { label: 'Стоимость вилл', value: 'От $450 000' },
  { label: 'Стоимость м² (апарт.)', value: 'От $2 090/м²' },
  { label: 'Стоимость м² (таунх.)', value: 'От $1 628/м²' },
  { label: 'Стоимость м² (виллы)', value: 'От $1 535/м²' },
  { label: 'Размер ПВ', value: '5% — таунхаусы, 10% — квартиры и виллы' },
  { label: 'Рассрочка', value: '10% на старте + 30% в процессе + 60% при сдаче' },
  { label: 'Срок сдачи', value: 'Июнь 2029 (1-я фаза), январь 2030 (2-я фаза) и далее' },
  { label: 'Планировки', value: 'Апартаменты 1–3 спальни, таунхаусы 3–4 спальни, виллы 3–6 спален' },
  { label: 'Площадь', value: 'Апарт.: 61,3–240,9 м² / Таунх.: 215–277 м² / Виллы: 293–596 м²' },
  { label: 'Расположение', value: 'У реки Кура, парк Крцаниси' },
  { label: 'Виды', value: 'Река, парк, зелёные зоны' },
  { label: 'Отделка', value: 'С отделкой (под ключ без мебели и с мебелью и техникой)' },
  {
    label: 'Инфраструктура',
    value: '590 Га проекта, 170 Га парков. Набережная/бульвар, отели, рестораны, wellness + СПА, коммерция, велохранение, конюшня, pet-washroom.',
  },
];

const TbilisiWaterfront = () => {
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
            <span className="text-iberia-dark font-medium">Tbilisi Waterfront</span>
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
                Tbilisi Waterfront
              </h1>
              <p className="text-3xl font-bold text-iberia-dark mb-2">От $128 000</p>
              <p className="text-sm text-gray-500 mb-5">Апартаменты, таунхаусы и виллы · Тбилиси</p>

              <div className="mb-6">
                <ProjectCatalogButton />
              </div>

              <a
                href="tel:+995599254769"
                className="inline-flex items-center gap-2 bg-iberia-orange hover:bg-[#e26e60] text-white font-semibold px-8 py-3 rounded-full transition mb-8 w-full sm:w-auto text-sm tracking-wide uppercase justify-center sm:justify-start"
              >
                <Icon name="Phone" size={16} />
                Узнать стоимость
              </a>

              <div className="space-y-0 divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex gap-4 px-5 py-3 hover:bg-gray-50 transition">
                    <span className="text-sm text-gray-400 w-44 flex-shrink-0 pt-0.5">{spec.label}</span>
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
                  <p className="text-sm text-gray-500 mb-3">Расскажем о фазах, форматах и условиях входа от 5%.</p>
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
                  <Icon name="MapPin" size={24} className="text-iberia-orange" />
                </div>
                <h3 className="font-semibold text-iberia-dark mb-2">590 Га у реки Куры</h3>
                <p className="text-sm text-gray-500">Масштабный проект в Тбилиси — 170 Га парков, набережная, отели и полная городская инфраструктура.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-iberia-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Home" size={24} className="text-iberia-orange" />
                </div>
                <h3 className="font-semibold text-iberia-dark mb-2">3 формата жилья</h3>
                <p className="text-sm text-gray-500">Апартаменты, таунхаусы и виллы — выбор под любой бюджет и образ жизни, от $128 000 до $450 000+.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-iberia-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-iberia-orange" />
                </div>
                <h3 className="font-semibold text-iberia-dark mb-2">Вход от 5%</h3>
                <p className="text-sm text-gray-500">Поэтапная схема 10/30/60 — минимальный первый взнос и фиксация цены на старте строительства.</p>
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

export default TbilisiWaterfront;