import { Shield, Lock, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Icons floating */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="p-4 rounded-xl bg-card border-glow animate-float">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div className="p-4 rounded-xl bg-card border-glow animate-float" style={{ animationDelay: "0.5s" }}>
            <Lock className="w-10 h-10 text-accent" />
          </div>
          <div className="p-4 rounded-xl bg-card border-glow animate-float" style={{ animationDelay: "1s" }}>
            <Eye className="w-8 h-8 text-primary" />
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gradient-cyber">CIBER</span>
          <span className="text-foreground">CONSEJOS</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Aprende a protegerte en el mundo digital. Consejos de seguridad para 
          <span className="text-primary font-semibold"> TikTok</span>, 
          <span className="text-accent font-semibold"> redes sociales</span> y más.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#consejos" 
            className="px-8 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-lg glow-cyber hover:glow-cyber-strong transition-all duration-300 hover:scale-105"
          >
            Ver Consejos
          </a>
          <a 
            href="#generador" 
            className="px-8 py-3 bg-card border border-primary/50 text-primary font-display font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Generar Contraseña
          </a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
