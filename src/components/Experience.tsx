import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "Juin 2025 - Septembre 2025",
    company: "LM SUD CONCIERGERIE",
    location: "Montpellier",
    position: "Développeur en automatisation et data engineering",
    type: "Stage",
    description: [
      "Mise en place de workflows automatisés avec n8n pour la gestion des kits : détection des départs via Hostaway, mise à jour du stock dans Google Sheets, envoi de mails et journalisation dans un fichier log.",
      "Développement de workflow n8n pour la capture automatique des cautions (Stripe) des clients ayant réservé plus de 5 nuits, en synchronisation avec les données de réservation de Hostaway.",
      "Automatisation du remboursement de la caution 7 jours après le départ du client, sous réserve de l’absence de dégâts signalés dans l’appartement.",
      "Structuration des données de la conciergerie"
    ],
    technologies: ["N8N", "Python", "API REST", "JavaScript", "MySQL", "Docker", "GitLab"]
  },
  {
    period: "Mars 2025 - Août 2025",
    company: "EPSI Montpellier",
    location: "Montpellier",
    position: "Conception d’une plateforme Big Data dédiée aux données environnementales air/météo",
    type: "Projet académique",
    description: [
      "Conception d'une architecture Big Data (Data Lake + Data Warehouse) respectant les contraintes RGPD et sécurité.",
      "Collecte horaire automatique des données via les API (air & météo), puis nettoyage et préparation des données afin de garantir leur fiabilité et leur utilisation",
      "Conception de dashboards interactifs pour la visualisation des données météo & air",
      "Développement de modèles de prédiction des indices de qualité de l’air"
        ],
    technologies: ["Python", "Scikit-learn", "Apache Spark", "Hadoop", "PostgreSQL", "Airflow", "Docker", "Power BI", "GitLab"]
  },
  {
    period: "Février 2025 - Mars 2025",
    company: "EPSI Montpellier",
    location: "Montpellier",
    position: "Analyse des Accidents de la Route en France",
    type: "Projet académique",
    description: [
      "Extract-Transform-Load (ETL) et conception de Dashboard",
    ],
    technologies: [ "Python", "Power BI"],
  },
  {
    period: "Juin 2025 - Juillet 2025",
    company: "EPSI Montpellier",
    location: "Montpellier",
    position: "Configuration et Implémentation d'un Pipeline de Données avec Docker Compose et Outils Big Data",
    type: "Projet académique",
    description: [
      "Mise en place de l'environnement de développement avec Docker Compose",
      "Implémentation des extracteurs avec Kafka et outils Big Data",
      "Implémentation des transformations avec Spark et Flink",
      "Implémentation des chargeurs pour Hadoop et Cassandra",
      "Orchestration avec Airflow dans l'environnement conteneurisé"
    ],
    technologies: ["Docker Compose", "Hadoop", "Spark", "Flink", "Kafka", "Cassandra", "Airflow", "Prometheus", "Grafana", "Trello"],
    link: "https://gitlab.com/egahblewussi/env-big-data",
    linkText: "gitlab.com/egahblewussi/env-big-data"
  },
  {
    period: "Depuis Juin 2024",
    company: "RÉFÉRENCE",
    location: "Abidjan",
    position: "Développeur Full Stack",
    type: "Freelance",
    description: [
      "Analyse des besoins et rédaction du cahier des charges",
      "Conception technique et architecture logicielle",
      "Développement du Backend et Frontend",
      "Intégration des agrégateurs de paiement",
      "Tests unitaires et validation fonctionnelle"
    ],
    technologies: ["PHP", "Laravel", "HTML", "CSS", "JavaScript", "API REST", "PostgreSQL", "GitLab", "Trello"],
    link: "https://u-reference.com/fr",
    linkText: "u-reference.com"
  },
  {
    period: "Janvier 2022 - Août 2024",
    company: "FINTECH SEMOA",
    location: "Lomé",
    position: "Intégrateur et développeur web",
    type: "CDI",
    description: [
      "Développement d'un portail et API pour facturer et encaisser les paiements en ligne par mobile money et carte bancaire",
      "Création d'un portail et API de génération de template mail et de PDF",
      "Développement du module de gestion de cagnotte et du paiement multiple (VPOS)",
      "Mise en place des APIs et assistance client pour l'intégration",
      "Déploiement en environnement de Dev et Sandbox",
      "Maintenance et mise à jour du système"
    ],
    technologies: ["Symfony", "Django", "React", "HTML", "CSS", "JavaScript", "MySQL", "AWS S3", "AWS CloudWatch", "AWS API Gateway", "API Platform", "FOSREST", "KeyCloak", "Docker", "Git", "Agile Scrum", "Asana"]
  },
  {
    period: "Juin 2020 - Juin 2021",
    company: "OLFA PLEXUS TECHNOLOGIE,",
    location: "Lomé",
    position: "Développement d’une application de gestion d’un hôtel et d’une boutique",
    type: "Stage",
    description: [
      "Analyse, conception et développement de l'application",
    ],
    technologies: [ "Symfony", "HTML", "CSS", "JavaScript", "MySql", "GitLab"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expériences</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 ring-4 ring-background"></div>

                <Card className="gradient-card border-none shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium text-accent">{exp.period}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                          <span className="font-semibold">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                        {exp.type}
                      </Badge>
                    </div>

                    {exp.link && (
                      <a 
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:underline mb-4"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {exp.linkText}
                      </a>
                    )}

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent mt-1.5">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
