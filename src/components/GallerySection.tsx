const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    alt: "Corte de cabello elegante",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    alt: "Coloración profesional",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    alt: "Peinado de novia",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80",
    alt: "Interior del salón",
    span: "col-span-2 row-span-1 md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
    alt: "Tratamiento capilar",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80",
    alt: "Manicura profesional",
    span: "col-span-1 row-span-1",
  },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">
            Nuestro trabajo
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Galería
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra colección de trabajos y transformaciones. 
            Cada cliente es una obra de arte única.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative group overflow-hidden rounded-2xl cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] md:min-h-[250px] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-display text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
          >
            <span>Síguenos en Instagram para más inspiración</span>
            <span className="text-gold">@elegancestudio</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
