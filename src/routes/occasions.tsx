import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section } from "@/components/ui-bits";
import { occasions } from "@/lib/catalogue";
import { enquiryMessage, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/occasions")({
  head: () => ({
    meta: [
      { title: "Occasions | SnapCraft Gifts for Birthdays, Weddings & Onam" },
      {
        name: "description",
        content:
          "Personalized gifts from SnapCraft for birthdays, engagements, weddings, Onam, family celebrations and special moments across Kerala.",
      },
      { property: "og:title", content: "Occasions | SnapCraft" },
      {
        property: "og:description",
        content: "Custom gifting designed around birthdays, weddings, Onam and more.",
      },
    ],
  }),
  component: Occasions,
});

function Occasions() {
  return (
    <>
      <PageHero
        eyebrow="Occasions"
        title="Made For Every Celebration"
        description="Tap an occasion to start a WhatsApp enquiry — we'll suggest options around your moment."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((o, i) => (
            <Reveal key={o.title} delay={i * 70}>
              <a
                href={whatsappLink(enquiryMessage(`a gift for ${o.title}`, o.title))}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-4/5 overflow-hidden border border-border"
              >
                <img
                  src={o.image}
                  alt={o.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/85 via-foreground/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-1.5">
                  <h2 className="display-md text-background">{o.title}</h2>
                  <p className="mt-2 text-sm text-background/85">{o.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm text-background">
                    Enquire
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
