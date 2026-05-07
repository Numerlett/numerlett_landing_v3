'use client'

import { useEffect } from 'react'

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right'

export default function PageEffects() {
  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    revealTargets.forEach((el) => revealObserver.observe(el))

    const animateCounters = () => {
      document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count ?? '0')
        const decimals = Number(el.dataset.decimals ?? '0')
        const duration = 1800
        const startTime = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const value = target * progress
          el.textContent = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      })
    }

    const statsRoot = document.querySelector<HTMLElement>('[data-stats]')
    let statsObserver: IntersectionObserver | null = null
    if (statsRoot) {
      statsObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            animateCounters()
            statsObserver?.disconnect()
          }
        },
        { threshold: 0.5 }
      )
      statsObserver.observe(statsRoot)
    }

    const skillBlocks = document.querySelectorAll<HTMLElement>('[data-skill-block]')
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const bars = entry.target.querySelectorAll<HTMLElement>('[data-skill]')
          bars.forEach((bar) => {
            const width = bar.dataset.skill ?? '0%'
            bar.style.width = '0'
            bar.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
            requestAnimationFrame(() => {
              bar.style.width = width
            })
          })
          skillObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.4 }
    )

    skillBlocks.forEach((el) => skillObserver.observe(el))

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return
      const section = document.querySelector(hash)
      if (!section) return
      event.preventDefault()
      const offset = 80
      const top = section.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      revealObserver.disconnect()
      statsObserver?.disconnect()
      skillObserver.disconnect()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return null
}
