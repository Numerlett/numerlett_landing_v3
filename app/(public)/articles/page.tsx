import type { Metadata } from "next";
import Link from "next/link";
import { CalendarIcon, ClockIcon, FileTextIcon } from "lucide-react";
import Container from "@/components/Container";
import { getArticles } from "@/actions/article";
import { ArticleStatus, type IArticle } from "@/database/types";

export const metadata: Metadata = {
  title: "Articles & Insights | NumerLett",
  description:
    "In-depth guides, strategies, and insights from the NumerLett team on SEO, AI, digital marketing, and software.",
};

function readingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(date: Date | null): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({ article }: { article: IArticle }) {
  const tag = article.tags[0] ?? "Article";
  const mins = readingTime(article.content);

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-brand-md border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brand-md"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Link
        href={`/articles/${article.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="block"
      >
        {article.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverImage}
            alt={article.title}
            className="aspect-video w-full object-cover"
            itemProp="image"
          />
        ) : (
          <div className="aspect-video bg-accent flex items-center justify-center">
            <span className="font-mono text-5xl font-bold text-primary/20 select-none">
              {article.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-primary"
            itemProp="keywords"
          >
            {tag}
          </span>
          {article.tags.length > 1 && (
            <span className="text-muted-foreground font-mono text-[10.5px]">
              +{article.tags.length - 1}
            </span>
          )}
        </div>

        <Link href={`/articles/${article.slug}`} className="group/title mt-2 block">
          <h2
            className="font-display text-[17px] font-bold leading-[1.3] tracking-[-0.3px] transition-colors group-hover/title:text-primary"
            itemProp="headline"
          >
            {article.title}
          </h2>
        </Link>

        {article.excerpt && (
          <p
            className="mt-2 flex-1 line-clamp-3 text-[13.5px] leading-[1.7] text-muted-foreground"
            itemProp="description"
          >
            {article.excerpt}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="text-muted-foreground flex items-center gap-3 font-mono text-[11px]">
            {article.publishedAt && (
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="size-3" aria-hidden="true" />
                <time
                  dateTime={new Date(article.publishedAt).toISOString()}
                  itemProp="datePublished"
                >
                  {formatDate(article.publishedAt)}
                </time>
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <ClockIcon className="size-3" aria-hidden="true" />
              {mins} min read
            </span>
          </div>

          <Link
            href={`/articles/${article.slug}`}
            className="text-[12.5px] font-semibold text-primary transition-colors group-hover:underline"
            aria-label={`Read ${article.title}`}
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default async function ArticlesPage() {
  const result = await getArticles(ArticleStatus.PUBLISHED);
  const articles = result.success && result.data ? result.data : [];

  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-muted py-20">
        <Container>
          <div className="inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
            <span className="h-0.5 w-6 rounded bg-primary" aria-hidden="true" />
            Insights & Thought Leadership
          </div>
          <h1 className="mt-4 font-display text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] tracking-[-2px]">
            Knowledge Base.
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            In-depth guides, frameworks, and strategies from the NumerLett team
            — covering SEO, AI, digital marketing, and software.
          </p>
        </Container>
      </section>

      {/* Articles grid */}
      <section className="py-20" aria-label="Articles">
        <Container>
          {articles.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-brand-lg border border-border bg-muted/40 px-8 py-32 text-center">
              <FileTextIcon
                className="text-muted-foreground mb-5 size-12"
                aria-hidden="true"
              />
              <h2 className="font-display text-2xl font-bold">
                No articles yet
              </h2>
              <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed">
                Our team is working on in-depth articles and guides. Check back
                soon — great content is on the way.
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-brand-sm border border-border-dark px-6 py-3 text-[14px] font-semibold transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                ← Back to home
              </Link>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground mb-10 font-mono text-[12px]">
                {articles.length} {articles.length === 1 ? "article" : "articles"} published
              </p>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
    </>
  );
}
