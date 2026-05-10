import mongoose, { Schema, type Document, type Model, type Types } from "mongoose";
import { ArticleStatus, type IArticle } from "@/database/types";

export { ArticleStatus, type IArticle };

interface ArticleDoc extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  status: ArticleStatus;
  tags: string[];
  coverImage: string | null;
  author: string;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const articleSchema = new Schema<ArticleDoc>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true, default: "" },
    excerpt: { type: String, default: null },
    status: {
      type: String,
      enum: Object.values(ArticleStatus),
      default: ArticleStatus.DRAFT,
    },
    tags: { type: [String], default: [] },
    coverImage: { type: String, default: null },
    author: { type: String, required: true, default: "Admin" },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true, collection: "articles" },
);

articleSchema.index({ status: 1 });
articleSchema.index({ slug: 1 }, { unique: true });
articleSchema.index({ createdAt: -1 });

export const ArticleModel: Model<ArticleDoc> =
  (mongoose.models.Article as Model<ArticleDoc>) ??
  mongoose.model<ArticleDoc>("Article", articleSchema);

export function serialize(doc: ArticleDoc): IArticle {
  return {
    id: (doc._id as Types.ObjectId).toString(),
    title: doc.title,
    slug: doc.slug,
    content: doc.content,
    excerpt: doc.excerpt ?? null,
    status: doc.status,
    tags: doc.tags,
    coverImage: doc.coverImage ?? null,
    author: doc.author,
    publishedAt: doc.publishedAt ?? null,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
