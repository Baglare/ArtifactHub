import type { ReactNode } from "react";

type ContentContainerProps = {
  children: ReactNode;
  className?: string;
};

export function ContentContainer({ children, className }: ContentContainerProps) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className ?? ""}`}>{children}</div>;
}
