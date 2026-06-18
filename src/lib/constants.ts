export const COMPANY_NAME = "Jofnu";
export const COMPANY_EMAIL = "hello@jofnu.com";
export const COMPANY_URL = "https://jofnu.com";
export const COMPANY_ADDRESS = "60 rue François 1er, 75008 Paris, France";

export const COMPANY_CAPITAL = 1;
export const COMPANY_SIREN = "930815485";
export const COMPANY_RCS = "Paris";

export const COMPANY_GITHUB = "https://github.com/jofnu";
export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/jofnu";

export const CEO_NAME = "Alexandre Santos Figueiredo";
export const CEO_EMAIL = "alexandre@jofnu.com";

export const CEO_GITHUB = "https://github.com/tun43p";
export const CEO_LINKEDIN =
  "https://www.linkedin.com/in/alexandre-santos-figueiredo";

export const EXPERIENCE_TIME_IN_YERS = 10;
export const NMB_OF_PRODUCTION_PROJECTS = 7;

export const TECHNICAL_STACK = [
  "TypeScript",
  "Python",
  "Golang",
  "AWS",
  "GCP",
  "Terraform",
  "RAG",
  "MCP",
  "React",
  "Node",
  "Docker",
];

// Photos go in public/team/. github/linkedin optional — omit to hide the link.
export const TEAM = [
  {
    name: CEO_NAME,
    role: { fr: "Fondateur & CEO", en: "Founder & CEO" },
    photo: "/team/alexandre.jpeg",
    bio: {
      fr: "10 ans à concevoir et opérer des produits IA et cloud en production.",
      en: "10 years designing and operating AI & cloud products in production.",
    },
    github: CEO_GITHUB,
    linkedin: CEO_LINKEDIN,
  },
];

export const CLIENTS = [
  {
    name: "Bouygues Telecom",
    url: "https://www.bouyguestelecom.fr",
    logo: "/partners/bouygues_telecom.png",
  },
  {
    name: "Only Solution",
    url: "https://www.linkedin.com/company/only-solution",
    logo: "/partners/only_solution.png",
  },
  {
    name: "Blackpaws",
    url: "https://blackpaws.fr",
    logo: "/partners/blackpaws.png",
  },
  {
    name: "Databot",
    url: "https://data-bot.xyz",
    logo: "/partners/databot.png",
  },
];
