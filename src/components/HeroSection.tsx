import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <style>{`
        @keyframes wave-rtl {
          0% { transform: translateX(110%) skewX(-15deg); opacity: 0.7; }
          100% { transform: translateX(-110%) skewX(-15deg); opacity: 0; }
        }
        .wave-btn { position: relative; overflow: hidden; }
        .wave-btn::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
          transform: translateX(110%) skewX(-15deg);
          opacity: 0;
        }
        .wave-btn.wave-animate::after {
          animation: wave-rtl 1.1s ease-in-out forwards;
        }
      `}</style>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/c24ebdab-2f86-421e-baa1-609efdc370c9.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-iberia-dark/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Недвижимость в Грузии у моря
            <br />напрямую от застройщиков
            <br />в рассрочку 0% от{' '}
            <span className="text-iberia-orange">44.500$</span>
          </h1>
        </div>

        {/* Форма каталога */}
        <div className="bg-iberia-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-3xl mb-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Левая часть — форма */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-lg mb-4">
                Получите каталог топ-15 новых проектов в Батуми!
              </h3>

              {/* Буллеты */}
              <div className="flex flex-wrap gap-4 mb-5">
                {/* Для жизни и инвестиций — домик с $ */}
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full relative">
                    <Icon name="Home" size={15} className="text-white" />
                    <span className="absolute -top-1 -right-1 text-white text-[9px] font-bold leading-none">$</span>
                  </span>
                  <span>Для жизни<br />и инвестиций</span>
                </div>

                {/* В каталоге прайсы и планировки */}
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
                    <Icon name="FileText" size={15} className="text-white" />
                  </span>
                  <span>В каталоге прайсы<br />и планировки</span>
                </div>

                {/* Закрытые скидки — знак % */}
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full relative">
                    <Icon name="Tag" size={15} className="text-white" />
                    <span className="absolute -top-1 -right-1 text-white text-[9px] font-bold leading-none">%</span>
                  </span>
                  <span>Закрытые скидки<br />от застройщиков</span>
                </div>
              </div>

              {/* Кнопка с волной */}
              <button
                ref={btnRef}
                className="wave-btn flex items-center gap-2 bg-iberia-orange text-white font-semibold px-8 py-3.5 rounded-full hover:bg-orange-600 transition-colors w-full sm:w-auto justify-center"
              >
                <Icon name="Download" size={18} />
                Получить каталог
              </button>

              {/* Подпись с иконками мессенджеров */}
              <div className="flex items-center gap-2 mt-2.5">
                <span className="text-white/50 text-xs">PDF, 18 mb</span>
                <span className="text-white/30 text-xs">·</span>
                {/* WhatsApp */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {/* Telegram */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="text-white/50 text-xs">Отправим в мессенджеры</span>
              </div>
            </div>

            {/* Правая часть — картинка каталога */}
            <div className="hidden md:flex items-end justify-center md:w-48 flex-shrink-0">
              <img
                src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/6cbb2e9d-db5a-495d-a6ab-4ba304bcd77c.png"
                alt="Каталог новых проектов"
                className="w-44 object-contain drop-shadow-2xl"
                style={{ transform: 'rotate(3deg)' }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: 'Home', text: 'Первый взнос от 10.500$' },
            { icon: 'Percent', text: 'Рассрочка 0% до 46 мес.' },
            { icon: 'TrendingUp', text: 'Доходность от 13.5%' },
            { icon: 'Building2', text: 'Топовые застройщики' },
          ].map((item) => (
            <div
              key={item.text}
              className="bg-white rounded-2xl p-4 flex flex-col gap-3"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-iberia-light-bg">
                <Icon name={item.icon} size={20} className="text-iberia-dark" />
              </div>
              <p className="font-semibold text-iberia-dark text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
