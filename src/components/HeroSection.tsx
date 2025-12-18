import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
          alt="Salón de belleza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-gold-light tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          Salón de Belleza & Estilismo
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
          Elegance
          <span className="block text-gold mt-2">Studio</span>
        </h1>
        
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
          Donde el arte y la belleza se encuentran. Transformamos tu imagen 
          con las últimas tendencias y un servicio personalizado de primera clase.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
          <a
            href="#contacto"
            className="px-8 py-4 bg-gold hover:bg-gold-light text-espresso font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
          >
            Reservar Cita
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium rounded-full transition-all duration-300"
          >
            Ver Servicios
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-gold transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
