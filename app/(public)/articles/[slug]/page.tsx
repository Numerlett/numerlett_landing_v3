import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon, TagIcon } from "lucide-react";
import Container from "@/components/Container";
import { getArticleBySlug, getArticles } from "@/actions/article";
import { ArticleStatus } from "@/database/types";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

function readingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getArticleBySlug(slug);
  if (!result.success || !result.data) {
    return { title: "Article Not Found | NumerLett" };
  }
  const article = result.data;
  return {
    title: `${article.title} | NumerLett`,
    description: article.excerpt ?? undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt ?? undefined,
      images: article.coverImage ? [{ url: article.coverImage }] : undefined,
      type: "article",
      publishedTime: article.publishedAt
        ? new Date(article.publishedAt).toISOString()
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  const result = await getArticles(ArticleStatus.PUBLISHED);
  if (!result.success || !result.data) return [];
  return result.data.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const result = await getArticleBySlug(slug);

  if (!result.success || !result.data) {
    notFound();
  }

  const article = result.data;
  const mins = readingTime(article.content);

  return (
    <article
      className="py-16 md:py-24"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Container>
        <div className="mx-auto max-w-3xl">

          {/* Back link */}
          <Link
            href="/articles"
            className="text-muted-foreground hover:text-foreground mb-10 inline-flex items-center gap-2 font-mono text-[12px] transition-colors"
          >
            <ArrowLeftIcon className="size-3.5" aria-hidden="true" />
            All articles
          </Link>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-primary"
                >
                  <TagIcon className="size-3" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            className="mt-4 font-display text-[clamp(28px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            itemProp="headline"
          >
            {article.title}
          </h1>

          {article.excerpt && (
            <p
              className="text-muted-foreground mt-4 text-[16px] leading-relaxed"
              itemProp="description"
            >
              {article.excerpt}
            </p>
          )}

          {/* Meta row */}
          <div className="text-muted-foreground mt-6 flex flex-wrap items-center gap-4 border-b border-border pb-8 font-mono text-[12px]">
            <span className="flex items-center gap-1.5">
              <UserIcon className="size-3.5" aria-hidden="true" />
              <span itemProp="author">{article.author}</span>
            </span>
            {article.publishedAt && (
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="size-3.5" aria-hidden="true" />
                <time
                  dateTime={new Date(article.publishedAt).toISOString()}
                  itemProp="datePublished"
                >
                  {formatDate(article.publishedAt)}
                </time>
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <ClockIcon className="size-3.5" aria-hidden="true" />
              {mins} min read
            </span>
          </div>

          {/* Cover image */}
          {article.coverImage && (
            <div className="mt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full rounded-brand-lg object-cover shadow-brand-md"
                style={{ maxHeight: "480px" }}
                itemProp="image"
              />
            </div>
          )}

          {/* Article body */}
          <div
            className="prose-article mt-10"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Footer */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-brand-sm border border-border px-5 py-2.5 text-[13px] font-semibold transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <ArrowLeftIcon className="size-3.5" aria-hidden="true" />
              All articles
            </Link>
            <div className="text-muted-foreground font-mono text-[11px]">
              {article.author} · NumerLett
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
