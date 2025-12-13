import { Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-bold text-gradient-cyber">
              CiberConsejos
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm mb-6 max-w-md">
            Proyecto educativo sobre ciberseguridad. Mantente seguro en internet.
          </p>

          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#consejos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Consejos
            </a>
            <a href="#recursos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#proteccion" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Protección
            </a>
            <a href="#ayuda" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Ayuda
            </a>
            <a href="#generador" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Generador
            </a>
          </nav>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-destructive" />
            <span>para la seguridad digital</span>
          </div>
          
          <p className="mt-4 text-xs text-muted-foreground">
            © 2024 Proyecto Escolar de Ciberseguridad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
