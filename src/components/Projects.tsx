import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import monEcoleLogo from "@/assets/mon-ecole-logo.png";
import boutiquePlusLogo from "@/assets/boutique-plus-logo.png";

const projects = [
  {
    title: "MonEcole",
    description: "Conception et réalisation d’une plateforme web de gestion des activités pédagogiques d’un institut d’enseignement supérieur.",
    image: monEcoleLogo,
    technologies: ["PHP", "Symfony", "HTML", "CSS", "JavaScript", "MySQL", "API REST", "Git"],
    link: "https://gitlab.com/egahblewussi/mon-ecole/-/tree/master"
  },
  {
    title: "BOUTIQUE+",
    description: "Développement d’une application de gestion d’une boutique en ligne",
    image: boutiquePlusLogo,
    technologies: ["PHP", "Symfony", "HTML", "CSS", "JavaScript", "MySQL", "Git"],
    link: "https://gitlab.com/egahblewussi/gestion-de-boutique/-/tree/symfony54/"
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projets</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="gradient-card border-none shadow-lg hover:shadow-xl transition-all group"
            >
              <CardHeader>
                <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center mb-4 overflow-hidden p-4">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-3xl md:text-4xl font-bold text-accent">
                      {project.title}
                    </span>
                  )}
                </div>
                
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl font-bold">
                    {project.title}
                  </CardTitle>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                
                {project.link && (
                  <CardDescription className="text-sm">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-accent hover:underline text-xs"
                    >
                      {project.link}
                    </a>
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="px-2 py-1 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};