import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gift, HandHeart, Sparkles, Truck, Instagram, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import heroHamper from "@/assets/hero-hamper.jpg";
import { Reveal } from "@/components/Reveal";
import { ItemCard, PrimaryLink, Section, SectionHeading, WhatsAppButton } from "@/components/ui-bits";
import { bouquets, frames, hampers, img, occasions, portfolio } from "@/lib/catalogue";
import { enquiryMessage, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SnapCraft | Custom Gifts, Hampers & Personalized Frames" },
      {
        name: "description",
        content:
          "SnapCraft creates personalized frames, gift hampers, bouquets, keepsakes and custom celebration gifts in Neyyattinkara, Kerala, with delivery available across Kerala.",
      },
      { property: "og:title", content: "SnapCraft | Custom Gifts, Hampers & Personalized Frames" },
      {
        property: "og:description",
        content:
          "Personalized frames, hampers, bouquets and keepsakes crafted in Neyyattinkara, Kerala. Delivery across Kerala.",
      },
    ],
  }),
  component: Home,
});

const categories = [
  { title: "Custom Frames", text: "Crystal keepsakes and family frames.", image: img.frameCrystalMoon, to: "/frames" },
  { title: "Gift Hampers", text: "Festival, birthday and surprise hampers.", image: img.hamperOnam, to: "/hampers" },
  { title: "Bouquets", text: "Chocolate and flower arrangements.", image: img.bouquetChocolate, to: "/services" },
  { title: "Birthday Gifts", text: "Kids' packages and personalized surprises.", image: img.birthday, to: "/occasions" },
  { title: "Celebration Gifts", text: "Engagement and wedding creations.", image: img.engagement, to: "/occasions" },
  { title: "Keepsakes", text: "Handcrafted pieces made to keep.", image: img.keepsake, to: "/portfolio" },
];

const why = [
  { icon: Sparkles, title: "Personalized", text: "Created around your memories and requirements." },
  { icon: HandHeart, title: "Handmade With Care", text: "Thoughtfully crafted and presented." },
  { icon: Gift, title: "Made For The Moment", text: "Designed for birthdays, celebrations, festivals and meaningful occasions." },
  { icon: Truck, title: "Kerala-Wide Delivery", text: "Delivery available across Kerala." },
];

