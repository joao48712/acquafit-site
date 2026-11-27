import type { Photo } from "@/content/types";
import { Facade } from "../Facade";

/** Aparece sozinha quando houver fotos em `photos` de alguma unidade. */
export function Gallery({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) return null;

  return (
    <section id="fotos" className="py-20 sm:py-28">
      <div className="wrap">
        <h2 className="title">
          Por <em>dentro</em>
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <li key={photo.src} className="group">
              <Facade
                photo={photo}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="unveil aspect-[4/3] rounded-2xl"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
