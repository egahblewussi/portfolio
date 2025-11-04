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
                  <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.23.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 16H5v-4h14v4zm-11.5 1.5c-.83 0-1.5.67-1.5 1.5S6.67 20.5 7.5 20.5 9 19.83 9 19s-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5S15.67 20.5 16.5 20.5 18 19.83 18 19s-.67-1.5-1.5-1.5z"/>
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
                    href="https://www.linkedin.com/in/pierre-komlavi-zodjrakpe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a 
                    href="https://gitlab.com/egahblewussi"
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
