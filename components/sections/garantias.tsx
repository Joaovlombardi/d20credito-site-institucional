import { FileCheck, Scale, ShieldCheck, UserCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const garantias = [
  {
    icon: ShieldCheck,
    title: "Você continua dono do processo",
    text: "A titularidade não muda. O processo segue sendo seu, do começo ao fim.",
  },
  {
    icon: Scale,
    title: "Você não vende nada",
    text: "Isto não é compra de processo. É uma operação de crédito com garantia.",
  },
  {
    icon: UserCheck,
    title: "Você mantém o seu advogado",
    text: "Seu advogado continua conduzindo o caso normalmente, como sempre fez.",
  },
  {
    icon: FileCheck,
    title: "O processo é apenas a garantia",
    text: "Assim como um imóvel garante um financiamento, aqui a garantia é o seu processo.",
  },
];

export function Garantias() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Sem letra miúda"
        title="O que você precisa saber antes de tudo"
        description="Quem tem processo na Justiça recebe muita proposta estranha. Então vamos direto ao ponto: veja o que não muda quando você contrata com a D20 Cred."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2">
        {garantias.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex gap-5 rounded-2xl border border-line bg-white p-7 transition-colors hover:border-mint"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-surface text-deep">
              <Icon className="size-6" aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
