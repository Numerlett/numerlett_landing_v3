"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createFaq, updateFaq } from "@/actions/faq";
import { FaqStatus, type IFaq } from "@/database/types";

const faqSchema = z.object({
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
  status: z.nativeEnum(FaqStatus),
  order: z.coerce.number().int().min(0),
});

type FaqFormValues = z.infer<typeof faqSchema>;

interface FaqFormProps {
  faq?: IFaq;
}

export default function FaqForm({ faq }: FaqFormProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: faq?.question ?? "",
      answer: faq?.answer ?? "",
      status: faq?.status ?? FaqStatus.PUBLISHED,
      order: faq?.order ?? 0,
    },
  });

  const status = watch("status");

  const onSubmit = (values: FaqFormValues) => {
    startTransition(async () => {
      const result = faq
        ? await updateFaq(faq.id, values)
        : await createFaq(values);

      if (result.success) {
        toast.success(faq ? "FAQ updated" : "FAQ created");
        router.push("/admin/faqs");
        router.refresh();
      } else {
        toast.error(result.error ?? "Something went wrong");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl"
      id="faq-form"
    >
      <div className="space-y-2">
        <Label htmlFor="faq-question">Question</Label>
        <Input
          id="faq-question"
          placeholder="e.g. What services do you offer?"
          {...register("question")}
        />
        {errors.question && (
          <p className="text-destructive text-sm">{errors.question.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="faq-answer">Answer</Label>
        <Textarea
          id="faq-answer"
          placeholder="Write a clear, concise answer..."
          rows={6}
          {...register("answer")}
        />
        {errors.answer && (
          <p className="text-destructive text-sm">{errors.answer.message}</p>
        )}
      </div>

      <div className="flex gap-4">
        <div className="space-y-2 flex-1">
          <Label htmlFor="faq-status">Status</Label>
          <Select
            value={status}
            onValueChange={(val) => setValue("status", val as FaqStatus)}
          >
            <SelectTrigger id="faq-status">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={FaqStatus.PUBLISHED}>Published</SelectItem>
              <SelectItem value={FaqStatus.DRAFT}>Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 w-28">
          <Label htmlFor="faq-order">Display Order</Label>
          <Input
            id="faq-order"
            type="number"
            min={0}
            {...register("order")}
          />
          {errors.order && (
            <p className="text-destructive text-sm">{errors.order.message}</p>
          )}
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving…" : faq ? "Update FAQ" : "Create FAQ"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/faqs")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
