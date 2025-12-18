const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    alt: "Corte moderno",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    alt: "Coloración profesional",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    alt: "Peinado elegante",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
    alt: "Estilismo profesional",
  },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Galería de Fotos
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-primary-foreground font-display text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
