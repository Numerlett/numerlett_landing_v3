import DashboardStatCard from "@/components/admin/DashboardStatCard";
import { getContactFormStats, getContactForms } from "@/actions/contactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  AlertCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  InboxIcon,
  MessageSquareIcon,
  XCircleIcon,
} from "lucide-react";

const statusConfig = {
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
  const [statsResult, recentResult] = await Promise.all([
    getContactFormStats(),
    getContactForms(),
  ]);

  const stats = statsResult.success ? statsResult.data : null;
  const recent = recentResult.success ? (recentResult.data ?? []).slice(0, 5) : [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your site activity</p>
      </div>

      {stats ? (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <DashboardStatCard
            title="Total Submissions"
            value={stats.total}
            icon={<InboxIcon className="size-4" aria-hidden="true" />}
            shortcut={{ link: "/admin/contact", label: "View all" }}
            className="col-span-2 lg:col-span-1"
          />
          <DashboardStatCard
            title="Pending"
            value={stats.pending}
            icon={<AlertCircleIcon className="size-4" aria-hidden="true" />}
            shortcut={{ link: "/admin/contact", label: "Review" }}
          />
          <DashboardStatCard
            title="In Progress"
            value={stats.inProgress}
            icon={<ClockIcon className="size-4" aria-hidden="true" />}
          />
          <DashboardStatCard
            title="Resolved"
            value={stats.resolved}
            icon={<CheckCircleIcon className="size-4" aria-hidden="true" />}
          />
        </div>
      ) : (
        <p className="text-destructive text-sm">Failed to load stats</p>
      )}

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
                  <div className="ml-4 flex items-center gap-3 shrink-0">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-medium",
                        statusConfig[form.status].className,
                      )}
                    >
                      {statusConfig[form.status].label}
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
