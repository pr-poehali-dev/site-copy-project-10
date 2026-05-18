import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const steps = [
  { num: '1', line1: 'Ответьте на', line2: 'несколько вопросов' },
  { num: '2', line1: 'Эксперт получит', line2: 'вводные данные' },
  { num: '3', line1: 'Подберет проекты', line2: 'под Ваш запрос' },
  { num: '4', line1: 'Вышлет вам подборку', line2: 'в мессенджер' },
];

const SelectionSection = () => {
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
    <section id="consultation" className="py-10" style={{ backgroundColor: '#b8d9f0' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative bg-iberia-dark rounded-3xl overflow-hidden">

          {/* Мобильный веер из 3 фото сверху */}
          <div className="lg:hidden relative h-52 w-full overflow-visible">
            <div className="absolute rounded-2xl overflow-hidden shadow-2xl"
              style={{ width: '140px', height: '190px', left: '10%', top: '20px', transform: 'rotate(-10deg)', zIndex: 1 }}>
              <img src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/d88eb9d9-9825-4de4-aa28-3ff7cc43bc45.jpg"
                alt="Проект" className="w-full h-full object-cover" draggable={false} />
            </div>
            <div className="absolute rounded-2xl overflow-hidden shadow-2xl"
              style={{ width: '150px', height: '200px', left: '50%', top: '10px', transform: 'translateX(-50%) rotate(-2deg)', zIndex: 2 }}>
              <img src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/31d8c948-74f4-48b7-9352-1032073070cd.jpg"
                alt="Проект" className="w-full h-full object-cover" draggable={false} />
            </div>
            <div className="absolute rounded-2xl overflow-hidden shadow-2xl"
              style={{ width: '140px', height: '190px', right: '10%', top: '20px', transform: 'rotate(8deg)', zIndex: 1 }}>
              <img src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/7ed6da7d-84ea-4da7-aee3-2d97dd3a5f19.jpg"
                alt="Проект" className="w-full h-full object-cover" draggable={false} />
            </div>
          </div>

          <div className="relative flex items-center p-8 md:p-10 lg:p-12 min-h-0">
            {/* Текст + шаги */}
            <div className="relative z-10 w-full max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Получите <span className="text-iberia-orange">индивидуальную</span>
                <br />
                подборку недвижимости
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {steps.map((s) => (
                  <div key={s.num} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-full text-iberia-dark font-bold text-lg">
                      {s.num}
                    </div>
                    <p className="text-white text-base leading-snug">{s.line1}<br />{s.line2}</p>
                  </div>
                ))}
              </div>

              <button
                ref={btnRef}
                className="wave-btn flex items-center gap-2 bg-iberia-orange text-white font-semibold px-6 py-3 rounded-full hover:bg-[#e26e60] transition-colors"
              >
                <Icon name="Download" size={18} />
                Получить подборку
              </button>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-white/50 text-xs">PDF, 18 mb</span>
                <span className="text-white/30 text-xs">·</span>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/60">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/60">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="text-white/50 text-xs">Отправим в мессенджеры</span>
              </div>
            </div>

            {/* Коллаж из 3 фото — только десктоп */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block" style={{ width: '480px', height: '380px' }}>
              <div className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{ width: '210px', height: '300px', left: '0px', top: '40px', transform: 'rotate(-8deg)', zIndex: 1 }}>
                <img src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/d88eb9d9-9825-4de4-aa28-3ff7cc43bc45.jpg"
                  alt="Проект" className="w-full h-full object-cover" draggable={false} />
              </div>
              <div className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{ width: '210px', height: '320px', left: '135px', top: '20px', transform: 'rotate(-2deg)', zIndex: 2 }}>
                <img src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/31d8c948-74f4-48b7-9352-1032073070cd.jpg"
                  alt="Проект" className="w-full h-full object-cover" draggable={false} />
              </div>
              <div className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{ width: '210px', height: '300px', right: '0px', top: '50px', transform: 'rotate(6deg)', zIndex: 3 }}>
                <img src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/7ed6da7d-84ea-4da7-aee3-2d97dd3a5f19.jpg"
                  alt="Проект" className="w-full h-full object-cover" draggable={false} />
              </div>
            </div>

            {/* Декоративные круги */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-[50px] border-white" />
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-[40px] border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionSection;