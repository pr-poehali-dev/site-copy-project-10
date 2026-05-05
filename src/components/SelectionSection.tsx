import Icon from '@/components/ui/icon';

const steps = [
  { num: '1', text: 'Ответьте на несколько вопросов' },
  { num: '2', text: 'Эксперт получит вводные данные' },
  { num: '3', text: 'Подберет проекты под Ваш запрос' },
  { num: '4', text: 'Вышлет вам подборку в мессенджер' },
];

const SelectionSection = () => {
  return (
    <section id="consultation" className="py-10 bg-iberia-light-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative bg-iberia-dark rounded-3xl overflow-hidden p-10 md:p-16 min-h-[480px] flex items-center">

          {/* Текст + шаги */}
          <div className="relative z-10 w-full max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
              Получите{' '}
              <span className="text-iberia-orange">индивидуальную</span>
              <br />подборку недвижимости
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
              {steps.map((s) => (
                <div key={s.num} className="flex items-start gap-4">
                  <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-white rounded-full text-iberia-dark font-bold text-base">
                    {s.num}
                  </div>
                  <p className="text-white text-base leading-snug">{s.text}</p>
                </div>
              ))}
            </div>

            <button className="wave-btn flex items-center gap-2 bg-iberia-orange text-white font-semibold px-6 py-3 rounded-full hover:bg-[#e26e60] transition-colors">
              <Icon name="ArrowDownLeft" size={18} />
              Получить подборку
            </button>
          </div>

          {/* Карточки фото */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex items-end gap-5 pr-4">
            <div className="w-52 h-80 rounded-3xl overflow-hidden shadow-2xl -rotate-6 translate-y-4">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80"
                alt="Проект"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-52 h-80 rounded-3xl overflow-hidden shadow-2xl rotate-3">
              <img
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80"
                alt="Проект"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Декоративные круги */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-[50px] border-white" />
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-[40px] border-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionSection;