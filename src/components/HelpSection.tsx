import { Phone, MessageSquare, Mail, AlertTriangle } from "lucide-react";

const helpResources = [
  {
    title: "INCIBE - Línea de Ayuda",
    phone: "017",
    description: "Línea gratuita y confidencial para consultas sobre ciberseguridad. Disponible de 8:00 a 23:00, los 365 días del año.",
    icon: Phone,
    urgent: true
  },
  {
    title: "Policía Nacional",
    phone: "091",
    description: "Para denunciar delitos informáticos, ciberacoso o cualquier actividad ilegal en internet.",
    icon: Phone,
    urgent: true
  },
  {
    title: "Guardia Civil",
    phone: "062",
    description: "Grupo de Delitos Telemáticos. Especialistas en ciberdelincuencia.",
    icon: Phone,
    urgent: true
  },
  {
    title: "Teléfono contra el Acoso Escolar",
    phone: "900 018 018",
    description: "Atención a casos de ciberacoso y acoso escolar. Gratuito y confidencial.",
    icon: MessageSquare,
    urgent: true
  },
  {
    title: "ANAR - Teléfono del Niño y Adolescente",
    phone: "900 20 20 10",
    description: "Ayuda psicológica para menores. Confidencial, anónimo y gratuito.",
    icon: MessageSquare,
    urgent: false
  },
  {
    title: "Canal Joven INCIBE",
    phone: "canaljoven@incibe.es",
    description: "Correo electrónico para consultas de jóvenes sobre seguridad digital.",
    icon: Mail,
    urgent: false
  }
];

const HelpSection = () => {
  return (
    <section id="ayuda" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 text-destructive rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-semibold">Si necesitas ayuda, no estás solo/a</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Dónde</span>{" "}
            <span className="text-gradient-cyber">Pedir Ayuda</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Si eres víctima de ciberacoso, has sido estafado o necesitas ayuda con cualquier problema de seguridad, 
            estos son los recursos disponibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpResources.map((resource, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-glow transition-all duration-300 hover:-translate-y-2 ${
                resource.urgent ? "bg-card hover:glow-cyber" : "bg-card/50"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${resource.urgent ? "bg-primary/20" : "bg-secondary"}`}>
                  <resource.icon className={`w-6 h-6 ${resource.urgent ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                {resource.urgent && (
                  <span className="px-2 py-1 text-xs font-bold bg-destructive/20 text-destructive rounded">
                    URGENTE
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {resource.title}
              </h3>
              <div className="mb-3">
                <span className="text-2xl font-display font-bold text-primary">
                  {resource.phone}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {resource.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/10 rounded-xl border border-primary/30 text-center">
          <p className="text-foreground font-semibold mb-2">
            Recuerda: Pedir ayuda es un acto de valentía
          </p>
          <p className="text-muted-foreground text-sm">
            Guarda capturas de pantalla como prueba, no borres conversaciones y habla con un adulto de confianza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
