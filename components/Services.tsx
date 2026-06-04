"use client";

import { useLocale, useTranslations } from "next-intl";
import { Globe, Nfc, Smartphone } from "lucide-react";
import {
  services,
  sections,
  t,
  type Locale,
  type Service,
  type BadgeStyle,
} from "@/data/content";
import { FadeIn, MotionDiv, staggerContainer } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const icons = {
  smartphone: Smartphone,
  globe: Globe,
  nfc: Nfc,
};

function badgeVariant(style: BadgeStyle): "amber" | "sand" | "sand-dimmed" {
  if (style === "amber") return "amber";
  if (style === "sand-dimmed") return "sand-dimmed";
  return "sand";
}

function NfcCardAnimation() {
  return (
    <div className="mt-6 flex items-center justify-center gap-4 py-4">
      <div className="flex h-14 w-10 items-center justify-center rounded-lg border border-sand/30 bg-bg-subtle">
        <Smartphone className="h-6 w-6 text-sand" />
      </div>
      <motion.div
        className="relative h-8 w-8 rounded-full border border-amber/50"
        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="flex gap-0.5 text-amber"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            ★
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

function ServiceCard({ service, locale }: { service: Service; locale: Locale }) {
  const tSvc = useTranslations("services");
  const Icon = icons[service.icon];

  return (
    <Card className="flex h-full flex-col transition-all hover:border-sand/30 hover:shadow-amber-glow">
      <CardHeader>
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sand/10 text-sand">
          <Icon className="h-6 w-6" />
        </span>
        <div className="mb-2 flex flex-wrap gap-2">
          <Badge variant={badgeVariant(service.badgeStyle)}>
            {t(service.badge, locale)}
          </Badge>
        </div>
        <CardTitle>{t(service.title, locale)}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="flex-1 text-sm leading-relaxed text-muted">
          {t(service.description, locale)}
        </p>
        {service.placeholderNote && (
          <p className="mt-4 rounded-lg border border-dashed border-sand/20 bg-bg-subtle/50 px-3 py-2 text-xs text-muted">
            {t(service.placeholderNote, locale)}
          </p>
        )}
        {service.icon === "nfc" && <NfcCardAnimation />}
        {service.caseStudyLink && (
          <a
            href="#projects"
            className="mt-4 inline-block text-sm font-semibold text-sand hover:text-amber"
          >
            {tSvc("caseStudy")}
          </a>
        )}
      </CardContent>
    </Card>
  );
}

export function Services() {
  const locale = useLocale() as Locale;

  return (
    <>
      <div className="section-divider" />
      <section id="services" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              {t(sections.services, locale)}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              {t(sections.servicesSubtitle, locale)}
            </p>
          </FadeIn>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {services.map((service, i) => (
              <MotionDiv key={service.id} delay={i * 0.1}>
                <ServiceCard service={service} locale={locale} />
              </MotionDiv>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
