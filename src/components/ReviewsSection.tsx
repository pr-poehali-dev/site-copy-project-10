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
  const [cardWidth, setCardWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(false);
  const cardWidthRef = useRef(0);

  // текущий индекс (для мобила)
  const currentIndex = useRef(0);
  // drag/touch
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const isDragging = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const calc = () => {
      const mobile = window.innerWidth < 768;
      isMobileRef.current = mobile;
      setIsMobile(mobile);
      if (!wrapperRef.current) return;
      const style = getComputedStyle(wrapperRef.current);
      const pl = parseFloat(style.paddingLeft) || 0;
      const pr = parseFloat(style.paddingRight) || 0;
      const innerWidth = wrapperRef.current.offsetWidth - pl - pr;
      const w = mobile
        ? innerWidth * 0.78
        : (innerWidth - GAP * (reviews.length - 1)) / reviews.length;
      cardWidthRef.current = w;
      setCardWidth(w);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(reviews.length - 1, idx));
    currentIndex.current = clamped;
    el.scrollTo({ left: clamped * (cardWidthRef.current + GAP), behavior: 'smooth' });
  };

  // Mouse drag (десктоп)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      dragStartX.current = e.pageX;
      dragStartScroll.current = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      if (!isMobileRef.current) {
        el.scrollLeft = dragStartScroll.current - (e.pageX - dragStartX.current);
      }
    };
    const onMouseUp = (e: MouseEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      el.style.cursor = 'grab';
      if (isMobileRef.current) {
        const diff = e.pageX - dragStartX.current;
        if (Math.abs(diff) > 30) {
          scrollToIndex(currentIndex.current + (diff < 0 ? 1 : -1));
        } else {
          scrollToIndex(currentIndex.current);
        }
      }
    };

    let isHorizontalSwipe: boolean | null = null;

    // Touch (мобил) — перехватываем только горизонтальные жесты
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      dragStartScroll.current = el.scrollLeft;
      isHorizontalSwipe = null;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isMobileRef.current || !isHorizontalSwipe) return;
      const diff = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(diff) > 30) {
        scrollToIndex(currentIndex.current + (diff < 0 ? 1 : -1));
      } else {
        scrollToIndex(currentIndex.current);
      }
      e.preventDefault();
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isMobileRef.current) return;
      const dx = e.touches[0].clientX - touchStartX.current;
      const dy = e.touches[0].clientY - touchStartY.current;
      // определяем направление по первому движению
      if (isHorizontalSwipe === null) {
        isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);
      }
      // если вертикальный — не перехватываем, даём браузеру скроллить страницу
      if (!isHorizontalSwipe) return;
      el.scrollLeft = dragStartScroll.current - dx;
      e.preventDefault();
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: false });
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
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

      <div ref={wrapperRef} className="max-w-7xl mx-auto px-6">
        <div
          ref={trackRef}
          className="flex select-none"
          style={{
            gap: GAP,
            cursor: 'grab',
            overflowX: isMobile ? 'hidden' : 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          } as React.CSSProperties}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex-shrink-0"
              style={{ width: cardWidth > 0 ? cardWidth : undefined }}
            >
              <div className="rounded-3xl overflow-hidden mb-4 bg-gray-100 relative" style={{ aspectRatio: '9/16' }}>
                <iframe
                  src={r.videoUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  draggable={false}
                />
                {isMobile && (
                  <div className="absolute inset-0" style={{ zIndex: 10 }} />
                )}
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