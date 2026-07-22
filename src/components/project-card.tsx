/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

// Tasteful gradient pairs; picked deterministically per project so each cover
// is distinct but stable across renders. Text is always white on top.
const COVER_GRADIENTS: [string, string][] = [
  ["#6366f1", "#8b5cf6"], // indigo → violet
  ["#0ea5e9", "#2563eb"], // sky → blue
  ["#f59e0b", "#ef4444"], // amber → red
  ["#10b981", "#0d9488"], // emerald → teal
  ["#ec4899", "#8b5cf6"], // pink → violet
  ["#f43f5e", "#f59e0b"], // rose → amber
];

function gradientFor(seed: string): [string, string] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return COVER_GRADIENTS[Math.abs(hash) % COVER_GRADIENTS.length];
}

function ProjectCover({
  title,
  tags,
}: {
  title: string;
  tags: readonly string[];
}) {
  const [name, ...rest] = title.split("–");
  const projectName = name.trim();
  const subtitle = rest.join("–").trim();
  const [from, to] = gradientFor(title);

  return (
    <div
      className="relative w-full h-48 overflow-hidden flex flex-col justify-end p-5"
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(255,255,255,0.45), transparent 45%)",
        }}
      />
      <div className="relative flex flex-col gap-1.5">
        <span className="text-white text-lg font-semibold leading-tight tracking-tight">
          {projectName}
        </span>
        {subtitle && (
          <span className="text-white/85 text-xs leading-snug">{subtitle}</span>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: React.ReactNode;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <>{fallback}</>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover object-top"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const hasLink = Boolean(href && href !== "#");
  const cover = <ProjectCover title={title} tags={tags} />;
  const media = video ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-48 object-cover"
    />
  ) : image ? (
    <ProjectImage src={image} alt={title} fallback={cover} />
  ) : (
    cover
  );
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
        hasLink && "cursor-pointer",
        className
      )}
    >
      <div className="relative shrink-0">
        {hasLink ? (
          <Link
            href={href!}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {media}
          </Link>
        ) : (
          media
        )}
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          {hasLink && (
            <Link
              href={href!}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
