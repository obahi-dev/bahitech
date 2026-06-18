"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { nfcProduct, company, t, getWhatsAppLink, type Locale } from "@/data/content";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";

const imageGlow = {
  boxShadow:
    "0 0 0 1px rgba(200,169,110,0.3), 0 8px 32px rgba(0,0,0,0.4)",
  borderRadius: "16px",
};

function ProductImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <figure className="w-full">
      <div className="overflow-hidden" style={imageGlow}>
        <Image
          src={src}
          alt={alt}
          width={480}
          height={480}
          unoptimized
          className="h-auto w-full object-cover"
        />
      </div>
      <figcaption
        className="mt-3 text-center text-[11px] text-muted"
        style={{ letterSpacing: "0.1em" }}
      >
        {label}
      </figcaption>
    </figure>
  );
}

export function NFCSpotlight() {
  const locale = useLocale() as Locale;
  const ctaLink = getWhatsAppLink(company.whatsapp);

  return (
    <section id="nfc" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="rtl:text-right">
              <h2 className="font-display mb-4 text-3xl font-bold text-text-primary sm:text-4xl">
                {t(nfcProduct.title, locale)}
              </h2>
              <p className="max-w-lg leading-relaxed text-muted rtl:ms-auto rtl:leading-[1.9]">
                {t(nfcProduct.description, locale)}
              </p>
              <Button variant="amber" size="lg" className="mt-8 rtl:me-auto" asChild>
                <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                  {t(nfcProduct.ctaLabel, locale)}
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <ProductImage
                src={nfcProduct.standImage}
                alt={t(nfcProduct.standLabel, locale)}
                label={t(nfcProduct.standLabel, locale)}
              />
              <ProductImage
                src={nfcProduct.stickerImage}
                alt={t(nfcProduct.stickerLabel, locale)}
                label={t(nfcProduct.stickerLabel, locale)}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
