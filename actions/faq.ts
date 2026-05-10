"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/database";
import { FaqModel, serialize } from "@/database/models/faq";
import { FaqStatus } from "@/database/types";

export async function getFaqs(status?: FaqStatus) {
  try {
    await connectDB();
    const docs = await FaqModel.find(status ? { status } : {}).sort({
      order: 1,
    });
    return { success: true, data: docs.map(serialize) };
  } catch {
    return { success: false, error: "Failed to fetch FAQs" };
  }
}

export async function getFaqById(id: string) {
  try {
    await connectDB();
    const doc = await FaqModel.findById(id);
    return { success: true, data: doc ? serialize(doc) : null };
  } catch {
    return { success: false, error: "Failed to fetch FAQ" };
  }
}

export async function createFaq(data: {
  question: string;
  answer: string;
  status?: FaqStatus;
  order?: number;
}) {
  try {
    await connectDB();

    const maxOrderDoc = await FaqModel.findOne().sort({ order: -1 });
    const nextOrder = maxOrderDoc ? maxOrderDoc.order + 1 : 0;

    const doc = await FaqModel.create({
      question: data.question,
      answer: data.answer,
      status: data.status ?? FaqStatus.PUBLISHED,
      order: data.order ?? nextOrder,
    });

    revalidatePath("/", "layout");
    return { success: true, data: serialize(doc) };
  } catch {
    return { success: false, error: "Failed to create FAQ" };
  }
}

export async function updateFaq(
  id: string,
  data: {
    question?: string;
    answer?: string;
    status?: FaqStatus;
    order?: number;
  },
) {
  try {
    await connectDB();
    const doc = await FaqModel.findByIdAndUpdate(id, data, { new: true });
    if (!doc) return { success: false, error: "FAQ not found" };

    revalidatePath("/", "layout");
    return { success: true, data: serialize(doc) };
  } catch {
    return { success: false, error: "Failed to update FAQ" };
  }
}

export async function deleteFaq(id: string) {
  try {
    await connectDB();
    await FaqModel.findByIdAndDelete(id);
    revalidatePath("/", "layout");
    return { success: true };
  } catch {
    return { success: false, error: "Failed to delete FAQ" };
  }
}
