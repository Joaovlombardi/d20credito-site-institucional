import { Section, SectionHeading } from "@/components/ui/section";

const numeros = [
  { valor: "+30 milhões", label: "de processos analisados" },
  { valor: "+80", label: "tribunais" },
];

export function PorQueExiste() {
  return (
    <Section tone="surface">
      {/* Alinhado à esquerda de propósito: quebra a sequência de seções
          centralizadas e dá outro ponto de entrada para o olho. */}
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <SectionHeading
          align="left"
          eyebrow="Por que existe"
          title="O direito é seu, mas o dinheiro demora"
          description="Entre a ação e o dinheiro na conta costumam passar anos, e as contas seguem vencendo. Sem imóvel, veículo ou margem consignável para dar em garantia, sobra o crédito sem garantia, que é sempre o mais caro."
        />

        {/* Responde a pergunta natural de quem chega: por que a D20 aceita o
            processo como garantia e o banco não aceita. */}
        <div className="rounded-3xl border border-line bg-white p-8">
          <h3 className="text-sm font-bold tracking-widest text-deep uppercase">
            Por que a D20 consegue aceitar
          </h3>
          <p className="mt-4 text-xl leading-snug font-extrabold text-ink">
            Utilizamos uma tecnologia que analisa e precifica processos
            judiciais.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {numeros.map(({ valor, label }) => (
              <div key={label} className="rounded-2xl bg-surface px-6 py-5">
                <dt className="text-2xl leading-tight font-extrabold text-deep">
                  {valor}
                </dt>
                <dd className="mt-1 text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
