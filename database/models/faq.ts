import mongoose, { Schema, type Document, type Model, type Types } from "mongoose";
import { FaqStatus, type IFaq } from "@/database/types";

export { FaqStatus, type IFaq };

interface FaqDoc extends Document {
  question: string;
  answer: string;
  status: FaqStatus;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const faqSchema = new Schema<FaqDoc>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(FaqStatus),
      default: FaqStatus.PUBLISHED,
    },
    order: { type: Number, required: true, default: 0 },
  },
  { timestamps: true, collection: "faqs" },
);

faqSchema.index({ status: 1 });
faqSchema.index({ order: 1 });

export const FaqModel: Model<FaqDoc> =
  (mongoose.models.Faq as Model<FaqDoc>) ??
  mongoose.model<FaqDoc>("Faq", faqSchema);

export function serialize(doc: FaqDoc): IFaq {
  return {
    id: (doc._id as Types.ObjectId).toString(),
    question: doc.question,
    answer: doc.answer,
    status: doc.status,
    order: doc.order,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}
