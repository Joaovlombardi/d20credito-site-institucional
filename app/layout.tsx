import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "D20 Cred | Crédito com garantia de processo judicial",
    template: `%s | ${site.name}`,
  },
  description:
    "Receba crédito usando seu processo judicial como garantia. Você continua dono do processo e mantém o seu advogado. Conheça o Legal Equity.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: "D20 Cred | Crédito com garantia de processo judicial",
    description:
      "Receba crédito usando seu processo judicial como garantia. Você continua dono do processo e mantém o seu advogado.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
