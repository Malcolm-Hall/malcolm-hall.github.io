export const siteConfig = {
  name: "Malcolm Hall",
  title: "Full Stack Software Engineer",
  description: "Portfolio website of Malcolm Hall",
  accentColor: "#117efa",
  social: {
    email: "malcolm.r.hall@outlook.com",
    linkedin: "https://www.linkedin.com/in/malcolm-hall-1b6761224",
    github: "https://github.com/Malcolm-Hall",
    twitter: undefined,
  },
  aboutMe: "I’m a full-stack software developer with a strong foundation in problem solving and a pragmatic, delivery focused mindset. I hold a first class Masters of Science (MSci) degree from Durham University, where programming became a core part of my work long before it became my career. For the past four years, I’ve worked professionally as a consultant developer, building and modernising enterprise web applications and APIs in financial services environments. I enjoy turning real business requirements into reliable, well-designed software.",
  skills: [
    "TypeScript", "JavaScript", "React", "Angular",
    "Java", "Kotlin", "SpringBoot", 
    "MongoDB", "IBM DB2", "PostgreSQL", 
    "Git", "GitHub", "Docker", "Azure", "CI/CD", "Bash",
    "Python", "C++"
  ],
  projects: [
    {
      name: "Chess",
      description:
        "A playable game of chess with support for move validation and loading positions using standard FEN notation.",
      liveLink: "https://github.com/Malcolm-Hall/chess",
      repoLink: "https://github.com/Malcolm-Hall/chess",
      image: "chess_starting_position.png",
      skills: ["Python", "Pyglet"],
    },
    {
      name: "Enigma Machine",
      description: "An Enigma machine written in C++, and interfaced from within Python.",
      liveLink: "https://github.com/Malcolm-Hall/enigmaMachine",
      repoLink: "https://github.com/Malcolm-Hall/enigmaMachine",
      image: "Enigma_Example.png",
      skills: ["Python", "C++", "PyBind11", "Tkinter"]
    }
  ],
  experience: [
    {
      company: "Scott Logic",
      title: "Software Developer (Intermediate)",
      dateRange: "2021 - 2025",
      bullets: [
        "Consultant software developer embedded in client agile teams within the financial services sector",
        "Designed, built, and modernised enterprise web applications, REST APIs, and data processing systems",
        "Delivered features end to end, from requirements and planning through development, testing, and production release, working closely with engineers and business stakeholders",
        "Improved performance, reliability, and maintainability of critical systems through optimisation and modernisation work",
      ],
      skills: ["TypeScript", "React", "Angular", "Java", "Kotlin", "SpringBoot", "MongoDB", "IBM DB2", "PostgreSQL", "Docker", "Azure"],
    },
    {
      company: "Durham University",
      title: "Summer Studentship",
      dateRange: "Jun - Sep 2019",
      bullets: [
        "Built a Python-based particle simulation to model molecular behaviour at solid-liquid interfaces",
        "Architected the core physics engine and data model underpinning the simulation",
        "Delivered a desktop application by designing and implementing a PyQt-based GUI",
      ],
      skills: ["Python", "PyQt5"],
    }
  ],
  education: [
    {
      school: "Durham University",
      degree: "Master in Science (MSci)",
      dateRange: "2017 - 2021",
      achievements: [
        "Applied Python extensively for scientific data collection, analysis, and visualisation across laboratory and coursework modules",
        "Final year project: extended the Herwig 7 C++ simulation framework to model particle interactions and analyse large scale collider simulations, running millions of events on a compute cluster",
      ],
      skills: ["Python", "C++", "Matplotlib", "NumPy",],
    }
  ],
  certificates: [
    {
      name: "Oracle Certified Associate, Java SE 8 Programmer",
      organisation: "Oracle",
      issueDate: "Aug 2024",
      skills: ["Java"],
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=9CBC05F16D9A21701283052ED704AD6ABE5CF18F393040508E3FE172A2873003"
    }
  ]
};
