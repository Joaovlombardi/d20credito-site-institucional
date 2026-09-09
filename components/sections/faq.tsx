import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { site } from "@/lib/site";

const perguntas = [
  {
    q: "Eu estou vendendo o meu processo?",
    a: "Não. Em nenhum momento você vende, cede ou abre mão do seu processo. Ele continua sendo seu e é usado apenas como garantia de uma operação de crédito, do mesmo jeito que um imóvel garante um financiamento.",
  },
  {
    q: "Preciso trocar de advogado?",
    a: "Não. Você mantém o mesmo advogado, que continua conduzindo o processo normalmente. A D20 Cred não interfere na condução do seu caso.",
  },
  {
    q: "A D20 Cred é um banco?",
    a: `Não. A ${site.legalName} atua como correspondente bancário, nos termos da ${site.regulation}. Quem emite a CCB e libera o crédito é a ${site.issuer}, instituição financeira autorizada pelo Banco Central do Brasil.`,
  },
  {
    q: "Preciso pagar alguma coisa para simular?",
    a: "Não. A análise é gratuita e sem compromisso. E vale repetir: nunca pedimos depósito, taxa antecipada ou qualquer pagamento para liberar crédito.",
  },
  {
    q: "Que tipo de processo pode ser usado?",
    a: "Trabalhamos com processos trabalhistas em andamento. Cada caso passa por uma análise, então o caminho mais rápido é falar com a nossa equipe e contar a sua situação.",
  },
  {
    q: "E se o processo não terminar como o esperado?",
    a: "Todos os cenários possíveis são explicados antes de qualquer assinatura e ficam registrados por escrito na CCB. Nossa equipe detalha cada condição com você, sem pressa e sem letra miúda.",
  },
];

export function Faq() {
  return (
    <Section tone="white" id="faq">
      <SectionHeading
        eyebrow="Perguntas frequentes"
        title="As dúvidas que todo mundo tem"
      />

      <div className="mx-auto mt-14 max-w-3xl divide-y divide-line border-y border-line">
        {perguntas.map(({ q, a }) => (
          <details key={q} className="faq-item">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
              {q}
              <Plus
                aria-hidden
                className="faq-toggle size-6 shrink-0 text-brand transition-transform duration-200"
              />
            </summary>
            <p className="pb-7 leading-relaxed text-muted">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
