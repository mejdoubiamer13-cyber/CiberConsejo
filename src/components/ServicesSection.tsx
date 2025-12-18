import { Scissors, Sparkles, Palette, Wind, Crown, Heart } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte & Estilo",
    description: "Cortes personalizados que realzan tu belleza natural y estilo único.",
    price: "Desde 25€",
  },
  {
    icon: Palette,
    title: "Coloración",
    description: "Técnicas de color avanzadas: balayage, mechas, tintes naturales.",
    price: "Desde 45€",
  },
  {
    icon: Wind,
    title: "Peinados",
    description: "Peinados para eventos especiales, bodas y ocasiones únicas.",
    price: "Desde 35€",
  },
  {
    icon: Sparkles,
    title: "Tratamientos",
    description: "Keratina, hidratación profunda y recuperación capilar.",
    price: "Desde 40€",
  },
  {
    icon: Crown,
    title: "Novias",
    description: "Servicio completo de novia: prueba, peinado y maquillaje.",
    price: "Desde 150€",
  },
  {
    icon: Heart,
    title: "Manicura & Pedicura",
    description: "Cuidado completo de manos y pies con productos premium.",
    price: "Desde 20€",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">
            Lo que ofrecemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de belleza y estilismo, 
            utilizando productos de primera calidad y las técnicas más avanzadas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-elegant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <p className="text-gold font-semibold">
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
