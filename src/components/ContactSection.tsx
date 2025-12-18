import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">
            Contáctanos
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Reserva tu Cita
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte a lucir increíble. 
            Contáctanos para agendar tu próxima visita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-elegant">
            <h3 className="font-display text-2xl text-foreground mb-6">
              Solicitar Cita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:outline-none focus:border-gold transition-colors"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:outline-none focus:border-gold transition-colors text-muted-foreground"
                >
                  <option value="">Selecciona servicio</option>
                  <option value="corte">Corte & Estilo</option>
                  <option value="color">Coloración</option>
                  <option value="peinado">Peinados</option>
                  <option value="tratamiento">Tratamientos</option>
                  <option value="novia">Novias</option>
                  <option value="manicura">Manicura & Pedicura</option>
                </select>
              </div>
              
              <textarea
                name="message"
                placeholder="Tu mensaje (opcional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:outline-none focus:border-gold transition-colors resize-none"
              />
              
              <button
                type="submit"
                className="w-full py-4 bg-gold hover:bg-gold-light text-espresso font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/30"
              >
                <Send className="w-5 h-5" />
                Enviar Solicitud
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-3xl border border-border">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Dirección</p>
                    <p className="text-muted-foreground">
                      Calle Gran Vía 42, 28013 Madrid
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Teléfono</p>
                    <a href="tel:+34912345678" className="text-muted-foreground hover:text-gold transition-colors">
                      +34 912 345 678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a href="mailto:info@elegancestudio.es" className="text-muted-foreground hover:text-gold transition-colors">
                      info@elegancestudio.es
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Horario</p>
                    <p className="text-muted-foreground">
                      Lun - Vie: 10:00 - 20:00<br />
                      Sáb: 10:00 - 18:00<br />
                      Dom: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-3xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4233259!2d-3.7037!3d40.4200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzEyLjAiTiAzwrA0MicxMy4yIlc!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del salón"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
