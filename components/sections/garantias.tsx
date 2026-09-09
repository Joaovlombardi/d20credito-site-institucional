import { FileCheck, Scale, ShieldCheck, UserCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const garantias = [
  {
    icon: ShieldCheck,
    title: "Você continua dono do processo",
    text: "A titularidade não muda. O processo segue no seu nome, do começo ao fim.",
  },
  {
    icon: Scale,
    title: "A garantia é limitada ao que você deve",
    text: "A garantia vale até o saldo devedor. Se o processo pagar mais que isso, a diferença é sua.",
  },
  {
    icon: UserCheck,
    title: "Você mantém o seu advogado",
    text: "Seu advogado continua conduzindo o caso. A D20 Cred não interfere no processo.",
  },
  {
    icon: FileCheck,
    title: "O modelo é o de um financiamento",
    text: "Assim como um imóvel garante um financiamento, aqui a garantia é o seu processo.",
  },
];

export function Garantias() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Sem letra miúda"
        title="O que você precisa saber antes de tudo"
        description="Quem tem processo na Justiça recebe muita proposta estranha. Veja o que continua igual quando você contrata com a D20 Cred."
      />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2">
        {garantias.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex gap-5 rounded-3xl border border-line bg-white p-8 transition-colors hover:border-mint"
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
