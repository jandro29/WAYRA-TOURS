'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/lambayeque-hero.jpg"
        alt="Lambayeque scenic landscape"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-4 max-w-2xl animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <span className="text-primary font-semibold">Wayra Tours</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white text-balance leading-tight">
            Vive
            <span className="block text-primary">Lambayeque</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 text-balance">
            Siente la historia. Conecta con la cultura, naturaleza e identidad del Perú
          </p>

          <button
            onClick={scrollToGallery}
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:gap-3"
          >
            Explorar
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-white" />
      </div>
    </div>
  );
}
