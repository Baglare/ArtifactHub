import type { ReactNode } from "react";

type ContentContainerProps = {
  children: ReactNode;
  className?: string;
};

export function ContentContainer({ children, className }: ContentContainerProps) {
  return <div className={`mx-auto w-full max-w-5xl px-4 sm:px-6 ${className ?? ""}`}>{children}</div>;
}
