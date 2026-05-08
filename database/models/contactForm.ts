import mongoose, { Schema, type Document, type Model, type Types } from "mongoose";
import { ContactFormStatus, type IContactForm } from "@/database/types";

export { ContactFormStatus, type IContactForm };

interface ContactFormDoc extends Document {
  email: string;
  name: string;
  mobile: string;
  message: string;
  status: ContactFormStatus;
  adminNotes: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const contactFormSchema = new Schema<ContactFormDoc>(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(ContactFormStatus),
      default: ContactFormStatus.PENDING,
    },
    adminNotes: { type: String, default: null },
  },
  { timestamps: true, collection: "contact_forms" },
);

contactFormSchema.index({ status: 1 });
contactFormSchema.index({ createdAt: -1 });

export const ContactFormModel: Model<ContactFormDoc> =
  (mongoose.models.ContactForm as Model<ContactFormDoc>) ??
  mongoose.model<ContactFormDoc>("ContactForm", contactFormSchema);

export function serialize(doc: ContactFormDoc): IContactForm {
  return {
    id: (doc._id as Types.ObjectId).toString(),
    email: doc.email,
    name: doc.name,
    mobile: doc.mobile,
    message: doc.message,
    status: doc.status,
    adminNotes: doc.adminNotes ?? null,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}
