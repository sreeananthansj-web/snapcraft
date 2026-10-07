import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, WhatsAppButton } from "@/components/ui-bits";
import { portfolio, portfolioCategories } from "@/lib/catalogue";
import { enquiryMessage } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | SnapCraft Frames, Hampers & Bouquets" },
      {
        name: "description",
        content:
          "Browse SnapCraft creations — personalized frames, gift hampers, bouquets, birthday packages and engagement keepsakes.",
      },
      { property: "og:title", content: "Portfolio | SnapCraft" },
      { property: "og:description", content: "A gallery of handcrafted SnapCraft gifts and keepsakes." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const items = cat === "All" ? portfolio : portfolio.filter((p) => p.category === cat);

  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, step]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A Look At What We Craft"
        description="Frames, hampers, bouquets and keepsakes — each one made around a moment."
      />
      <Section>
        <div role="tablist" aria-label="Filter creations" className="flex flex-wrap gap-2">
          {portfolioCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`rounded-sm border px-4 py-2 text-sm transition-colors ${
                cat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/75 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden border border-border text-left"
                aria-label={`Open ${p.title}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 ${
                    i % 3 === 1 ? "aspect-square" : "aspect-4/5"
                  }`}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-foreground/80 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="eyebrow text-background/75">{p.category}</span>
                  <span className="mt-1 flex items-center justify-between font-display text-xl text-background">
                    {p.title}
                    <ArrowRight size={18} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4 animate-in fade-in duration-300"
          onClick={() => setActive(null)}
        >
          <div
            className="relative grid max-h-full w-full max-w-5xl overflow-y-auto bg-ivory md:grid-cols-[1.3fr_1fr] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={current.image} alt={current.title} className="max-h-[70vh] w-full object-cover md:max-h-[85vh]" />
            <div className="flex flex-col p-6 sm:p-8">
              <span className="eyebrow">{current.category}</span>
              <h2 className="display-md mt-2">{current.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{current.description}</p>
              <div className="mt-8">
                <WhatsAppButton message={enquiryMessage(current.title)} variant="solid">
                  Enquire Now
                </WhatsAppButton>
              </div>
              <div className="mt-auto flex gap-2 pt-8">
                <button onClick={() => step(-1)} aria-label="Previous" className="rounded-sm border border-border p-2.5 hover:border-primary">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={() => step(1)} aria-label="Next" className="rounded-sm border border-border p-2.5 hover:border-primary">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-full bg-ivory/90 p-2 text-foreground shadow-soft"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
