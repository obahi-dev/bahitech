"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { type Locale } from "@/data/content";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/Logo";

const navKeys = [
  { key: "home", href: "#hero" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

const SCROLL_THRESHOLD = 120;

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
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-[rgba(200,169,110,0.08)] bg-primary/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label={tA11y("mainNav")}
      >
        <a
          href="#hero"
          className="flex h-10 w-10 shrink-0 items-center justify-center md:h-auto md:w-[52px]"
          aria-label="BahiTech Solutions"
        >
          <motion.div
            initial={false}
            animate={{
              opacity: scrolled ? 1 : 0,
              scale: scrolled ? 1 : 0.85,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={scrolled ? "" : "pointer-events-none"}
          >
            <LogoMark className="h-9 w-9 md:h-10 md:w-10" />
          </motion.div>
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
        <div className="fixed inset-0 top-[68px] z-40 bg-primary backdrop-blur-lg md:hidden">
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
