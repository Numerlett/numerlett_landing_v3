'use client'

import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowLeft, Check, Clock } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import { techServices, marketingServices, type ServiceDetail } from '@/data/services'
import { cn } from '@/lib/utils'

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 26 },
  },
}

const sweepVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 26 },
  },
}

const staggerList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const listItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 28 },
  },
}

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={reduced ? 'visible' : inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ServicePage({
  slug,
  category,
}: {
  slug: string
  category: 'technical' | 'marketing'
}) {
  const reduced = useReducedMotion()
  const services = category === 'technical' ? techServices : marketingServices
  const service = services.find((s) => s.slug === slug) as ServiceDetail

  const { title, tagline, description, Icon, timeline, deliverables, process, useCases, highlights } = service
  const backHref = `/#${category === 'technical' ? 'tech-services' : 'mkt-services'}`
  const categoryLabel = category === 'technical' ? 'Technology Services' : 'Marketing Services'

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-foreground pb-20 pt-16 text-background">
        {/* sweep accent line */}
        <motion.div
          variants={sweepVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 h-1 w-full bg-primary"
          aria-hidden="true"
        />

        {/* subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />

        <Container>
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            {/* breadcrumb */}
            <motion.div variants={heroItemVariants}>
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-background/60 transition-colors hover:text-background"
              >
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                {categoryLabel}
              </Link>
            </motion.div>

            {/* icon */}
            <motion.div
              variants={heroItemVariants}
              className="mt-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary"
            >
              <Icon className="size-8 text-primary-foreground" aria-hidden="true" />
            </motion.div>

            {/* headline */}
            <motion.h1
              variants={heroItemVariants}
              className="mt-6 font-display text-[clamp(32px,5vw,60px)] font-bold leading-[1.05] tracking-[-2px] text-background"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={heroItemVariants}
              className="mt-4 max-w-2xl text-[18px] font-light leading-[1.7] text-background/70"
            >
              {tagline}
            </motion.p>

            {/* timeline badge */}
            <motion.div variants={heroItemVariants} className="mt-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-[13px] font-medium text-background/80">
                <Clock className="size-3.5" aria-hidden="true" />
                Typical timeline: {timeline}
              </span>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── Highlights bar ────────────────────────────────────────── */}
      <div className="border-b border-border bg-muted">
        <Container>
          <motion.div
            variants={staggerList}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 divide-x divide-border"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={listItem}
                className="px-6 py-8 first:pl-0 last:pr-0 sm:px-10"
              >
                <p className="font-display text-[26px] font-bold tracking-[-1px] text-primary sm:text-[32px]">
                  {h.stat}
                </p>
                <p className="mt-1 text-[13px] text-muted-foreground">{h.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>

      {/* ── Overview + Use cases ──────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <AnimatedSection>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
                Overview
              </p>
              <h2 className="mt-3 font-display text-[clamp(24px,3vw,36px)] font-bold leading-[1.15] tracking-[-1px]">
                What we deliver
              </h2>
              <p className="mt-5 text-[16px] font-light leading-[1.85] text-muted-foreground">
                {description}
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
                Who it's for
              </p>
              <h3 className="mt-3 font-display text-[20px] font-bold tracking-[-0.5px]">
                Ideal for
              </h3>
              <motion.ul
                variants={staggerList}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-5 space-y-3"
              >
                {useCases.map((u) => (
                  <motion.li
                    key={u}
                    variants={listItem}
                    className="flex items-start gap-3 text-[14.5px] leading-[1.65] text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {u}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── Deliverables ──────────────────────────────────────────── */}
      <section className="bg-muted py-20">
        <Container>
          <AnimatedSection>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              Deliverables
            </p>
            <h2 className="mt-3 font-display text-[clamp(24px,3vw,36px)] font-bold leading-[1.15] tracking-[-1px]">
              What's included
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Everything below is part of a standard engagement. No hidden extras.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {deliverables.map((d) => (
              <motion.div
                key={d}
                variants={listItem}
                className="flex items-start gap-3 rounded-brand-md border border-border bg-background px-5 py-4"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="size-3 text-primary-foreground" aria-hidden="true" />
                </div>
                <span className="text-[14px] leading-[1.6]">{d}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Process ───────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <AnimatedSection>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              Process
            </p>
            <h2 className="mt-3 font-display text-[clamp(24px,3vw,36px)] font-bold leading-[1.15] tracking-[-1px]">
              How we work
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-12 space-y-0"
          >
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                variants={sectionVariants}
                className={cn(
                  'relative grid gap-6 border-b border-border py-8 sm:grid-cols-[56px_1fr]',
                  i === 0 && 'border-t',
                )}
              >
                {/* step number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-[15px] font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-bold tracking-[-0.3px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.75] text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
        <Container>
          <AnimatedSection className="text-center">
            <h2 className="font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-1.5px]">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[16px] font-light leading-[1.75] text-primary-foreground/80">
              Tell us about your project and we'll get back to you within 24 hours — no sales pitch,
              just a direct conversation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-[15px] font-semibold"
              >
                <Link href="/#contact">Start a Conversation</Link>
              </Button>
              <Link
                href="/#services"
                className="text-[14px] font-medium text-primary-foreground/70 underline-offset-4 hover:text-primary-foreground hover:underline transition-colors"
              >
                Browse other services
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  )
}
