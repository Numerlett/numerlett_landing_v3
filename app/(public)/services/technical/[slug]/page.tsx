import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { techServices } from '@/data/services'
import ServicePage from '@/components/services/ServicePage'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = techServices.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} | NumerLett Technology Services`,
    description: service.description,
  }
}

export function generateStaticParams() {
  return techServices.map((s) => ({ slug: s.slug }))
}

export default async function TechServicePage({ params }: Props) {
  const { slug } = await params
  const service = techServices.find((s) => s.slug === slug)
  if (!service) notFound()

  return <ServicePage slug={slug} category="technical" />
}
