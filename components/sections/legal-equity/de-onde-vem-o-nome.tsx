import { Car, Gavel, House } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const modalidades = [
  {
    icon: House,
    name: "Home equity",
    garantia: "O imóvel",
    text: "A casa fica como garantia, e você continua morando nela.",
  },
  {
    icon: Car,
    name: "Car equity",
    garantia: "O veículo",
    text: "O carro fica como garantia, e você continua dirigindo.",
  },
  {
    icon: Gavel,
    name: "Legal Equity",
    garantia: "O processo judicial",
    text: "O processo fica como garantia, e continua no seu nome, com o mesmo advogado.",
    destaque: true,
  },
];

export function DeOndeVemONome() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="De onde vem o nome"
        title="Você já conhece esse modelo. Só muda a garantia."
        description="Mesma estrutura de crédito com garantia real. O que muda é o ativo que sustenta a operação."
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {modalidades.map(({ icon: Icon, name, garantia, text, destaque }) => (
          <li
            key={name}
            className={`rounded-3xl border p-8 ${
              destaque
                ? "border-transparent bg-gradient-to-br from-deep via-deep to-brand text-white ring-4 ring-deep/10"
                : "border-line bg-white"
            }`}
          >
            <span
              className={`grid size-12 place-items-center rounded-xl ${
                destaque ? "bg-mint/20 text-mint" : "bg-surface text-deep"
              }`}
            >
              <Icon className="size-6" aria-hidden />
            </span>

            <h3
              className={`mt-6 text-base font-bold ${
                destaque ? "text-white/70" : "text-muted"
              }`}
            >
              {name}
            </h3>

            <p
              className={`mt-1 text-2xl leading-tight font-extrabold ${
                destaque ? "text-white" : "text-deep"
              }`}
            >
              {garantia}
            </p>

            <p
              className={`mt-4 leading-relaxed ${destaque ? "text-white/90" : "text-muted"}`}
            >
              {text}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
