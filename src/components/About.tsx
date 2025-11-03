import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">À Propos</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <User className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Profil</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Actuellement en Master 2 Data Engineering à l'EPSI Montpellier, 
                    je recherche une alternance d'un an. Mon intérêt pour la Data et 
                    le développement d'applications me permet d'allier compétences en 
                    Data, Machine Learning et conception logicielle.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Objectifs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Je souhaite mettre à profit mes compétences en développement full stack, 
                    data engineering et automatisation pour contribuer à des projets innovants. 
                    Passionné par l'apprentissage continu et les nouvelles technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="gradient-card border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Travail en équipe",
                    "Adaptation rapide",
                    "Curiosité & apprentissage continu",
                    "Résolution de problèmes",
                    "Communication",
                    "Gestion du temps"
                  ].map((skill) => (
                    <div 
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-primary/5 text-center border border-border hover:border-accent transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
