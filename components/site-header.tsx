import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/site";
import { MobileMenu } from "./mobile-menu";
import { WhatsAppButton } from "./whatsapp-button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Página inicial da D20 Cred" className="shrink-0">
          <Image
            src="/images/D20_logo_horizontal_cred_verde.png"
            alt="D20 Cred"
            width={2400}
            height={800}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-ink transition-colors hover:text-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton className="px-6 py-3 text-[15px]">
            Falar no WhatsApp
          </WhatsAppButton>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
