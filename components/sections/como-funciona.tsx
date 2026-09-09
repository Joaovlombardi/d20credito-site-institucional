import { Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppButton } from "@/components/whatsapp-button";

const passos = [
  {
    title: "Você fala com a gente",
    text: "Manda uma mensagem no WhatsApp e conta sobre o seu processo.",
  },
  {
    title: "Análise do processo",
    text: "O jurídico analisa o processo, com compliance e crédito. Nem todo caso é aprovado.",
  },
  {
    title: "Proposta por escrito",
    text: "Valor, prazo, forma de pagamento e Custo Efetivo Total, por escrito.",
  },
  {
    title: "Assinatura e liberação",
    text: "Com a CCB assinada, a UY3 libera o valor na sua conta.",
  },
];

export function ComoFunciona() {
  return (
    <Section tone="white" id="como-funciona">
      <SectionHeading
        eyebrow="Como funciona"
        title="Quatro passos, do primeiro contato ao crédito na conta"
      />

      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {passos.map(({ title, text }, index) => (
          <li
            key={title}
            className="relative rounded-3xl border border-line bg-white p-8"
          >
            <span
              aria-hidden
              className="grid size-11 place-items-center rounded-full bg-deep text-lg font-extrabold text-white"
            >
              {index + 1}
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 text-center">
        <WhatsAppButton>Começar pelo WhatsApp</WhatsAppButton>
        <p className="mt-4 text-[15px] text-muted">
          Análise gratuita. Você não paga nada para simular.
        </p>
      </div>
    </Section>
  );
}
