import { Card, CardContent } from "@/components/ui/card";
import { Users, Utensils, Music, Sparkles, Camera, Wine } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Capacidade Flexível",
    description:
      "Acomodamos de 50 a 500 convidados com conforto e elegância, adaptando o espaço às suas necessidades.",
  },
  {
    icon: Utensils,
    title: "Gastronomia Premium",
    description:
      "Parceria com os melhores buffets da região, oferecendo cardápios personalizados e serviço impecável.",
  },
  {
    icon: Music,
    title: "Infraestrutura Completa",
    description:
      "Sistema de som profissional, iluminação cênica, palco e toda estrutura técnica para seu evento.",
  },
  {
    icon: Sparkles,
    title: "Decoração Personalizada",
    description:
      "Equipe especializada em transformar o ambiente de acordo com o tema e estilo do seu evento.",
  },
  {
    icon: Camera,
    title: "Espaços Fotográficos",
    description:
      "Áreas especialmente projetadas para fotos memoráveis, com cenários internos e externos.",
  },
  {
    icon: Wine,
    title: "Bar Completo",
    description:
      "Estrutura de bar profissional com bartenders experientes e carta de bebidas premium.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma experiência completa para que você e seus convidados
            aproveitem cada momento sem preocupações
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-colors duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">
                Eventos Corporativos
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Também atendemos eventos corporativos como conferências,
                workshops, lançamentos de produtos e confraternizações
                empresariais. Oferecemos toda infraestrutura tecnológica
                necessária.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Projetor e tela de alta definição</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Sistema de videoconferência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Wi-Fi de alta velocidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Coffee break e serviço de catering</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/salao.jpg"
                alt="Eventos corporativos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
