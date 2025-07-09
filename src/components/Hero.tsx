import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, MapPin, Users, Accessibility } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-background via-primary-light/10 to-accent-light/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm bg-background/80 backdrop-blur-sm">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            O Melhor web app para trilhar o seu caminho
          </Badge>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance">
            Mapeamento com{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Acessibilidade
            </span>{" "}
            para Todos
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Uma plataforma colaborativa que conecta pessoas e espaços acessíveis, 
            promovendo inclusão e autonomia para pessoas com deficiência através 
            de tecnologia e participação comunitária.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => document.querySelector('#video-demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ver Demonstração
            </Button>
            <Button variant="outline" size="xl">
              <MapPin className="w-5 h-5 mr-2" />
              Explorar Mapa
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Plataforma colaborativa</span>
            </div>
            <div className="flex items-center gap-2">
              <Accessibility className="w-4 h-4 text-accent" />
              <span>Foco em acessibilidade</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Mapeamento interativo</span>
            </div>
          </div>
        </div>

        {/* Video Demo */}
        <div id="video-demo" className="max-w-5xl mx-auto">
          <Card className="p-4 lg:p-6 shadow-xl bg-gradient-card">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <iframe
                src="https://www.youtube.com/embed/loaeHu9RK80"
                title="Demonstração da Plataforma Mapa da Acessibilidade"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Demonstração do protótipo funcional da plataforma
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}