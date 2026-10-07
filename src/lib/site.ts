export const site = {
  name: "SnapCraft",
  tagline: "Turning Special Moments Into Beautiful Memories.",
  phone: "7510925645",
  phoneIntl: "917510925645",
  instagram: "https://www.instagram.com/snap__craft__/",
  instagramHandle: "@snap__craft__",
  location:
    "Perumpazhuthoor, near Vishnupuram Temple, Neyyattinkara, Thiruvananthapuram, Kerala",
  delivery: "Delivery available across Kerala.",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/frames", label: "Frames" },
  { to: "/hampers", label: "Hampers" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/occasions", label: "Occasions" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export function enquiryMessage(item: string, occasion?: string) {
  const lines = ["Hi SnapCraft!", "", "I'm interested in:", item];
  if (occasion) lines.push("", "Occasion:", occasion);
  lines.push("", "Could you please share the available options and pricing?");
  return lines.join("\n");
}

export const generalWhatsApp = whatsappLink(
  "Hi SnapCraft! I'd like to know more about your custom gifts and hampers.",
);
