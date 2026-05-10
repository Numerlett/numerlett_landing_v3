import Link from "next/link";
import { FileTextIcon, PlusIcon, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getArticles } from "@/actions/article";
import { ArticleStatus } from "@/database/types";

const statusConfig: Record<ArticleStatus, { label: string; className: string }> = {
  DRAFT: { label: "Draft", className: "bg-muted text-muted-foreground" },
  PUBLISHED: {
    label: "Published",
    className: "bg-green-500/10 text-green-700 dark:text-green-400",
  },
  ARCHIVED: {
    label: "Archived",
    className: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  },
};

const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default async function ArticlesPage() {
  const result = await getArticles();
  const articles = result.success && result.data ? result.data : [];

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Articles</h1>
          <p className="text-muted-foreground">Manage blog posts and articles</p>
        </div>
        <Button asChild size="sm" className="gap-1.5 shrink-0">
          <Link href="/admin/articles/new">
            <PlusIcon className="size-4" aria-hidden="true" />
            New article
          </Link>
        </Button>
      </div>

      {articles.length === 0 ? (
        <div className="border-border bg-muted/30 flex flex-col items-center justify-center rounded-xl border py-24 text-center">
          <FileTextIcon
            className="text-muted-foreground mb-4 size-12"
            aria-hidden="true"
          />
          <p className="text-lg font-medium">No articles yet</p>
          <p className="text-muted-foreground mb-6 text-sm">
            Create your first article to get started
          </p>
          <Button asChild size="sm" className="gap-1.5">
            <Link href="/admin/articles/new">
              <PlusIcon className="size-4" aria-hidden="true" />
              New article
            </Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/admin/articles/${article.id}/edit`}
              className="block"
            >
              <Card className="transition-all hover:shadow-brand-md">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{article.title}</p>
                      {article.excerpt && (
                        <p className="text-muted-foreground mt-0.5 line-clamp-1 text-sm">
                          {article.excerpt}
                        </p>
                      )}
                      <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-3 text-xs">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="size-3" aria-hidden="true" />
                          {formatDate(article.createdAt)}
                        </span>
                        {article.tags.length > 0 && (
                          <span>{article.tags.join(", ")}</span>
                        )}
                      </div>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",
                        statusConfig[article.status].className,
                      )}
                    >
                      {statusConfig[article.status].label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
