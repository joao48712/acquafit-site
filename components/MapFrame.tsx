"use client";

import { useEffect, useRef, useState } from "react";

/**
 * O mapa pesa cerca de 700 KB, por isso só é carregado quando a pessoa chega perto.
 * (O loading="lazy" do navegador começa cedo demais no celular.)
 */
export function MapFrame({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        observer.disconnect();
      },
      { rootMargin: "200px" },
    );
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-panel border-line text-mist grid h-[22rem] w-full place-items-center overflow-hidden rounded-3xl border sm:h-[28rem]"
    >
      {near ? (
        <iframe
          src={src}
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; gyroscope; fullscreen"
          className="size-full"
        />
      ) : (
        <span className="text-sm">Carregando o mapa</span>
      )}
    </div>
  );
}
