import {
  CalendarCheck,
  CircleCheck,
  FileSignature,
  Gauge,
  Landmark,
  ScrollText,
  Wallet,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

/**
 * Resumo visual do caminho do dinheiro. Cada nó tem no máximo uma linha de
 * título e uma de legenda: o detalhe fica nos cards abaixo. Nenhum ícone se
 * repete entre a linha do tempo e os cards.
 */
const fluxo = [
  {
    icon: ScrollText,
    title: "Processo judicial",
    caption: "Continua no seu nome",
  },
  {
    icon: Wallet,
    title: "Crédito na conta",
    caption: "Liberado agora, sem esperar a ação",
  },
  {
    icon: CalendarCheck,
    title: "Você paga o crédito",
    caption: "Em parcelas ou em parcela única ao final",
  },
  {
    icon: Landmark,
    title: "Processo paga",
    caption: "O valor entra na conta vinculada",
  },
  {
    icon: CircleCheck,
    title: "Saldo descontado",
    caption: "A diferença fica com você",
  },
];

/**
 * Só o que a linha do tempo não diz: a natureza da garantia e o seu limite.
 * "A titularidade não muda" saiu daqui de propósito: a seção seguinte já
 * abre com isso.
 */
const pontos = [
  {
    icon: FileSignature,
    title: "É constituída em contrato",
    text: "Recai sobre o direito do processo, existe por causa da dívida e se desfaz com ela.",
  },
  {
    // Medidor, não balança: a ideia é limite, não tribunal.
    icon: Gauge,
    title: "É limitada ao saldo devedor",
    text: "Não alcança o processo inteiro, só o valor que você ainda deve.",
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

      {/* Linha do tempo: horizontal a partir de md, vertical abaixo disso. A
          linha que liga os nós é um pseudo-elemento absoluto por trás dos
          ícones; o anel de cada nó cobre a linha com a cor do fundo. Com 5
          colunas, o centro da primeira e da última fica em 10% da largura. */}
      <ol
        aria-label="O caminho do dinheiro, do processo até a diferença ficar com você"
        className="relative mt-14 grid gap-8 before:absolute before:top-7 before:bottom-7 before:left-[calc(1.75rem-1px)] before:w-0.5 before:bg-mint/40 md:grid-cols-5 md:gap-4 md:before:top-[calc(1.75rem-1px)] md:before:right-[10%] md:before:bottom-auto md:before:left-[10%] md:before:h-0.5 md:before:w-auto"
      >
        {fluxo.map(({ icon: Icon, title, caption }) => (
          <li
            key={title}
            className="relative flex items-center gap-5 md:flex-col md:text-center"
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-mint text-deep ring-8 ring-deep">
              <Icon className="size-7" aria-hidden />
            </span>
            <div>
              <p className="text-lg leading-tight font-bold text-white">
                {title}
              </p>
              <p className="mt-1 text-sm leading-snug text-white/70">
                {caption}
              </p>
            </div>
          </li>
        ))}
      </ol>

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
