"use client";

import { useRef, useState, useCallback } from "react";
import { type Variants, motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import {
  UploadCloudIcon,
  FileTextIcon,
  XIcon,
  Loader2Icon,
  ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { isImage } from "@/services/upload";

const dropZoneAnim: Variants = {
  idle: { scale: 1, borderColor: "var(--border)" },
  drag: { scale: 1.01, borderColor: "var(--primary)" },
};

const previewAnim: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
};

export type UploadResult = {
  url: string;
  pathname: string;
  contentType: string;
  size: number;
};

interface FileUploadProps {
  /** MIME types to accept, e.g. "image/*,application/pdf" */
  accept?: string;
  /** Upload folder prefix sent to the API, e.g. "articles/covers" */
  folder?: string;
  /** Currently stored URL — used to show existing preview */
  value?: string | null;
  /** Current file MIME type (needed to pick the right preview for stored files) */
  valueType?: string;
  onUpload: (result: UploadResult) => void;
  onRemove?: () => void;
  className?: string;
}

async function uploadToApi(
  file: File,
  folder: string,
): Promise<UploadResult> {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("folder", folder);

  const res = await fetch("/api/upload", { method: "POST", body: fd });
  const json = await res.json() as { url?: string; pathname?: string; contentType?: string; size?: number; error?: string };

  if (!res.ok) {
    throw new Error(json.error ?? "Upload failed");
  }

  return {
    url: json.url!,
    pathname: json.pathname!,
    contentType: json.contentType!,
    size: json.size!,
  };
}

export default function FileUpload({
  accept = "image/*,application/pdf",
  folder = "uploads",
  value,
  valueType,
  onUpload,
  onRemove,
  className,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleFile = useCallback(
    async (file: File) => {
      setIsUploading(true);
      try {
        const result = await uploadToApi(file, folder);
        onUpload(result);
        toast.success("File uploaded");
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Upload failed";
        toast.error(msg);
      } finally {
        setIsUploading(false);
        if (inputRef.current) inputRef.current.value = "";
      }
    },
    [folder, onUpload],
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const hasValue = !!value;
  const valueIsImage = valueType ? isImage(valueType) : value ? /\.(png|jpe?g|gif|webp|svg)$/i.test(value) : false;

  return (
    <div className={cn("space-y-2", className)}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="sr-only"
        aria-label="Upload file"
        onChange={onInputChange}
        tabIndex={-1}
      />

      <AnimatePresence mode="wait">
        {hasValue ? (
          <motion.div
            key="preview"
            variants={shouldReduceMotion ? undefined : previewAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="border-border relative overflow-hidden rounded-brand-md border"
          >
            {valueIsImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={value!}
                alt="Uploaded file preview"
                className="aspect-video w-full object-cover"
              />
            ) : (
              <div className="bg-muted flex items-center gap-3 px-4 py-3">
                <FileTextIcon className="text-primary size-8 shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium truncate">
                  {value!.split("/").pop()}
                </span>
              </div>
            )}

            <div className="absolute right-2 top-2 flex gap-1.5">
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="size-7 shadow-brand-sm"
                onClick={() => inputRef.current?.click()}
                disabled={isUploading}
                aria-label="Replace file"
              >
                {isUploading ? (
                  <Loader2Icon className="size-3.5 animate-spin" aria-hidden="true" />
                ) : (
                  <UploadCloudIcon className="size-3.5" aria-hidden="true" />
                )}
              </Button>

              {onRemove && (
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="size-7 shadow-brand-sm"
                  onClick={onRemove}
                  aria-label="Remove file"
                >
                  <XIcon className="size-3.5" aria-hidden="true" />
                </Button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dropzone"
            variants={shouldReduceMotion ? undefined : dropZoneAnim}
            animate={isDragging ? "drag" : "idle"}
            className={cn(
              "border-border bg-muted/30 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-brand-md border-2 border-dashed px-4 py-8 text-center transition-colors",
              isDragging && "bg-accent/30",
              isUploading && "pointer-events-none opacity-60",
            )}
            onClick={() => !isUploading && inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
            role="button"
            tabIndex={0}
            aria-label="Upload file drop zone"
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") inputRef.current?.click(); }}
          >
            {isUploading ? (
              <Loader2Icon className="text-primary size-8 animate-spin" aria-hidden="true" />
            ) : (
              <div className="flex items-center gap-2">
                <ImageIcon className="text-muted-foreground size-5" aria-hidden="true" />
                <FileTextIcon className="text-muted-foreground size-5" aria-hidden="true" />
              </div>
            )}

            <div>
              <p className="text-sm font-medium">
                {isUploading ? "Uploading…" : "Drop file here or click to browse"}
              </p>
              <p className="text-muted-foreground text-xs">
                Images up to 10 MB · PDFs up to 25 MB
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
