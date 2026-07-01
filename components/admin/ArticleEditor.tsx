"use client";

import { useState, useTransition, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { type Variants, motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowLeftIcon,
  SaveIcon,
  SendIcon,
  ArchiveIcon,
  TrashIcon,
  CheckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import RichTextEditor from "@/components/admin/RichTextEditor";
import FileUpload, { type UploadResult } from "@/components/admin/FileUpload";
import { createArticle, updateArticle, deleteArticle } from "@/actions/article";
import { ArticleStatus, type IArticle } from "@/database/types";

const pageEnter: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const statusConfig: Record<
  ArticleStatus,
  { label: string; className: string }
> = {
  DRAFT: { label: "Draft", className: "bg-muted text-muted-foreground" },
  PUBLISHED: {
    label: "Published",
    className: "bg-green-500/10 text-green-700 dark:text-green-400",
  },
  ARCHIVED: {
    label: "Archived",
    className: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  },
};

function formatRelativeTime(date: Date): string {
  const diff = Date.now() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 5) return "just now";
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

interface ArticleEditorProps {
  article?: IArticle;
}

export default function ArticleEditor({ article }: ArticleEditorProps) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [isPending, startTransition] = useTransition();

  const [title, setTitle] = useState(article?.title ?? "");
  const [content, setContent] = useState(article?.content ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [status, setStatus] = useState<ArticleStatus>(
    article?.status ?? ArticleStatus.DRAFT,
  );
  const [coverImage, setCoverImage] = useState(article?.coverImage ?? "");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>(article?.tags ?? []);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [relativeTime, setRelativeTime] = useState("");

  const isEditing = !!article;

  // Update "saved X ago" every 15 seconds
  useEffect(() => {
    if (!lastSaved) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRelativeTime(formatRelativeTime(lastSaved));
    const id = setInterval(
      () => setRelativeTime(formatRelativeTime(lastSaved)),
      15_000,
    );
    return () => clearInterval(id);
  }, [lastSaved]);

  const addTag = () => {
    const trimmed = tagInput.trim().toLowerCase();
    if (trimmed && !tags.includes(trimmed)) {
      setTags((prev) => [...prev, trimmed]);
    }
    setTagInput("");
  };

  const removeTag = (tag: string) =>
    setTags((prev) => prev.filter((t) => t !== tag));

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
    if (e.key === "Backspace" && tagInput === "" && tags.length > 0) {
      setTags((prev) => prev.slice(0, -1));
    }
  };

  // Capture latest values in ref so the Cmd+S handler always sees fresh state
  const saveStateRef = useRef({ title, content, excerpt, status, tags, coverImage });
  useEffect(() => {
    saveStateRef.current = { title, content, excerpt, status, tags, coverImage };
  }, [title, content, excerpt, status, tags, coverImage]);

  const handleSave = (overrideStatus?: ArticleStatus) => {
    const { title, content, excerpt, status, tags, coverImage } =
      saveStateRef.current;

      if (!title.trim()) {
        toast.error("Title is required");
        return;
      }

      const finalStatus = overrideStatus ?? status;

      startTransition(async () => {
        if (isEditing) {
          const result = await updateArticle(article.id, {
            title,
            content,
            excerpt: excerpt || null,
            status: finalStatus,
            tags,
            coverImage: coverImage || null,
          });
          if (result.success) {
            setStatus(finalStatus);
            setLastSaved(new Date());
            setRelativeTime("just now");
            toast.success(
              finalStatus === ArticleStatus.PUBLISHED
                ? "Article published"
                : "Article saved",
            );
          } else {
            toast.error(result.error ?? "Failed to save");
          }
        } else {
          const result = await createArticle({
            title,
            content,
            excerpt: excerpt || undefined,
            status: finalStatus,
            tags,
            coverImage: coverImage || undefined,
          });
          if (result.success && result.data) {
            setLastSaved(new Date());
            setRelativeTime("just now");
            toast.success(
              finalStatus === ArticleStatus.PUBLISHED
                ? "Article published"
                : "Article saved",
            );
            router.push(`/admin/articles/${result.data.id}/edit`);
          } else {
            toast.error(result.error ?? "Failed to save");
          }
        }
      });
    };

  // Cmd+S / Ctrl+S keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSave]);

  const handleDelete = () => {
    if (!article) return;
    startTransition(async () => {
      const result = await deleteArticle(article.id);
      if (result.success) {
        toast.success("Article deleted");
        router.push("/admin/articles");
      } else {
        toast.error(result.error ?? "Failed to delete");
      }
    });
  };

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : pageEnter}
      initial="hidden"
      animate="visible"
      className="flex h-full flex-col gap-0"
    >
      {/* Header bar */}
      <div className="border-border bg-background/80 sticky top-0 z-10 flex items-center gap-3 border-b px-4 py-2.5 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/admin/articles")}
          className="gap-1.5"
          aria-label="Back to articles"
        >
          <ArrowLeftIcon className="size-4" aria-hidden="true" />
          Articles
        </Button>

        <Separator orientation="vertical" className="h-5" />

        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusConfig[status].className}`}
        >
          {statusConfig[status].label}
        </span>

        {lastSaved && (
          <span className="text-muted-foreground hidden items-center gap-1 text-xs sm:flex">
            <CheckIcon className="size-3" aria-hidden="true" />
            Saved {relativeTime}
          </span>
        )}

        <div className="ml-auto flex items-center gap-2">
          {isEditing && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={isPending}
                  aria-label="Delete article"
                >
                  <TrashIcon
                    className="text-destructive size-4"
                    aria-hidden="true"
                  />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete article?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. The article will be
                    permanently deleted.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSave(ArticleStatus.DRAFT)}
            disabled={isPending}
            className="gap-1.5"
          >
            <SaveIcon className="size-3.5" aria-hidden="true" />
            Save draft
          </Button>

          <Button
            size="sm"
            onClick={() => handleSave(ArticleStatus.PUBLISHED)}
            disabled={isPending}
            className="gap-1.5"
          >
            <SendIcon className="size-3.5" aria-hidden="true" />
            {status === ArticleStatus.PUBLISHED ? "Update" : "Publish"}
          </Button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 gap-6 overflow-y-auto p-4 md:p-6">
        {/* Main editor column */}
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article title…"
            className="text-foreground placeholder:text-muted-foreground w-full border-none bg-transparent text-3xl font-bold outline-none focus:outline-none"
            aria-label="Article title"
          />

          <RichTextEditor
            value={content}
            onChange={setContent}
            placeholder="Start writing your article…"
          />
        </div>

        {/* Sidebar */}
        <aside className="hidden w-72 shrink-0 flex-col gap-4 md:flex">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <MetaField label="Status">
                <Select
                  value={status}
                  onValueChange={(v) => setStatus(v as ArticleStatus)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ArticleStatus.DRAFT}>Draft</SelectItem>
                    <SelectItem value={ArticleStatus.PUBLISHED}>
                      Published
                    </SelectItem>
                    <SelectItem value={ArticleStatus.ARCHIVED}>
                      Archived
                    </SelectItem>
                  </SelectContent>
                </Select>
              </MetaField>

              <MetaField label="Excerpt">
                <Textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Short description shown in article listings…"
                  rows={3}
                  className="resize-none text-sm"
                />
              </MetaField>

              <MetaField label="Cover image">
                <FileUpload
                  accept="image/*"
                  folder="articles/covers"
                  value={coverImage || null}
                  valueType="image/jpeg"
                  onUpload={(result: UploadResult) =>
                    setCoverImage(result.url)
                  }
                  onRemove={() => setCoverImage("")}
                />
              </MetaField>

              <MetaField label="Tags">
                <div className="border-input bg-background focus-within:ring-ring flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2.5 py-1.5 focus-within:ring-1">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer gap-1 text-xs"
                      onClick={() => removeTag(tag)}
                    >
                      {tag}
                      <span aria-hidden="true" className="ml-0.5 opacity-60">
                        ×
                      </span>
                    </Badge>
                  ))}
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    onBlur={addTag}
                    placeholder={tags.length === 0 ? "Add tags…" : ""}
                    className="placeholder:text-muted-foreground min-w-16 flex-1 bg-transparent text-sm outline-none"
                    aria-label="Add tag"
                  />
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  Press Enter or comma to add
                </p>
              </MetaField>
            </CardContent>
          </Card>

          {isEditing && article.publishedAt && (
            <Card>
              <CardContent className="pt-4">
                <div className="text-muted-foreground space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Published</span>
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last updated</span>
                    <span>{formatDate(article.updatedAt)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {isEditing && status === ArticleStatus.PUBLISHED && (
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-1.5"
              disabled={isPending}
              onClick={() => handleSave(ArticleStatus.ARCHIVED)}
            >
              <ArchiveIcon className="size-3.5" aria-hidden="true" />
              Archive article
            </Button>
          )}

          <p className="text-muted-foreground px-1 text-xs">
            Tip: press{" "}
            <kbd className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
              ⌘S
            </kbd>{" "}
            /{" "}
            <kbd className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
              Ctrl+S
            </kbd>{" "}
            to save
          </p>
        </aside>
      </div>
    </motion.div>
  );
}

function MetaField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
        {label}
      </p>
      {children}
    </div>
  );
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
