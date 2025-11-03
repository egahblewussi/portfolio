import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, BarChart3, Cog } from "lucide-react";

const skillCategories = [
  {
    title: "Langages de Programmation",
    icon: Code,
    skills: ["Python", "Java", "PHP", "JavaScript", "TypeScript"]
  },
  {
    title: "Frameworks & Web",
    icon: Code,
    skills: ["Symfony", "Laravel", "Django", "React", "Spring Boot", "Angular"]
  },
  {
    title: "Bases de Données",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Oracle", "SQL Server", "MongoDB", "Cassandra"]
  },
  {
    title: "Big Data & Data Engineering",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "Apache Spark", "Apache Kafka", "Hadoop", "PyTorch", "Orange Data Mining"]
  },
  {
    title: "Visualisation & Reporting",
    icon: BarChart3,
    skills: ["Power BI", "Jaspersoft", "matplotlib", "seaborn"]
  },
  {
    title: "Automatisation & Low-code",
    icon: Cog,
    skills: ["Apache Airflow", "n8n", "Make"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Git", "AWS", "GitLab", "Linux", "Windows"]
  },
  {
    title: "Outils & Méthodologies",
    icon: Wrench,
    skills: ["API REST", "Postman", "WordPress", "Agile Scrum", "Asana", "Trello", "Power AMC"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Compétences</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="gradient-card border-none shadow-lg hover:shadow-xl transition-all"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
