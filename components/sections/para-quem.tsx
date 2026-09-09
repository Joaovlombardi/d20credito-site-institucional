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
            description="Entre a ação e o dinheiro na conta costumam passar anos. O Legal Equity usa o seu processo como garantia para destravar um crédito agora, sem esperar a ação terminar."
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
          src="/images/D20_elemento_site.png"
          alt=""
          width={2160}
          height={2700}
          className="mr-auto ml-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:mr-0"
        />
      </div>
    </Section>
  );
}
