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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 min-h-[420px]">
            <img
              src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/cd6da211-7ddc-4a01-bf75-3ed28e5de159.jpg"
              alt="Georgii Saginadze"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-iberia-dark/60 via-transparent to-transparent" />

            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-5 py-3 text-iberia-dark font-medium hover:bg-white transition-all shadow-lg">
              <div className="w-10 h-10 flex items-center justify-center bg-iberia-orange rounded-full">
                <Icon name="Play" size={16} className="text-white ml-0.5" />
              </div>
              <span className="text-sm">Видеообращение<br />от директора</span>
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <p className="text-sm leading-relaxed mb-2">
                Покупка недвижимости для большинства людей — это шаг к достижению важной цели. Наша миссия — помочь клиентам приблизиться к ней и предложить лучшие решения на основе их запросов.
              </p>
              <p className="text-xs text-white/70">Georgii Saginadze</p>
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