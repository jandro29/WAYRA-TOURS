'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/image-1.jpeg',
    title: 'Paisaje Desértico',
    description: 'Las majestuosas vistas del desierto de Lambayeque al atardecer',
  },
  {
    id: 2,
    src: '/image-2.jpeg',
    title: 'Museo Tumbas Reales de Sipán',
    description: 'Descubre los tesoros del señor Moche y la civilización ancestral',
  },
  {
    id: 3,
    src: '/image-3.jpeg',
    title: 'Pirámides de Moche',
    description: 'Estructuras arqueológicas que revelan secretos de hace 2000 años',
  },
  {
    id: 4,
    src: '/image-4.jpeg',
    title: 'Playas Paradisíacas',
    description: 'Relájate en las hermosas playas costeras de Lambayeque',
  },
  {
    id: 5,
    src: '/image-5.jpeg',
    title: 'Arquitectura Colonial',
    description: 'Recorre la historia en los edificios históricos del centro',
  },
  {
    id: 6,
    src: '/image-6.jpeg',
    title: 'Cultura Local',
    description: 'Vive la experiencia auténtica de la cultura lambayecana',
  },
];

export function InteractiveGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedImage = galleryImages.find((img) => img.id === selectedId);
  const selectedImageIndex = galleryImages.findIndex((img) => img.id === selectedId);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    setSelectedId(galleryImages[(selectedImageIndex - 1 + galleryImages.length) % galleryImages.length].id);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    setSelectedId(galleryImages[(selectedImageIndex + 1) % galleryImages.length].id);
  };

  return (
    <>
      {/* Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelectedId(image.id)}
            className="relative group cursor-pointer overflow-hidden rounded-lg h-64 md:h-72 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority={image.id === 1}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">{image.title}</h3>
              <p className="text-gray-200 text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedId(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <div className="relative max-w-4xl w-full">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              width={1000}
              height={600}
              className="w-full h-auto rounded-lg object-cover"
              priority
            />

            <div className="mt-6 text-white">
              <h2 className="text-3xl font-bold text-balance">{selectedImage.title}</h2>
              <p className="text-gray-300 mt-2 text-lg">{selectedImage.description}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-primary transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-primary transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
