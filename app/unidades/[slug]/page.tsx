import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandIcon } from "@/components/BrandIcon";
import { Contours } from "@/components/Contours";
import { Facade } from "@/components/Facade";
import { MapFrame } from "@/components/MapFrame";
import { OpenStatus } from "@/components/OpenStatus";
import { Apps } from "@/components/sections/Apps";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { getUnit, units } from "@/content/units";
import { fullAddress } from "@/lib/address";
import { describeWeek } from "@/lib/hours";
import { unitJsonLd } from "@/lib/jsonld";
import { formatPhone, unitMessage, whatsappUrl } from "@/lib/whatsapp";

export const dynamicParams = false;

export function generateStaticParams() {
  return units.map((unit) => ({ slug: unit.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/unidades/[slug]">): Promise<Metadata> {
  const unit = getUnit((await params).slug);
  if (!unit) return {};
  const title =
    unit.name === unit.city ? `Academia em ${unit.city}` : `${unit.name}, ${unit.city}`;
  const description = `AcquaFit ${unit.name}: ${fullAddress(unit)}. Horários, mapa, Street View e WhatsApp.`;
  return {
    title,
    description,
    alternates: { canonical: `/unidades/${unit.slug}` },
    openGraph: {
      title: `${title} | AcquaFit`,
      description,
      locale: "pt_BR",
      images: [unit.facade.src],
    },
  };
}

export default async function UnitPage({ params }: PageProps<"/unidades/[slug]">) {
  const unit = getUnit((await params).slug);
  if (!unit) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unitJsonLd(unit)).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden">
        <Contours className="text-line/60" />
        <div className="wrap relative grid items-center gap-10 py-10 lg:grid-cols-[1fr_1.1fr] lg:py-16">
          <div className="enter flex min-w-0 flex-col items-start gap-6">
            <Link
              href="/#unidades"
              className="link text-mist inline-flex min-h-11 items-center"
            >
              ← Todas as unidades
            </Link>
            <h1 className="display text-[clamp(3.25rem,9vw,7rem)]">
              AcquaFit <em>{unit.name}</em>
            </h1>
            <p className="text-lg">{unit.summary}</p>
            <div className="text-mist flex flex-col gap-1">
              <p>{fullAddress(unit)}</p>
              <p>WhatsApp {formatPhone(unit.whatsapp)}</p>
              <OpenStatus schedule={unit.schedule} className="text-foam" />
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={whatsappUrl(unit.whatsapp, unitMessage(unit.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whats"
              >
                <BrandIcon name="whatsapp" />
                Chamar no WhatsApp
              </a>
              <a href="#como-chegar" className="btn btn-ghost">
                Ver como chegar
              </a>
            </div>
          </div>
          {/* Largura limitada ao tamanho do arquivo, para a foto não perder nitidez. */}
          <div
            className="w-full min-w-0 justify-self-center"
            style={{ maxWidth: unit.facade.width }}
          >
            <div style={{ aspectRatio: `${unit.facade.width} / ${unit.facade.height}` }}>
              <Facade
                photo={unit.facade}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="size-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-panel/50 py-16 sm:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <h2 className="title">
            Horários <em>da semana</em>
          </h2>
          <div>
            <dl className="border-line border-t text-lg">
              {describeWeek(unit.schedule).map((line) => (
                <div
                  key={line.days}
                  className="border-line flex justify-between gap-4 border-b py-5"
                >
                  <dt>{line.days}</dt>
                  <dd className="text-right font-bold">{line.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="text-mist mt-4 text-sm">
              Em feriados o horário pode mudar. Confirme pelo WhatsApp.
              {unit.city === "Dracena" &&
                " Aos sábados e domingos, o plano vale nas duas unidades de Dracena."}
            </p>
          </div>
        </div>
      </section>

      <section id="como-chegar" className="py-16 sm:py-24">
        <div className="wrap">
          <h2 className="title">
            Como <em>chegar</em>
          </h2>
          <p className="text-mist mt-4">{fullAddress(unit)}</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-3 font-bold">Mapa</h3>
              <MapFrame src={unit.maps.embed} title={`Mapa da AcquaFit ${unit.name}`} />
            </div>
            <div>
              <h3 className="mb-3 font-bold">Street View: veja a rua antes de ir</h3>
              <MapFrame
                src={unit.maps.streetView}
                title={`Street View da AcquaFit ${unit.name}`}
              />
            </div>
          </div>
          <a
            href={unit.maps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-8"
          >
            Abrir no Google Maps
          </a>
        </div>
      </section>

      <Gallery photos={unit.photos} />
      <Apps units={[unit]} />
      <Reviews units={[unit]} />
    </>
  );
}
