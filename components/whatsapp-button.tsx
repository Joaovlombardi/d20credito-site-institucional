import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Button, type Variant } from "./ui/button";
import { WhatsAppIcon } from "./ui/whatsapp-icon";

/** CTA principal do site: abre o WhatsApp com a mensagem já preenchida. */
export function WhatsAppButton({
  children = "Falar com um especialista",
  variant = "primary",
  className = "",
}: {
  children?: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Button
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={className}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      {children}
    </Button>
  );
}
