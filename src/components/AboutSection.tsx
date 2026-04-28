import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-iberia-dark mb-12">
          Saginadze Estate — агентство недвижимости в Батуми
          <br />
          <span className="text-iberia-orange">с большим опытом работы и экспертизой</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="flex justify-center">
            <div className="relative rounded-3xl overflow-hidden bg-black w-full max-w-[340px]" style={{aspectRatio: '9/16'}}>
              <iframe
                src="https://vkvideo.ru/video_ext.php?oid=-236888951&id=456239022&hd=2&autoplay=0&js=0&nofullscreen=0&nobigplay=1&norec=1"
                className="w-full h-full scale-[1.01]"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                scrolling="no"
              />
              <div className="absolute bottom-0 left-0 right-0 mx-3 mb-3 p-4 rounded-2xl bg-iberia-card-bg/95 backdrop-blur-sm text-iberia-dark">
                <p className="text-sm leading-relaxed mb-2">
                  Покупка недвижимости для большинства людей — это шаг к достижению важной цели. Наша миссия — помочь клиентам приблизиться к ней и предложить лучшие решения на основе их запросов.
                </p>
                <p className="text-xs text-iberia-dark/60 text-right">Георгий Сагинадзе, основатель Saginadze Estate</p>
              </div>
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
    </section>
  );
};

export default AboutSection;