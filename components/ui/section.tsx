import type { ReactNode } from "react";
import { Container } from "./container";

type SectionProps = {
  children: ReactNode;
  /** Fundo da seção. `surface` alterna o ritmo visual entre blocos brancos. */
  tone?: "white" | "surface" | "deep";
  id?: string;
  className?: string;
};

const tones = {
  white: "bg-white",
  surface: "bg-surface",
  deep: "bg-deep text-white",
} as const;

export function Section({
  children,
  tone = "white",
  id,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Cabeçalho padrão de seção: rótulo, título e texto de apoio. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-bold tracking-widest uppercase ${
            isDark ? "text-mint" : "text-deep"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-lg leading-relaxed text-pretty ${
            isDark ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
