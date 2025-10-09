export type ServiceItem = {
  id: string;
  name: string;
  blurb: string;
  emergency?: boolean;
};

export type ServiceCategory = {
  id: string;
  title: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "marine-ops",
    title: "Marine Operations",
    items: [
      {
        id: "marine-surveys",
        name: "Marine Surveys",
        blurb: "Hull & Machinery, P&I, Condition Assessments",
        emergency: true,
      },
      {
        id: "mws",
        name: "Marine Warranty Surveys",
        blurb: "Offshore wind, heavy lift, project cargo",
        emergency: true,
      },
      {
        id: "pi",
        name: "P&I Investigations",
        blurb: "Independent, neutral investigations for clubs & underwriters",
      },
    ],
  },
  {
    id: "cargo-logistics",
    title: "Cargo & Logistics",
    items: [
      {
        id: "cargo",
        name: "Cargo Surveys",
        blurb: "Inspection, damage assessment, claims support",
      },
      {
        id: "loss",
        name: "Loss Adjusting",
        blurb: "Independent claims investigation, average adjusting",
        emergency: true,
      },
      {
        id: "heavy-lift",
        name: "Heavy Lift Projects",
        blurb: "Loadout, lashing, securing, route & risk checks",
        emergency: true,
      },
    ],
  },
  {
    id: "risk-compliance",
    title: "Risk & Compliance",
    items: [
      {
        id: "risk",
        name: "Risk Assessment",
        blurb: "Accident investigation, HAZOP, loss prevention",
      },
      {
        id: "audits",
        name: "Audits & Inspections",
        blurb: "ISO/ISM/ISPS, CMID, vetting, technical condition",
      },
    ],
  },
];
