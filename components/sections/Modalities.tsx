import { modalities } from "@/content/site";

export function Modalities() {
  return (
    <section id="modalidades" className="py-20 sm:py-28">
      <div className="wrap">
        <h2 className="title">
          Na sala e <em>na água</em>
        </h2>
        <ul className="border-line mt-12 border-t">
          {modalities.map((modality) => (
            <li
              key={modality.name}
              className="group border-line grid gap-3 border-b py-7 md:grid-cols-[1.2fr_1.4fr_0.8fr] md:items-center md:gap-8"
            >
              <h3 className="display ease-out-strong [@media(hover:hover)]:group-hover:text-ember text-[clamp(2.25rem,5vw,3.75rem)] transition-[color,translate] duration-200 [@media(hover:hover)]:group-hover:translate-x-2">
                {modality.name}
              </h3>
              <p className="text-mist">{modality.text}</p>
              <p className="text-sm font-semibold md:text-right">{modality.where}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
