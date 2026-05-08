import { useRef, useEffect, useState } from 'react';

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

const GAP = 16;

const ReviewsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Считаем ширину карточки по реальному внутреннему размеру враппера (без паддингов)
  useEffect(() => {
    const calc = () => {
      if (!wrapperRef.current) return;
      const style = getComputedStyle(wrapperRef.current);
      const pl = parseFloat(style.paddingLeft) || 0;
      const pr = parseFloat(style.paddingRight) || 0;
      const innerWidth = wrapperRef.current.offsetWidth - pl - pr;
      const w = (innerWidth - GAP * (reviews.length - 1)) / reviews.length;
      setCardWidth(w);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

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
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-iberia-dark">
          <span className="text-iberia-orange">Видео-отзывы</span> наших клиентов
        </h2>
      </div>

      {/* Враппер точно совпадает с max-w-7xl — по нему считаем ширину */}
      <div ref={wrapperRef} className="max-w-7xl mx-auto px-6">
        <div
          ref={trackRef}
          className="flex overflow-x-auto select-none"
          style={{
            gap: GAP,
            cursor: 'grab',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          } as React.CSSProperties}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex-shrink-0"
              style={{ width: cardWidth > 0 ? cardWidth : '23%' }}
            >
              <div className="rounded-3xl overflow-hidden mb-4 bg-gray-100" style={{ aspectRatio: '9/16' }}>
                <iframe
                  src={r.videoUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  draggable={false}
                />
              </div>
              <p className="text-iberia-dark font-bold text-lg leading-tight">{r.name}</p>
              <p className="text-gray-500 text-sm mt-1">{r.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`#reviews div[style*="grab"]::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default ReviewsSection;