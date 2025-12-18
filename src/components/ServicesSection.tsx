import { Scissors, Palette, Sparkles } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte de Cabello",
    description: "Cortes modernos y clásicos adaptados a tu estilo personal.",
    price: "15€ - 25€",
  },
  {
    icon: Palette,
    title: "Tintes",
    description: "Coloración profesional, mechas, balayage y tratamientos de color.",
    price: "35€ - 60€",
  },
  {
    icon: Sparkles,
    title: "Peinados",
    description: "Peinados para eventos, bodas y ocasiones especiales.",
    price: "20€ - 45€",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-gold/50 transition-all duration-300 text-center hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="font-display text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <p className="text-gold text-xl font-bold">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
