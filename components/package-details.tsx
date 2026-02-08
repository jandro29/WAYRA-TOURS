'use client';

import { CheckCircle, Truck, Users, Clock, MapPin } from 'lucide-react';

export function PackageDetails() {
  const includes = [
    'Transporte turístico ida y retorno desde Chiclayo',
    'Guía turístico local especializado',
    'Entradas a todos los atractivos del circuito',
    'Caminatas guiadas',
    'Tiempo libre para fotografías y descanso',
    'Asistencia permanente durante el recorrido',
    'Botiquín básico de primeros auxilios',
  ];

  const notIncludes = ['Alimentación (opcional)', 'Gastos personales'];

  return (
    <div className="space-y-8">
      {/* Main Package Info */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="text-primary" size={24} />
              <span className="text-gray-600">Duración</span>
            </div>
            <p className="text-2xl font-bold text-foreground">Full Day</p>
            <span className="text-sm text-muted-foreground">1 día completo</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="text-secondary" size={24} />
              <span className="text-gray-600">Modalidad</span>
            </div>
            <p className="text-2xl font-bold text-foreground">Grupal</p>
            <span className="text-sm text-muted-foreground">Mín. 10 personas</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="text-accent" size={24} />
              <span className="text-gray-600">Base</span>
            </div>
            <p className="text-2xl font-bold text-foreground">Chiclayo</p>
            <span className="text-sm text-muted-foreground">Lambayeque, Perú</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Truck className="text-primary" size={24} />
              <span className="text-gray-600">Precio</span>
            </div>
            <p className="text-2xl font-bold text-primary">S/ 120.00</p>
            <span className="text-sm text-muted-foreground">por persona</span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white/50 rounded-lg p-4">
          <p className="text-foreground">
            Este circuito turístico combina turismo cultural, sol y playa, y turismo de naturaleza y aventura. Una experiencia integral donde el visitante conecta con la historia milenaria, disfruta del paisaje marino y natural, y vive la aventura mientras se conecta con la cultura y la identidad local.
          </p>
        </div>
      </div>

      {/* What's Included */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle className="text-primary" size={28} />
            Incluye
          </h3>
          <ul className="space-y-3">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Información Importante</h3>
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-amber-900 mb-2">No incluye:</p>
              <ul className="space-y-1">
                {notIncludes.map((item, index) => (
                  <li key={index} className="text-sm text-amber-800">• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-blue-900 mb-2">Ideal para:</p>
              <p className="text-sm text-blue-800">
                Estudiantes, jóvenes, familias y amantes del turismo cultural y de aventura.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-green-900 mb-2">Compromiso:</p>
              <p className="text-sm text-green-800">
                Promovemos turismo responsable, respetando el patrimonio cultural y natural para contribuir al desarrollo sostenible de las comunidades locales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-foreground mb-3">¿Listo para vivir Lambayeque?</h3>
        <p className="text-muted-foreground mb-4">
          Contáctanos para reservar tu lugar. Descuentos especiales para grupos y estudiantes.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-opacity-90 transition-all"
        >
          Reservar Ahora
        </a>
      </div>
    </div>
  );
}