function Home() {
  const featured = bouquets[0]!;
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <div className="rise flex items-center gap-3">
              <Logo
                width={72}
                height={72}
                className="h-16 w-auto rounded-full object-contain sm:h-20"
              />
              <span className="eyebrow">Craft Hampers &amp; Bouquets</span>
            </div>
            <h1 className="display-xl rise mt-7 text-foreground" style={{ animationDelay: "120ms" }}>
              Surprise Your Loved Ones
              <span className="block italic text-primary">With Something Truly Special</span>
            </h1>
            <p
              className="rise mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "240ms" }}
            >
              Beautifully crafted gifts, personalized frames, hampers and keepsakes made for life's most
              meaningful moments.
            </p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <PrimaryLink to="/portfolio">Explore Our Creations</PrimaryLink>
              <WhatsAppButton message={enquiryMessage("a custom gift from SnapCraft")} />
            </div>
          </div>

          <div className="rise relative" style={{ animationDelay: "300ms" }}>
            <img
              src={heroHamper}
              alt="Handcrafted SnapCraft gift hamper with chocolates, dried flowers and wrapped gifts"
              width={1200}
              height={1504}
              className="h-[320px] w-full object-cover shadow-lift sm:h-[420px] lg:h-[560px]"
            />
            <div className="absolute -bottom-5 left-4 hidden bg-ivory px-6 py-4 shadow-soft sm:block">
              <p className="display-md text-foreground">Price on Request</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Customized according to your occasion and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <Section>
        <SectionHeading
          eyebrow="Explore"
          title="Made For Meaningful Moments"
          description="Start with what you're looking for — every creation is customized according to your occasion and requirements."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <Link
                to={c.to}
                className="group block h-full overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="aspect-4/3 overflow-hidden bg-muted">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="display-md text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mt-1 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FRAMES */}
      <div className="bg-cream">
        <Section>
          <SectionHeading
            eyebrow="Custom Frames"
            title="Memories, Crafted To Last"
            description="Turn your favorite memories into beautiful personalized keepsakes made especially for the people you love."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {frames.map((f, i) => (
              <ItemCard key={f.title} {...f} delay={i * 70} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryLink to="/frames">Explore Custom Frames</PrimaryLink>
          </div>
        </Section>
      </div>

      {/* PHOTO MERGING */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Our Specialty</p>
            <h2 className="display-lg mt-3 text-foreground">Bring Everyone Into One Memory</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Have separate photos of family members or cousins? SnapCraft can combine them into one
              beautiful personalized frame.
            </p>
            <div className="mt-8">
              <PrimaryLink to="/contact">Create Your Custom Frame</PrimaryLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-[1fr_auto_1.2fr] items-center gap-3 sm:gap-5">
            <div className="space-y-3">
              {[img.keepsake, img.birthday].map((src, i) => (
                <div key={i} className="overflow-hidden border border-border bg-muted">
                  <img
                    src={src}
                    alt="Separate photos before merging"
                    loading="lazy"
                    className="aspect-square w-full object-cover opacity-80"
                  />
                </div>
              ))}
              <p className="eyebrow">Before</p>
            </div>
            <ArrowRight size={22} className="text-primary" />
            <div>
              <div className="overflow-hidden border border-border bg-muted shadow-soft">
                <img
                  src={img.frameFamily}
                  alt="One merged family frame after custom photo merging"
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
              <p className="eyebrow mt-3">After — One Frame</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* HAMPERS */}
      <div className="bg-cream">
        <Section>
          <SectionHeading
            eyebrow="Hampers"
            title="Gifts Made With Thought"
            description="Customized according to your occasion and requirements."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hampers.map((h, i) => (
              <ItemCard key={h.title} {...h} delay={i * 70} />
            ))}
          </div>
        </Section>
      </div>

      {/* BOUQUETS */}
      <Section>
        <SectionHeading eyebrow="Bouquets" title="More Than Just A Gift" />
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="group overflow-hidden border border-border bg-card">
              <div className="aspect-16/10 overflow-hidden bg-muted">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="display-md">{featured.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{featured.description}</p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:col-span-5">
            {bouquets.slice(1).map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="group flex gap-5 border border-border bg-card p-4">
                  <div className="h-24 w-24 shrink-0 overflow-hidden bg-muted">
                    <img
                      src={b.image}
                      alt={b.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">{b.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{b.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <PrimaryLink to="/contact">Create Something Special</PrimaryLink>
        </div>
      </Section>

      {/* OCCASIONS */}
      <div className="bg-cream">
        <Section>
          <SectionHeading eyebrow="Occasions" title="Crafted Around Your Celebration" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map((o, i) => (
              <Reveal key={o.title} delay={i * 70}>
                <Link
                  to="/occasions"
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
                    <h3 className="display-md text-background">{o.title}</h3>
                    <p className="mt-2 text-sm text-background/85">{o.description}</p>
                    <ArrowRight
                      size={18}
                      className="mt-4 text-background transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* WHY */}
      <Section>
        <SectionHeading eyebrow="Why SnapCraft" title="Gifting, Done Personally" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 70} className="border-t border-border pt-6">
              <w.icon size={22} className="text-secondary" />
              <h3 className="display-md mt-4 text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* LOCATION */}
      <div className="bg-foreground">
        <Section>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-background/60">Visit</p>
              <h2 className="display-lg mt-3 text-background">Find SnapCraft</h2>
              <p className="mt-5 max-w-md text-background/80">{site.location}</p>
            </Reveal>
            <Reveal delay={100} className="space-y-5">
              <p className="flex items-center gap-3 text-background/85">
                <Phone size={18} /> {site.phone}
              </p>
              <p className="flex items-center gap-3 text-background/85">
                <Truck size={18} /> Delivery Available Across Kerala
              </p>
              <p className="flex items-start gap-3 text-background/85">
                <MapPin size={18} className="mt-0.5" /> Neyyattinkara, Thiruvananthapuram
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:+91${site.phone}`}
                  className="inline-flex items-center gap-2 rounded-sm bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
                >
                  <Phone size={16} /> Call Now
                </a>
                <WhatsAppButton message={enquiryMessage("a custom gift")} variant="solid">
                  WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>

      {/* INSTAGRAM */}
      <Section>
        <SectionHeading
          eyebrow={site.instagramHandle}
          title="See What We're Creating"
          description="Follow SnapCraft for new creations, gifting ideas and special moments."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {portfolio.slice(0, 9).map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="group block aspect-square overflow-hidden border border-border bg-muted"
                aria-label={`${p.title} on Instagram`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-primary/40 px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
          >
            <Instagram size={16} /> Follow SnapCraft on Instagram
          </a>
        </div>
      </Section>

      {/* FINAL CTA */}
      <div className="bg-cream">
        <Section className="text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="display-lg text-foreground">Have A Special Moment Coming Up?</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Tell us what you're imagining and let SnapCraft turn it into something memorable.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <PrimaryLink to="/contact">Start Your Enquiry</PrimaryLink>
              <WhatsAppButton message={enquiryMessage("a custom creation")} />
            </div>
          </Reveal>
        </Section>
      </div>
    </>
  );
}
