import { FileClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";

/** Placeholder das páginas institucionais que ainda não têm conteúdo. */
export function EmElaboracao({ title }: { title: string }) {
  return (
    <Section tone="white">
      <SectionHeading eyebrow="Institucional" title={title} />

      <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center rounded-3xl border border-line bg-surface p-8 text-center sm:p-12">
        <span className="grid size-12 place-items-center rounded-xl bg-white text-deep">
          <FileClock className="size-6" aria-hidden />
        </span>
        <p className="mt-6 text-lg font-bold text-ink">
          Conteúdo em elaboração
        </p>
        <p className="mt-3 leading-relaxed text-muted">
          Esta página ainda está sendo preparada. Enquanto isso, se tiver
          qualquer dúvida, fale com a nossa equipe.
        </p>
        <Button href="/" variant="secondary" className="mt-8">
          Voltar para o início
        </Button>
      </div>
    </Section>
  );
}
