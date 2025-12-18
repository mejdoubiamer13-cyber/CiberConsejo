import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
              <Scissors className="w-5 h-5 text-background" />
            </div>
            <span className="font-display text-2xl font-semibold text-foreground">
              Elegance
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-6 py-2.5 bg-gold text-background rounded-full text-sm font-medium hover:bg-gold-light transition-colors duration-300"
            >
              Reservar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-gold transition-colors py-2 text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3 bg-gold text-background rounded-full text-center font-medium"
              >
                Reservar Cita
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
