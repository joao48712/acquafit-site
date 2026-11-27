import { faq } from "@/content/faq";

export function Faq() {
  return (
    <section id="perguntas" className="bg-panel/50 py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <h2 className="title">
          Antes de <em>começar</em>
        </h2>
        <div className="border-line border-t">
          {faq.map((item) => (
            <details
              key={item.question}
              name="faq"
              className="group border-line border-b"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden
                  className="text-ember ease-out-strong text-3xl leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="text-mist max-w-prose pb-6">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
