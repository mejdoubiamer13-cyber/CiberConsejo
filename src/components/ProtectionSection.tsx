import { Shield, Wifi, Download, Key, Eye, Smartphone } from "lucide-react";

const protectionTips = [
  {
    icon: Key,
    title: "Contraseñas Seguras",
    tips: [
      "Usa al menos 12 caracteres",
      "Combina mayúsculas, minúsculas, números y símbolos",
      "No uses información personal",
      "Usa una contraseña diferente para cada cuenta"
    ]
  },
  {
    icon: Shield,
    title: "Verificación en Dos Pasos",
    tips: [
      "Actívala en todas tus cuentas importantes",
      "Usa apps de autenticación como Google Authenticator",
      "Guarda los códigos de recuperación en lugar seguro"
    ]
  },
  {
    icon: Wifi,
    title: "WiFi Seguro",
    tips: [
      "Evita redes WiFi públicas para datos sensibles",
      "Usa VPN si necesitas conectarte a redes públicas",
      "Cambia la contraseña del router de casa"
    ]
  },
  {
    icon: Download,
    title: "Descargas Seguras",
    tips: [
      "Descarga solo de tiendas oficiales",
      "Revisa los permisos que piden las apps",
      "Mantén tus aplicaciones actualizadas"
    ]
  },
  {
    icon: Eye,
    title: "Phishing",
    tips: [
      "Desconfía de emails urgentes o amenazantes",
      "Verifica el remitente antes de hacer clic",
      "No descargues archivos de fuentes desconocidas"
    ]
  },
  {
    icon: Smartphone,
    title: "Dispositivos Seguros",
    tips: [
      "Activa el bloqueo de pantalla",
      "Mantén el sistema operativo actualizado",
      "Haz copias de seguridad regularmente"
    ]
  }
];

const ProtectionSection = () => {
  return (
    <section id="proteccion" className="py-20 bg-cyber-grid">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-cyber">Cómo Protegerte</span>{" "}
            <span className="text-foreground">en Internet</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Consejos prácticos para mantener tu seguridad digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {protectionTips.map((section, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border-glow hover:glow-cyber transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/20">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection;
