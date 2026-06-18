"use client";

import { useLocale, useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import {
  company,
  sections,
  t,
  getWhatsAppLink,
  type Locale,
} from "@/data/content";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const locale = useLocale() as Locale;
  const tContact = useTranslations("contact");
  const whatsappHref = getWhatsAppLink(company.whatsapp);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const fromEmail = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(tContact("formSubject"));
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${fromEmail}\n\n${message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="section-title-gap text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t(sections.contact, locale)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            {t(sections.contactSubtitle, locale)}
          </p>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              className="card-surface space-y-5 p-6 md:p-8 rtl:text-right"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-sand"
                >
                  {tContact("name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={tContact("namePlaceholder")}
                  className="rtl:text-right"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-sand"
                >
                  {tContact("email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={tContact("emailPlaceholder")}
                  className="rtl:text-right"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-sand"
                >
                  {tContact("message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={tContact("messagePlaceholder")}
                  className="rtl:text-right"
                />
              </div>
              <Button type="submit" variant="amber" size="lg" className="w-full">
                {tContact("send")}
              </Button>
              <p className="text-center text-xs text-muted">
                {tContact("formNote")}
              </p>
            </form>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface flex items-center gap-4 p-6 transition-all hover:border-amber/30 hover:shadow-amber-glow rtl:flex-row-reverse rtl:text-right"
              >
                <span className="text-2xl" aria-hidden>
                  📱
                </span>
                <div>
                  <p className="text-sm text-muted">{tContact("whatsapp")}</p>
                  <p className="font-medium text-text-primary" dir="ltr">
                    {company.whatsapp}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="card-surface flex items-center gap-4 p-6 transition-all hover:border-sand/30 rtl:flex-row-reverse rtl:text-right"
              >
                <Mail className="h-8 w-8 shrink-0 text-sand" />
                <div>
                  <p className="text-sm text-muted">{tContact("emailLabel")}</p>
                  <p className="font-medium text-text-primary" dir="ltr">
                    {company.email}
                  </p>
                </div>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
