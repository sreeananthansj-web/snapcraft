import type { ImgHTMLAttributes } from "react";
import logoSrc from "@/assets/snapcraft-logo.jpg";

/**
 * Single source of truth for the SnapCraft logo.
 * Imports the bundled asset so Vite fingerprints and serves it correctly everywhere.
 */
export function Logo(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={logoSrc} alt="SnapCraft logo" {...props} />;
}
