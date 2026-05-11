export type Material = {
  id: string;
  da: { title: string; description: string };
  en: { title: string; description: string };
};

export const materials: Material[] = [
  {
    id: "clt",
    da: { title: "Krydslamineret træ (CLT)", description: "Bærende elementer til flerlags trækonstruktion." },
    en: { title: "Cross Laminated Timber (CLT)", description: "Structural panels for multi-storey timber construction." },
  },
  {
    id: "glulam",
    da: { title: "Limtræ", description: "Ingeniørtræ til spænd, rammer og synlig konstruktion." },
    en: { title: "Glulam", description: "Engineered timber for spans, frames, and exposed structure." },
  },
  {
    id: "timber-frame",
    da: { title: "Trærammesystemer", description: "Letrammer og søjle-bjælke til bolig og erhverv." },
    en: { title: "Timber frame systems", description: "Light frame and post-and-beam for residential and commercial." },
  },
  {
    id: "prefab",
    da: { title: "Præfabrikerede komponenter", description: "Facade-, dæk- og tagsystemer leveret til byggepladsen." },
    en: { title: "Prefabricated components", description: "Façade, floor, and roof systems delivered to site." },
  },
];
