'use client';

import { Compass, Zap, Target } from 'lucide-react';

export function CircuitOverview() {
  const features = [
    {
      icon: Compass,
      title: 'Cultura & Historia',
      description: 'Conoce la historia milenaria de Lambayeque a través del Museo Tumbas Reales de Sipán y sus tesoros arqueológicos.',
    },
    {
      icon: Zap,
      title: 'Naturaleza & Aventura',
      description: 'Disfruta de hermosas playas, cataratas cristalinas y pozas naturales turquesas en el corazón del paisaje lambayecano.',
    },
    {
      icon: Target,
      title: 'Conexión Local',
      description: 'Vive la autenticidad conectando con la cultura e identidad local a través de experiencias responsables.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Mission */}
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-6">
          Nuestra Misión
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          En Wayra Tours diseñamos experiencias turísticas que conectan al viajero con la cultura, la naturaleza y la identidad del Perú. Nuestro objetivo es promover el turismo responsable y auténtico, resaltando los principales atractivos de la región Lambayeque a través de circuitos organizados, seguros y enriquecedores.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Cada experiencia es cuidadosamente diseñada para que descubras la majestuosidad de Lambayeque mientras contribuyes al desarrollo sostenible de las comunidades locales.
        </p>
      </div>

      {/* Three Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group bg-card rounded-lg p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Circuit Details */}
      <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-8 border border-secondary/20">
        <h3 className="text-2xl font-bold text-foreground mb-6">Circuito: Chiclayo - Cultura, Playa y Naturaleza</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Descripción</h4>
            <p className="text-muted-foreground">
              Este circuito turístico recorre los principales atractivos de Chiclayo y sus alrededores, combinando turismo cultural, sol y playa, y turismo de naturaleza y aventura, según el croquis turístico de la región Lambayeque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Ciudad Base</p>
              <p className="text-lg font-bold text-foreground">Chiclayo – Lambayeque, Perú</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Duración</p>
              <p className="text-lg font-bold text-foreground">Full Day (1 día)</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Modalidad</p>
              <p className="text-lg font-bold text-foreground">Grupal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Taglines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
          <p className="text-center text-lg font-semibold text-foreground italic">
            "Descubre Lambayeque como nunca antes"
          </p>
        </div>
        <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
          <p className="text-center text-lg font-semibold text-foreground italic">
            "Cultura, naturaleza y aventura en un solo viaje"
          </p>
        </div>
        <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
          <p className="text-center text-lg font-semibold text-foreground italic">
            "Wayra Tours: viajando con identidad"
          </p>
        </div>
        <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
          <p className="text-center text-lg font-semibold text-foreground italic">
            "Siente el viento de la historia"
          </p>
        </div>
      </div>
    </div>
  );
}
