import { notFound } from "next/navigation";
import { getFaqById } from "@/actions/faq";
import FaqForm from "@/components/admin/FaqForm";

interface EditFaqPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditFaqPage({ params }: EditFaqPageProps) {
  const { id } = await params;
  const result = await getFaqById(id);

  if (!result.success || !result.data) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit FAQ</h1>
        <p className="text-muted-foreground">
          Update the question, answer, or display order
        </p>
      </div>
      <FaqForm faq={result.data} />
    </div>
  );
}
