import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const CatalogSection = () => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const triggerWave = () => {
      btn.classList.remove('wave-animate');
      void btn.offsetWidth;
      btn.classList.add('wave-animate');
    };

    triggerWave();
    const interval = setInterval(triggerWave, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="catalog" className="py-20 bg-iberia-dark">
      <style>{`
        @keyframes wave-ltr-cat {
          0% { transform: translateX(-110%) skewX(-15deg); opacity: 0.7; }
          100% { transform: translateX(110%) skewX(-15deg); opacity: 0; }
        }
        .wave-btn-cat { position: relative; overflow: hidden; }
        .wave-btn-cat::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent);
          transform: translateX(-110%) skewX(-15deg);
          opacity: 0;
        }
        .wave-btn-cat.wave-animate::after {
          animation: wave-ltr-cat 1.1s ease-in-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-[#f0b8a8] rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 min-h-[420px] md:min-h-[400px]">

          {/* Иконка Group_35 в правом верхнем углу */}
          <div className="absolute top-5 right-5 z-20" style={{ top: '20px', right: '20px' }}>
            <img
              src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/33068750-22a7-4d07-9014-f977933239a0.png"
              alt="PDF"
              className="object-contain drop-shadow-lg"
              style={{ width: '112px', height: '112px' }}
            />
          </div>

          {/* Левая часть — текст и форма */}
          <div className="flex-1 z-10 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-iberia-dark mb-6">
              Получите каталог новых
              <br />проектов у моря в Батуми
            </h2>

            <div className="flex flex-col gap-3 mb-8">
              {[
                'Топ-15 ЖК Батуми',
                'В каталоге прайсы и планировки',
                'Закрытые скидки от застройщиков',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-iberia-dark/40">
                    <Icon name="Check" size={14} className="text-iberia-dark" />
                  </div>
                  <span className="text-iberia-dark font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button
              ref={btnRef}
              className="wave-btn-cat flex items-center gap-2 bg-iberia-orange text-white font-semibold px-6 py-3 rounded-full hover:bg-[#e26e60] transition-colors"
            >
              <Icon name="Download" size={18} />
              Получить каталог
            </button>

            {/* Подпись с иконками мессенджеров */}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <span className="text-iberia-dark/60 text-xs">PDF, 17 mb</span>
              <span className="text-iberia-dark/40 text-xs">·</span>
              {/* WhatsApp */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-iberia-dark/60" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {/* Telegram */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-iberia-dark/60" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span className="text-iberia-dark/60 text-xs">Отправим в мессенджеры</span>
            </div>
          </div>

          {/* Десктоп: каталог — третий план (за текстом и Горгием) */}
          <div className="absolute hidden md:block" style={{ bottom: '-40px', right: '280px', zIndex: 5 }}>
            <img
              src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/b7b7e3f5-309b-4fe7-a15f-240eeca75040.png"
              alt="Каталог"
              className="object-contain drop-shadow-xl"
              style={{ width: '520px', transform: 'rotate(4deg)', display: 'block' }}
            />
          </div>
          {/* Десктоп: Горгий — прижат к правому краю, на всю высоту */}
          <div className="absolute bottom-0 z-20 hidden md:block" style={{ right: '-50px' }}>
            <img
              src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/c791f8c0-9231-4f01-ab41-d6440ff2fe60.png"
              alt="Менеджер"
              className="object-contain drop-shadow-2xl"
              style={{ height: '105%', maxHeight: '420px', width: 'auto' }}
            />
          </div>

          {/* Мобильная версия изображений */}
          <div className="relative md:hidden w-full" style={{ height: '240px' }}>
            <div className="absolute bottom-0 right-8 z-10">
              <img
                src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/b7b7e3f5-309b-4fe7-a15f-240eeca75040.png"
                alt="Каталог"
                className="object-contain drop-shadow-xl"
                style={{ width: '130px', transform: 'rotate(4deg)' }}
              />
            </div>
            <div className="absolute bottom-0 right-0 z-20">
              <img
                src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/c791f8c0-9231-4f01-ab41-d6440ff2fe60.png"
                alt="Менеджер"
                className="object-contain drop-shadow-2xl"
                style={{ height: '220px', width: 'auto' }}
              />
            </div>
          </div>

        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Лучшие инвестиционные проекты <span className="text-iberia-orange">Батуми</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;