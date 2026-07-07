import type { TransformationFlow as TransformationFlowType } from "@/types/artifact";

type TransformationFlowVariant = "mini" | "full";

type TransformationFlowProps = {
  transformation?: TransformationFlowType;
  input?: TransformationFlowType["input"];
  process?: TransformationFlowType["process"];
  output?: TransformationFlowType["output"];
  variant?: TransformationFlowVariant;
};

export function TransformationFlow({
  transformation,
  input,
  process,
  output,
  variant = "full"
}: TransformationFlowProps) {
  const resolvedInput = transformation?.input ?? input;
  const resolvedProcess = transformation?.process ?? process;
  const resolvedOutput = transformation?.output ?? output;

  if (!resolvedInput || !resolvedProcess || !resolvedOutput) {
    return null;
  }

  if (variant === "mini") {
    return (
      <p className="text-sm text-[var(--theme-text-secondary)]">
        {transformation?.compact?.tr ?? `${resolvedInput.tr} → ${resolvedProcess.tr} → ${resolvedOutput.tr}`}
      </p>
    );
  }

  const steps = [
    { label: "Girdi", body: resolvedInput.tr },
    { label: "İşleme", body: resolvedProcess.tr },
    { label: "Çıktı", body: resolvedOutput.tr }
  ];

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {steps.map((step) => (
        <div className="border border-[color:var(--theme-border)] bg-[var(--theme-surface)] p-4" key={step.label}>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--theme-text-muted)]">{step.label}</p>
          <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">{step.body}</p>
        </div>
      ))}
    </div>
  );
}
