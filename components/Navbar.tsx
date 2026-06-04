"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { company, t, type Locale } from "@/data/content";
import { Link, usePathname } from "@/lib/i18n/routing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navKeys = [
  { key: "home", href: "#hero" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const tr = useTranslations("nav");
  const tLocale = useTranslations("locale");
  const tA11y = useTranslations("a11y");
  const tHero = useTranslations("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const otherLocale = locale === "en" ? "ar" : "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-accent-sand/10 bg-bg-surface/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label={tA11y("mainNav")}
      >
        <a href="#hero" className="font-display text-xl font-semibold text-sand">
          {t(company.name, locale)}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navKeys.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                className="text-sm text-muted transition-colors hover:text-sand"
              >
                {tr(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={pathname}
            locale={otherLocale}
            className="hidden rounded-full border border-sand/30 px-3 py-1 text-xs font-medium text-sand transition-colors hover:border-sand sm:inline-block"
            aria-label={tLocale("switchLabel")}
          >
            <span className={locale === "en" ? "text-amber" : "text-muted"}>
              {tLocale("en")}
            </span>
            <span className="mx-1 text-muted">|</span>
            <span className={locale === "ar" ? "text-amber" : "text-muted"}>
              {tLocale("ar")}
            </span>
          </Link>

          <Button variant="amber" size="sm" className="hidden sm:inline-flex" asChild>
            <a href="#contact">{tHero("ctaContact")}</a>
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sand/20 text-sand md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? tA11y("closeMenu") : tA11y("openMenu")}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-primary/98 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-2 px-6 py-8">
            {navKeys.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="block rounded-lg px-4 py-4 font-display text-2xl text-text-primary hover:text-amber"
                  onClick={() => setOpen(false)}
                >
                  {tr(key)}
                </a>
              </li>
            ))}
            <li className="mt-6 border-t border-sand/10 pt-6">
              <Link
                href={pathname}
                locale={otherLocale}
                className="block text-center text-lg text-sand"
                onClick={() => setOpen(false)}
              >
                {tLocale("en")} | {tLocale("ar")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
