import mongoose, { Schema, type Document, type Model, type Types } from 'mongoose'
import { TestimonialStatus, type ITestimonial } from '@/database/types'

export { TestimonialStatus, type ITestimonial }

interface TestimonialDoc extends Document {
  quote: string
  name: string
  role: string
  company: string
  status: TestimonialStatus
  order: number
  rating: number
  createdAt: Date
  updatedAt: Date
}

const testimonialSchema = new Schema<TestimonialDoc>(
  {
    quote: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true, default: '' },
    status: {
      type: String,
      enum: Object.values(TestimonialStatus),
      default: TestimonialStatus.PUBLISHED,
    },
    order: { type: Number, required: true, default: 0 },
    rating: { type: Number, min: 1, max: 5, default: 5 },
  },
  { timestamps: true, collection: 'testimonials' },
)

testimonialSchema.index({ status: 1 })
testimonialSchema.index({ order: 1 })

export const TestimonialModel: Model<TestimonialDoc> =
  (mongoose.models.Testimonial as Model<TestimonialDoc>) ??
  mongoose.model<TestimonialDoc>('Testimonial', testimonialSchema)

export function serialize(doc: TestimonialDoc): ITestimonial {
  return {
    id: (doc._id as Types.ObjectId).toString(),
    quote: doc.quote,
    name: doc.name,
    role: doc.role,
    company: doc.company,
    status: doc.status,
    order: doc.order,
    rating: doc.rating,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  }
}
