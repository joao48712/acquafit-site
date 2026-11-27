import Image from "next/image";
import type { Photo } from "@/content/types";

export function Facade({
  photo,
  sizes,
  className = "",
  priority = false,
  showCaption = true,
}: {
  photo: Photo;
  sizes: string;
  className?: string;
  priority?: boolean;
  showCaption?: boolean;
}) {
  return (
    <span className={`bg-panel relative block overflow-hidden ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        quality={90}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        style={{ objectPosition: photo.focus }}
        className="ease-out-strong object-cover transition-transform duration-500 motion-reduce:transition-none [@media(hover:hover)]:group-hover:scale-[1.03]"
      />
      {showCaption && photo.caption && (
        <span className="bg-deep/80 absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs">
          {photo.caption}
        </span>
      )}
    </span>
  );
}
