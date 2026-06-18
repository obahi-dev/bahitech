"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { company, stats, t, type Locale } from "@/data/content";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const backgroundLines = [
  { x1: 0, y1: 40, x2: 1440, y2: 40 },
  { x1: 0, y1: 160, x2: 1440, y2: 160 },
  { x1: 0, y1: 280, x2: 1440, y2: 280 },
  { x1: 0, y1: 400, x2: 1440, y2: 400 },
  { x1: 0, y1: 520, x2: 1440, y2: 520 },
  { x1: 0, y1: 0, x2: 1440, y2: 620 },
  { x1: 120, y1: 0, x2: 1560, y2: 620 },
  { x1: -120, y1: 0, x2: 1320, y2: 620 },
];

export function Hero() {
  const locale = useLocale() as Locale;
  const tHero = useTranslations("hero");

  return (
    <section id="hero" className="grain-overlay relative min-h-screen overflow-hidden pb-[60px] pt-16">
      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 620" preserveAspectRatio="none">
          {backgroundLines.map((line, index) => (
            <line
              key={`${line.x1}-${line.y1}-${index}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#C8A96E"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
          ))}
        </svg>

        <div className="absolute right-[-150px] top-[45%] h-[800px] w-[800px] -translate-y-1/2 rounded-full border border-sand/[0.04]" />

        <motion.div
          className="absolute left-[10%] top-[20%] h-24 w-24 border border-sand/15"
          animate={{ rotate: [0, 360], y: [0, -10, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-[16%] top-[22%] h-16 w-16 rotate-45 border border-sand/20"
          animate={{ rotate: [45, 405], x: [0, 8, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[18%] right-[22%] h-0 w-0 border-l-[28px] border-r-[28px] border-b-[46px] border-l-transparent border-r-transparent border-b-sand/15"
          animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.03] via-transparent to-primary/80" />
      </div>

      <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 ltr:block">
        <p className="text-[10px] tracking-[0.3em] text-sand/30">{t(company.edgeLabel, locale)}</p>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-128px)] w-full max-w-6xl flex-col px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16 rtl:text-right">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="logo-ltr mb-10 sm:mb-12 rtl:me-auto"
          dir="ltr"
        >
          <Logo size="lg" />
        </motion.div>

        <motion.h1
          className="font-display text-[36px] font-bold leading-[1.05] text-text-primary md:text-[48px] lg:text-[72px] rtl:lg:text-[56px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {t(company.heroLine1, locale)}
          <br />
          <span className="text-sand">{t(company.heroLine2, locale)}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <p className="mt-6 max-w-xl text-lg text-muted rtl:ms-auto rtl:leading-[1.9]">
            {t(company.description, locale)}
          </p>
          <div className="mt-3 h-[2px] w-[60px] bg-amber/70 rtl:ms-auto" />
          <div className="mt-8 h-px w-full max-w-xl bg-amber/20 rtl:ms-auto" />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col gap-4 sm:flex-row rtl:sm:flex-row-reverse rtl:sm:justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <Button variant="amber" size="lg" asChild>
            <a href="#projects" className="group">
              {tHero("ctaWork")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
          </Button>
          <Button variant="sand" size="lg" asChild>
            <a href="#contact">{tHero("ctaContact")}</a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-auto pt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-start gap-x-10 gap-y-8 border-t border-sand/20 pt-10 sm:gap-x-14 rtl:flex-row-reverse rtl:justify-end">
            {stats.map((stat, i) => (
              <div key={stat.label.en} className="flex items-start gap-10 sm:gap-14 rtl:flex-row-reverse">
                {i > 0 && (
                  <span className="hidden h-12 w-px shrink-0 bg-sand/20 sm:block" aria-hidden />
                )}
                <div className="flex min-w-[7rem] flex-col gap-2.5 rtl:text-right">
                  <p className="font-display text-5xl font-bold leading-none tabular-nums text-amber">
                    {stat.value}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">{t(stat.label, locale)}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
