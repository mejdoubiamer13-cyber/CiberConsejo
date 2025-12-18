import { Scissors } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
          alt="Salón de belleza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-gold mx-auto mb-6 flex items-center justify-center">
          <Scissors className="w-10 h-10 text-espresso" />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl text-primary-foreground mb-4">
          HEADER
        </h1>
        
        <p className="text-gold text-xl md:text-2xl font-light mb-8">
          Peluquería & Estilismo
        </p>
        
        <a
          href="#servicios"
          className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-espresso font-semibold rounded-full transition-all duration-300"
        >
          Ver Servicios
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
