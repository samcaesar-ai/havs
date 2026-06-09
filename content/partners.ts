export type Partner = {
  id: string;
  name: string;
  featured: boolean;
  logoFile: string;
  url?: string;
  da: { description: string };
  en: { description: string };
};

export const partners: Partner[] = [];
