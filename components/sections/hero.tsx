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

      <Container className="relative py-24 text-center sm:py-32">
        <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm">
          Legal Equity: crédito com garantia
        </p>

        <h1 className="mx-auto mt-7 max-w-4xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white sm:text-6xl">
          Seu processo trabalhista pode virar{" "}
          <span className="text-mint">crédito agora</span>.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-white/80 sm:text-xl">
          Você recebe o dinheiro antes do fim do processo, usando o próprio
          processo como garantia. Sem vender seus direitos e sem trocar de
          advogado.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton variant="onDark" className="w-full sm:w-auto" />
          <Button
            href="#como-funciona"
            variant="outlineOnDark"
            className="w-full sm:w-auto"
          >
            Entender como funciona
          </Button>
        </div>
      </Container>
    </section>
  );
}
