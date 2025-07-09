import { MapPin, Github, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Mapa da Acessibilidade</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Plataforma colaborativa para mapeamento de espaços acessíveis, 
              promovendo inclusão e autonomia para pessoas com deficiência.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#tech" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tecnologias
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Project */}
          <div className="space-y-4">
            <h3 className="font-semibold">Projeto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contribuir
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Licença
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                contato@mapaacessibilidade.com
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Github className="w-4 h-4 mr-2" />
                github.com/mapa-acessibilidade
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© {currentYear} Mapa da Acessibilidade</span>
            <span>•</span>
            <span>Projeto Open Source</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>por estudantes universitários</span>
          </div>
        </div>
      </div>
    </footer>
  )
}