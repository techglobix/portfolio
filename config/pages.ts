import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to TechGlobix portfolio website.",
    metadata: {
      title: "Home",
      description: "TechGlobix's portfolio website.",
    },
  },
  techStacks: {
    title: "Tech Stacks",
    description: "Key tech stacks that define our professional identity.",
    metadata: {
      title: "Tech Stacks",
      description:
        "TechGlobix's key tech stacks that define their professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Projects",
      description: "TechGlobix's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact TechGlobix.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "TechGlobix's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "TechGlobix's resume.",
    metadata: {
      title: "Resume",
      description: "TechGlobix's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "TechGlobix's professional journey and career timeline.",
    },
  },
};
