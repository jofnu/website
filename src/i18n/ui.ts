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
      title: `${COMPANY_NAME} — Produits IA & architectures multi-agents`,
      description:
        "Conception de produits IA et d'architectures multi-agents (RAG/MCP, cloud) pour grands groupes. De l'architecture au déploiement en production.",
    },
    nav: { blog: "Blog", contact: "Contact" },
    hero: {
      eyebrow: "Produits IA · Architectures multi-agents",
      prefix: "Nous concevons",
      phrases: [
        "de l'IA qui crée de la valeur.",
        "des systèmes multi-agents à l'échelle.",
        "des architectures RAG & MCP robustes.",
      ],
      manifesto:
        "L'IA utile n'est pas une démo. C'est un système qui tient, se mesure et passe à l'échelle.",
      subtitle:
        "Concepteurs de produits IA pour grands groupes — de l'architecture au déploiement en production.",
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
        {
          title: "Full-stack & mobile",
          body: "Du back-end à l'app mobile : des interfaces soignées au service de l'IA.",
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
      title: `${COMPANY_NAME} — AI products & multi-agent architectures`,
      description:
        "AI products and multi-agent architectures (RAG/MCP, cloud) for enterprises. From architecture to production deployment.",
    },
    nav: { blog: "Blog", contact: "Contact" },
    hero: {
      eyebrow: "AI products · Multi-agent architectures",
      prefix: "We design",
      phrases: [
        "AI that creates value.",
        "multi-agent systems at scale.",
        "robust RAG & MCP architectures.",
      ],
      manifesto:
        "Useful AI is not a demo. It is a system that holds, measures itself and scales.",
      subtitle:
        "AI product designers for enterprises — from architecture to production deployment.",
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
        {
          title: "Full-stack & mobile",
          body: "From back-end to mobile app: polished interfaces in service of AI.",
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
