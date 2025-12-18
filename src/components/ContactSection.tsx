import { MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "34612345678";
  const whatsappMessage = "Hola, me gustaría reservar una cita.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-primary-foreground font-semibold rounded-full transition-all duration-300 mb-12 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Reservar por WhatsApp
          </a>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Address */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Dirección</h3>
              <p className="text-muted-foreground">
                Calle Mayor 123, 2º Piso<br />
                28001 Madrid, España
              </p>
            </div>

            {/* Hours */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Horario</h3>
              <p className="text-muted-foreground">
                Lunes a Viernes: 10:00 - 20:00<br />
                Sábados: 10:00 - 14:00<br />
                Domingos: Cerrado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
