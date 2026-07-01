import { Leaf } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Container from '@/components/Container'
import Logo from '@/components/Logo'
import Link from 'next/link'
import { siteSocials } from '@/data'

type FooterLink = { label: string; href: string }

const techLinks: FooterLink[] = [
  { label: 'Custom Software Development', href: '/services/technical/custom-software' },
  { label: 'Mobile App Development', href: '/services/technical/mobile-app' },
  { label: 'AI & Machine Learning', href: '/services/technical/ai-ml' },
  { label: 'Cloud & DevOps', href: '/services/technical/cloud-devops' },
  { label: 'Data Analytics & BI', href: '/services/technical/data-analytics' },
  { label: 'Web Development', href: '/services/technical/web-development' },
  { label: 'Cybersecurity', href: '/services/technical/cybersecurity' },
  { label: 'IT Consulting', href: '/services/technical/it-consulting' },
]

const marketingLinks: FooterLink[] = [
  { label: 'SEO & Organic Search', href: '/services/marketing/seo' },
  { label: 'PPC & Paid Advertising', href: '/services/marketing/ppc-advertising' },
  { label: 'Content Marketing', href: '/services/marketing/content-marketing' },
  { label: 'Social Media Marketing', href: '/services/marketing/social-media' },
  { label: 'Brand Strategy', href: '/services/marketing/brand-strategy' },
  { label: 'Email Marketing', href: '/services/marketing/email-marketing' },
  { label: 'Market Research', href: '/services/marketing/market-research' },
  { label: 'Digital Analytics', href: '/services/marketing/digital-analytics' },
]

const socialLinks = [
  { Icon: FaLinkedinIn, label: 'NumerLett on LinkedIn', href: siteSocials.linkedin },
  { Icon: FaTwitter, label: 'NumerLett on Twitter', href: siteSocials.twitter },
  { Icon: FaGithub, label: 'NumerLett on GitHub', href: siteSocials.github },
  { Icon: FaInstagram, label: 'NumerLett on Instagram', href: siteSocials.instagram },
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
            <Logo theme="dark" className="text-2xl" />
            <p className="mt-4 max-w-70 text-[14px] font-light leading-[1.7] text-text-muted">
              Where Technology meets Marketing, and Software creates competitive advantage. Building
              India&apos;s best businesses, one solution at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
              {techLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-primary">
                    {label}
                  </Link>
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
              {marketingLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-primary">
                    {label}
                  </Link>
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
                <Link href="/#seed" className="inline-flex items-center gap-1.5 font-semibold text-primary">
                  <Leaf className="size-3.5" aria-hidden="true" /> SEED - Inventory System
                </Link>
              </li>
              <li>
                <Link href="/#cases" className="transition-colors hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="transition-colors hover:text-primary">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="transition-colors hover:text-primary">
                  About NumerLett
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6">
          <p className="text-[13px] text-white/30">
            © 2026 NumerLett. All rights reserved. Registered in India.
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
