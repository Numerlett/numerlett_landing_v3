'use client'

import { motion, type Variants } from 'framer-motion'
import { Megaphone, Monitor } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Container from '@/components/Container'
import { techServices, marketingServices, type ServiceDetail } from '@/data/services'

const cardVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } },
  tap: { scale: 0.97, transition: { type: 'spring', stiffness: 500, damping: 30 } },
}

type ServicesPanelProps = {
  id: string
  labelledBy: string
  title: string
  description: string
  chips: string[]
  services: ServiceDetail[]
  active: boolean
  headingId: string
}

function ServicesPanel({
  id,
  labelledBy,
  title,
  description,
  chips,
  services,
  active,
  headingId,
}: ServicesPanelProps) {
  const router = useRouter()

  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={labelledBy}
      className={`mt-14 ${active ? 'block' : 'hidden'}`}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div>
          <h3
            className="reveal font-display text-[22px] font-bold tracking-[-0.5px]"
            id={headingId}
          >
            {title}
          </h3>
          <p className="reveal mt-3 max-w-105 text-[15px] text-muted-foreground delay-1">
            {description}
          </p>
        </div>
        <div className="reveal flex flex-col gap-3 delay-2 lg:items-start">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex w-fit items-center gap-1 rounded-full border border-primary/30 bg-accent px-3 py-1 text-[12.5px] font-semibold text-primary"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.Icon
          const href = `/services/${service.category}/${service.slug}`
          return (
            <motion.article
              key={service.title}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => router.push(href)}
              className={`reveal ${index ? `delay-${(index % 4) + 1}` : ''} relative cursor-pointer overflow-hidden rounded-brand-md border border-border bg-card p-6 transition-colors before:absolute before:top-0 before:right-0 before:left-0 before:h-0.75 before:origin-left before:scale-x-0 before:bg-primary before:transition-transform hover:border-primary hover:shadow-brand-md hover:before:scale-x-100 sm:p-7`}
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[12px] bg-accent text-foreground transition-colors">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h4 className="font-display text-[16px] font-bold tracking-[-0.3px]" itemProp="name">
                {service.title}
              </h4>
              <p
                className="mt-2 text-[13.5px] leading-[1.7] text-muted-foreground"
                itemProp="description"
              >
                {service.description}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary"
                itemProp="url"
                aria-hidden="true"
              >
                Learn more <span className="text-base">→</span>
              </span>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'tech' | 'mkt'>('tech')

  return (
    <section className="bg-background py-24" id="services" aria-labelledby="services-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
              <span className="h-0.5 w-6 rounded bg-primary" aria-hidden="true" />
              Our Expertise
            </div>
            <h2
              id="services-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            >
              Two Powerhouses.
              <br />
              One Roof.
            </h2>
          </div>
          <p className="reveal delay-2 max-w-100 text-[18px] font-light leading-[1.75] text-muted-foreground">
            Whether you need cutting-edge technology built or your market presence amplified — we do
            both, and we connect them.
          </p>
        </div>

        <div
          className="mt-10 flex flex-nowrap gap-2 overflow-x-auto border-b-2 border-border pb-2 md:mt-14 md:flex-wrap md:overflow-visible md:pb-0"
          role="tablist"
        >
          <button
            type="button"
            role="tab"
            id="tab-tech"
            aria-selected={activeTab === 'tech'}
            aria-controls="panel-tech"
            className={`border-b-[3px] px-4 py-3 text-[14px] font-semibold transition-colors sm:px-6 sm:text-[15px] ${
              activeTab === 'tech'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('tech')}
          >
            <Monitor className="mr-2 inline-block size-4 align-middle" aria-hidden="true" />
            Technology Services
          </button>
          <button
            type="button"
            role="tab"
            id="tab-mkt"
            aria-selected={activeTab === 'mkt'}
            aria-controls="panel-mkt"
            className={`border-b-[3px] px-4 py-3 text-[14px] font-semibold transition-colors sm:px-6 sm:text-[15px] ${
              activeTab === 'mkt'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('mkt')}
          >
            <Megaphone className="mr-2 inline-block size-4 align-middle" aria-hidden="true" />
            Marketing Services
          </button>
        </div>

        <ServicesPanel
          id="panel-tech"
          labelledBy="tab-tech"
          title="Technology Services"
          description="From concept to deployment — we architect, build, and scale digital products that solve real business problems and create competitive advantages."
          chips={['✓ Agile delivery', '✓ 99.9% SLA uptime', '✓ Enterprise-grade security']}
          services={techServices}
          active={activeTab === 'tech'}
          headingId="tech-services"
        />
        <ServicesPanel
          id="panel-mkt"
          labelledBy="tab-mkt"
          title="Marketing Services"
          description="Data-driven, full-funnel marketing strategies that build brand authority, generate qualified leads, and convert them into loyal customers."
          chips={['✓ SEO-first approach', '✓ Analytics & attribution', '✓ ROI-guaranteed framework']}
          services={marketingServices}
          active={activeTab === 'mkt'}
          headingId="mkt-services"
        />
      </Container>
    </section>
  )
}
