import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";

export function ParaQuem() {
  return (
    <Section tone="surface">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Para quem é"
            title="Feito para quem tem um direito, mas ainda não tem o dinheiro"
            description="A Justiça pode levar anos para pagar o que já é seu por direito. O Legal Equity usa seu processo como garantia e libera um crédito agora, sem esperar o fim da ação."
          />

          <div className="mt-8">
            {/* TODO(D20): remover `disabled` quando /sobre existir. */}
            <Button href="/sobre" variant="secondary" disabled>
              Conheça a D20 Cred
              <ArrowRight className="size-5 shrink-0" aria-hidden />
            </Button>
          </div>
        </div>

        <Image
          src="/images/D20_logo_verde.png"
          alt=""
          width={1503}
          height={601}
          className="mx-auto w-full max-w-[15rem] sm:max-w-[22rem]"
        />
      </div>
    </Section>
  );
}
