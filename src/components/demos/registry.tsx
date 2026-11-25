"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { DemoId, LocalizedText } from "@/types/artifact";

type DemoDefinition = {
  title: LocalizedText;
  /** How to play, in one short line. */
  controls: LocalizedText;
  component: ComponentType;
};

function DemoLoading() {
  return <div className="grid h-[360px] place-items-center text-[14px] text-[var(--theme-text-muted)]">…</div>;
}

/**
 * Mini demos are loaded only on the project page that shows them, never on first paint.
 * To add one: write a self-contained client component in this folder, register it here,
 * add its id to `DemoId` and point an artifact's `demo.id` at it.
 */
export const demoRegistry: Record<DemoId, DemoDefinition> = {
  "pulseforge-rhythm": {
    title: { tr: "Şarkını ritim oyununa çevir", en: "Turn your song into a rhythm game" },
    controls: { tr: "D F J K tuşları ya da şeritlere dokun", en: "Keys D F J K, or tap the lanes" },
    component: dynamic(() => import("./PulseForgeDemo").then((m) => m.PulseForgeDemo), { ssr: false, loading: DemoLoading })
  },
  "tempoblade-parry": {
    title: { tr: "Vuruşta savuştur", en: "Parry on the beat" },
    controls: { tr: "Boşluk tuşu ya da alana dokun", en: "Space bar, or tap the arena" },
    component: dynamic(() => import("./TempoBladeDemo").then((m) => m.TempoBladeDemo), { ssr: false, loading: DemoLoading })
  },
  "agentverse-gridworld": {
    title: { tr: "Küçük bir ajanı eğit", en: "Train a tiny agent" },
    controls: { tr: "Eğit, sonra ajanın yolu nasıl bulduğunu izle", en: "Train it, then watch how it finds the way" },
    component: dynamic(() => import("./AgentVerseDemo").then((m) => m.AgentVerseDemo), { ssr: false, loading: DemoLoading })
  }
};
