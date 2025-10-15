import { Hero } from "@/components/hero";
import { SpaceGallery } from "@/components/space-gallery";
import { Services } from "@/components/services";
import { EventsGallery } from "@/components/events-gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { StickyHeader } from "@/components/sticky-header";

export default function Home() {
  return (
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
  );
}
