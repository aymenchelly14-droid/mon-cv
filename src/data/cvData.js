
export const personalInfo = {
  name: "Aymen Achour Chelly",
  title: "Étudiant en Informatique & Développeur Web",
  location: "Nabeul, Tunisie",
  phone: "51185804",
  email: "aymenchelly14@gmail.com",
  github: "https://github.com/aymenchelly14-droid",
  bio: "Étudiant en informatique passionné par le développement web et les technologies innovantes. Curieux et créatif, je conçois des solutions web performantes, esthétiques et adaptées aux besoins des utilisateurs."
};

export const skills = [
  { category: "Programming Languages", level: 80, items: ["Python", "C++", "Java", "JavaScript", "HTML5", "CSS3", "PHP"] },
  { category: "Frameworks & Libraries", level: 75, items: ["React.js", "Next.js", "Tailwind CSS", "Node.js"] },
  
  // 👇 C'EST ICI QUE J'AI AJOUTÉ "Oracle"
  { category: "Databases", level: 70, items: ["SQL", "MySQL", "MongoDB", "Oracle"] },
  
  { category: "Tools & Design", level: 85, items: ["VS Code", "IntelliJ", "Eclipse", "draw.io", "Git"] }
];

export const experience = [
  {
    period: "02/2026 – 05/2026",
    type: "Internship",
    company: "L_Mobile",
    role: "Développeur Web",
    tasks: [
      "Développement d'un dashboard de gestion de stock centralisant les entrées/sorties en temps réel",
      "Mise en place d'un système de suivi des inventaires par emplacement, catégorie et statut",
      "Intégration d'alertes automatiques pour les seuils de réapprovisionnement"
    ],
  },
  {
    period: "08/2026 – 09/2026",
    type: "Internship",
    company: "STAFIM Peugeot",
    role: "Stagiaire",
    tasks: ["Stage d'été"],
  },
  {
    period: "01/2025",
    type: "Internship",
    company: "AfterCode",
    role: "Développeur Front-End",
    tasks: ["Conçu et développé un site vitrine interactif avec Next.js (Neocraft)"],
  },
  {
    period: "01/2024",
    type: "Internship",
    company: "SRTGN",
    role: "Stagiaire",
    tasks: ["Stage d'initiation"],
  }
];

export const education = [
  {
    period: "2023 – 2026",
    type: "University",
    school: "ISET Nabeul",
    degree: "Diplôme en Développement & Multimédia",
    tasks: ["Développement Web Avancé", "Bases de données", "Multimédia interactif"],
  },
  {
    period: "2023",
    type: "High School",
    school: "Lycée Ali Balhoune",
    degree: "Baccalauréat Informatique",
    tasks: ["Algorithmes", "Structures de données", "Mathématiques"],
  }
];

export const aiData = [
  {
    icon: "🧹",
    title: "Data Cleaning & EDA",
    desc: "Pandas, NumPy, Matplotlib, Seaborn",
    level: 70
  },
  {
    icon: "💬",
    title: "NLP",
    desc: "Text preprocessing, sentiment, transformers",
    level: 50
  },
  {
    icon: "📊",
    title: "Data Visualization",
    desc: "Plotly, Dash, Power BI dashboards",
    level: 65
  }
];

export const projects = [
  {
    title: "Dashboard Gestion de Stock",
    desc: "Dashboard temps réel avec alertes automatiques pour L_Mobile.",
    tech: ["React", "Tailwind", "API REST"]
  },
  {
    title: "Site vitrine Neocraft",
    desc: "Site interactif développé avec Next.js chez AfterCode.",
    tech: ["Next.js", "Tailwind CSS"]
  },
  {
    title: "Portfolio Personnel",
    desc: "Ce CV en ligne, développé avec React & Tailwind.",
    tech: ["React", "Vite", "Tailwind"]
  }
];
