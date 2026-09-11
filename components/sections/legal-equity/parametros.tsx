import { Check, TriangleAlert } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const parametros = [
  "Processo judicial em andamento, principalmente trabalhista",
  "Crédito de até R$ 50.000",
  "Prazo de 6 a 60 meses",
  "Carência de até 90 dias, sujeita a aprovação",
  "Parcelas mensais ou parcela única ao final",
  "Idade entre 18 e 74 anos",
  "Uma operação ativa por CPF",
  "Conta de liberação no seu próprio nome",
  "Formalização digital com assinatura eletrônica",
  "Seguro opcional",
];

export function Parametros() {
  return (
    <Section tone="white" id="condicoes">
      <SectionHeading
        eyebrow="Condições"
        title="Os parâmetros da operação"
        description="Tudo sujeito a análise jurídica, de compliance e de crédito. Valor, taxa e Custo Efetivo Total saem da análise do seu caso."
      />

      <div className="mt-14 overflow-hidden rounded-3xl border border-line bg-white">
        <ul className="grid sm:grid-cols-2">
          {parametros.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 border-b border-line p-6 sm:odd:border-r"
            >
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand/15 text-deep">
                <Check className="size-4" strokeWidth={3} aria-hidden />
              </span>
              <span className="font-semibold text-ink">{item}</span>
            </li>
          ))}
        </ul>

        <p className="flex items-start justify-center gap-4 bg-deep px-6 py-6 text-center leading-snug font-bold text-white sm:items-center">
          <TriangleAlert
            className="mt-0.5 size-6 shrink-0 text-mint sm:mt-0"
            aria-hidden
          />
          <span>
            O valor do crédito vem da análise do processo e não corresponde ao
            valor da causa.
          </span>
        </p>
      </div>
    </Section>
  );
}
