import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function CtaFinal() {
  // Sem padding no topo: a seção anterior já contribui com o dela, e como as
  // duas são brancas os dois espaços viram um vazio só.
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep to-brand px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-mint/20 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight font-extrabold tracking-tight text-balance text-white sm:text-4xl">
              Descubra quanto o seu processo pode liberar
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-pretty text-white/80">
              Fale com um especialista da D20 Cred. A conversa é gratuita, sem
              compromisso, e você entende tudo antes de decidir qualquer coisa.
            </p>
            <div className="mt-10">
              <WhatsAppButton variant="onDark" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
