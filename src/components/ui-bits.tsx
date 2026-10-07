import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { enquiryMessage, whatsappLink } from "@/lib/site";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="display-lg mt-3 text-foreground">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}

export function PrimaryLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-secondary active:scale-[0.98]"
    >
      {children}
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function WhatsAppButton({
  message,
  children = "Chat on WhatsApp",
  variant = "outline",
}: {
  message: string;
  children?: ReactNode;
  variant?: "outline" | "solid";
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 active:scale-[0.98] ${
        variant === "solid"
          ? "bg-secondary text-secondary-foreground hover:opacity-90"
          : "border border-primary/40 text-primary hover:border-primary hover:bg-primary/5"
      }`}
    >
      <MessageCircle size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      {children}
    </a>
  );
}

export function ItemCard({
  title,
  description,
  image,
  personalization,
  occasion,
  delay = 0,
}: {
  title: string;
  description: string;
  image: string;
  personalization?: string;
  occasion?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} as="article" className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-4/5 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="display-md text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        {personalization ? (
          <p className="mt-3 text-sm text-secondary">{personalization}</p>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-5">
          <span className="eyebrow">Price on Request</span>
          <a
            href={whatsappLink(enquiryMessage(title, occasion))}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Enquire Now
            <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-border bg-cream">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="display-xl rise mt-4 max-w-3xl text-foreground" style={{ animationDelay: "90ms" }}>
          {title}
        </h1>
        <p
          className="rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "180ms" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
