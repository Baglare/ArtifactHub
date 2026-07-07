import { siteConfig } from "@/data/siteConfig";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-neutral-50">Hakkında</h1>
      <p className="mt-4 max-w-3xl text-neutral-300">{siteConfig.profile.shortBio.tr}</p>
    </main>
  );
}
