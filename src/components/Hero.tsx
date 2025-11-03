import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 animate-slide-up">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Pierre Komlavi ZODJRAKPE
          </h1>
          <div className="h-1 w-32 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 font-medium">
            Expert en Ingénierie de Données
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Développeur Full Stack & Data Engineer passionné par la data, le Machine Learning 
            et l'automatisation. Actuellement en Master 2 à l'EPSI Montpellier.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Me Contacter
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
              <Download className="mr-2 h-5 w-5" />
              Télécharger CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="mailto:k.zodjrakpe@gmail.com"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pierre-komlavi-zodjrakpe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://gitlab.com/pierrekomlavi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all hover:scale-110"
              aria-label="GitLab"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
