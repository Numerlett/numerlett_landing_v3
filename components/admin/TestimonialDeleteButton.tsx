'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'
import { Trash2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteTestimonial } from '@/actions/testimonial'
import { useRouter } from 'next/navigation'

export default function TestimonialDeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleDelete = () => {
    if (!confirm('Delete this testimonial? This cannot be undone.')) return
    startTransition(async () => {
      const result = await deleteTestimonial(id)
      if (result.success) {
        toast.success('Testimonial deleted')
        router.refresh()
      } else {
        toast.error('Failed to delete testimonial')
      }
    })
  }

  return (
    <Button
      size="sm"
      variant="ghost"
      className="text-destructive hover:text-destructive"
      onClick={handleDelete}
      disabled={isPending}
      aria-label="Delete testimonial"
    >
      <Trash2Icon className="size-4" aria-hidden="true" />
    </Button>
  )
}
