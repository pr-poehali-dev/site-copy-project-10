import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const images = [
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/bf62a60f-575d-44a1-bf76-99fcae9de129.jpg',
    alt: 'Serenade — фасад',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/4f7cb17e-3639-4320-967c-502616b8782f.jpg',
    alt: 'Serenade — крыша',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/1bc1185f-070a-43df-b421-cef6b6384077.jpg',
    alt: 'Serenade — вид сверху',
  },
  {
    src: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/fc3537e0-49b2-42fc-a262-2ca5f80ccb2e.jpg',
    alt: 'Serenade — ночной вид',
  },
];

const specs = [
  { label: 'Локация', value: 'Батуми' },
  { label: 'Стоимость квартир', value: 'От $46 900' },
  { label: 'Стоимость м2', value: 'От $1 100/м2 («зелёный каркас»)' },
  { label: 'Размер ПВ', value: '20%' },
  { label: 'Беспроцентная рассрочка', value: 'До 40 месяцев' },
  { label: 'Срок сдачи', value: '4 кв-л 2028' },
  { label: 'Планировки', value: 'Студия, 1 спальня, 2 спальни' },
  { label: 'Площадь', value: '32 м2 – 105,8 м2' },
  { label: 'Этажность', value: '16 этажей' },
  { label: 'До моря', value: '700 м' },
  { label: 'Виды', value: 'Море, горы' },
  {
    label: 'Отделка',
    value: '«зеленый каркас», «с отделкой», «под ключ с мебелью», «под ключ с мебелью и техникой»',
  },
  {
    label: 'Инфраструктура',
    value:
      'Панорамные лифты, инфинити-бассейн на крыше, терраса на крыше с лаунж-зоной, кафе, коворкинг, детская развлекательная комната, ветеринарная клиника, салон красоты, аптека, магазины , паркинг с современной системой парковки',
  },
];

const Serenade = () => {
  const [activeImg, setActiveImg] = useState(0);

  const prev = () => setActiveImg((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveImg((i) => (i + 1) % images.length);

  return (
    <div className="min-h-screen bg-white">
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

      {/* Контент */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Хлебные крошки */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-iberia-orange transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/" className="hover:text-iberia-orange transition-colors">Проекты</Link>
            <span>/</span>
            <span className="text-iberia-dark font-medium">Serenade</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">

            {/* Левая колонка — галерея */}
            <div className="lg:w-[55%] flex-shrink-0">
              {/* Главное фото */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 mb-3">
                <img
                  src={images[activeImg].src}
                  alt={images[activeImg].alt}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
                >
                  <Icon name="ChevronLeft" size={22} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
                >
                  <Icon name="ChevronRight" size={22} />
                </button>
                <div className="absolute bottom-4 right-4 bg-black/40 text-white text-xs px-3 py-1 rounded-full">
                  {activeImg + 1} / {images.length}
                </div>
              </div>

              {/* Миниатюры */}
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

            {/* Правая колонка — инфо */}
            <div className="flex-1 min-w-0">
              <h1
                className="font-bold text-iberia-orange mb-1"
                style={{ fontSize: '2rem', lineHeight: '1.2' }}
              >
                Serenade
              </h1>
              <p className="text-3xl font-bold text-iberia-dark mb-5">$46 900</p>

              <button className="bg-iberia-orange hover:bg-[#e26e60] text-white font-semibold px-8 py-3 rounded-full transition mb-8 w-full sm:w-auto text-sm tracking-wide uppercase">
                Получить каталог
              </button>

              {/* Характеристики */}
              <div className="space-y-4">
                {specs.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <span className="text-iberia-dark font-semibold text-sm">{s.label}</span>
                    <span className="text-iberia-orange text-sm leading-snug">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-iberia-dark py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/60 text-sm">© 2024 Saginadze Estate. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Serenade;
