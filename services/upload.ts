import { put, del } from "@vercel/blob";

export type UploadedFile = {
  url: string;
  pathname: string;
  contentType: string;
  size: number;
};

export type AllowedMimeType =
  | "image/jpeg"
  | "image/jpg"
  | "image/png"
  | "image/gif"
  | "image/webp"
  | "image/svg+xml"
  | "application/pdf";

export const ALLOWED_MIME_TYPES: AllowedMimeType[] = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
  "application/pdf",
];

export const MAX_SIZE_BYTES: Record<string, number> = {
  image: 10 * 1024 * 1024,  // 10 MB
  application: 25 * 1024 * 1024, // 25 MB
};

export function isAllowedType(mimeType: string): mimeType is AllowedMimeType {
  return ALLOWED_MIME_TYPES.includes(mimeType as AllowedMimeType);
}

export function getMaxSize(mimeType: string): number {
  const category = mimeType.split("/")[0];
  return MAX_SIZE_BYTES[category] ?? 10 * 1024 * 1024;
}

export function isImage(mimeType: string): boolean {
  return mimeType.startsWith("image/");
}

/**
 * Upload a file to Vercel Blob.
 * @param file - The file or Blob to upload.
 * @param filename - Desired filename (will be sanitised).
 * @param folder - Optional path prefix, e.g. "articles/covers".
 */
export async function uploadFile(
  file: File | Blob,
  filename: string,
  folder = "uploads",
): Promise<UploadedFile> {
  const mimeType = file.type || "application/octet-stream";

  if (!isAllowedType(mimeType)) {
    throw new Error(`File type "${mimeType}" is not allowed.`);
  }

  const maxSize = getMaxSize(mimeType);
  if (file.size > maxSize) {
    const limitMB = Math.round(maxSize / 1024 / 1024);
    throw new Error(`File exceeds the ${limitMB} MB size limit.`);
  }

  const safeName = filename
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-");

  const pathname = `${folder}/${Date.now()}-${safeName}`;

  const blob = await put(pathname, file, {
    access: "public",
    contentType: mimeType,
  });

  return {
    url: blob.url,
    pathname: blob.pathname,
    contentType: mimeType,
    size: file.size,
  };
}

/**
 * Delete a file from Vercel Blob by its public URL.
 */
export async function deleteFile(url: string): Promise<void> {
  await del(url);
}
