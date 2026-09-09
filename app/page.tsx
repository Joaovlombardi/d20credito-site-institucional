import { ComoFunciona } from "@/components/sections/como-funciona";
import { CtaFinal } from "@/components/sections/cta-final";
import { Faq } from "@/components/sections/faq";
import { Garantias } from "@/components/sections/garantias";
import { Hero } from "@/components/sections/hero";
import { OQueE } from "@/components/sections/o-que-e";
import { ParaQuem } from "@/components/sections/para-quem";
import { Seguranca } from "@/components/sections/seguranca";

export default function Home() {
  return (
    <>
      <Hero />
      <Garantias />
      <OQueE />
      <ComoFunciona />
      <ParaQuem />
      <Seguranca />
      <Faq />
      <CtaFinal />
    </>
  );
}
