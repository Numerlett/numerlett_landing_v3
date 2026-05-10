import Link from "next/link";
import { HelpCircleIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getFaqs } from "@/actions/faq";
import { FaqStatus } from "@/database/types";
import FaqDeleteButton from "@/components/admin/FaqDeleteButton";

const statusConfig: Record<FaqStatus, { label: string; className: string }> = {
  DRAFT: { label: "Draft", className: "bg-muted text-muted-foreground" },
  PUBLISHED: {
    label: "Published",
    className: "bg-green-500/10 text-green-700 dark:text-green-400",
  },
};

export default async function FaqsPage() {
  const result = await getFaqs();
  const faqs = result.success && result.data ? result.data : [];

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">FAQs</h1>
          <p className="text-muted-foreground">
            Manage frequently asked questions shown on the landing page
          </p>
        </div>
        <Button asChild size="sm" className="shrink-0 gap-1.5">
          <Link href="/admin/faqs/new">
            <PlusIcon className="size-4" aria-hidden="true" />
            New FAQ
          </Link>
        </Button>
      </div>

      {faqs.length === 0 ? (
        <div className="border-border bg-muted/30 flex flex-col items-center justify-center rounded-xl border py-24 text-center">
          <HelpCircleIcon
            className="text-muted-foreground mb-4 size-12"
            aria-hidden="true"
          />
          <p className="text-lg font-medium">No FAQs yet</p>
          <p className="text-muted-foreground mb-6 text-sm">
            Create your first FAQ to get started
          </p>
          <Button asChild size="sm" className="gap-1.5">
            <Link href="/admin/faqs/new">
              <PlusIcon className="size-4" aria-hidden="true" />
              New FAQ
            </Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {faqs.map((faq) => (
            <Card key={faq.id} className="transition-all hover:shadow-brand-md">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{faq.question}</p>
                    <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                      {faq.answer}
                    </p>
                    <p className="text-muted-foreground mt-1 text-xs">
                      Order: {faq.order}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-medium",
                        statusConfig[faq.status].className,
                      )}
                    >
                      {statusConfig[faq.status].label}
                    </span>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/admin/faqs/${faq.id}`}>Edit</Link>
                    </Button>
                    <FaqDeleteButton id={faq.id} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
