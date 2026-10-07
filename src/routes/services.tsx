import { createFileRoute } from "@tanstack/react-router";
import { ItemCard, PageHero, Section, SectionHeading } from "@/components/ui-bits";
import { bouquets, celebrationWorks, frames, hampers } from "@/lib/catalogue";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SnapCraft Services | Personalized Gifts & Custom Creations" },
      {
        name: "description",
        content:
          "Custom frames, gift hampers, chocolate and flower bouquets, and celebration creations by SnapCraft in Neyyattinkara, Kerala.",
      },
      { property: "og:title", content: "SnapCraft Services | Personalized Gifts & Custom Creations" },
      {
        property: "og:description",
        content: "Frames, hampers, bouquets and celebration works — customized to your occasion.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const groups = [
    { eyebrow: "01", title: "Custom Frames", items: frames },
    { eyebrow: "02", title: "Hampers", items: hampers.slice(0, 5) },
    { eyebrow: "03", title: "Bouquets", items: bouquets.slice(0, 3) },
    { eyebrow: "04", title: "Celebration Works", items: celebrationWorks },
  ];

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything We Craft"
        description="Customized according to your occasion and requirements. Price on request for every creation."
      />
      {groups.map((g, gi) => (
        <div key={g.title} className={gi % 2 === 1 ? "bg-cream" : ""}>
          <Section>
            <SectionHeading eyebrow={g.eyebrow} title={g.title} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((item, i) => (
                <ItemCard key={item.title} {...item} delay={i * 70} />
              ))}
            </div>
          </Section>
        </div>
      ))}
    </>
  );
}
