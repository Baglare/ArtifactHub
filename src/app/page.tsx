import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { getAllArtifacts, getArtifactsForHome, validateArtifactRegistry } from "@/lib/artifacts";

export default function HomePage() {
  const artifacts = getAllArtifacts();
  const homeArtifacts = getArtifactsForHome();
  const validation = validateArtifactRegistry();

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <p className="text-sm text-neutral-400">{siteConfig.hero.subtitle.tr}</p>
      <h1 className="mt-3 text-4xl font-semibold text-neutral-50">{siteConfig.hero.title}</h1>
      <p className="mt-4 max-w-3xl text-neutral-300">{siteConfig.hero.description.tr}</p>

      <div className="mt-8 space-y-2 text-neutral-200">
        <p>Toplam artifact: {artifacts.length}</p>
        <p>Registry durumu: {validation.valid ? "Geçerli" : "Kontrol gerekli"}</p>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-neutral-100">Öncelikli artifact sırası</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
          {homeArtifacts.map((artifact) => (
            <li key={artifact.id}>
              <Link className="underline underline-offset-4" href={`/artifacts/${artifact.slug}`}>
                {artifact.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
