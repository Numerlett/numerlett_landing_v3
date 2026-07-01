'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { createTestimonial, updateTestimonial } from '@/actions/testimonial'
import { TestimonialStatus, type ITestimonial } from '@/database/types'

const testimonialSchema = z.object({
  quote: z.string().min(1, 'Quote is required'),
  name: z.string().min(1, 'Name is required'),
  role: z.string().min(1, 'Role / title is required'),
  company: z.string(),
  status: z.nativeEnum(TestimonialStatus),
  order: z.coerce.number().int().min(0),
  rating: z.coerce.number().int().min(1).max(5),
})

type TestimonialFormValues = z.infer<typeof testimonialSchema>

interface TestimonialFormProps {
  testimonial?: ITestimonial
}

export default function TestimonialForm({ testimonial }: TestimonialFormProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      quote: testimonial?.quote ?? '',
      name: testimonial?.name ?? '',
      role: testimonial?.role ?? '',
      company: testimonial?.company ?? '',
      status: testimonial?.status ?? TestimonialStatus.PUBLISHED,
      order: testimonial?.order ?? 0,
      rating: testimonial?.rating ?? 5,
    },
  })

  // eslint-disable-next-line react-hooks/incompatible-library
  const status = watch('status')

  const onSubmit = (values: TestimonialFormValues) => {
    startTransition(async () => {
      const result = testimonial
        ? await updateTestimonial(testimonial.id, values)
        : await createTestimonial(values)

      if (result.success) {
        toast.success(testimonial ? 'Testimonial updated' : 'Testimonial created')
        router.push('/admin/testimonials')
        router.refresh()
      } else {
        toast.error(result.error ?? 'Something went wrong')
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl space-y-6" id="testimonial-form">
      <div className="space-y-2">
        <Label htmlFor="t-quote">Quote</Label>
        <Textarea
          id="t-quote"
          placeholder="What the client said, in their own words…"
          rows={5}
          {...register('quote')}
        />
        {errors.quote && <p className="text-destructive text-sm">{errors.quote.message}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="t-name">Client Name</Label>
          <Input id="t-name" placeholder="e.g. Ravi Sharma" {...register('name')} />
          {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="t-role">Role / Title</Label>
          <Input id="t-role" placeholder="e.g. CEO" {...register('role')} />
          {errors.role && <p className="text-destructive text-sm">{errors.role.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="t-company">Company</Label>
        <Input id="t-company" placeholder="e.g. Acme Corp" {...register('company')} />
      </div>

      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="t-status">Status</Label>
          <Select value={status} onValueChange={(val) => setValue('status', val as TestimonialStatus)}>
            <SelectTrigger id="t-status">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TestimonialStatus.PUBLISHED}>Published</SelectItem>
              <SelectItem value={TestimonialStatus.DRAFT}>Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-28 space-y-2">
          <Label htmlFor="t-rating">Rating (1–5)</Label>
          <Input id="t-rating" type="number" min={1} max={5} {...register('rating')} />
          {errors.rating && <p className="text-destructive text-sm">{errors.rating.message}</p>}
        </div>

        <div className="w-28 space-y-2">
          <Label htmlFor="t-order">Display Order</Label>
          <Input id="t-order" type="number" min={0} {...register('order')} />
          {errors.order && <p className="text-destructive text-sm">{errors.order.message}</p>}
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Saving…' : testimonial ? 'Update Testimonial' : 'Create Testimonial'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push('/admin/testimonials')}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
