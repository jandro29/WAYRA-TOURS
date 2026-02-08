import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-lg">Wayra Tours</h3>
            <p className="text-gray-400 text-sm">
              Diseñamos experiencias turísticas que conectan al viajero con la cultura, naturaleza e identidad del Perú. Turismo responsable y auténtico.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#circuit" className="hover:text-primary transition-colors">
                  Circuito Turístico
                </a>
              </li>
              <li>
                <a href="#gallery-section" className="hover:text-primary transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-3">
            <h4 className="text-white font-bold">Información del Paquete</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="text-primary font-semibold">Full Day:</span> 1 día completo
              </li>
              <li>
                <span className="text-primary font-semibold">Modalidad:</span> Grupal
              </li>
              <li>
                <span className="text-primary font-semibold">Precio:</span> S/ 120.00
              </li>
              <li>
                <span className="text-gray-300 text-xs">Mín. 10 personas</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-bold">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+51" className="hover:text-primary transition-colors">
                  +51 XXX XXX XXX
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@wayratours.com" className="hover:text-primary transition-colors">
                  info@wayratours.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Chiclayo, Lambayeque</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Wayra Tours - Vive Lambayeque. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
