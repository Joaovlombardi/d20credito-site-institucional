/**
 * Fonte única de dados institucionais da D20 Cred.
 *
 * TODO(D20): substituir os valores marcados abaixo pelos dados reais antes de publicar.
 */

const whatsappNumber = "5511999999999"; // TODO(D20): número real, formato 55 + DDD + número
const whatsappMessage =
  "Olá! Vim pelo site e quero saber mais sobre o Legal Equity.";

export const site = {
  name: "D20 Cred",
  url: "https://www.d20cred.com.br", // TODO(D20): domínio final
  legalName: "D20 Capital Ltda", // TODO(D20): confirmar razão social
  cnpj: "00.000.000/0001-00", // TODO(D20): CNPJ real
  address: "Endereço completo, Cidade/UF, CEP 00000-000", // TODO(D20)
  email: "contato@d20cred.com.br", // TODO(D20): e-mail real
  phoneLabel: "(00) 00000-0000", // TODO(D20): telefone real
  whatsappNumber,
  whatsappMessage,
  /** Link do WhatsApp com mensagem pré-preenchida. */
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`,
  /** Instituição financeira que emite a CCB da operação. */
  issuer: "UY3 Sociedade de Crédito Direto S.A.",
  regulation: "Resolução CMN nº 3.954/2011",
} as const;

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/legal-equity", label: "Legal Equity" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;
