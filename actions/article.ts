"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/database";
import {
  ArticleModel,
  serialize,
  generateSlug,
} from "@/database/models/article";
import { ArticleStatus } from "@/database/types";

export async function getArticles(status?: ArticleStatus) {
  try {
    await connectDB();
    const docs = await ArticleModel.find(status ? { status } : {}).sort({
      createdAt: -1,
    });
    return { success: true, data: docs.map(serialize) };
  } catch {
    return { success: false, error: "Failed to fetch articles" };
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    await connectDB();
    const doc = await ArticleModel.findOne({
      slug,
      status: ArticleStatus.PUBLISHED,
    });
    return { success: true, data: doc ? serialize(doc) : null };
  } catch {
    return { success: false, error: "Failed to fetch article" };
  }
}

export async function getArticleById(id: string) {
  try {
    await connectDB();
    const doc = await ArticleModel.findById(id);
    return { success: true, data: doc ? serialize(doc) : null };
  } catch {
    return { success: false, error: "Failed to fetch article" };
  }
}

export async function createArticle(data: {
  title: string;
  content: string;
  excerpt?: string;
  status?: ArticleStatus;
  tags?: string[];
  coverImage?: string;
  author?: string;
}) {
  try {
    await connectDB();

    let slug = generateSlug(data.title);
    const existing = await ArticleModel.findOne({ slug });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    const publishedAt =
      data.status === ArticleStatus.PUBLISHED ? new Date() : null;

    const doc = await ArticleModel.create({
      ...data,
      slug,
      publishedAt,
      excerpt: data.excerpt ?? null,
      coverImage: data.coverImage ?? null,
      tags: data.tags ?? [],
      author: data.author ?? "Admin",
    });

    revalidatePath("/admin/articles");
    return { success: true, data: serialize(doc) };
  } catch {
    return { success: false, error: "Failed to create article" };
  }
}

export async function updateArticle(
  id: string,
  data: {
    title?: string;
    content?: string;
    excerpt?: string | null;
    status?: ArticleStatus;
    tags?: string[];
    coverImage?: string | null;
    author?: string;
  },
) {
  try {
    await connectDB();

    const current = await ArticleModel.findById(id);
    if (!current) return { success: false, error: "Article not found" };

    const wasPublished = current.status === ArticleStatus.PUBLISHED;
    const isNowPublished = data.status === ArticleStatus.PUBLISHED;
    const publishedAt =
      !wasPublished && isNowPublished ? new Date() : current.publishedAt;

    const doc = await ArticleModel.findByIdAndUpdate(
      id,
      { ...data, publishedAt },
      { new: true },
    );

    revalidatePath("/admin/articles");
    revalidatePath(`/admin/articles/${id}/edit`);
    return { success: true, data: doc ? serialize(doc) : null };
  } catch {
    return { success: false, error: "Failed to update article" };
  }
}

export async function deleteArticle(id: string) {
  try {
    await connectDB();
    await ArticleModel.findByIdAndDelete(id);
    revalidatePath("/admin/articles");
    return { success: true };
  } catch {
    return { success: false, error: "Failed to delete article" };
  }
}

export async function getArticleStats() {
  try {
    await connectDB();
    const [total, draft, published, archived] = await Promise.all([
      ArticleModel.countDocuments(),
      ArticleModel.countDocuments({ status: ArticleStatus.DRAFT }),
      ArticleModel.countDocuments({ status: ArticleStatus.PUBLISHED }),
      ArticleModel.countDocuments({ status: ArticleStatus.ARCHIVED }),
    ]);
    return { success: true, data: { total, draft, published, archived } };
  } catch {
    return { success: false, error: "Failed to fetch article stats" };
  }
}
