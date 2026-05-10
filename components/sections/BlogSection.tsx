import Link from "next/link";
import Container from "@/components/Container";
import { getArticles } from "@/actions/article";
import { ArticleStatus, type IArticle } from "@/database/types";
import { CalendarIcon, ClockIcon } from "lucide-react";

function readingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(date: Date | null): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({
  article,
  index,
}: {
  article: IArticle;
  index: number;
}) {
  const tag = article.tags[0] ?? "Article";
  const mins = readingTime(article.content);
  const delayClass = index === 0 ? "" : `delay-${Math.min(index + 1, 4)}`;

  return (
    <article
      className={`reveal ${delayClass} group overflow-hidden rounded-brand-md border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brand-md`}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {article.coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.coverImage}
          alt={article.title}
          className="aspect-4/3 w-full object-cover"
          itemProp="image"
        />
      ) : (
        <div className="aspect-4/3 bg-accent flex items-center justify-center">
          <span className="font-mono text-4xl font-bold text-primary/20 select-none">
            {article.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}

      <div className="p-6">
        <span
          className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-primary"
          itemProp="keywords"
        >
          {tag}
        </span>

        <h3
          className="mt-2 font-display text-[16px] font-bold leading-[1.3] tracking-[-0.3px]"
          itemProp="headline"
        >
          {article.title}
        </h3>

        {article.excerpt && (
          <p
            className="mt-2 line-clamp-2 text-[13.5px] leading-[1.7] text-muted-foreground"
            itemProp="description"
          >
            {article.excerpt}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-3 font-mono text-[11px]">
            {article.publishedAt && (
              <span className="flex items-center gap-1">
                <CalendarIcon className="size-3" aria-hidden="true" />
                <time
                  dateTime={new Date(article.publishedAt).toISOString()}
                  itemProp="datePublished"
                >
                  {formatDate(article.publishedAt)}
                </time>
              </span>
            )}
            <span className="flex items-center gap-1">
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

export default async function BlogSection() {
  const result = await getArticles(ArticleStatus.PUBLISHED);
  const articles =
    result.success && result.data ? result.data.slice(0, 3) : [];

  return (
    <section
      className="bg-muted py-24"
      id="blog"
      aria-labelledby="blog-heading"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
              <span
                className="h-0.5 w-6 rounded bg-primary"
                aria-hidden="true"
              />
              Insights & Thought Leadership
            </div>
            <h2
              id="blog-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            >
              From Our
              <br />
              Knowledge Base.
            </h2>
          </div>

          <Link
            href="/articles"
            className="reveal delay-2 inline-flex items-center gap-2 rounded-brand-sm border border-border-dark px-6 py-3 text-[14px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            View All Articles{" "}
            <span className="text-base" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="mt-14 flex flex-col items-center justify-center rounded-brand-md border border-border bg-background px-8 py-20 text-center">
            <p className="font-display text-xl font-bold">Coming Soon</p>
            <p className="text-muted-foreground mt-2 max-w-sm text-sm">
              Our team is working on in-depth articles and guides. Check back
              soon.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
