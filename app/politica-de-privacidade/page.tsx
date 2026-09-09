import type { Metadata } from "next";
import { EmElaboracao } from "@/components/em-elaboracao";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da D20 Cred. Conteúdo em elaboração.",
};

export default function PoliticaDePrivacidade() {
  return <EmElaboracao title="Política de Privacidade" />;
}
