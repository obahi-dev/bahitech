"use client";

import { useLocale } from "next-intl";
import { company, sections, t, type Locale } from "@/data/content";
import { FadeIn } from "@/components/motion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge } from "@/components/ui/badge";

export function About() {
  const locale = useLocale() as Locale;

  return (
    <>
      <div className="section-divider" />
      <section id="about" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display mb-12 text-3xl font-bold sm:text-4xl">
              {t(sections.about, locale)}
            </h2>
          </FadeIn>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="sand" className="mb-4">
                {t(company.locationBadge, locale)}
              </Badge>
              <p className="mb-4 leading-relaxed text-muted">
                {t(company.aboutParagraph, locale)}
              </p>
              <p className="leading-relaxed">
                <span className="highlight-amber font-medium">
                  {t(company.aboutHighlight, locale)}
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <ImagePlaceholder
                src="/images/about-team.jpg"
                filename="about-team-photo.jpg"
                alt={t(company.name, locale)}
                usePlaceholder={true}
                className="rounded-xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
