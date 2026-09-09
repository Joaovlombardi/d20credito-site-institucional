import {
  Building2,
  FileSignature,
  Landmark,
  TriangleAlert,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { site } from "@/lib/site";

const cadeia = [
  {
    icon: Building2,
    label: "Quem atende você",
    name: site.legalName,
    text: `Correspondente bancário, nos termos da ${site.regulation}. Não somos uma instituição financeira.`,
  },
  {
    icon: FileSignature,
    label: "O contrato",
    name: "CCB",
    text: "Cédula de Crédito Bancário, com todas as condições por escrito, incluindo o Custo Efetivo Total, antes da assinatura.",
  },
  {
    icon: Landmark,
    label: "Quem libera o crédito",
    name: site.issuer,
    text: "Instituição financeira autorizada pelo Banco Central do Brasil. É ela que emite a CCB e libera o valor.",
  },
];

export function Seguranca() {
  return (
    <Section tone="deep" id="seguranca">
      <SectionHeading
        tone="dark"
        eyebrow="Segurança e regulação"
        title="Transparência é parte do produto"
        description="Sabemos que quem tem um processo na Justiça vira alvo de golpe. Por isso deixamos toda a estrutura da operação à vista."
      />

      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {cadeia.map(({ icon: Icon, label, name, text }) => (
          <li
            key={name}
            className="rounded-3xl border border-white/15 bg-white/5 p-8"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-mint/20 text-mint">
              <Icon className="size-6" aria-hidden />
            </span>
            <p className="mt-6 text-sm font-bold tracking-widest text-mint uppercase">
              {label}
            </p>
            <h3 className="mt-2 text-lg font-bold text-white">{name}</h3>
            <p className="mt-3 leading-relaxed text-white/75">{text}</p>
          </li>
        ))}
      </ol>

      <p className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-3xl bg-mint/15 p-8 text-center text-lg leading-relaxed font-bold text-balance text-white sm:flex-row">
        <TriangleAlert className="size-7 shrink-0 text-mint" aria-hidden />
        {/* Largura limitada para o texto centralizado não se afastar do ícone. */}
        <span className="max-w-xl">
          A D20 Cred nunca pede pagamento antes de liberar o crédito, nem a sua
          senha, acesso gov.br ou código por SMS. Se pedirem, é golpe.
        </span>
      </p>
    </Section>
  );
}
