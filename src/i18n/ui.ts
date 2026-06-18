// Single source of truth for bilingual UI strings.

import {
  CLIENTS,
  COMPANY_NAME,
  EXPERIENCE_TIME_IN_YERS,
  NMB_OF_PRODUCTION_PROJECTS,
  TECHNICAL_STACK,
} from "../lib/constants";

// Components read `Astro.currentLocale` and pick the matching slice.
export type Lang = "fr" | "en";

export const ui = {
  fr: {
    meta: {
      title: `${COMPANY_NAME} — Produits IA, applications web & mobiles`,
      description:
        "Conception de produits IA, d'architectures multi-agents (RAG/MCP, cloud) et d'applications web & mobiles à grande échelle pour grands groupes. De l'architecture au déploiement en production.",
    },
    nav: { blog: "Blog", contact: "Contact" },
    hero: {
      eyebrow: "Produits IA · Applications web & mobiles",
      prefix: "Nous concevons",
      phrases: [
        "de l'IA qui crée de la valeur.",
        "des applications web & mobiles à grande échelle.",
        "des systèmes multi-agents robustes.",
        "des architectures RAG & MCP fiables.",
      ],
      manifesto:
        "L'IA utile n'est pas une démo. C'est un produit qui tient, se mesure et passe à l'échelle.",
      subtitle:
        "Concepteurs de produits IA et d'applications web & mobiles pour grands groupes — de l'architecture au déploiement en production.",
      cta: "Travaillons ensemble",
    },
    services: {
      heading: "Ce que nous faisons",
      items: [
        {
          title: "Produits IA",
          body: "De l'idée au produit : cadrage, prototypage et mise en production d'assistants et copilotes métier.",
        },
        {
          title: "Applications web & mobiles",
          body: "Du back-end à l'app mobile : des produits robustes et performants, pensés pour passer à l'échelle.",
        },
        {
          title: "Réflexion produit & design",
          body: "De la réflexion produit au design d'interfaces (UX/UI) : des parcours pensés et des écrans qui servent l'usage.",
        },
        {
          title: "Architectures multi-agents",
          body: "Systèmes RAG & MCP, orchestration d'agents, outils et mémoire — fiables et observables.",
        },
        {
          title: "Cloud",
          body: "AWS, GCP, Terraform : infrastructures reproductibles, sécurisées et prêtes pour l'échelle.",
        },
        {
          title: "Automatisation",
          body: "Pipelines et intégrations qui suppriment le travail manuel et accélèrent les équipes.",
        },
      ],
    },
    background: {
      heading: "Parcours",
      lead: "Dix ans à concevoir et opérer des systèmes en production. Pas un CV — des choses qui tournent.",
      highlights: [
        {
          k: `${EXPERIENCE_TIME_IN_YERS} ans`,
          v: "d'ingénierie produit & logicielle",
        },
        { k: "Grands groupes", v: "IA, cloud, automatisation" },
        { k: `${NMB_OF_PRODUCTION_PROJECTS}+`, v: "projets en production" },
      ],
      trust: {
        heading: "Ils nous ont fait confiance",
        clients: CLIENTS,
      },
      stackLabel: "Stack",
      stack: TECHNICAL_STACK,
    },
    articles: {
      heading: "Articles récents",
      all: "Tout le blog",
      empty: "Premiers articles bientôt.",
      readingTime: (m: number) => `${m} min de lecture`,
    },
    contact: {
      heading: "Travaillons ensemble",
      body: "Un projet IA, une architecture à cadrer, un POC à passer en production ? Écrivez-nous.",
      linkedin: "LinkedIn",
    },
  },
  en: {
    meta: {
      title: `${COMPANY_NAME} — AI products, web & mobile apps`,
      description:
        "AI products, multi-agent architectures (RAG/MCP, cloud) and web & mobile apps at scale for enterprises. From architecture to production deployment.",
    },
    nav: { blog: "Blog", contact: "Contact" },
    hero: {
      eyebrow: "AI products · Web & mobile apps",
      prefix: "We design",
      phrases: [
        "AI that creates value.",
        "web & mobile apps at scale.",
        "robust multi-agent systems.",
        "reliable RAG & MCP architectures.",
      ],
      manifesto:
        "Useful AI is not a demo. It is a product that holds, measures itself and scales.",
      subtitle:
        "AI products and web & mobile apps for enterprises — from architecture to production deployment.",
      cta: "Let's work together",
    },
    services: {
      heading: "What we do",
      items: [
        {
          title: "AI products",
          body: "From idea to product: framing, prototyping and shipping business assistants and copilots.",
        },
        {
          title: "Web & mobile apps",
          body: "From back-end to mobile app: robust, performant products built to scale.",
        },
        {
          title: "Product thinking & design",
          body: "From product thinking to interface design (UX/UI): considered flows and screens that serve real usage.",
        },
        {
          title: "Multi-agent architectures",
          body: "RAG & MCP systems, agent orchestration, tools and memory — reliable and observable.",
        },
        {
          title: "Cloud",
          body: "AWS, GCP, Terraform: reproducible, secure infrastructure ready to scale.",
        },
        {
          title: "Automation",
          body: "Pipelines and integrations that remove manual work and speed up teams.",
        },
      ],
    },
    background: {
      heading: "Background",
      lead: "Ten years designing and operating systems in production. Not a résumé — things that run.",
      highlights: [
        {
          k: `${EXPERIENCE_TIME_IN_YERS} years`,
          v: "in product & software engineering",
        },
        { k: "Enterprises", v: "AI, cloud, automation" },
        { k: `${NMB_OF_PRODUCTION_PROJECTS}+`, v: "projects in production" },
      ],
      trust: {
        heading: "Trusted by",
        clients: CLIENTS,
      },
      stackLabel: "Stack",
      stack: TECHNICAL_STACK,
    },
    articles: {
      heading: "Recent posts",
      all: "All posts",
      empty: "First posts coming soon.",
      readingTime: (m: number) => `${m} min read`,
    },
    contact: {
      heading: "Let's work together",
      body: "An AI project, an architecture to frame, a POC to ship to production? Drop us a line.",
      linkedin: "LinkedIn",
    },
  },
} as const;

export const getLang = (locale: string | undefined): Lang =>
  locale === "en" ? "en" : "fr";
