import { Hero } from "@/components/hero";
import { SpaceGallery } from "@/components/space-gallery";
import { Services } from "@/components/services";
import { EventsGallery } from "@/components/events-gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { StickyHeader } from "@/components/sticky-header";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Ambbar Recepções",
    description:
      "Espaço sofisticado e versátil para celebrações inesquecíveis. Casamentos, aniversários, eventos corporativos e muito mais.",
    image: "/banner.jpg",
    url: "https://ambbar.com.br",
    telephone: "+55-XX-XXXX-XXXX", // Update with actual phone
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Exemplo, 123", // Update with actual address
      addressLocality: "Cidade", // Update with actual city
      addressRegion: "Estado", // Update with actual state
      postalCode: "00000-000", // Update with actual postal code
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0.0, // Update with actual coordinates
      longitude: 0.0, // Update with actual coordinates
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "Brasileira",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Estacionamento",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Acessibilidade",
        value: true,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        <StickyHeader />
        <div id="inicio">
          <Hero />
        </div>
        <SpaceGallery />
        <Services />
        <EventsGallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
