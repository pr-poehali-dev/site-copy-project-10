import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Меги Гогитидзе',
    subtitle: 'Грузинская певица',
    desc: 'Благодарность за помощь в покупке 2-х комнатной квартиры',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
  },
  {
    name: 'Игорь Стутман',
    subtitle: 'Новая Зеландия',
    desc: 'Благодарность за помощь в покупке двух 3-х комнатных квартир',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    name: 'Наталья Перец',
    subtitle: 'Россия',
    desc: 'Благодарность за помощь в покупке 1 комнатной квартиры',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-iberia-dark mb-12">
          <span className="text-iberia-orange">Видео-отзывы</span> наших клиентов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-gray-100 mb-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-iberia-orange rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-iberia-dark text-lg">{r.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{r.subtitle}</p>
              <p className="text-gray-600 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
