import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Je suis actuellement à la recherche d'une alternance d'un an en Data Engineering 
            ou Développement Full Stack. N'hésitez pas à me contacter !
          </p>
        </div>

        <Card className="gradient-card border-none shadow-xl">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:k.zodjrakpe@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all group"
              >
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">k.zodjrakpe@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:0759588571"
                className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all group"
              >
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Téléphone</p>
                  <p className="font-medium">07 59 58 85 71</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Localisation</p>
                  <p className="font-medium">Montpellier, France</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5">
                <div className="p-3 rounded-lg bg-accent/10">
                  <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Permis</p>
                  <p className="font-medium">Permis B</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Retrouvez-moi également sur
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a 
                    href="https://www.linkedin.com/in/pierre-komlavi-zodjrakpe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a 
                    href="https://gitlab.com/pierrekomlavi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitLab
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
