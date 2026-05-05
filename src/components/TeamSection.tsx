import { useRef, useEffect } from 'react';

const team = [
  {
    name: 'Георгий Сагинадзе',
    role: 'Основатель',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/2c9c50c5-4629-4c7f-93bd-cc6e4e6445b8.jpg',
  },
  {
    name: 'Милана Сагинадзе',
    role: 'Коммерческий директор',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/46adca88-d94d-44a2-8da0-ef49f23bf937.jpg',
  },
  {
    name: 'Мария Курдыбо',
    role: 'Юрист',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/9738e568-4797-454c-bcb9-c98d89911766.jpg',
  },
  {
    name: 'Артур Багдасаров',
    role: 'Партнёр. Управляющая компания',
    img: 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/61b0ebfd-5694-4b1e-843c-13fc88470704.jpg',
  },
];

const TeamSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2;
    };
    const onMouseUp = () => {
      isDragging.current = false;
      el.style.cursor = 'grab';
    };

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <section id="team" className="py-20 bg-iberia-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Saginadze Estate — это команда{' '}
          <span className="text-iberia-orange">экспертов недвижимости</span>{' '}

        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto select-none"
        style={{
          paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))',
          paddingRight: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))',
          cursor: 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        } as React.CSSProperties}
      >
        {team.map((member) => (
          <div key={member.name} className="flex-shrink-0 w-64 md:w-72">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 bg-white/10">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </div>
            <p className="text-white font-bold text-lg leading-tight">{member.name}</p>
            <p className="text-iberia-orange text-sm mt-1">{member.role}</p>
          </div>
        ))}
        <div className="flex-shrink-0 w-2" />
      </div>

      <style>{`#team div[style*="grab"]::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default TeamSection;