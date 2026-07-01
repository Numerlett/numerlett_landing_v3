import TestimonialForm from '@/components/admin/TestimonialForm'

export default function NewTestimonialPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">New Testimonial</h1>
        <p className="text-muted-foreground">Add a client testimonial to your website</p>
      </div>
      <TestimonialForm />
    </div>
  )
}
