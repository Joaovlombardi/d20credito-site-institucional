"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { WhatsAppButton } from "./whatsapp-button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="grid size-11 place-items-center rounded-xl text-ink transition-colors hover:bg-surface"
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      <div
        id="menu-mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-white px-5 pb-8 shadow-xl"
      >
        <nav className="flex flex-col py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-lg font-semibold text-ink transition-colors last:border-0 hover:text-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <WhatsAppButton className="mt-4 w-full">Falar no WhatsApp</WhatsAppButton>
      </div>
    </div>
  );
}
