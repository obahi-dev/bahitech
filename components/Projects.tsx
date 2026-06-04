"use client";

import { useLocale, useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { projects, sections, t, tArray, type Locale } from "@/data/content";
import { FadeIn, MotionDiv, staggerContainer } from "@/components/motion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Projects() {
  const locale = useLocale() as Locale;
  const tProj = useTranslations("projects");

  return (
    <>
      <div className="section-divider" />
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              {t(sections.projects, locale)}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              {t(sections.projectsSubtitle, locale)}
            </p>
          </FadeIn>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {projects.map((project, i) => (
              <MotionDiv key={project.id} delay={i * 0.1}>
                <Card className="overflow-hidden transition-all hover:border-sand/25 hover:shadow-amber-glow">
                  <ImagePlaceholder
                    src={project.image}
                    filename={project.imageFilename}
                    alt={t(project.title, locale)}
                    usePlaceholder={project.usePlaceholder}
                    className="rounded-none rounded-t-xl"
                  />
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {tArray(project.tags, locale).map((tag) => (
                        <Badge key={tag} variant="sand-dimmed">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg">
                      {t(project.title, locale)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="line-clamp-2 text-sm text-muted">
                      {t(project.description, locale)}
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {tProj("viewDetails")}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="cursor-default opacity-70">
                          {tProj("viewDetails")}
                        </span>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
