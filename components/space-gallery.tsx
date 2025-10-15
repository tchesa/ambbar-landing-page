"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  { id: 1, url: "/1.jpg", alt: "Salão principal" },
  { id: 2, url: "/2.jpg", alt: "Área externa" },
  { id: 3, url: "/3.jpg", alt: "Lounge" },
  { id: 4, url: "/4.jpg", alt: "Área de jantar" },
  { id: 5, url: "/5.jpg", alt: "Pista de dança" },
  { id: 6, url: "/6.jpeg", alt: "Entrada" },
];

export function SpaceGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="espaco" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Nosso Espaço
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Um ambiente elegante e acolhedor, projetado para proporcionar
            experiências memoráveis em cada detalhe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
