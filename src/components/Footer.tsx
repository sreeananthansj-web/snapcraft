import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Truck } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:px-8">
        <div>
          <Logo
            width={96}
            height={96}
            loading="lazy"
            className="h-20 w-auto rounded-full object-contain"
          />
          <p className="display-md mt-5 text-foreground">SnapCraft</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 grid grid-cols-2 gap-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-foreground/75 transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Reach Us</p>
          <ul className="mt-5 space-y-4 text-sm text-foreground/80">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
              <a href={`tel:+91${site.phone}`} className="hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram size={16} className="mt-0.5 shrink-0 text-primary" />
              <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">
                {site.instagramHandle}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{site.location}</span>
            </li>
            <li className="flex gap-3">
              <Truck size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{site.delivery}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto w-full max-w-7xl px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} SnapCraft · Neyyattinkara, Kerala
        </p>
      </div>
    </footer>
  );
}
