/**
 * Fonte única de dados institucionais da D20 Cred.
 *
 * Os canais e dados abaixo vêm do TEXTOS_HOME.md (documentação operacional
 * interna). O rodapé e a seção de segurança leem daqui.
 */

const whatsappNumber = "5511919702271";
const whatsappMessage =
  "Olá! Vim pelo site e quero saber mais sobre o Legal Equity.";

export const site = {
  name: "D20 Cred",
  url: "https://www.d20credito.com.br",
  legalName: "D20 Capital Ltda",
  cnpj: "64.776.682/0001-01",
  address: "Av. Brigadeiro Faria Lima, 1713, São Paulo, SP",
  email: "contato@d20credito.com.br",
  phoneLabel: "(11) 5282-4130",
  instagram: "@d20credito",
  whatsappNumber,
  whatsappLabel: "(11) 91970-2271",
  whatsappMessage,
  /** Link do WhatsApp com mensagem pré-preenchida. */
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`,
  /** Instituição financeira que emite a CCB da operação. */
  issuer: "UY3 Sociedade de Crédito Direto S.A.",
  issuerCnpj: "39.587.424/0001-30",
  /** TODO(D20): confirmar com o jurídico antes de publicar. */
  regulation: "Resolução CMN nº 4.935/2021",
} as const;

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/legal-equity", label: "Legal Equity" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;
