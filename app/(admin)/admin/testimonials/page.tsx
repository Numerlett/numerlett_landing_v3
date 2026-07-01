import Link from 'next/link'
import { QuoteIcon, PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getTestimonials } from '@/actions/testimonial'
import TestimonialReorderList from '@/components/admin/TestimonialReorderList'

export default async function TestimonialsPage() {
  const result = await getTestimonials()
  const testimonials = result.success && result.data ? result.data : []

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-muted-foreground">Drag to reorder · changes save automatically</p>
        </div>
        <Button asChild size="sm" className="shrink-0 gap-1.5">
          <Link href="/admin/testimonials/new">
            <PlusIcon className="size-4" aria-hidden="true" />
            New Testimonial
          </Link>
        </Button>
      </div>

      {testimonials.length === 0 ? (
        <div className="border-border bg-muted/30 flex flex-col items-center justify-center rounded-xl border py-24 text-center">
          <QuoteIcon className="text-muted-foreground mb-4 size-12" aria-hidden="true" />
          <p className="text-lg font-medium">No testimonials yet</p>
          <p className="text-muted-foreground mb-6 text-sm">
            Add your first client testimonial to get started
          </p>
          <Button asChild size="sm" className="gap-1.5">
            <Link href="/admin/testimonials/new">
              <PlusIcon className="size-4" aria-hidden="true" />
              New Testimonial
            </Link>
          </Button>
        </div>
      ) : (
        <TestimonialReorderList initialTestimonials={testimonials} />
      )}
    </div>
  )
}
