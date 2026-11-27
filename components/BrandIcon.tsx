import { siFacebook, siInstagram, siWhatsapp } from "simple-icons";

const icons = { whatsapp: siWhatsapp, instagram: siInstagram, facebook: siFacebook };

export function BrandIcon({
  name,
  className = "size-5",
}: {
  name: keyof typeof icons;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d={icons[name].path} />
    </svg>
  );
}
