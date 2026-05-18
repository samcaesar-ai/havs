import { useLocale } from "next-intl";
import { materials } from "@/content/materials";
import { Section } from "./section";

export function MaterialsGrid() {
  const locale = useLocale() as "da" | "en";

  return (
    <Section className="bg-ink text-paper">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-birch/20">
        {materials.map((material) => (
          <div
            key={material.id}
            className="relative overflow-hidden bg-ink flex flex-col justify-end p-8 gap-4 group"
            style={{ aspectRatio: "4/3" }}
          >
            <div
              className="absolute inset-0 bg-forest/30 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              aria-hidden="true"
            />
            <h3 className="relative font-display text-xl tracking-tight text-orange z-10">
              {material[locale].title}
            </h3>
            <p className="relative text-sm text-stone leading-relaxed z-10">
              {material[locale].description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
