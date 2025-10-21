// config/index.ts

export * from "./company";
export * from "./contacts";
export * from "./offices";

// Additional utility exports
export const SITE_CONFIG = {
  url: "https://jg-marine.com",
  api: {
    contact: "/api/contact",
    newsletter: "/api/newsletter",
  },

  // SEO defaults
  seo: {
    defaultTitle:
      "JG Marine - Independent DNV Maritime Surveys | Baltic Region",
    titleTemplate: "%s | JG Marine",
    defaultDescription:
      "64 years of maritime heritage. DNV-certified surveyors providing independent vessel and cargo inspections across 11+ European countries. 24/7 emergency response.",
    defaultKeywords: [
      "marine survey Poland",
      "maritime surveyor Baltic",
      "DNV certified surveyor",
      "cargo inspection",
      "vessel survey",
      "P&I survey",
      "marine warranty survey",
    ],
  },

  // Analytics (if you use them)
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX", // Add your GA ID
  },
} as const;
