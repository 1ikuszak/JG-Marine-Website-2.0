// config/contacts.ts

export const CONTACTS = {
  // Primary Contacts
  main: {
    email: "info@jg-marine.com",
    phone: "+48 58 760 11 20",
  },

  // Key Personnel (Now with all details included)
  personnel: {
    jacek: {
      name: "Jacek Goszczyński",
      email: "jack@jg-marine.com",
      phone: "+48 602 222 477",
      role: "Founder & CEO",
      description:
        "Seasoned Master Mariner and certified auditor across multiple maritime disciplines. Accredited expert in commercial courts.",
      certifications: [
        "Master Mariner",
        "Court Expert",
        "Multi-Discipline Auditor",
      ],
      imageUrl: "/team/jacek.png",
    },
    mariusz: {
      name: "Mariusz Łapiński",
      email: "mariusz@jg-marine.com",
      phone: "+48 501 505 797",
      role: "Lead Auditor",
      description:
        "ISO/ISM/ISPS Lead Auditor specializing in maritime operations and risk assessment. Fluent in English and Russian.",
      certifications: ["ISO/ISM/ISPS Lead Auditor", "ADR/RID Advisor"],
      imageUrl: "/team/mariusz.png",
    },
    beata: {
      name: "Beata Fredrich",
      email: "beata@jg-marine.com",
      phone: "+48 662 225 899",
      role: "Operations Manager",
      description:
        "MA of Science from Gdańsk University. Coordinates office operations and administrative logistics.",
      certifications: ["MA Environmental Protection", "Operations Management"],
      imageUrl: "/team/beata.png",
    },
    joanna: {
      name: "Joanna Adamczak",
      email: "joanna@jg-marine.com",
      phone: "+48 604 643 200",
      role: "Operations Manager",
      description:
        "MA in Economics. Manages international survey coordination and client relations across 11+ countries.",
      certifications: ["MA Economics", "Operations Management"],
      imageUrl: "/team/joanna.png",
    },
    dominik: {
      name: "Dominik Kowalewski",
      email: "dominik@jg-marine.com",
      phone: "+48 509 682 700",
      role: "Senior Cargo Surveyor",
      description:
        "Experienced surveyor in general commodities and containerized cargo. Conducts loading supervision and draft surveys.",
      certifications: ["Cargo Surveyor", "Agricultural Certified"],
      imageUrl: "/team/dominik.png",
    },
    tomasz: {
      name: "Tomasz Gołaszewski",
      email: "tom@jg-marine.com",
      phone: "+48 880 385 884",
      role: "Captain & Marine Surveyor",
      description:
        "M.Sc. in Engineering with ASOMWS certification. Experienced maritime surveyor conducting vessel inspections and cargo surveys throughout Poland and Europe.",
      certifications: ["Captain", "M.Sc. Engineering", "ASOMWS Certified"],
      imageUrl: "/team/tomasz.png",
    },
    bartekB: {
      name: "Bartłomiej Bączek",
      email: "baczek@jg-marine.com",
      phone: "+48 509 682 701",
      role: "Cargo Surveyor",
      description:
        "Maritime Academy graduate specializing in general commodities and container cargo surveys. AutoCAD proficient.",
      certifications: ["Maritime Academy", "AutoCAD"],
      imageUrl: "/team/bartlomiej.png",
    },
    bartekJ: {
      name: "Bartłomiej Jaworski",
      email: "bartek@jg-marine.com",
      phone: "+48 602 752 200",
      role: "Warsaw Office Manager",
      description:
        "ISO 9001:2008 Lead Auditor with HAZMAT certification. Oversees Warsaw office operations and container projects.",
      certifications: ["ISO 9001 Lead Auditor", "HAZMAT Certified"],
      imageUrl: undefined, // Will show placeholder
    },
    antek: {
      name: "Bartłomiej",
      email: "bartek@jg-marine.com",
      phone: "+48 602 752 200",
      role: "Warsaw Office Manager",
      description:
        "ISO 9001:2008 Lead Auditor with HAZMAT certification. Oversees Warsaw office operations and container projects.",
      certifications: ["ISO 9001 Lead Auditor", "HAZMAT Certified"],
      imageUrl: "/team/antek.png", // Will show placeholder
    },
  },

  // Social Media
  social: {
    linkedin: "https://www.linkedin.com/company/jg-marine",
    twitter: "https://x.com/jgmarineltd",
  },
} as const;
