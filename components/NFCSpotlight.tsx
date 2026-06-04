"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { nfcProduct, company, t, getWhatsAppLink, type Locale } from "@/data/content";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Star } from "lucide-react";

export function NFCSpotlight() {
  const locale = useLocale() as Locale;
  const tNfc = useTranslations("nfc");
  const ctaLink = getWhatsAppLink(company.whatsapp);

  return (
    <>
      <div className="section-divider" />
      <section id="nfc" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="card-surface grid gap-12 overflow-hidden border-amber/25 p-8 shadow-amber-glow-lg lg:grid-cols-2 lg:p-12">
              <div>
                <h2 className="font-display mb-4 text-3xl font-bold text-text-primary">
                  {t(nfcProduct.title, locale)}
                </h2>
                <p className="leading-relaxed text-muted">
                  {t(nfcProduct.description, locale)}
                </p>
                <Button variant="amber" size="lg" className="mt-8" asChild>
                  <a
                    href={ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(nfcProduct.ctaLabel, locale)}
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center gap-6 sm:gap-10">
                  <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex h-24 w-14 items-center justify-center rounded-2xl border-2 border-sand/40 bg-bg-subtle">
                      <Smartphone className="h-10 w-6 text-sand" />
                    </div>
                    <span className="text-xs text-muted">{tNfc("tapLabel")}</span>
                  </motion.div>

                  <motion.div
                    className="relative flex h-16 w-16 items-center justify-center"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-amber"
                      animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="relative z-10 text-2xl text-amber">◎</span>
                  </motion.div>

                  <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex gap-1 rounded-xl border border-amber/30 bg-amber/10 px-4 py-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-amber text-amber"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted">
                      {tNfc("reviewLabel")}
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
