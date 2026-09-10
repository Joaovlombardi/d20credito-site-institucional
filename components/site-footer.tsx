import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

const institucional = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  { href: "/termos-de-uso", label: "Termos de Uso" },
];

export function SiteFooter() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr_1fr]">
          <div>
            <Image
              src="/images/D20_logo_horizontal_branco.png"
              alt="D20 Cred"
              width={2400}
              height={800}
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-sm leading-relaxed text-white/70">
              Crédito com garantia de processo judicial. Você continua dono do
              seu processo. Ele é usado apenas como garantia.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-sm font-bold tracking-widest text-mint uppercase">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold tracking-widest text-mint uppercase">
              Contato
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-white/80 hover:text-white"
                >
                  <MessageCircle className="size-4 shrink-0" aria-hidden />
                  WhatsApp{" "}
                  <span className="whitespace-nowrap">{site.whatsappLabel}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+55${site.phoneLabel.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2.5 text-white/80 hover:text-white"
                >
                  <Phone className="size-4 shrink-0" aria-hidden />
                  Telefone{" "}
                  <span className="whitespace-nowrap">{site.phoneLabel}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 break-words text-white/80 hover:text-white"
                >
                  <Mail className="size-4 shrink-0" aria-hidden />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Links institucionais">
            <h2 className="text-sm font-bold tracking-widest text-mint uppercase">
              Institucional
            </h2>
            <ul className="mt-5 space-y-3">
              {institucional.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 space-y-4 border-t border-white/15 pt-8 text-sm leading-relaxed text-white/60">
          <p>
            <strong className="font-semibold text-white/85">
              {site.legalName}
            </strong>
            , CNPJ {site.cnpj}, {site.address}. Não somos uma instituição
            financeira: atuamos como correspondente bancário, nos termos da{" "}
            {site.regulation}. A Cédula de Crédito Bancário (CCB) é emitida pela{" "}
            {site.issuer}, autorizada pelo Banco Central do Brasil. Crédito de
            até R$ 50.000, com prazo de 6 a 60 meses, sujeito a análise e
            aprovação, com taxas e Custo Efetivo Total (CET) apresentados antes
            da assinatura.
          </p>
          <p>
            Nunca pedimos pagamento antes de liberar o crédito, nem senha,
            acesso gov.br ou código recebido por SMS. Fale com a gente apenas
            pelos canais oficiais listados acima. Dados pessoais tratados
            conforme a Lei nº 13.709/2018.
          </p>
          <p className="pt-2">
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
