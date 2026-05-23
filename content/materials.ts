export type Material = {
  id: string;
  da: { title: string; description: string };
  en: { title: string; description: string };
};

export const materials: Material[] = [
  {
    id: "clt",
    da: { title: "Krydslamineret træ (CLT)", description: "Bærende konstruktionselementer med lavt CO₂-aftryk til flerlags byggerier." },
    en: { title: "Cross Laminated Timber (CLT)", description: "Structural panels with a low carbon footprint for multi-storey construction." },
  },
  {
    id: "glulam",
    da: { title: "Limtræ & ingeniørtræ", description: "Spænd, rammer og synlig konstruktion — genanvendeligt og FSC-certificeret." },
    en: { title: "Glulam & engineered timber", description: "Spans, frames, and exposed structure — renewable and FSC-certified." },
  },
  {
    id: "sustainable-roofing",
    da: { title: "Bæredygtige tagsystemer", description: "Grønne tage, sedum og genanvendelige tagmaterialer med lang levetid og lavt klimaaftryk." },
    en: { title: "Sustainable roofing systems", description: "Green roofs, sedum, and recyclable roofing materials with long lifespans and low climate impact." },
  },
  {
    id: "green-concrete",
    da: { title: "Grøn beton & cement", description: "Lavemissionsbeton og geopolymere cementprodukter — op til 70% lavere CO₂ end konventionel beton." },
    en: { title: "Green concrete & cement", description: "Low-emission concrete and geopolymer cement — up to 70% lower CO₂ than conventional concrete." },
  },
  {
    id: "prefab",
    da: { title: "Præfabrikerede elementer", description: "Facade-, dæk- og væggsystemer leveret til byggepladsen — optimerede til lavt spild og hurtig montage." },
    en: { title: "Prefabricated elements", description: "Façade, floor, and wall systems delivered to site — optimised for minimal waste and fast assembly." },
  },
  {
    id: "facade",
    da: { title: "Facadesystemer", description: "Ventilerede og isolerede facadeløsninger med miljøcertificering og dokumenteret klimaprofil." },
    en: { title: "Façade systems", description: "Ventilated and insulated façade solutions with environmental certification and documented climate profile." },
  },
];
