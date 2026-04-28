import { useState } from 'react';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-iberia-dark mb-12">
          Saginadze Estate — агентство недвижимости в Батуми
          <br />
          <span className="text-iberia-orange">с большим опытом работы и экспертизой</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 min-h-[420px]">
            {/* Мобильная: лицо по центру-верху; планшет/ПК: смещаем фото вниз чтобы показать лицо */}
            <img
              src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/0c797aa3-c3c1-4752-b56a-e6f2f55345e6.jpg"
              alt="Георгий Сагинадзе"
              className="w-full h-full object-cover absolute inset-0 object-[center_15%] md:object-[center_30%]"
            />

            {/* Кнопка: мобильная — над плашкой по центру; планшет/ПК — правее и выше */}
            <button
              onClick={() => setVideoOpen(true)}
              className="absolute bottom-[33%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:bottom-[160px] md:right-5 flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2.5 md:px-5 md:py-3 text-iberia-dark font-medium hover:bg-white transition-all shadow-lg"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-iberia-orange rounded-full">
                <Icon name="Play" size={14} className="text-white ml-0.5" />
              </div>
              <span className="text-xs md:text-sm">Видеообращение<br />от директора</span>
            </button>

            {/* Плашка: мобильная — занимает ~1/3 снизу, меньший шрифт; планшет/ПК — стандартная */}
            <div className="absolute bottom-0 left-0 right-0 mx-3 mb-3 md:mx-4 md:mb-4 p-3 md:p-5 rounded-2xl bg-iberia-card-bg text-iberia-dark" style={{maxHeight: '33%'}}>
              <p className="text-xs leading-snug mb-1.5 md:text-sm md:leading-relaxed md:mb-3 line-clamp-3 md:line-clamp-none">
                Покупка недвижимости для большинства людей — это шаг к достижению важной цели. Наша миссия — помочь клиентам приблизиться к ней и предложить лучшие решения на основе их запросов.
              </p>
              <p className="text-[10px] md:text-xs text-iberia-dark/60 text-right">Георгий Сагинадзе, основатель Saginadze Estate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-iberia-card-bg rounded-3xl p-6 relative overflow-hidden">
              <p className="text-5xl font-bold text-iberia-dark mb-1">8 лет</p>
              <p className="text-sm text-iberia-dark/70 mt-4">С 2017 работаем с недвижимостью в замечательном городе Батуми</p>
              <div className="absolute -right-4 -top-4 opacity-20">
                <Icon name="Ribbon" size={100} className="text-iberia-dark" />
              </div>
            </div>

            <div className="bg-iberia-card-bg rounded-3xl p-6 relative overflow-hidden">
              <p className="text-5xl font-bold text-iberia-dark mb-1">780+</p>
              <p className="text-sm text-iberia-dark/70 mt-4">Более 780 объектов недвижимости продано с нашей помощью</p>
              <div className="absolute -right-4 -top-4 opacity-20">
                <Icon name="Key" size={100} className="text-iberia-dark" />
              </div>
            </div>

            <div className="sm:col-span-2 bg-iberia-card-bg rounded-3xl p-6 relative overflow-hidden">
              <p className="text-5xl font-bold text-iberia-dark mb-1">&gt;25 млн.</p>
              <p className="text-sm text-iberia-dark/70 mt-4">Более 25 млн. долларов заработали наши клиенты на инвестициях</p>
              <div className="absolute right-6 top-6 opacity-20">
                <div className="flex gap-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-3 h-3 bg-iberia-orange rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-[360px] rounded-2xl overflow-hidden bg-black"
            style={{ aspectRatio: '9/16' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              <Icon name="X" size={16} className="text-white" />
            </button>
            <iframe
              src="https://vkvideo.ru/video_ext.php?oid=-236888951&id=456239022&hd=2&autoplay=1"
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;