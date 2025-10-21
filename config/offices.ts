// config/offices.ts

export interface Office {
  id: string;
  name: string;
  type: "headquarters" | "branch" | "office";
  tagline: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    email: string;
    fax?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  coverage: string[];
  services: string[];
  mapPosition?: {
    top: string;
    left: string;
  };
}

export const OFFICES: Office[] = [
  {
    id: "sopot",
    name: "HEAD OFFICE: Ports of Gdynia & Gdańsk",
    type: "headquarters",
    tagline: "Baltic Operations Center",
    address: {
      street: "ul. Armii Krajowej 116/2",
      city: "Sopot",
      postalCode: "81-824",
      country: "Poland",
      fullAddress: "ul. Armii Krajowej 116/2, 81-824 Sopot, Poland",
    },
    contact: {
      phone: "+48 58 760 11 20",
      email: "info@jg-marine.com",
    },
    coordinates: {
      lat: 54.4425,
      lng: 18.5601,
    },
    coverage: [
      "Port of Gdynia",
      "Port of Gdańsk",
      "Gulf of Gdańsk",
      "Eastern Baltic Region",
    ],
    services: [
      "Hull & Machinery Surveys",
      "Cargo Surveys",
      "P&I Condition Surveys",
      "Pre-Purchase Inspections",
      "Marine Warranty Surveys",
      "Casualty Response",
    ],
    mapPosition: {
      top: "15%",
      left: "78%",
    },
  },
  {
    id: "szczecin",
    name: "SZCZECIN OFFICE: Ports of Szczecin & Świnoujście",
    type: "branch",
    tagline: "Western Baltic Operations",
    address: {
      street: "ul. Niepodległości 26/26 Black Pearl Office Building",
      city: "Szczecin",
      postalCode: "70-412",
      country: "Poland",
      fullAddress: "ul. Niepodległości 26/26, 70-412 Szczecin, Poland",
    },
    contact: {
      phone: "+48 91 814 22 07",
      email: "szczecin@jg-marine.com",
    },
    coordinates: {
      lat: 53.4285,
      lng: 14.5528,
    },
    coverage: [
      "Port of Szczecin",
      "Port of Świnoujście",
      "Oder River",
      "Western Baltic Ports",
    ],
    services: [
      "Marine Surveys",
      "Cargo Inspections",
      "Draft Surveys",
      "On/Off Hire Surveys",
      "Bunker Surveys",
    ],
    mapPosition: {
      top: "18%",
      left: "22%",
    },
  },
  {
    id: "warsaw",
    name: "WARSAW OFFICE: Coordination of surveys inland",
    type: "office",
    tagline: "Inland Coordination Center",
    address: {
      street: "ul. Szumiących Traw 6a/9",
      city: "Warsaw",
      postalCode: "03-289",
      country: "Poland",
      fullAddress: "ul. Szumiących Traw 6a/9, 03-289 Warsaw, Poland",
    },
    contact: {
      phone: "+48 22 487 52 05",
      email: "warsaw@jg-marine.com",
    },
    coordinates: {
      lat: 52.2297,
      lng: 21.0122,
    },
    coverage: [
      "Central Poland",
      "Inland Waterways",
      "CMR Territory",
      "Road Transport Routes",
    ],
    services: [
      "Non-Marine Surveys",
      "CMR Surveys",
      "Inland Survey Coordination",
      "Logistics Consulting",
      "Container Inspections",
    ],
    mapPosition: {
      top: "42%",
      left: "68%",
    },
  },
];

// Helper function to get office by ID
export const getOfficeById = (id: string): Office | undefined => {
  return OFFICES.find((office) => office.id === id);
};

// Helper function to get headquarters
export const getHeadquarters = (): Office | undefined => {
  return OFFICES.find((office) => office.type === "headquarters");
};
