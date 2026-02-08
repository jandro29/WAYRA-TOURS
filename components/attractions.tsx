'use client';

import { MapPin, Clock, Users } from 'lucide-react';

interface Attraction {
  id: number;
  name: string;
  type: string;
  location: string;
  duration: string;
  visitors: string;
  description: string;
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: 'Museo Tumbas Reales del Señor de Sipán',
    type: 'Museo Arqueológico',
    location: 'Lambayeque',
    duration: '2-3 horas',
    visitors: 'Alto',
    description: 'Alberga más de 2,000 piezas de oro, plata y otros materiales de la cultura Mochica. Destaca por conservar la tumba intacta del Señor de Sipán, uno de los hallazgos arqueológicos más importantes de América.',
  },
  {
    id: 2,
    name: 'Playa Pimentel',
    type: 'Playa',
    location: 'Pimentel (11 km de Chiclayo)',
    duration: '4-6 horas',
    visitors: 'Alto',
    description: 'Uno de los balnearios más tradicionales del norte del Perú. Cuenta con un extenso malecón, muelle de madera histórico, caballitos de totora y pesca artesanal.',
  },
  {
    id: 3,
    name: 'Cataratas de Macuaco - Oyotún',
    type: 'Atracción Natural',
    location: 'Oyotún, Chiclayo',
    duration: '3-4 horas',
    visitors: 'Medio',
    description: 'Siete cataratas rodeadas de formaciones rocosas y vegetación típica. Destaca la catarata Velo de Novia con pozas naturales de aguas cristalinas. Recurso turístico reconocido oficialmente.',
  },
  {
    id: 4,
    name: 'Jagüeyes de Mayascón',
    type: 'Piscina Natural',
    location: 'Mayascón, Chiclayo',
    duration: '3-5 horas',
    visitors: 'Medio',
    description: 'Nueve pozas naturales de aguas turquesas y transparentes, conocidas como los "Hawaii de Mayascón". Alberga venados, osos de anteojos y conserva restos de la antigua Hacienda Mayascón.',
  },
  {
    id: 5,
    name: 'Centro Histórico de Chiclayo',
    type: 'Cultura & Gastronomía',
    location: 'Chiclayo',
    duration: '2-3 horas',
    visitors: 'Alto',
    description: 'Pasea por la arquitectura colonial, iglesias históricas y disfruta de la gastronomía local auténtica. La base de operaciones del circuito turístico de Wayra Tours.',
  },
  {
    id: 6,
    name: 'Circuito Full Day Completo',
    type: 'Tour Integrado',
    location: 'Chiclayo - Lambayeque',
    duration: '1 día completo',
    visitors: 'Grupal',
    description: 'Experiencia integral que combina turismo cultural, sol y playa, y turismo de naturaleza. Incluye transporte, guía especializado y entradas a todos los atractivos.',
  },
];

export function Attractions() {
  return (
    <div className="space-y-4">
      {attractions.map((attraction) => (
        <div
          key={attraction.id}
          className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-border"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{attraction.name}</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                    {attraction.type}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{attraction.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">{attraction.location}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Clock size={18} className="text-secondary flex-shrink-0" />
                  <span className="text-sm">{attraction.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Users size={18} className="text-accent flex-shrink-0" />
                  <span className="text-sm">Visitantes: {attraction.visitors}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
