import Container from '@/components/Container'
import { getTestimonials } from '@/actions/testimonial'
import { TestimonialStatus, type ITestimonial } from '@/database/types'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mb-4 text-[16px] tracking-[2px] text-primary" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: ITestimonial; index: number }) {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const delayClass = index === 0 ? '' : `delay-${Math.min(index + 1, 4)}`

  return (
    <blockquote
      className={`reveal ${delayClass} rounded-brand-md border border-border bg-white p-6 transition-all hover:border-primary-mid hover:shadow-brand-md sm:p-8`}
      itemScope
      itemType="https://schema.org/Review"
    >
      <StarRating rating={testimonial.rating} />
      <p
        className="mb-6 text-[14.5px] font-light leading-[1.8] text-muted-foreground"
        itemProp="reviewBody"
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-accent text-[14px] font-extrabold text-primary">
          {initials}
        </div>
        <div>
          <div className="text-[14px] font-bold" itemProp="author">
            {testimonial.name}
          </div>
          <div className="text-[12px] text-text-muted">
            {testimonial.role}
            {testimonial.company && `, ${testimonial.company}`}
          </div>
        </div>
      </div>
    </blockquote>
  )
}

export default async function TestimonialsSection() {
  const result = await getTestimonials(TestimonialStatus.PUBLISHED)
  const testimonials = result.success && result.data ? result.data : []

  if (testimonials.length === 0) return null

  return (
    <section className="bg-muted py-24" aria-labelledby="testimonials-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
              <span className="h-0.5 w-6 rounded bg-primary" aria-hidden="true" />
              Client Testimonials
            </div>
            <h2
              id="testimonials-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            >
              What Our Clients
              <br />
              Actually Say.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
