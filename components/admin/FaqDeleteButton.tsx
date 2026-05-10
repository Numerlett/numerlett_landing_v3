"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { deleteFaq } from "@/actions/faq";
import { toast } from "sonner";

export default function FaqDeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = () => {
    if (!confirm("Delete this FAQ? This cannot be undone.")) return;
    startTransition(async () => {
      const result = await deleteFaq(id);
      if (result.success) {
        toast.success("FAQ deleted");
        router.refresh();
      } else {
        toast.error(result.error ?? "Failed to delete FAQ");
      }
    });
  };

  return (
    <Button
      size="sm"
      variant="destructive"
      onClick={handleDelete}
      disabled={isPending}
      aria-label="Delete FAQ"
    >
      <Trash2Icon className="size-4" aria-hidden="true" />
    </Button>
  );
}
