import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"

const technologies = [
  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        description: "Biblioteca JavaScript para interfaces interativas e componentizadas",
        icon: "⚛️",
        color: "bg-blue-500/10 text-blue-600 border-blue-200"
      },
      {
        name: "Javascript",
        description: "Linguagem dinâmica para maior flexibilidade e produtividade",
        icon: "📝",
        color: "bg-yellow-500/10 text-yellow-600 border-yellow-200"
      },
      {
        name: "Tailwind CSS",
        description: "Framework CSS utilitário para designs responsivos e acessíveis",
        icon: "🎨",
        color: "bg-cyan-500/10 text-cyan-600 border-cyan-200"
      }
    ]
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        description: "Runtime JavaScript escalável para APIs robustas",
        icon: "🚀",
        color: "bg-green-500/10 text-green-600 border-green-200"
      },
      {
        name: "Express.js",
        description: "Framework web minimalista e flexível para Node.js",
        icon: "⚡",
        color: "bg-green-500/10 text-green-600 border-green-200"
      },
      {
        name: "Supabase",
        description: "Plataforma backend completa com banco de dados e autenticação",
        icon: "🚀",
        color: "bg-green-500/10 text-green-600 border-green-200"
      }
    ]
  },
  {
    category: "Mapas & Localização",
    items: [
      {
        name: "Leaflet API",
        description: "Biblioteca JavaScript para mapas interativos e responsivos",
        icon: "🗺️",
        color: "bg-emerald-500/10 text-emerald-600 border-emerald-200"
      },
      {
        name: "Geolocalização",
        description: "APIs de consulta de locais e busca por região",
        icon: "📍",
        color: "bg-red-500/10 text-red-600 border-red-200"
      }
    ]
  },
  {
    category: "Acessibilidade",
    items: [
      {
        name: "WCAG 2.1",
        description: "Diretrizes de acessibilidade para conteúdo web",
        icon: "♿",
        color: "bg-purple-500/10 text-purple-600 border-purple-200"
      },
    ]
  }
]

const architecture = [
  {
    title: "Frontend Responsivo",
    description: "Interface moderna construída com React e Javascript, otimizada para todos os dispositivos.",
    icon: "💻"
  },
  {
    title: "API REST",
    description: "Backend Node.js com Express oferecendo endpoints seguros e documentados.",
    icon: "🔗"
  },
  {
    title: "Banco de Dados",
    description: "Supabase garantindo integridade e performance na gestão de dados geográficos.",
    icon: "🗄️"
  },
  {
    title: "Integração de Mapas",
    description: "Leaflet API proporcionando experiência interativa e intuitiva de navegação.",
    icon: "🌍"
  }
]

export function Technology() {
  return (
    <Section id="tech" className="bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader>
          <SectionTitle>Stack Tecnológico</SectionTitle>
          <SectionDescription>
            Utilizamos tecnologias modernas e acessíveis para criar uma plataforma 
            robusta, escalável e inclusiva.
          </SectionDescription>
        </SectionHeader>

        {/* Architecture Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {architecture.map((item, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-base bg-gradient-card">
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-base">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="space-y-12">
          {technologies.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((tech, techIndex) => (
                  <Card key={techIndex} className="group hover:shadow-lg transition-all duration-base">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <Badge className={tech.color} variant="outline">
                          {tech.name}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Open Source Highlight */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary-light/20 to-accent-light/20 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Projeto Open Source</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Este é um projeto desenvolvido por estudantes universitários com foco em 
                impacto social. O código está disponível para a comunidade contribuir 
                e adaptar para suas necessidades locais.
              </p>
              <Badge variant="outline" className="px-4 py-2">
                🌟 Contribuições são bem-vindas
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}