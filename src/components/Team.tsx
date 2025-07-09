import { Card, CardContent } from "@/components/ui/card"
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Caios Rocha",
    role: "Frontend Developer, DevOps e PO",
    specialties: [],
    bio: "",
    image: "/lovable-uploads/db3b06b4-eb32-4caf-818a-69750672ea30.png",
    social: {
      github: "https://github.com/Dexmachi",
      linkedin: "#",
      email: "caios@mapaacessibilidade.com"
    }
  },
  {
    name: "Maria Laura",
    role: "Backend Developer",
    specialties: [],
    bio: "",
    image: "/lovable-uploads/3ae37728-a600-458c-a2f9-4870b94fccdb.png",
    social: {
      github: "https://github.com/Maria-Laura-Regis",
      linkedin: "#",
      email: "maria@mapaacessibilidade.com"
    }
  },
  {
    name: "Anderson Silva",
    role: "Gerente de BD e Documentação",
    specialties: [],
    bio: "",
    image: "/lovable-uploads/7d62970e-f628-4ddf-abca-6c512ac0a842.png",
    social: {
      github: "https://github.com/code-silva",
      linkedin: "#",
      email: "anderson@mapaacessibilidade.com"
    }
  },
  {
    name: "Alberto Côrtes",
    role: "UX/UI Designer, Scrum Master e Frontend Developer",
    specialties: [],
    bio: "",
    image: "/lovable-uploads/c1dac126-4279-401f-b38b-a26b0a6cae88.png",
    social: {
      github: "https://github.com/oalbertocavalcante",
      linkedin: "#",
      email: "alberto@mapaacessibilidade.com"
    }
  },
  {
    name: "Lucas Machado",
    role: "Frontend Developer",
    specialties: [],
    bio: "",
    image: "/lovable-uploads/9ef5497c-7c22-4706-aeea-b73da630fa77.png",
    social: {
      github: "https://github.com/Lucas-Ricarte",
      linkedin: "#",
      email: "lucas@mapaacessibilidade.com"
    }
  },
  {
    name: "Samuel Silva",
    role: "Backend Developer",
    specialties: [],
    bio: "",
    image: "/lovable-uploads/3ea3ce17-a8af-406b-bb9b-3ab79d213f53.png",
    social: {
      github: "https://github.com/Samuelvlobo",
      linkedin: "#",
      email: "samuel@mapaacessibilidade.com"
    }
  },
  {
    name: "Caio Soares",
    role: "Backend Developer e Scrum Master",
    specialties: [],
    bio: "",
    image: "/lovable-uploads/3d40d8d5-a82e-4ada-8c89-84364205c12f.png",
    social: {
      github: "https://github.com/CaioSoandrd",
      linkedin: "#",
      email: "caio@mapaacessibilidade.com"
    }
  }
]

const stats = [
  { label: "Desenvolvedores", value: "7+" },
  { label: "Habilidades", value: "15+" }
]

export function Team() {
  return (
    <Section id="team" className="bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader>
          <SectionTitle>Nossa Equipe</SectionTitle>
          <SectionDescription>
            Um time diverso de estudantes universitários unidos pela missão de 
            tornar o mundo mais acessível através da tecnologia.
          </SectionDescription>
        </SectionHeader>

        {/* Team Stats */}
        <div className="grid grid-cols-2 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-gradient-card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-base overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                
                {/* Specialties */}
                {member.specialties.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Bio */}
                {member.bio && (
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                )}

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={member.social.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary-light/20 to-accent-light/20 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                Somos estudantes universitários comprometidos em usar a tecnologia para criar 
                impacto social positivo. Acreditamos que a acessibilidade é um direito fundamental 
                e trabalhamos para derrubar barreiras através de soluções inovadoras e colaborativas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}