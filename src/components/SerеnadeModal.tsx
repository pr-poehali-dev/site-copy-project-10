import { useState } from 'react';
import Icon from '@/components/ui/icon';

const images = [
  'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/bf62a60f-575d-44a1-bf76-99fcae9de129.jpg',
  'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/4f7cb17e-3639-4320-967c-502616b8782f.jpg',
  'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/1bc1185f-070a-43df-b421-cef6b6384077.jpg',
  'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/fc3537e0-49b2-42fc-a262-2ca5f80ccb2e.jpg',
];

const specs = [
  { label: 'Локация', value: 'Батуми' },
  { label: 'Стоимость квартир', value: 'От $44 280' },
  { label: 'Стоимость м2', value: 'От $1 200' },
  { label: 'Первоначальный взнос', value: '30%' },
  { label: 'Беспроцентная рассрочка', value: 'До 36 месяцев' },
  { label: 'Срок сдачи', value: '2026–2027' },
  { label: 'Планировки', value: 'Студия, 1 bdr, 2 bdr, 3 bdr' },
  { label: 'Площадь', value: 'От 35 до 180 м2' },
  { label: 'Этажность', value: '16' },
  { label: 'Виды', value: 'Море, горы' },
  { label: 'Отделка', value: '«под ключ»' },
  { label: 'Инфраструктура', value: 'Бассейн на крыше, SPA, фитнес, ресторан, консьерж, охрана, подземный паркинг' },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const SerеnadeModal = ({ open, onClose }: Props) => {
  const [activeImg, setActiveImg] = useState(0);

  if (!open) return null;

  const prev = () => setActiveImg((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveImg((i) => (i + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.65)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Галерея */}
          <div className="md:w-[52%] flex-shrink-0">
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
              <img
                src={images[activeImg]}
                alt="Serenade"
                className="w-full h-full object-cover"
              />
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow transition"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow transition"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
            {/* Миниатюры */}
            <div className="flex gap-2 p-3 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition ${
                    i === activeImg ? 'border-iberia-orange' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Инфо */}
          <div className="flex-1 p-6 md:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
            >
              <Icon name="X" size={22} />
            </button>

            <h2 className="text-iberia-orange font-bold text-2xl md:text-3xl mb-1">Serenade</h2>
            <p className="text-3xl font-bold text-iberia-dark mb-4">$44 280</p>

            <button className="bg-iberia-orange hover:bg-[#e26e60] text-white font-semibold px-6 py-2.5 rounded-full transition mb-6 w-full md:w-auto">
              ПОЛУЧИТЬ КАТАЛОГ
            </button>

            <div className="space-y-2.5">
              {specs.map((s) => (
                <div key={s.label}>
                  <span className="text-iberia-dark font-semibold text-sm">{s.label}</span>
                  <p className="text-iberia-orange text-sm">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerеnadeModal;
