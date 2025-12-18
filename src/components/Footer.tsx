import { Scissors, Instagram, Facebook, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso text-primary-foreground/80 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Scissors className="w-5 h-5 text-espresso" />
              </div>
              <span className="font-display text-2xl text-primary-foreground">
                Elegance Studio
              </span>
            </div>
            <p className="text-primary-foreground/60 max-w-md mb-6">
              Tu destino de belleza y bienestar. Donde cada visita es una experiencia 
              transformadora con los mejores profesionales del sector.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="hover:text-gold transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-gold transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-gold transition-colors">Galería</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-gold transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Gran Vía 42, Madrid</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+34912345678" className="hover:text-gold transition-colors">
                  +34 912 345 678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/40 text-sm">
          <p>© {new Date().getFullYear()} Elegance Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
