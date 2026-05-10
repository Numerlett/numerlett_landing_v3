import { notFound } from "next/navigation";
import ArticleEditor from "@/components/admin/ArticleEditor";
import { getArticleById } from "@/actions/article";

interface EditArticlePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditArticlePage({ params }: EditArticlePageProps) {
  const { id } = await params;
  const result = await getArticleById(id);

  if (!result.success || !result.data) {
    notFound();
  }

  return <ArticleEditor article={result.data} />;
}
