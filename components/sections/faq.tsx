import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const perguntas = [
  {
    q: "O processo deixa de ser meu?",
    a: "Não. A titularidade continua sua. O que existe é uma garantia em contrato sobre o direito do processo, limitada ao saldo devedor.",
  },
  {
    q: "Preciso trocar de advogado?",
    a: "Não. Você mantém o mesmo advogado, que segue conduzindo o processo normalmente.",
  },
  {
    q: "A D20 Cred é um banco?",
    a: `Não. A D20 Cred é correspondente bancário. Quem emite a CCB e libera o crédito é a UY3, instituição financeira autorizada pelo Banco Central.`,
  },
  {
    q: "Preciso pagar alguma coisa para simular?",
    a: "Não. A análise é gratuita e sem compromisso. Não pedimos depósito, Pix ou qualquer pagamento antes da liberação do crédito.",
  },
  {
    q: "Que tipo de processo pode ser usado?",
    a: "Processos judiciais em andamento, principalmente trabalhistas. Cada caso passa por análise jurídica, então fale com a nossa equipe e conte a sua situação.",
  },
  {
    q: "Qual é o valor e o prazo?",
    a: "Até R$ 50.000, de 6 a 60 meses. Valor, taxa e Custo Efetivo Total saem da análise do seu caso e vêm por escrito antes da assinatura.",
  },
];

export function Faq() {
  return (
    <Section tone="white" id="faq">
      <SectionHeading
        eyebrow="Perguntas frequentes"
        title="As dúvidas que todo mundo tem"
      />

      <div className="mt-14 divide-y divide-line border-y border-line">
        {perguntas.map(({ q, a }) => (
          <details key={q} className="faq-item">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
              {q}
              <Plus
                aria-hidden
                className="faq-toggle size-6 shrink-0 text-brand transition-transform duration-200"
              />
            </summary>
            <p className="max-w-3xl pb-7 leading-relaxed text-muted">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
