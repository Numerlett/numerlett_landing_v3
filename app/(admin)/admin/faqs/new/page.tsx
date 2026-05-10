import FaqForm from "@/components/admin/FaqForm";

export default function NewFaqPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">New FAQ</h1>
        <p className="text-muted-foreground">
          Add a new frequently asked question
        </p>
      </div>
      <FaqForm />
    </div>
  );
}
