'use client'

import { useState, useTransition } from 'react'
import { Reorder, useDragControls } from 'framer-motion'
import Link from 'next/link'
import { GripVerticalIcon, StarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { reorderTestimonials } from '@/actions/testimonial'
import { TestimonialStatus, type ITestimonial } from '@/database/types'
import TestimonialDeleteButton from '@/components/admin/TestimonialDeleteButton'
import { toast } from 'sonner'

const statusConfig: Record<TestimonialStatus, { label: string; className: string }> = {
  DRAFT: { label: 'Draft', className: 'bg-muted text-muted-foreground' },
  PUBLISHED: { label: 'Published', className: 'bg-green-500/10 text-green-700 dark:text-green-400' },
}

interface TestimonialReorderItemProps {
  testimonial: ITestimonial
  onDragEnd: () => void
}

function TestimonialReorderItem({ testimonial, onDragEnd }: TestimonialReorderItemProps) {
  const controls = useDragControls()

  return (
    <Reorder.Item
      value={testimonial}
      dragListener={false}
      dragControls={controls}
      onDragEnd={onDragEnd}
      className="list-none"
    >
      <Card className="transition-shadow hover:shadow-brand-md">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <button
              type="button"
              className="text-muted-foreground mt-1 shrink-0 cursor-grab touch-none active:cursor-grabbing"
              onPointerDown={(e) => controls.start(e)}
              aria-label="Drag to reorder"
            >
              <GripVerticalIcon className="size-5" aria-hidden="true" />
            </button>

            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-sm font-medium italic text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-1 font-semibold">
                {testimonial.name}
                {testimonial.company && (
                  <span className="ml-1 font-normal text-muted-foreground">
                    — {testimonial.role}, {testimonial.company}
                  </span>
                )}
              </p>
              <div className="mt-1 flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="size-3 fill-current" aria-hidden="true" />
                ))}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-xs font-medium',
                  statusConfig[testimonial.status].className,
                )}
              >
                {statusConfig[testimonial.status].label}
              </span>
              <Button asChild size="sm" variant="outline">
                <Link href={`/admin/testimonials/${testimonial.id}`}>Edit</Link>
              </Button>
              <TestimonialDeleteButton id={testimonial.id} />
            </div>
          </div>
        </CardContent>
      </Card>
    </Reorder.Item>
  )
}

interface TestimonialReorderListProps {
  initialTestimonials: ITestimonial[]
}

export default function TestimonialReorderList({ initialTestimonials }: TestimonialReorderListProps) {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>(initialTestimonials)
  const [isPending, startTransition] = useTransition()

  const handleDragEnd = () => {
    startTransition(async () => {
      const result = await reorderTestimonials(
        testimonials.map((t, i) => ({ id: t.id, order: i })),
      )
      if (!result.success) {
        toast.error(result.error ?? 'Failed to save order')
      }
    })
  }

  return (
    <div className="relative">
      {isPending && (
        <p className="text-muted-foreground absolute -top-6 right-0 text-xs">Saving order…</p>
      )}
      <Reorder.Group axis="y" values={testimonials} onReorder={setTestimonials} className="space-y-3">
        {testimonials.map((t) => (
          <TestimonialReorderItem key={t.id} testimonial={t} onDragEnd={handleDragEnd} />
        ))}
      </Reorder.Group>
    </div>
  )
}
