"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-primary" />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-balance">
            Ambbar Recepções
          </h1>
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 max-w-3xl mx-auto text-balance">
          Onde seus sonhos se tornam realidade
        </p>
        <p className="text-base md:text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Um espaço sofisticado e versátil para celebrações inesquecíveis.
          Casamentos, aniversários, eventos corporativos e muito mais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            onClick={() =>
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Agende uma Visita
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground px-8 py-6 text-lg bg-transparent"
            onClick={() =>
              document
                .getElementById("eventos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver Galeria
          </Button>
        </div>
      </div>

      <button
        onClick={() =>
          document
            .getElementById("espaco")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
}
