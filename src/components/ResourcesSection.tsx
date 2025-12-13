import { ExternalLink, Youtube, Globe, BookOpen } from "lucide-react";

const resources = [
  {
    title: "INCIBE",
    description: "Instituto Nacional de Ciberseguridad de España. Recursos educativos y ayuda.",
    url: "https://www.incibe.es",
    icon: Globe,
    category: "Oficial"
  },
  {
    title: "IS4K - Internet Segura for Kids",
    description: "Portal de INCIBE para menores con recursos, juegos y consejos.",
    url: "https://www.is4k.es",
    icon: BookOpen,
    category: "Educativo"
  },
  {
    title: "OSI - Oficina de Seguridad del Internauta",
    description: "Alertas de seguridad, consejos y herramientas gratuitas.",
    url: "https://www.osi.es",
    icon: Globe,
    category: "Oficial"
  },
  {
    title: "Policía Nacional - Ciberseguridad",
    description: "Información sobre delitos informáticos y cómo denunciar.",
    url: "https://www.policia.es",
    icon: Globe,
    category: "Oficial"
  },
  {
    title: "Pantallas Amigas",
    description: "Canal de YouTube con videos educativos sobre ciberseguridad para jóvenes.",
    url: "https://www.youtube.com/@pantallasamigas",
    icon: Youtube,
    category: "YouTube"
  },
  {
    title: "AEPD - Tú decides en Internet",
    description: "Agencia Española de Protección de Datos. Guías sobre privacidad.",
    url: "https://www.tudecideseninternet.es",
    icon: BookOpen,
    category: "Educativo"
  }
];

const ResourcesSection = () => {
  return (
    <section id="recursos" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Recursos y</span>{" "}
            <span className="text-gradient-cyber">Canales de Información</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Páginas web y canales oficiales donde encontrar información sobre ciberseguridad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-card rounded-xl border-glow hover:glow-cyber transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-secondary">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                  {resource.category}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                {resource.title}
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
