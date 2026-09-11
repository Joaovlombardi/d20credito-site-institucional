import type { Metadata } from "next";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { CtaFinal } from "@/components/sections/cta-final";
import { ComoAGarantiaFunciona } from "@/components/sections/legal-equity/como-a-garantia-funciona";
import { DeOndeVemONome } from "@/components/sections/legal-equity/de-onde-vem-o-nome";
import { HeroLegalEquity } from "@/components/sections/legal-equity/hero-le";
import { MudaNaoMuda } from "@/components/sections/legal-equity/muda-nao-muda";
import { Parametros } from "@/components/sections/legal-equity/parametros";
import { PorQueExiste } from "@/components/sections/legal-equity/por-que-existe";

export const metadata: Metadata = {
  title: "Legal Equity",
  description:
    "Legal Equity é o crédito com garantia de direitos creditórios judiciais da D20 Cred. O processo continua no seu nome, com o mesmo advogado, e a garantia é limitada ao saldo devedor.",
};

export default function LegalEquityPage() {
  return (
    <>
      <HeroLegalEquity />
      <DeOndeVemONome />
      <PorQueExiste />
      <ComoAGarantiaFunciona />
      <MudaNaoMuda />
      <ComoFunciona tone="surface" />
      <Parametros />
      <CtaFinal />
    </>
  );
}
