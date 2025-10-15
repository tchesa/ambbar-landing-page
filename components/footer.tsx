import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="font-serif text-2xl font-light">Ambbar Recepções</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              Transformando momentos especiais em memórias inesquecíveis.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Horário de Atendimento</h4>
            <p className="text-background/80 leading-relaxed">
              Segunda a Sexta: 9h às 18h
              <br />
              Sábado: 9h às 14h
              <br />
              Domingo: Fechado
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#espaco" className="hover:text-background transition-colors">
                  Nosso Espaço
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-background transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-background transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Ambbar Recepções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
