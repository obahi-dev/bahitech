"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown, ExternalLink } from "lucide-react";
import { projects, sections, t, tArray, type Locale } from "@/data/content";
import { FadeIn, MotionDiv, staggerContainer } from "@/components/motion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  locale,
  isExpanded,
  onToggle,
}: {
  project: (typeof projects)[number];
  locale: Locale;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const tProj = useTranslations("projects");
  const detailItems = project.details ? tArray(project.details, locale) : [];

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-sand/25 hover:shadow-amber-glow",
        isExpanded && "border-sand/30 shadow-amber-glow"
      )}
    >
      <ImagePlaceholder
        src={project.image}
        filename={project.imageFilename}
        alt={t(project.title, locale)}
        usePlaceholder={project.usePlaceholder}
        className="rounded-none rounded-t-xl"
        aspectClass="min-h-[240px]"
      />
      <CardHeader>
        <div className="mb-2 flex flex-wrap gap-2">
          {tArray(project.tags, locale).map((tag) => (
            <Badge key={tag} variant="sand-dimmed">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-lg">{t(project.title, locale)}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className={cn("text-sm text-muted", !isExpanded && "line-clamp-2")}>
          {t(project.description, locale)}
        </p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-4 border-t border-sand/15 pt-4">
                {detailItems.length > 0 && (
                  <ul className="space-y-2.5">
                    {detailItems.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-3">
          {project.link && (
            <Button variant="amber" className="w-full" asChild>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tProj("visitProject")}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}

          <Button
            variant="outline"
            className="w-full"
            onClick={onToggle}
            aria-expanded={isExpanded}
          >
            {isExpanded ? tProj("hideDetails") : tProj("viewDetails")}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                isExpanded && "rotate-180"
              )}
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  const locale = useLocale() as Locale;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20">
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
              <ProjectCard
                project={project}
                locale={locale}
                isExpanded={expandedId === project.id}
                onToggle={() =>
                  setExpandedId((current) =>
                    current === project.id ? null : project.id
                  )
                }
              />
            </MotionDiv>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
