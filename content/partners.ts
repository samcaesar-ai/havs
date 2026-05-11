export type Partner = {
  id: string;
  name: string;
  featured: boolean;
  logoFile: string; // filename in /public/marks/
  url?: string;
  da: { description: string };
  en: { description: string };
};

export const partners: Partner[] = [
  {
    id: "sodra",
    name: "Södra",
    featured: true,
    logoFile: "sodra.svg",
    url: "https://www.sodra.com",
    da: { description: "En af Sveriges største træproducenter." },
    en: { description: "One of Sweden's largest timber manufacturers." },
  },
];
