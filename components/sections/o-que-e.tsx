import { ArrowRight, Car, Gavel, House } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";

const modalidades = [
  {
    icon: House,
    name: "Home Equity",
    garantia: "O imóvel",
    text: "Modalidade conhecida: você usa a sua casa como garantia do empréstimo.",
  },
  {
    icon: Car,
    name: "Car Equity",
    garantia: "O veículo",
    text: "Mesma lógica: o carro fica como garantia da operação de crédito.",
  },
  {
    icon: Gavel,
    name: "Legal Equity",
    garantia: "O processo judicial",
    text: "O produto da D20 Cred. A garantia é o seu processo judicial em andamento.",
    destaque: true,
  },
];

export function OQueE() {
  return (
    <Section tone="surface" id="legal-equity">
      <SectionHeading
        eyebrow="O que é Legal Equity"
        title="Você já conhece esse modelo. Só muda a garantia."
        description="Crédito com garantia existe há décadas. Com uma garantia real, a condição do crédito é diferente da de um empréstimo sem garantia."
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {modalidades.map(({ icon: Icon, name, garantia, text, destaque }) => (
          <li
            key={name}
            /* Mesma borda e mesmo padding nos três para que as caixas fiquem
               idênticas em tamanho; a diferença entre elas é só a cor. */
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

            {/* A garantia é o que muda entre as modalidades, então é ela que
                ganha o maior peso visual dentro do card. */}
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

      <div className="mt-12 text-center">
        {/* TODO(D20): remover `disabled` quando /legal-equity existir. */}
        <Button href="/legal-equity" variant="primary" disabled>
          Conheça o Legal Equity
          <ArrowRight className="size-5 shrink-0" aria-hidden />
        </Button>
      </div>
    </Section>
  );
}
