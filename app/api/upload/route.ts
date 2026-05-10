import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { uploadFile, isAllowedType, getMaxSize, ALLOWED_MIME_TYPES } from "@/services/upload";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const folder = (formData.get("folder") as string | null) ?? "uploads";

  if (!isAllowedType(file.type)) {
    return NextResponse.json(
      {
        error: `File type "${file.type}" is not allowed. Accepted types: ${ALLOWED_MIME_TYPES.join(", ")}`,
      },
      { status: 422 },
    );
  }

  const maxSize = getMaxSize(file.type);
  if (file.size > maxSize) {
    const limitMB = Math.round(maxSize / 1024 / 1024);
    return NextResponse.json(
      { error: `File exceeds the ${limitMB} MB size limit` },
      { status: 422 },
    );
  }

  try {
    const result = await uploadFile(file, file.name, folder);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
