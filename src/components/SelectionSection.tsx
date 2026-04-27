import Icon from '@/components/ui/icon';

const steps = [
  { num: '1', text: 'Ответьте на несколько вопросов' },
  { num: '2', text: 'Эксперт получит вводные данные' },
  { num: '3', text: 'Подберет проекты под Ваш запрос' },
  { num: '4', text: 'Вышлет вам подборку в мессенджер' },
];

const SelectionSection = () => {
  return (
    <section id="consultation" className="py-20 bg-iberia-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-iberia-dark rounded-3xl overflow-hidden p-8 md:p-12">
          <div className="relative z-10 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Получите{' '}
              <span className="text-iberia-orange">индивидуальную</span>
              <br />подборку недвижимости
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {steps.map((s) => (
                <div key={s.num} className="flex items-start gap-3">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full text-white font-bold text-sm">
                    {s.num}
                  </div>
                  <p className="text-white/80 text-sm leading-snug">{s.text}</p>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-iberia-orange text-white font-bold px-8 py-3.5 rounded-xl hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
              <Icon name="ArrowDownLeft" size={18} />
              Получить подборку
            </button>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-4">
            <div className="w-36 h-64 rounded-3xl overflow-hidden shadow-2xl -rotate-6">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80"
                alt="Проект"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-64 rounded-3xl overflow-hidden shadow-2xl rotate-3">
              <img
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=300&q=80"
                alt="Проект"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-0 bg-white rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg">
              <div className="w-8 h-8 bg-iberia-dark rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2 L8 14 M2 8 L14 8 M4 4 L12 12 M12 4 L4 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-iberia-dark font-bold text-xs">Georgii Saginadze</span>
            </div>
          </div>

          <div className="absolute inset-0 opacity-5">
            <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-[40px] border-white" />
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[30px] border-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionSection;