import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ItemCard, PageHero, PrimaryLink, Section, WhatsAppButton } from "@/components/ui-bits";
import { frames } from "@/lib/catalogue";
import { enquiryMessage } from "@/lib/site";

export const Route = createFileRoute("/frames")({
  head: () => ({
    meta: [
      { title: "Custom Frames | SnapCraft Crystal Moon, Photo Lamps & Family Frames" },
      {
        name: "description",
        content:
          "Crystal moon frames, half-moon crystal photo lamps, A3 family frames and custom photo merging by SnapCraft, Neyyattinkara, Kerala.",
      },
      { property: "og:title", content: "Custom Frames | SnapCraft" },
      {
        property: "og:description",
        content: "Personalized crystal frames, photo lamps, family frames and photo merging.",
      },
    ],
  }),
  component: Frames,
});

function Frames() {
  return (
    <>
      <PageHero
        eyebrow="Custom Frames"
        title="Your Memories, Your Way"
        description="Personalized frames and photo lamps crafted around the photos that matter most to you."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {frames.map((f, i) => (
            <ItemCard key={f.title} {...f} delay={i * 70} />
          ))}
        </div>
      </Section>

      <div className="bg-cream">
        <Section className="text-center">
          <Reveal className="mx-auto max-w-xl">
            <h2 className="display-lg text-foreground">Have a different idea? Tell us what you need.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <PrimaryLink to="/contact">Start Your Enquiry</PrimaryLink>
              <WhatsAppButton message={enquiryMessage("a custom frame idea")} />
            </div>
          </Reveal>
        </Section>
      </div>
    </>
  );
}
