import { Leaf } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Container from '@/components/Container'

const techLinks = [
  'Custom Software Development',
  'Mobile App Development',
  'AI & Machine Learning',
  'Cloud & DevOps',
  'Data Analytics & BI',
  'Web Development',
  'Cybersecurity',
  'IT Consulting',
]

const marketingLinks = [
  'SEO & Organic Search',
  'PPC & Paid Advertising',
  'Content Marketing',
  'Social Media Marketing',
  'Brand Strategy',
  'Email Marketing',
  'Market Research',
  'Digital Analytics',
]

const socialLinks = [
  { Icon: FaLinkedinIn, label: 'NumerLett on LinkedIn' },
  { Icon: FaTwitter, label: 'NumerLett on Twitter' },
  { Icon: FaGithub, label: 'NumerLett on GitHub' },
  { Icon: FaInstagram, label: 'NumerLett on Instagram' },
]

export default function SiteFooter() {
  return (
    <footer
      className="bg-black text-white"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <Container>
        <div className="grid gap-12 py-18 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-[24px] font-extrabold tracking-[-1px]">
              Numer<span className="text-primary">Lett</span>
              <span className="text-primary">.</span>
            </div>
            <p className="mt-4 max-w-70 text-[14px] font-light leading-[1.7] text-text-muted">
              Where Technology meets Marketing, and Software creates competitive advantage. Building
              India's best businesses, one solution at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[14px] text-text-muted transition-all hover:border-primary hover:bg-white/5 hover:text-primary"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(51,175,145,0.2)] bg-[rgba(51,175,145,0.1)] px-4 py-1 font-mono text-[12px] text-primary">
              <span
                className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              Available for new projects
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              Technology Services
            </h5>
            <div className="mt-4 border-t border-white/10 pt-4" />
            <ul className="mt-4 space-y-2 text-[14px] text-white/60">
              {techLinks.map((link) => (
                <li key={link}>
                  <a href="#tech-services" className="transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              Marketing Services
            </h5>
            <div className="mt-4 border-t border-white/10 pt-4" />
            <ul className="mt-4 space-y-2 text-[14px] text-white/60">
              {marketingLinks.map((link) => (
                <li key={link}>
                  <a href="#mkt-services" className="transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              Products & Company
            </h5>
            <div className="mt-4 border-t border-white/10 pt-4" />
            <ul className="mt-4 space-y-2 text-[14px] text-white/60">
              <li>
                <a href="#seed" className="inline-flex items-center gap-1.5 font-semibold text-primary">
                  <Leaf className="size-3.5" aria-hidden="true" /> SEED - Inventory System
                </a>
              </li>
              <li>
                <a href="#cases" className="transition-colors hover:text-primary">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#blog" className="transition-colors hover:text-primary">
                  Insights & Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-primary">
                  About NumerLett
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Partner Program
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6">
          <p className="text-[13px] text-white/30">
            © 2025 NumerLett. All rights reserved. Registered in India.
          </p>
          <div className="flex flex-wrap gap-6 text-[13px] text-white/30">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Cookie Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
