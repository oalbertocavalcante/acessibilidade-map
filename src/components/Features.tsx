import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section"
import { 
  MapPin, 
  Users, 
  Filter, 
  MessageSquare, 
  Search, 
  Star,
  Calendar,
  Shield,
  Smartphone
} from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Mapa Interativo",
    description: "Visualização dinâmica de locais acessíveis com integração Leaflet API e coordenadas GPS precisas."
  },
  {
    icon: Users,
    title: "Colaboração Comunitária",
    description: "Sistema onde qualquer pessoa pode cadastrar, avaliar e comentar sobre espaços acessíveis."
  },
  {
    icon: Filter,
    title: "Filtros Avançados",
    description: "Busca por tipo de acessibilidade: rampa, piso tátil, banheiro adaptado, elevador e muito mais."
  },
  {
    icon: Search,
    title: "Busca Inteligente",
    description: "Localização por nome, região, tipo de atividade com resultados otimizados e relevantes."
  },
  {
    icon: MessageSquare,
    title: "Sistema de Avaliações",
    description: "Comentários, recomendações e feedback da comunidade para melhorar continuamente."
  },
  {
    icon: Calendar,
    title: "Eventos Acessíveis",
    description: "Calendário de atividades comunitárias com informações detalhadas de acessibilidade."
  },
  {
    icon: Shield,
    title: "Padrões de Acessibilidade",
    description: "Compatível com WCAG 2.1, navegação por teclado e leitores de tela como NVDA e JAWS."
  },
  {
    icon: Smartphone,
    title: "Responsivo",
    description: "Experiência otimizada para desktop, tablet e mobile com design adaptativo."
  }
]

const mainFeatures = [
  {
    title: "Página Inicial Intuitiva",
    description: "Hero section com missão clara, mapa interativo central, filtros dinâmicos e apresentação da equipe.",
    image: "🏠"
  },
  {
    title: "Sistema de Autenticação",
    description: "Login seguro, cadastro com validação, recuperação de senha e gestão completa de usuários.",
    image: "🔐"
  },
  {
    title: "Gestão de Locais",
    description: "Cadastro de novos locais, galeria de imagens, informações detalhadas e avaliações colaborativas.",
    image: "📍"
  },
  {
    title: "Suporte Completo",
    description: "FAQ organizado, guias de uso, contato direto e documentação técnica acessível.",
    image: "💬"
  }
]

export function Features() {
  return (
    <Section id="features" className="bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader>
          <SectionTitle>Funcionalidades Principais</SectionTitle>
          <SectionDescription>
            Nossa plataforma oferece um conjunto completo de ferramentas para 
            tornar a busca por espaços acessíveis mais fácil e colaborativa.
          </SectionDescription>
        </SectionHeader>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-base bg-gradient-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-base">
                  {feature.image}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-base bg-background/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-base">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Accessibility Highlight */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-accent-light/20 to-primary-light/20 border-accent/20">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Compromisso com a Acessibilidade</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossa plataforma segue rigorosamente os padrões WCAG 2.1, garantindo que pessoas 
                com diferentes tipos de deficiência possam navegar, contribuir e se beneficiar 
                de todos os recursos disponíveis.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}