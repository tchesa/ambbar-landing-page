"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const events = [
  { id: 1, url: "/7.jpg", alt: "Casamento elegante", category: "Casamento" },
  { id: 2, url: "/10.jpeg", alt: "Aniversário", category: "Aniversário" },
  { id: 3, url: "/9.jpeg", alt: "Evento corporativo", category: "Corporativo" },
  { id: 4, url: "/8.jpg", alt: "Debutante", category: "Debutante" },
  {
    id: 5,
    url: "/11.jpg",
    alt: "Cerimônia ao ar livre",
    category: "Casamento",
  },
  { id: 6, url: "/12.jpeg", alt: "Bodas de ouro", category: "Aniversário" },
  { id: 7, url: "/13.jpeg", alt: "Formatura", category: "Formatura" },
  { id: 8, url: "/1.webp", alt: "Chá de bebê", category: "Chá de Bebê" },
];

export function EventsGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const categories = [
    "Todos",
    ...Array.from(new Set(events.map((e) => e.category))),
  ];
  const filteredEvents =
    filter === "Todos" ? events : events.filter((e) => e.category === filter);

  return (
    <section id="eventos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Eventos Realizados
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Confira alguns dos momentos especiais que tivemos o privilégio de
            fazer parte
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={filter === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(event.url)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={event.url || "/placeholder.svg"}
                  alt={event.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="mb-2">
                    {event.category}
                  </Badge>
                  <p className="text-sm font-medium">{event.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-5xl p-0 overflow-hidden">
            {selectedImage && (
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Imagem ampliada"
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
