import { useRef, useEffect } from 'react';

const reviews = [
  {
    name: 'Сергей',
    subtitle: 'Тайланд',
    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-236888951&id=456239029&hd=2',
  },
  {
    name: 'Эдгар',
    subtitle: 'Москва',
    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-236888951&id=456239030&hd=2',
  },
  {
    name: 'Сергей и Светлана',
    subtitle: 'Литва',
    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-236888951&id=456239031&hd=2',
  },
  {
    name: 'Самуил',
    subtitle: 'Израиль',
    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-236888951&id=456239032&hd=2',
  },
];

const ReviewsSection = () => {
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
    <section id="reviews" className="py-20 bg-iberia-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-iberia-orange">Видео-отзывы</span> наших клиентов
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
        {reviews.map((r) => (
          <div key={r.name} className="flex-shrink-0 w-56 md:w-64">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 bg-white/10">
              <iframe
                src={r.videoUrl}
                className="w-full h-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                draggable={false}
              />
            </div>
            <p className="text-white font-bold text-lg leading-tight">{r.name}</p>
            <p className="text-iberia-orange text-sm mt-1">{r.subtitle}</p>
          </div>
        ))}
        <div className="flex-shrink-0 w-2" />
      </div>

      <style>{`#reviews div[style*="grab"]::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default ReviewsSection;
