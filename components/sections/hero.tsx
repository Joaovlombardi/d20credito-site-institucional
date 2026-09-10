import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep via-deep to-brand">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[42rem] rounded-full bg-mint/20 blur-3xl"
      />

      {/* items-end encosta a coluna da imagem na base da seção, para o corte
          das pessoas cair exatamente na divisa entre o verde e o branco. */}
      <Container className="relative grid items-end gap-x-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="py-16 sm:py-20 lg:py-[4.5rem]">
          <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm">
            Legal Equity: crédito com garantia
          </p>

          <h1 className="mt-7 max-w-xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white sm:text-5xl">
            <span className="text-mint">O crédito é agora.</span> A garantia é
            o seu processo judicial.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-pretty text-white/80">
            Um crédito com a garantia do seu processo em andamento, sem esperar
            a ação terminar. O processo continua no seu nome, com o mesmo
            advogado.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton
              variant="onDark"
              className="w-full whitespace-nowrap sm:w-auto"
            />
            <Button
              href="#como-funciona"
              variant="outlineOnDark"
              className="w-full whitespace-nowrap sm:w-auto"
            >
              Entender como funciona
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-lg lg:max-w-none">
          {/* O PNG tem ~20% de margem transparente de cada lado, entao ele
             transborda a coluna para as pessoas ganharem tamanho sem serem
             cortadas. O "D" acompanha o mesmo wrapper para escalar junto. */}
          <div className="relative -ml-[12%] w-[124%] lg:-ml-[25%] lg:w-[150%]">
            <Image
              src="/images/D20_logo_verde_D.png"
              alt=""
              width={1254}
              height={1254}
              aria-hidden
              className="absolute bottom-[4%] left-1/2 w-[76%] -translate-x-1/2 opacity-50 lg:w-[71%]"
            />
            <Image
              src="/images/D20_imagem_trabalhadores.png"
              alt="Profissionais de diferentes áreas"
              width={4096}
              height={2720}
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="relative block w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
