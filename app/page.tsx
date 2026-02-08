import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { CircuitOverview } from '@/components/circuit-overview';
import { InteractiveGallery } from '@/components/interactive-gallery';
import { Attractions } from '@/components/attractions';
import { PackageDetails } from '@/components/package-details';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="w-full">
      <Header />

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Circuit Overview Section */}
      <section id="circuit" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <CircuitOverview />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Galería Interactiva
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explora la belleza y majestuosidad de Lambayeque a través de nuestra colección de imágenes. Haz clic en cualquier
              imagen para ampliarla.
            </p>
          </div>
          <InteractiveGallery />
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Lugares Incluidos en el Circuito
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Descubre los principales destinos y puntos de interés que hacen de Lambayeque un lugar inolvidable.
            </p>
          </div>
          <Attractions />
        </div>
      </section>

      {/* Package Details Section */}
      <section id="package" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Detalles del Paquete Turístico
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Todo lo que necesitas saber sobre nuestro circuito Full Day. Incluye transporte, guía especializado y entradas a todos los atractivos.
            </p>
          </div>
          <PackageDetails />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
