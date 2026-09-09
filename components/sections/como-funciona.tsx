import { Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppButton } from "@/components/whatsapp-button";

const passos = [
  {
    title: "Você fala com a gente",
    text: "Manda uma mensagem no WhatsApp e conta sobre o seu processo. É gratuito e sem compromisso.",
  },
  {
    title: "Analisamos o seu processo",
    text: "Nossa equipe verifica as informações e avalia se a operação é viável para o seu caso.",
  },
  {
    title: "Você recebe a proposta",
    text: "Valor, prazo e condições explicados em português claro. Você só assina se fizer sentido para você.",
  },
  {
    title: "O crédito cai na sua conta",
    text: "Com a CCB assinada, o dinheiro é liberado pela instituição financeira parceira.",
  },
];

export function ComoFunciona() {
  return (
    <Section tone="white" id="como-funciona">
      <SectionHeading
        eyebrow="Como funciona"
        title="Quatro passos, do primeiro contato ao dinheiro na conta"
      />

      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {passos.map(({ title, text }, index) => (
          <li
            key={title}
            className="relative rounded-2xl border border-line bg-white p-7"
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
