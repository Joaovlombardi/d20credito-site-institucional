import { Check, Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const continuaIgual = [
  "O processo é seu",
  "O advogado é o mesmo",
  "Você segue acompanhando a ação",
  "A D20 Cred não interfere na condução do caso",
];

const passaAExistir = [
  "Um crédito na sua conta agora",
  "Um contrato com valor, prazo, forma de pagamento e custo por escrito antes da assinatura",
  "Uma garantia registrada em contrato sobre o direito creditório, limitada ao saldo devedor",
];

export function MudaNaoMuda() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Antes e depois"
        title="O que muda e o que não muda"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-line bg-white p-8">
          <h3 className="text-sm font-bold tracking-widest text-deep uppercase">
            Continua igual
          </h3>
          <ul className="mt-6 space-y-4">
            {continuaIgual.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand/15 text-deep">
                  <Check className="size-4" strokeWidth={3} aria-hidden />
                </span>
                <span className="font-semibold text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-transparent bg-gradient-to-br from-deep via-deep to-brand p-8 text-white ring-4 ring-deep/10">
          <h3 className="text-sm font-bold tracking-widest text-mint uppercase">
            Passa a existir
          </h3>
          <ul className="mt-6 space-y-4">
            {passaAExistir.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint/20 text-mint">
                  <Plus className="size-4" strokeWidth={3} aria-hidden />
                </span>
                <span className="font-semibold text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
