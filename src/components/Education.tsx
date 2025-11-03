import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    period: "Septembre 2025 - Septembre 2026 (en cours)",
    school: "EPSI Montpellier",
    degree: "Master 2 - Expert en Ingénierie de données",
    level: "Bac +5, Titre RNCP Niveau 7",
    location: "Montpellier"
  },
  {
    period: "Septembre 2024 - Septembre 2025",
    school: "EPSI Montpellier",
    degree: "Master 1 - Expert en Ingénierie de données",
    level: "Bac +4",
    location: "Montpellier"
  },
  {
    period: "Septembre 2016 - Septembre 2019",
    school: "Institut Africain d'Informatique (IAI-TOGO)",
    degree: "Ingénieur des Travaux Informatiques",
    level: "Spécialité : Génie Logiciel (Niveau licence)",
    location: "Lomé, Togo"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Formation</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="gradient-card border-none shadow-lg hover:shadow-xl transition-all"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="p-4 rounded-lg bg-accent/10 self-start">
                    <GraduationCap className="h-8 w-8 text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-lg font-semibold text-muted-foreground mb-2">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.level}</p>
                      </div>
                      {index === 0 && (
                        <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                          En cours
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-accent" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-accent" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
