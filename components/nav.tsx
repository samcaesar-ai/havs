"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageToggle } from "@/components/language-toggle";

const NAV_LINKS = [
  { href: "/praksis", key: "praksis" },
  { href: "/materialer", key: "materialer" },
  { href: "/partnere", key: "partnere" },
  { href: "/om", key: "om" },
] as const;

export function Nav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-[var(--nav-height)] bg-nav-bg border-b border-white/5">
        <div className="container flex items-center justify-between h-full">
          <Link
            href="/"
            className="font-display text-[1.375rem] tracking-tight text-nav-fg leading-none"
          >
            HAVS
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="primary">
            {NAV_LINKS.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors duration-150 ${
                  pathname === href
                    ? "text-nav-fg"
                    : "text-nav-fg/60 hover:text-nav-fg"
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <LanguageToggle />
            <Link
              href="/kontakt"
              className={`text-sm border px-3 py-1.5 transition-colors duration-150 ${
                pathname === "/kontakt"
                  ? "border-nav-fg text-nav-fg"
                  : "border-orange text-orange hover:bg-orange hover:text-paper"
              }`}
            >
              {t("kontakt")}
            </Link>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-nav-fg"
            onClick={() => setOpen(true)}
            aria-label={t("menu")}
            aria-expanded={open}
          >
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              aria-hidden="true"
            >
              <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-nav-bg flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={t("menu")}
        >
          <div className="container flex items-center justify-between h-[var(--nav-height)] border-b border-white/7 shrink-0">
            <Link
              href="/"
              className="font-display text-[1.375rem] tracking-tight text-nav-fg leading-none"
            >
              HAVS
            </Link>
            <button
              className="p-2 -mr-2 text-nav-fg"
              onClick={() => setOpen(false)}
              aria-label={t("close")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <line x1="1" y1="1" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" />
                <line x1="19" y1="1" x2="1" y2="19" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          <nav className="container flex flex-col pt-10 grow" aria-label="mobile primary">
            {NAV_LINKS.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className="font-display text-[2.25rem] font-light text-nav-fg/75 hover:text-nav-fg py-4 border-b border-white/7 leading-tight transition-colors"
              >
                {t(key)}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="font-display text-[2.25rem] font-light text-orange py-4 border-b border-white/7 leading-tight"
            >
              {t("kontakt")}
            </Link>
          </nav>

          <div className="container pb-10 pt-8">
            <LanguageToggle />
          </div>
        </div>
      )}
    </>
  );
}
