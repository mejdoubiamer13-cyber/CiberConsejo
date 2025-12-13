import { useState } from "react";
import { RefreshCw, Copy, Check, Shield, AlertTriangle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let charset = "";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (charset === "") {
      toast({
        title: "Error",
        description: "Selecciona al menos un tipo de carácter",
        variant: "destructive"
      });
      return;
    }

    let newPassword = "";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
      newPassword += charset[array[i] % charset.length];
    }
    
    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!password) return;
    
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      toast({
        title: "¡Copiada!",
        description: "La contraseña se ha copiado al portapapeles"
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Error",
        description: "No se pudo copiar la contraseña",
        variant: "destructive"
      });
    }
  };

  const getPasswordStrength = () => {
    if (!password) return { label: "", color: "", width: "0%" };
    
    let strength = 0;
    if (password.length >= 12) strength++;
    if (password.length >= 16) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 2) return { label: "Débil", color: "bg-destructive", width: "33%" };
    if (strength <= 4) return { label: "Media", color: "bg-yellow-500", width: "66%" };
    return { label: "Fuerte", color: "bg-accent", width: "100%" };
  };

  const strength = getPasswordStrength();

  return (
    <section id="generador" className="py-20 bg-cyber-grid">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Generador de</span>{" "}
            <span className="text-gradient-cyber">Contraseñas Seguras</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crea contraseñas fuertes y únicas para proteger tus cuentas
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl border-glow p-8">
            {/* Password Display */}
            <div className="mb-6">
              <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                <input
                  type="text"
                  value={password}
                  readOnly
                  placeholder="Tu contraseña aparecerá aquí"
                  className="flex-1 bg-transparent font-mono text-lg text-foreground outline-none"
                />
                <button
                  onClick={copyToClipboard}
                  disabled={!password}
                  className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors disabled:opacity-50"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Strength Indicator */}
              {password && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Fortaleza:</span>
                    <span className={`font-semibold ${strength.color === "bg-destructive" ? "text-destructive" : strength.color === "bg-yellow-500" ? "text-yellow-500" : "text-accent"}`}>
                      {strength.label}
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${strength.color} transition-all duration-300`}
                      style={{ width: strength.width }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Length Slider */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-muted-foreground">Longitud</label>
                <span className="text-sm font-semibold text-primary">{length} caracteres</span>
              </div>
              <input
                type="range"
                min="8"
                max="32"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Mayúsculas (A-Z)", value: includeUppercase, setter: setIncludeUppercase },
                { label: "Minúsculas (a-z)", value: includeLowercase, setter: setIncludeLowercase },
                { label: "Números (0-9)", value: includeNumbers, setter: setIncludeNumbers },
                { label: "Símbolos (!@#$)", value: includeSymbols, setter: setIncludeSymbols }
              ].map((option, index) => (
                <label key={index} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    option.value ? "bg-primary border-primary" : "border-muted-foreground"
                  }`}>
                    {option.value && <Check className="w-3 h-3 text-primary-foreground" />}
                  </div>
                  <input
                    type="checkbox"
                    checked={option.value}
                    onChange={(e) => option.setter(e.target.checked)}
                    className="sr-only"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Generate Button */}
            <button
              onClick={generatePassword}
              className="w-full py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg glow-cyber hover:glow-cyber-strong transition-all duration-300 flex items-center justify-center gap-3"
            >
              <RefreshCw className="w-5 h-5" />
              Generar Contraseña
            </button>

            {/* Tips */}
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Consejo de seguridad</p>
                  <p className="text-xs text-muted-foreground">
                    Usa un gestor de contraseñas como Bitwarden o LastPass para guardar tus contraseñas de forma segura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/30 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Importante:</span> Nunca compartas tus contraseñas con nadie, 
              ni siquiera con amigos o familiares. Si alguien te las pide, es una señal de alarma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordGenerator;
