import type { Metadata } from "next";
import { EmElaboracao } from "@/components/em-elaboracao";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da D20 Cred. Conteúdo em elaboração.",
};

export default function TermosDeUso() {
  return <EmElaboracao title="Termos de Uso" />;
}
