import { Smartphone, Users, Camera, MessageCircle, MapPin, Lock } from "lucide-react";

const tips = [
  {
    icon: Lock,
    title: "Cuenta Privada",
    description: "Configura tu cuenta de TikTok como privada para controlar quién ve tu contenido.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "No aceptes desconocidos",
    description: "Nunca aceptes solicitudes de seguimiento de personas que no conoces en la vida real.",
    color: "text-accent"
  },
  {
    icon: Camera,
    title: "Cuidado con lo que publicas",
    description: "No compartas información personal, ubicación de tu casa, colegio o rutinas diarias.",
    color: "text-primary"
  },
  {
    icon: MessageCircle,
    title: "Mensajes privados",
    description: "Desactiva los mensajes directos de desconocidos. Los depredadores usan esta función.",
    color: "text-accent"
  },
  {
    icon: MapPin,
    title: "Desactiva ubicación",
    description: "Nunca actives la ubicación en tus videos. Revisa los permisos de la app.",
    color: "text-primary"
  },
  {
    icon: Smartphone,
    title: "Control parental",
    description: "Activa el modo restringido y el emparejamiento familiar si eres menor de edad.",
    color: "text-accent"
  }
];

const TipsSection = () => {
  return (
    <section id="consejos" className="py-20 bg-cyber-grid">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-cyber">Consejos para</span>{" "}
            <span className="text-foreground">TikTok y Redes Sociales</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sigue estos consejos esenciales para mantener tu seguridad en las redes sociales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border-glow hover:glow-cyber transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-secondary mb-4 ${tip.color}`}>
                <tip.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {tip.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
