import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export type Variant =
  | "primary"
  | "secondary"
  | "onDark"
  | "outlineOnDark";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-base font-bold transition-all duration-200";

const variants: Record<Variant, string> = {
  // Verde escuro garante 5.68:1 com texto branco (WCAG AA).
  primary:
    "bg-deep text-white shadow-lg shadow-deep/20 hover:bg-deeper hover:-translate-y-0.5",
  secondary:
    "border-2 border-line bg-white text-deep hover:border-brand hover:bg-surface",
  onDark: "bg-white text-deep shadow-lg hover:bg-mint hover:text-deeper",
  outlineOnDark:
    "border-2 border-white/40 text-white hover:border-white hover:bg-white/10",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  /**
   * Renderiza o botão inerte, para destinos que ainda não existem: ele fica
   * visualmente idêntico ao botão ativo, mas não navega nem recebe foco.
   * Para ativar, basta remover a prop: o `href` já fica no lugar certo.
   */
  disabled?: boolean;
} & ComponentProps<typeof Link>;

export function Button({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true" title={props.title}>
        {children}
      </span>
    );
  }

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
