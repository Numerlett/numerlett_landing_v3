"use client";

import { useState, useTransition } from "react";
import { Reorder, useDragControls } from "framer-motion";
import Link from "next/link";
import { GripVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { reorderFaqs } from "@/actions/faq";
import { FaqStatus, type IFaq } from "@/database/types";
import FaqDeleteButton from "@/components/admin/FaqDeleteButton";
import { toast } from "sonner";

const statusConfig: Record<FaqStatus, { label: string; className: string }> = {
  DRAFT: { label: "Draft", className: "bg-muted text-muted-foreground" },
  PUBLISHED: {
    label: "Published",
    className: "bg-green-500/10 text-green-700 dark:text-green-400",
  },
};

interface FaqReorderItemProps {
  faq: IFaq;
  onDragEnd: () => void;
}

function FaqReorderItem({ faq, onDragEnd }: FaqReorderItemProps) {
  const controls = useDragControls();

  return (
    <Reorder.Item
      value={faq}
      dragListener={false}
      dragControls={controls}
      onDragEnd={onDragEnd}
      className="list-none"
    >
      <Card className="transition-shadow hover:shadow-brand-md">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="text-muted-foreground shrink-0 cursor-grab touch-none active:cursor-grabbing"
              onPointerDown={(e) => controls.start(e)}
              aria-label="Drag to reorder"
            >
              <GripVerticalIcon className="size-5" aria-hidden="true" />
            </button>

            <div className="min-w-0 flex-1">
              <p className="font-semibold">{faq.question}</p>
              <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                {faq.answer}
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
    </Reorder.Item>
  );
}

interface FaqReorderListProps {
  initialFaqs: IFaq[];
}

export default function FaqReorderList({ initialFaqs }: FaqReorderListProps) {
  const [faqs, setFaqs] = useState<IFaq[]>(initialFaqs);
  const [isPending, startTransition] = useTransition();

  const handleDragEnd = () => {
    startTransition(async () => {
      const result = await reorderFaqs(
        faqs.map((f, i) => ({ id: f.id, order: i })),
      );
      if (!result.success) {
        toast.error(result.error ?? "Failed to save order");
      }
    });
  };

  return (
    <div className="relative">
      {isPending && (
        <p className="text-muted-foreground absolute -top-6 right-0 text-xs">
          Saving order…
        </p>
      )}
      <Reorder.Group
        axis="y"
        values={faqs}
        onReorder={setFaqs}
        className="space-y-3"
      >
        {faqs.map((faq) => (
          <FaqReorderItem key={faq.id} faq={faq} onDragEnd={handleDragEnd} />
        ))}
      </Reorder.Group>
    </div>
  );
}
