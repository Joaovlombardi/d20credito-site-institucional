import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function HeroLegalEquity() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep via-deep to-brand">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[42rem] rounded-full bg-mint/20 blur-3xl"
      />

      {/* Padding calibrado para esta dobra ter a mesma altura do hero da Home
          (576px no desktop); o conteudo aqui e um pouco mais baixo. */}
      <Container className="relative py-16 text-center sm:py-20 lg:py-[6.125rem]">
        <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm">
          O produto da D20 Cred
        </p>

        <h1 className="mx-auto mt-7 max-w-3xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white sm:text-5xl">
          Legal Equity:{" "}
          <span className="text-mint">crédito com a garantia</span> do seu
          processo judicial.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-white/80">
          Você usa um processo em andamento como garantia e contrata um
          crédito agora, sem esperar a ação terminar. O processo continua no
          seu nome, com o mesmo advogado.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </Container>
    </section>
  );
}
