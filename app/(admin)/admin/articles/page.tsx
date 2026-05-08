import { FileText } from "lucide-react";

export default function ArticlesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Articles</h1>
        <p className="text-muted-foreground">Manage blog posts and articles</p>
      </div>

      <div className="border-border bg-muted/30 flex flex-col items-center justify-center rounded-xl border py-24 text-center">
        <FileText
          className="text-muted-foreground mb-4 size-12"
          aria-hidden="true"
        />
        <p className="text-lg font-medium">No articles yet</p>
        <p className="text-muted-foreground text-sm">
          Published articles will appear here
        </p>
      </div>
    </div>
  );
}
