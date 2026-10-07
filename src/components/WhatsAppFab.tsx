import { MessageCircle } from "lucide-react";
import { generalWhatsApp } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={generalWhatsApp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with SnapCraft on WhatsApp"
      className="pulse-soft fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3.5 text-sm font-medium text-secondary-foreground shadow-lift transition-transform duration-300 hover:scale-[1.03] active:scale-95 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Chat With SnapCraft</span>
    </a>
  );
}
