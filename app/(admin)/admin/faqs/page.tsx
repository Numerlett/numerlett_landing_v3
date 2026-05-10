import Link from "next/link";
import { HelpCircleIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFaqs } from "@/actions/faq";
import FaqReorderList from "@/components/admin/FaqReorderList";

export default async function FaqsPage() {
  const result = await getFaqs();
  const faqs = result.success && result.data ? result.data : [];

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">FAQs</h1>
          <p className="text-muted-foreground">
            Drag to reorder · changes save automatically
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
        <FaqReorderList initialFaqs={faqs} />
      )}
    </div>
  );
}
