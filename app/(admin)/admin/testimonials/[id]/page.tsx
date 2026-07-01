import { notFound } from 'next/navigation'
import { getTestimonialById } from '@/actions/testimonial'
import TestimonialForm from '@/components/admin/TestimonialForm'

type Props = { params: Promise<{ id: string }> }

export default async function EditTestimonialPage({ params }: Props) {
  const { id } = await params
  const result = await getTestimonialById(id)

  if (!result.success || !result.data) notFound()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Testimonial</h1>
        <p className="text-muted-foreground">Update the client testimonial details</p>
      </div>
      <TestimonialForm testimonial={result.data} />
    </div>
  )
}
