"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { company, stats, t, type Locale } from "@/data/content";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

export function Hero() {
  const locale = useLocale() as Locale;
  const tHero = useTranslations("hero");

  return (
    <section
      id="hero"
      className="grain-overlay relative flex min-h-screen flex-col justify-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[8%] top-[22%] h-px w-32 bg-sand/20"
          animate={{ opacity: [0.2, 0.6, 0.2], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[12%] top-[35%] h-20 w-20 rotate-12 border border-sand/15"
          animate={{ y: [0, -16, 0], rotate: [12, 20, 12] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[18%] h-0 w-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent border-b-sand/10"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.03] via-transparent to-primary" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.p
          className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-sand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {company.domain}
        </motion.p>

        <motion.h1
          className="font-display text-4xl font-bold leading-[1.1] text-text-primary sm:text-5xl md:text-6xl lg:text-[4rem]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t(company.heroLine1, locale)}
          <br />
          <span className="text-sand">{t(company.heroLine2, locale)}</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-lg text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {t(company.description, locale)}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
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

        <FadeIn className="mt-20">
          <div className="flex flex-wrap items-center gap-6 border-t border-sand/20 pt-10 sm:gap-10">
            {stats.map((stat, i) => (
              <div key={stat.label.en} className="flex items-center gap-6">
                {i > 0 && (
                  <span className="hidden text-sand/30 sm:inline" aria-hidden>
                    |
                  </span>
                )}
                <div>
                  <p className="font-display text-2xl font-bold text-amber">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted">{t(stat.label, locale)}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
