"use client";

import { useLocale, useTranslations } from "next-intl";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { company, t, type Locale } from "@/data/content";

const socialIcons: Record<string, typeof Instagram> = {
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
};

const navKeys = ["home", "services", "projects", "contact"] as const;
const navHrefs: Record<(typeof navKeys)[number], string> = {
  home: "#hero",
  services: "#services",
  projects: "#projects",
  contact: "#contact",
};

export function Footer() {
  const locale = useLocale() as Locale;
  const tr = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const year = new Date().getFullYear();
  const copyright = tFooter("copyright", { year });

  return (
    <footer className="border-t border-sand/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg text-sand">
            {t(company.name, locale)}
          </p>
          <p className="mt-2 text-sm text-muted">{copyright}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <ul className="flex flex-wrap gap-6">
            {navKeys.map((key) => (
              <li key={key}>
                <a
                  href={navHrefs[key]}
                  className="text-sm text-muted transition-colors hover:text-sand"
                >
                  {tr(key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {company.socials.map((social) => {
              const Icon = socialIcons[social.id] ?? Instagram;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-sand/15 text-muted transition-colors hover:border-sand/40 hover:text-sand"
                  aria-label={t(social.label, locale)}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
