import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Instagram, MapPin, MessageCircle, Phone, Truck } from "lucide-react";
import { PageHero, Section } from "@/components/ui-bits";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SnapCraft | WhatsApp, Instagram & Delivery Across Kerala" },
      {
        name: "description",
        content:
          "Enquire with SnapCraft on WhatsApp (7510925645) or Instagram @snap__craft__. Based in Neyyattinkara, delivering across Kerala.",
      },
      { property: "og:title", content: "Contact SnapCraft | WhatsApp, Instagram & Delivery Across Kerala" },
      { property: "og:description", content: "Start your custom gift enquiry with SnapCraft." },
    ],
  }),
  component: Contact,
});

const occasions = ["Birthday", "Engagement", "Wedding", "Onam", "Festival", "Family Celebration", "Other"];
const services = ["Custom Frame", "Photo Merging", "Gift Hamper", "Bouquet", "Birthday Gift", "Celebration Gift", "Other"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[+\d\s-]{8,15}$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(120).or(z.literal("")),
  occasion: z.string().min(1, "Choose an occasion"),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().min(5, "Tell us a little about what you need").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field =
  "mt-2 w-full rounded-sm border border-input bg-ivory px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary";

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [link, setLink] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Errors = {};
      res.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] ??= i.message));
      setErrors(errs);
      setLink(null);
      return;
    }
    setErrors({});
    const d = res.data;
    const msg = [
      "Hi SnapCraft!",
      "",
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      d.email ? `Email: ${d.email}` : null,
      `Occasion: ${d.occasion}`,
      `Service: ${d.service}`,
      "",
      d.message,
    ]
      .filter((l) => l !== null)
      .join("\n");
    setLink(whatsappLink(msg));
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <p className="mt-1.5 text-xs text-destructive">{errors[k]}</p> : null;

  const details = [
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:+91${site.phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: whatsappLink("Hi SnapCraft!") },
    { icon: Instagram, label: "Instagram", value: site.instagramHandle, href: site.instagram },
    { icon: MapPin, label: "Location", value: site.location },
    { icon: Truck, label: "Delivery", value: "Available across Kerala" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Create Something Special"
        description="Share what you're imagining. Your enquiry is sent to SnapCraft through WhatsApp."
      />
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <ul className="space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4 border-b border-border pb-6">
                  <d.icon size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="eyebrow">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 block text-foreground hover:text-primary">
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-foreground">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:+91${site.phone}`} className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-secondary">
                <Phone size={16} /> Call Now
              </a>
              <a href={whatsappLink("Hi SnapCraft!")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground hover:opacity-90">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-primary/40 px-5 py-3 text-sm font-medium text-primary hover:bg-primary/5">
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="border border-border bg-card p-6 shadow-soft sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm">
                Name
                <input name="name" className={field} autoComplete="name" />
                {err("name")}
              </label>
              <label className="text-sm">
                Phone
                <input name="phone" type="tel" className={field} autoComplete="tel" />
                {err("phone")}
              </label>
              <label className="text-sm sm:col-span-2">
                Email <span className="text-muted-foreground">(optional)</span>
                <input name="email" type="email" className={field} autoComplete="email" />
                {err("email")}
              </label>
              <label className="text-sm">
                Occasion
                <select name="occasion" defaultValue="" className={field}>
                  <option value="" disabled>Select…</option>
                  {occasions.map((o) => <option key={o}>{o}</option>)}
                </select>
                {err("occasion")}
              </label>
              <label className="text-sm">
                Service
                <select name="service" defaultValue="" className={field}>
                  <option value="" disabled>Select…</option>
                  {services.map((o) => <option key={o}>{o}</option>)}
                </select>
                {err("service")}
              </label>
              <label className="text-sm sm:col-span-2">
                Message
                <textarea name="message" rows={5} className={field} />
                {err("message")}
              </label>
            </div>
            <button type="submit" className="mt-7 w-full rounded-sm bg-primary px-6 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-secondary active:scale-[0.99]">
              Send Enquiry
            </button>
            {link ? (
              <div role="status" className="mt-6 border border-secondary/40 bg-secondary/10 p-5 animate-in fade-in">
                <p className="text-sm text-foreground">
                  Your enquiry is ready. Continue to WhatsApp to send it to SnapCraft.
                </p>
                <a href={link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-sm bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground">
                  <MessageCircle size={16} /> Continue to WhatsApp
                </a>
              </div>
            ) : null}
          </form>
        </div>
      </Section>
    </>
  );
}
