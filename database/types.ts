export enum ContactFormStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

export interface IContactForm {
  id: string;
  email: string;
  name: string;
  mobile: string;
  message: string;
  status: ContactFormStatus;
  adminNotes: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export enum ArticleStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}

export interface IArticle {
  id: string;
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

export enum FaqStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

export interface IFaq {
  id: string;
  question: string;
  answer: string;
  status: FaqStatus;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}
