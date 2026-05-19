const bullets = [
  { img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/f92e3d0a-1707-4882-96ae-870729782e50.png', text: 'Первый взнос от 10.500$' },
  { img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/85447260-b51b-4f13-a115-5735d6e4d765.png', text: 'Рассрочка 0% до 46 мес.' },
  { img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/e8d47f55-8dd0-47a0-b414-a1aea52c337d.png', text: 'Доходность от 13.5%' },
  { img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/b7a37c39-1b41-43ae-b286-6a2b37194b6b.png', text: 'Топовые застройщики' },
];

const MobileSecondScreen = () => {
  return (
    <section className="sm:hidden w-full h-[100svh] relative overflow-hidden">
      <img
        src="https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/9b526e58-680b-4fd7-adcf-391d8cdb5c0f.jpg"
        alt="Батуми"
        className="w-full h-full object-cover object-center"
      />

      {/* Градиент снизу */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5"
        style={{ background: 'linear-gradient(to top, rgba(10,20,50,0.92) 0%, transparent 100%)' }}
      />

      {/* Буллеты у нижнего края */}
      <div className="absolute inset-x-0 bottom-6 px-6 flex flex-col gap-3">
        {bullets.map((item) => (
          <div key={item.text} className="bg-white rounded-2xl px-3 py-3 flex flex-row items-center gap-2">
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <img src={item.img} alt="" className="w-9 h-9 object-contain" />
            </div>
            <p className="font-semibold text-iberia-dark text-xs leading-tight">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileSecondScreen;