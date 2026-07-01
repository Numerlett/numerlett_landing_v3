'use server'

import { revalidatePath } from 'next/cache'
import { connectDB } from '@/database'
import { TestimonialModel, serialize } from '@/database/models/testimonial'
import { TestimonialStatus } from '@/database/types'

export async function getTestimonials(status?: TestimonialStatus) {
  try {
    await connectDB()
    const docs = await TestimonialModel.find(status ? { status } : {}).sort({ order: 1 })
    return { success: true, data: docs.map(serialize) }
  } catch {
    return { success: false, error: 'Failed to fetch testimonials' }
  }
}

export async function getTestimonialById(id: string) {
  try {
    await connectDB()
    const doc = await TestimonialModel.findById(id)
    return { success: true, data: doc ? serialize(doc) : null }
  } catch {
    return { success: false, error: 'Failed to fetch testimonial' }
  }
}

export async function createTestimonial(data: {
  quote: string
  name: string
  role: string
  company: string
  status?: TestimonialStatus
  order?: number
  rating?: number
}) {
  try {
    await connectDB()

    const maxOrderDoc = await TestimonialModel.findOne().sort({ order: -1 })
    const nextOrder = maxOrderDoc ? maxOrderDoc.order + 1 : 0

    const doc = await TestimonialModel.create({
      quote: data.quote,
      name: data.name,
      role: data.role,
      company: data.company ?? '',
      status: data.status ?? TestimonialStatus.PUBLISHED,
      order: data.order ?? nextOrder,
      rating: data.rating ?? 5,
    })

    revalidatePath('/', 'layout')
    return { success: true, data: serialize(doc) }
  } catch {
    return { success: false, error: 'Failed to create testimonial' }
  }
}

export async function updateTestimonial(
  id: string,
  data: {
    quote?: string
    name?: string
    role?: string
    company?: string
    status?: TestimonialStatus
    order?: number
    rating?: number
  },
) {
  try {
    await connectDB()
    const doc = await TestimonialModel.findByIdAndUpdate(id, data, { new: true })
    if (!doc) return { success: false, error: 'Testimonial not found' }
    revalidatePath('/', 'layout')
    return { success: true, data: serialize(doc) }
  } catch {
    return { success: false, error: 'Failed to update testimonial' }
  }
}

export async function deleteTestimonial(id: string) {
  try {
    await connectDB()
    await TestimonialModel.findByIdAndDelete(id)
    revalidatePath('/', 'layout')
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to delete testimonial' }
  }
}

export async function reorderTestimonials(items: { id: string; order: number }[]) {
  try {
    await connectDB()
    await Promise.all(
      items.map(({ id, order }) => TestimonialModel.findByIdAndUpdate(id, { order })),
    )
    revalidatePath('/', 'layout')
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to reorder testimonials' }
  }
}

export async function getTestimonialStats() {
  try {
    await connectDB()
    const [total, published, draft] = await Promise.all([
      TestimonialModel.countDocuments(),
      TestimonialModel.countDocuments({ status: TestimonialStatus.PUBLISHED }),
      TestimonialModel.countDocuments({ status: TestimonialStatus.DRAFT }),
    ])
    return { success: true, data: { total, published, draft } }
  } catch {
    return { success: false, error: 'Failed to fetch testimonial stats' }
  }
}
