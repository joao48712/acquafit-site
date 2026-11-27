import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[60svh] flex-col items-start justify-center gap-6 py-20">
      <h1 className="title">
        Página não <em>encontrada</em>
      </h1>
      <Link href="/" className="btn btn-primary">
        Voltar ao início
      </Link>
    </section>
  );
}
