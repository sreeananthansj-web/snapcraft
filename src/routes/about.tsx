import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { PageHero, PrimaryLink, Section, WhatsAppButton } from "@/components/ui-bits";
import { img } from "@/lib/catalogue";
import { enquiryMessage, site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SnapCraft | Custom Gifting & Handicrafts" },
      {
        name: "description",
        content:
          "SnapCraft is a custom gifting and handicraft venture in Perumpazhuthoor, Neyyattinkara, creating personalized frames, hampers, bouquets and keepsakes.",
      },
      { property: "og:title", content: "About SnapCraft | Custom Gifting & Handicrafts" },
      {
        property: "og:description",
        content:
          "A custom gifting and handicraft venture based in Neyyattinkara, Kerala, delivering across Kerala.",
      },
    ],
  }),
  component: About,
});

const blocks = [
  {
    title: "What We Create",
    text: "Personalized frames, hampers, bouquets, keepsakes and celebration creations.",
  },
  { title: "Our Approach", text: "We focus on customization and thoughtful presentation." },
  {
    title: "Our Specialty",
    text: "Turning separate memories, ideas and gifting requirements into personalized creations.",
  },
  { title: "Where We Serve", text: "Based in Neyyattinkara and delivering across Kerala." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About SnapCraft"
        title="Crafted For The Moments That Matter"
        description="SnapCraft is a custom gifting and handicraft venture based in Perumpazhuthoor, Neyyattinkara."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <Logo
              width={320}
              height={320}
              loading="lazy"
              className="w-48 rounded-full object-contain sm:w-64"
            />
            <p className="display-md mt-8 text-foreground">{site.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{site.location}</p>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-2">
            {blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="border-t border-border pt-6">
                <h2 className="display-md text-foreground">{b.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <div className="bg-cream">
        <Section>
          <div className="grid gap-4 sm:grid-cols-3">
            {[img.frameCrystalMoon, img.hamperOnam, img.bouquetFlower].map((src, i) => (
              <Reveal key={i} delay={i * 80}>
                <img
                  src={src}
                  alt="SnapCraft creation"
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-wrap gap-3">
            <PrimaryLink to="/contact">Start Your Enquiry</PrimaryLink>
            <WhatsAppButton message={enquiryMessage("a custom creation")} />
          </Reveal>
        </Section>
      </div>
    </>
  );
}
