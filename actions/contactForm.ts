"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/database";
import { ContactFormModel, serialize } from "@/database/models/contactForm";
import { ContactFormStatus } from "@/database/types";

export async function getContactForms(status?: ContactFormStatus) {
  try {
    await connectDB();
    const docs = await ContactFormModel.find(status ? { status } : {}).sort({
      createdAt: -1,
    });
    return { success: true, data: docs.map(serialize) };
  } catch {
    return { success: false, error: "Failed to fetch contact forms" };
  }
}

export async function getContactFormById(id: string) {
  try {
    await connectDB();
    const doc = await ContactFormModel.findById(id);
    return { success: true, data: doc ? serialize(doc) : null };
  } catch {
    return { success: false, error: "Failed to fetch contact form" };
  }
}

export async function createContactForm(data: {
  email: string;
  name: string;
  mobile: string;
  message: string;
}) {
  try {
    await connectDB();
    const doc = await ContactFormModel.create(data);
    revalidatePath("/admin/contact");
    return { success: true, data: serialize(doc) };
  } catch {
    return { success: false, error: "Failed to submit contact form" };
  }
}

export async function updateContactFormStatus(
  id: string,
  status: ContactFormStatus,
  adminNotes?: string,
) {
  try {
    await connectDB();
    const doc = await ContactFormModel.findByIdAndUpdate(
      id,
      { status, ...(adminNotes !== undefined ? { adminNotes } : {}) },
      { new: true },
    );
    revalidatePath("/admin/contact");
    return { success: true, data: doc ? serialize(doc) : null };
  } catch {
    return { success: false, error: "Failed to update contact form status" };
  }
}

export async function deleteContactForm(id: string) {
  try {
    await connectDB();
    await ContactFormModel.findByIdAndDelete(id);
    revalidatePath("/admin/contact");
    return { success: true };
  } catch {
    return { success: false, error: "Failed to delete contact form" };
  }
}

export async function getContactFormStats() {
  try {
    await connectDB();
    const [total, pending, inProgress, resolved, closed] = await Promise.all([
      ContactFormModel.countDocuments(),
      ContactFormModel.countDocuments({ status: ContactFormStatus.PENDING }),
      ContactFormModel.countDocuments({
        status: ContactFormStatus.IN_PROGRESS,
      }),
      ContactFormModel.countDocuments({ status: ContactFormStatus.RESOLVED }),
      ContactFormModel.countDocuments({ status: ContactFormStatus.CLOSED }),
    ]);
    return {
      success: true,
      data: { total, pending, inProgress, resolved, closed },
    };
  } catch {
    return { success: false, error: "Failed to fetch contact form stats" };
  }
}
