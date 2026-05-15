import { useLocale } from "next-intl";
import { materials } from "@/content/materials";
import { Section } from "./section";

export function MaterialsGrid() {
  const locale = useLocale() as "da" | "en";

  return (
    <Section className="bg-ink text-paper">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-birch/20">
        {materials.map((material) => (
          <div key={material.id} className="p-8 flex flex-col gap-4 bg-ink">
            <h3 className="font-display text-xl tracking-tight text-orange">
              {material[locale].title}
            </h3>
            <p className="text-sm text-stone leading-relaxed">
              {material[locale].description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
