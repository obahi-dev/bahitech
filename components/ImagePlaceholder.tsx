"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  src: string;
  /** e.g. "project-waqti-screenshot.jpg" — shown inside dashed box */
  filename: string;
  alt: string;
  usePlaceholder: boolean;
  className?: string;
  aspectClass?: string;
}

export function ImagePlaceholder({
  src,
  filename,
  alt,
  usePlaceholder,
  className,
  aspectClass = "aspect-video",
}: ImagePlaceholderProps) {
  const [loadError, setLoadError] = useState(false);
  const showPlaceholder = usePlaceholder || loadError;

  if (showPlaceholder) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 border-2 border-dashed border-amber/50 bg-bg-subtle/30 p-6 text-center",
          aspectClass,
          className
        )}
      >
        <span className="text-2xl" aria-hidden>
          📷
        </span>
        <p className="max-w-[90%] text-sm font-medium text-sand">
          DROP IMAGE HERE:
        </p>
        <p className="font-mono text-xs text-muted">{filename}</p>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-bg-subtle", aspectClass, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        onError={() => setLoadError(true)}
      />
    </div>
  );
}
