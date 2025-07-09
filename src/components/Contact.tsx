import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Github, ExternalLink, Heart } from "lucide-react"

export function Contact() {
  return (
    <Section id="contact" className="bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader>
          <SectionTitle>Entre em Contato</SectionTitle>
          <SectionDescription>
            Tem dúvidas, sugestões ou quer colaborar com o projeto? 
            Adoraríamos ouvir de você!
          </SectionDescription>
        </SectionHeader>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Envie uma Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <Input id="name" placeholder="Seu nome completo" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto *
                </label>
                <Input id="subject" placeholder="Assunto da sua mensagem" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Conte-nos mais sobre sua dúvida, sugestão ou como gostaria de contribuir..."
                  rows={6}
                  required 
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Ways to Contribute */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contato Direto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email da Equipe</p>
                    <p className="text-muted-foreground">contato@mapaacessibilidade.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-muted-foreground">github.com/mapa-acessibilidade</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ways to Contribute */}
            <Card>
              <CardHeader>
                <CardTitle>Como Contribuir</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Badge variant="outline" className="w-full justify-start p-3">
                    <span className="mr-2">💻</span>
                    <div className="text-left">
                      <p className="font-medium">Desenvolvimento</p>
                      <p className="text-xs text-muted-foreground">Contribua com código, testes ou documentação</p>
                    </div>
                  </Badge>
                  
                  <Badge variant="outline" className="w-full justify-start p-3">
                    <span className="mr-2">🎨</span>
                    <div className="text-left">
                      <p className="font-medium">Design & UX</p>
                      <p className="text-xs text-muted-foreground">Ajude a melhorar a experiência do usuário</p>
                    </div>
                  </Badge>
                  
                  <Badge variant="outline" className="w-full justify-start p-3">
                    <span className="mr-2">♿</span>
                    <div className="text-left">
                      <p className="font-medium">Testes de Acessibilidade</p>
                      <p className="text-xs text-muted-foreground">Teste com tecnologias assistivas</p>
                    </div>
                  </Badge>
                  
                  <Badge variant="outline" className="w-full justify-start p-3">
                    <span className="mr-2">📍</span>
                    <div className="text-left">
                      <p className="font-medium">Mapeamento</p>
                      <p className="text-xs text-muted-foreground">Cadastre locais acessíveis em sua região</p>
                    </div>
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project Links */}
            <Card>
              <CardHeader>
                <CardTitle>Links do Projeto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Github className="w-4 h-4 mr-2" />
                  Repositório no GitHub
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <span className="w-4 h-4 mr-2">📋</span>
                  Documentação Técnica
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <span className="w-4 h-4 mr-2">🎨</span>
                  Quadro de Overview (Canva)
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-accent-light/20 to-primary-light/20 border-accent/20">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Junte-se à Nossa Missão</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Este projeto é muito mais que código - é sobre criar um mundo mais inclusivo. 
                Cada contribuição, por menor que seja, faz diferença na vida de pessoas com deficiência.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg">
                  <Github className="w-4 h-4 mr-2" />
                  Contribuir no GitHub
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Falar com a Equipe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}