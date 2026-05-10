import DashboardStatCard from "@/components/admin/DashboardStatCard";
import { getContactFormStats, getContactForms } from "@/actions/contactForm";
import { getArticleStats } from "@/actions/article";
import { getFaqStats } from "@/actions/faq";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  AlertCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  FileTextIcon,
  HelpCircleIcon,
  InboxIcon,
  MessageSquareIcon,
  XCircleIcon,
} from "lucide-react";

const contactStatusConfig = {
  PENDING: {
    label: "Pending",
    className: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  },
  IN_PROGRESS: {
    label: "In Progress",
    className: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  RESOLVED: {
    label: "Resolved",
    className: "bg-green-500/10 text-green-700 dark:text-green-400",
  },
  CLOSED: {
    label: "Closed",
    className: "bg-muted text-muted-foreground",
  },
} as const;

export default async function AdminDashboard() {
  const [contactStatsResult, articleStatsResult, faqStatsResult, recentResult] =
    await Promise.all([
      getContactFormStats(),
      getArticleStats(),
      getFaqStats(),
      getContactForms(),
    ]);

  const contactStats = contactStatsResult.success
    ? contactStatsResult.data
    : null;
  const articleStats = articleStatsResult.success
    ? articleStatsResult.data
    : null;
  const faqStats = faqStatsResult.success ? faqStatsResult.data : null;
  const recent = recentResult.success
    ? (recentResult.data ?? []).slice(0, 5)
    : [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your site activity</p>
      </div>

      {/* Contact Stats */}
      <section aria-labelledby="contact-stats-heading">
        <h2
          id="contact-stats-heading"
          className="text-muted-foreground mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
        >
          <MessageSquareIcon className="size-3.5" aria-hidden="true" />
          Contact Forms
        </h2>
        {contactStats ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            <DashboardStatCard
              title="Total"
              value={contactStats.total}
              icon={<InboxIcon className="size-4" aria-hidden="true" />}
              shortcut={{ link: "/admin/contact", label: "View all" }}
              className="col-span-2 lg:col-span-1"
            />
            <DashboardStatCard
              title="Pending"
              value={contactStats.pending}
              icon={<AlertCircleIcon className="size-4" aria-hidden="true" />}
              shortcut={{ link: "/admin/contact", label: "Review" }}
            />
            <DashboardStatCard
              title="In Progress"
              value={contactStats.inProgress}
              icon={<ClockIcon className="size-4" aria-hidden="true" />}
            />
            <DashboardStatCard
              title="Resolved"
              value={contactStats.resolved}
              icon={<CheckCircleIcon className="size-4" aria-hidden="true" />}
            />
            <DashboardStatCard
              title="Closed"
              value={contactStats.closed}
              icon={<XCircleIcon className="size-4" aria-hidden="true" />}
            />
          </div>
        ) : (
          <p className="text-destructive text-sm">Failed to load stats</p>
        )}
      </section>

      {/* Article Stats */}
      <section aria-labelledby="article-stats-heading">
        <h2
          id="article-stats-heading"
          className="text-muted-foreground mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
        >
          <FileTextIcon className="size-3.5" aria-hidden="true" />
          Articles
        </h2>
        {articleStats ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <DashboardStatCard
              title="Total"
              value={articleStats.total}
              icon={<FileTextIcon className="size-4" aria-hidden="true" />}
              shortcut={{ link: "/admin/articles", label: "View all" }}
            />
            <DashboardStatCard
              title="Published"
              value={articleStats.published}
              icon={<CheckCircleIcon className="size-4" aria-hidden="true" />}
            />
            <DashboardStatCard
              title="Draft"
              value={articleStats.draft}
              icon={<ClockIcon className="size-4" aria-hidden="true" />}
            />
            <DashboardStatCard
              title="Archived"
              value={articleStats.archived}
              icon={<XCircleIcon className="size-4" aria-hidden="true" />}
            />
          </div>
        ) : (
          <p className="text-destructive text-sm">Failed to load stats</p>
        )}
      </section>

      {/* FAQ Stats */}
      <section aria-labelledby="faq-stats-heading">
        <h2
          id="faq-stats-heading"
          className="text-muted-foreground mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
        >
          <HelpCircleIcon className="size-3.5" aria-hidden="true" />
          FAQs
        </h2>
        {faqStats ? (
          <div className="grid grid-cols-3 gap-4">
            <DashboardStatCard
              title="Total"
              value={faqStats.total}
              icon={<HelpCircleIcon className="size-4" aria-hidden="true" />}
              shortcut={{ link: "/admin/faqs", label: "Manage" }}
            />
            <DashboardStatCard
              title="Published"
              value={faqStats.published}
              icon={<CheckCircleIcon className="size-4" aria-hidden="true" />}
            />
            <DashboardStatCard
              title="Draft"
              value={faqStats.draft}
              icon={<ClockIcon className="size-4" aria-hidden="true" />}
            />
          </div>
        ) : (
          <p className="text-destructive text-sm">Failed to load stats</p>
        )}
      </section>

      {/* Recent Submissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquareIcon className="size-4" aria-hidden="true" />
            Recent Submissions
          </CardTitle>
        </CardHeader>
        <CardContent>
          {recent.length === 0 ? (
            <p className="text-muted-foreground py-8 text-center text-sm">
              No submissions yet
            </p>
          ) : (
            <div className="divide-border divide-y">
              {recent.map((form) => (
                <div
                  key={form.id}
                  className="flex items-center justify-between py-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{form.name}</p>
                    <p className="text-muted-foreground truncate text-sm">
                      {form.email}
                    </p>
                  </div>
                  <div className="ml-4 flex shrink-0 items-center gap-3">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-medium",
                        contactStatusConfig[form.status].className,
                      )}
                    >
                      {contactStatusConfig[form.status].label}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {new Date(form.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
