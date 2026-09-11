import { FileSignature, Landmark, Scale, Wallet } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

/**
 * "A titularidade não muda" saiu daqui de propósito: a seção seguinte já
 * abre com isso, e repetir dobrava o texto sem acrescentar informação.
 */
const pontos = [
  {
    icon: FileSignature,
    title: "É constituída em contrato",
    text: "Recai sobre o direito do processo, existe por causa da dívida e se desfaz com ela.",
  },
  {
    icon: Scale,
    title: "É limitada ao saldo devedor",
    text: "Não alcança o processo inteiro, só o valor que você ainda deve.",
  },
  {
    icon: Landmark,
    title: "A conta vinculada é sua",
    text: "O pagamento do processo entra em conta no seu nome, vinculada até a quitação.",
  },
  {
    icon: Wallet,
    title: "A diferença é sua",
    text: "Quando o processo paga, o saldo devedor é descontado e o resto fica com você.",
  },
];

export function ComoAGarantiaFunciona() {
  return (
    <Section tone="deep" id="garantia">
      <SectionHeading
        tone="dark"
        eyebrow="Como a garantia funciona"
        title="A parte que mais gera dúvida"
      />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2">
        {pontos.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex gap-5 rounded-3xl border border-white/15 bg-white/5 p-8"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-mint/20 text-mint">
              <Icon className="size-6" aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-white/75">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
