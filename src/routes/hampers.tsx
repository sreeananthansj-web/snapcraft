import { createFileRoute } from "@tanstack/react-router";
import { ItemCard, PageHero, PrimaryLink, Section } from "@/components/ui-bits";
import { Reveal } from "@/components/Reveal";
import { hampers } from "@/lib/catalogue";

export const Route = createFileRoute("/hampers")({
  head: () => ({
    meta: [
      { title: "Gift Hampers | SnapCraft Chocolate, Onam & Birthday Hampers" },
      {
        name: "description",
        content:
          "Tailored chocolate boxes, Onam and festival hampers, birthday hampers, kids' packages and surprise gifts from SnapCraft, Kerala.",
      },
      { property: "og:title", content: "Gift Hampers | SnapCraft" },
      {
        property: "og:description",
        content: "Chocolate boxes, festival hampers and surprise gifts customized to your occasion.",
      },
    ],
  }),
  component: Hampers,
});

function Hampers() {
  return (
    <>
      <PageHero
        eyebrow="Hampers"
        title="A Gift They'll Remember"
        description="Hampers put together around your occasion, your budget and the person receiving them. Price on request."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hampers.map((h, i) => (
            <ItemCard key={h.title} {...h} delay={i * 70} />
          ))}
        </div>
        <Reveal className="mt-12">
          <PrimaryLink to="/contact">Tell Us What You Need</PrimaryLink>
        </Reveal>
      </Section>
    </>
  );
}
