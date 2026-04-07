const teamPhotos = [
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-iberia-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          IBERIA™ - это команда{' '}
          <span className="text-iberia-orange">экспертов недвижимости</span>{' '}
          из 5 стран
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {teamPhotos.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-3xl overflow-hidden bg-iberia-dark/50"
            >
              <img
                src={src}
                alt={`Команда IBERIA ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
