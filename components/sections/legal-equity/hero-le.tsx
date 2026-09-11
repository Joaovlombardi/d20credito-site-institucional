import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/whatsapp-button";

/**
 * Espelho do hero da Home: imagem à esquerda, texto à direita. No mobile o
 * texto vem primeiro e a pessoa fecha a dobra, encostada na divisa verde/branco.
 */
export function HeroLegalEquity() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep via-deep to-brand">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[42rem] rounded-full bg-mint/20 blur-3xl"
      />

      <Container className="relative grid items-end gap-x-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="py-16 sm:py-20 lg:order-2 lg:py-[4.5rem]">
          <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm">
            O produto da D20 Cred
          </p>

          <h1 className="mt-7 max-w-xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white sm:text-5xl">
            Legal Equity:{" "}
            <span className="text-mint">crédito com a garantia</span> do seu
            processo judicial.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-pretty text-white/80">
            Você usa um processo em andamento como garantia e contrata um
            crédito agora, sem esperar a ação terminar. O processo continua no
            seu nome, com o mesmo advogado.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton
              variant="onDark"
              className="w-full whitespace-nowrap sm:w-auto"
            />
            <Button
              href="#garantia"
              variant="outlineOnDark"
              className="w-full whitespace-nowrap sm:w-auto"
            >
              Como a garantia funciona
            </Button>
          </div>
        </div>

        <div className="relative lg:order-1">
          <Image
            src="/images/D20_logo_verde_D.png"
            alt=""
            width={1254}
            height={1254}
            aria-hidden
            // Mesmo tamanho do "D" da Home (536px no desktop): ele passa um
            // pouco da largura da coluna, e a seção corta o excesso.
            className="absolute bottom-[3%] left-1/2 w-[94%] max-w-none -translate-x-1/2 opacity-50 lg:-left-[4%] lg:w-[108%] lg:translate-x-0"
          />
          {/* O PNG tem ~32% de margem transparente de cada lado: a pessoa
              ocupa 36% da largura. O wrapper tem a largura da pessoa e a
              imagem transborda para os lados na proporção exata, para o
              recorte ganhar tamanho sem ser cortado. A largura no desktop
              foi calibrada para o topo da cabeça alinhar com o topo do
              texto (72px), como a imagem da Home. No desktop a pessoa
              encosta na margem esquerda do rail, alinhada com as seções. */}
          <div className="relative mx-auto w-[70%] sm:w-[55%] lg:mx-0 lg:w-[57.5%]">
            <Image
              src="/images/D20_imagem_site_pessoa_celular.png"
              alt="Mulher sorrindo enquanto conversa pelo celular"
              width={4096}
              height={2720}
              priority
              sizes="(min-width: 1024px) 880px, 100vw"
              className="block w-[275.5%] max-w-none -ml-[89.1%]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
