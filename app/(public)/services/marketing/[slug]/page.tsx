import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { marketingServices } from '@/data/services'
import ServicePage from '@/components/services/ServicePage'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = marketingServices.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} | NumerLett Marketing Services`,
    description: service.description,
  }
}

export function generateStaticParams() {
  return marketingServices.map((s) => ({ slug: s.slug }))
}

export default async function MarketingServicePage({ params }: Props) {
  const { slug } = await params
  const service = marketingServices.find((s) => s.slug === slug)
  if (!service) notFound()

  return <ServicePage slug={slug} category="marketing" />
}
