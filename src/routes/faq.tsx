import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHero, Section, WhatsAppButton } from "@/components/ui-bits";
import { enquiryMessage } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | SnapCraft Ordering, Customization & Delivery" },
      {
        name: "description",
        content:
          "Answers about ordering from SnapCraft, customizing gifts, photo merging, Onam hampers and delivery across Kerala.",
      },
      { property: "og:title", content: "FAQ | SnapCraft" },
      { property: "og:description", content: "How to order, customize and get delivery across Kerala." },
    ],
  }),
  component: Faq,
});

const faqs = [
  ["How can I order?", "Contact SnapCraft through WhatsApp, phone or Instagram DM."],
  ["Can I customize a gift?", "Yes. SnapCraft specializes in customized gifting and handicraft creations."],
  ["Can you merge separate photos into one frame?", "Yes. Custom photo merging is available."],
  ["Do you deliver?", "Yes. Delivery is available across Kerala."],
  ["Can I order an Onam hamper?", "Yes. Festival hampers including Onam hampers are available."],
  [
    "Can I order a birthday gift for a child?",
    "Yes. Kids' birthday packages and surprise gifting options are available.",
  ],
  [
    "How do I enquire about pricing?",
    "Contact SnapCraft through WhatsApp or Instagram for current options and pricing.",
  ],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, Answered"
        description="Everything you need to know before placing your order."
      />
      <Section className="max-w-3xl">
        <ul className="border-t border-border">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <li key={q} className="border-b border-border">
                <h2>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg text-foreground sm:text-xl"
                  >
                    {q}
                    <Plus
                      size={20}
                      className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h2>
                <div
                  id={`faq-${i}`}
                  className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="overflow-hidden pb-0 text-muted-foreground">
                    <span className="block pb-6">{a}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-12">
          <WhatsAppButton message={enquiryMessage("asking a question about your gifts")}>
            Still curious? Ask on WhatsApp
          </WhatsAppButton>
        </div>
      </Section>
    </>
  );
}
