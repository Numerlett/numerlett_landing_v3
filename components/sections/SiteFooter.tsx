import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Container from "@/components/Container";

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
              Numer<span className="text-(--nl-green)">Lett</span>
              <span className="text-(--nl-green)">.</span>
            </div>
            <p className="mt-4 max-w-70 text-[14px] font-light leading-[1.7] text-(--nl-grey)">
              Where Technology meets Marketing, and Software creates competitive
              advantage. Building India's best businesses, one solution at a
              time.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[14px] text-(--nl-grey) transition-all hover:border-(--nl-green) hover:bg-white/5 hover:text-(--nl-green)"
                aria-label="NumerLett on LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[14px] text-(--nl-grey) transition-all hover:border-(--nl-green) hover:bg-white/5 hover:text-(--nl-green)"
                aria-label="NumerLett on Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[14px] text-(--nl-grey) transition-all hover:border-(--nl-green) hover:bg-white/5 hover:text-(--nl-green)"
                aria-label="NumerLett on GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[14px] text-(--nl-grey) transition-all hover:border-(--nl-green) hover:bg-white/5 hover:text-(--nl-green)"
                aria-label="NumerLett on Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(51,175,145,0.2)] bg-[rgba(51,175,145,0.1)] px-4 py-1 text-[12px] font-mono text-(--nl-green)">
              <span
                className="pulse-dot h-1.5 w-1.5 rounded-full bg-(--nl-green)"
                aria-hidden="true"
              />
              Available for new projects
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-[0.12em] text-(--nl-grey)">
              Technology Services
            </h5>
            <div className="mt-4 border-t border-white/10 pt-4" />
            <ul className="mt-4 space-y-2 text-[14px] text-white/60">
              <li>
                <a
                  href="#tech-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Custom Software Development
                </a>
              </li>
              <li>
                <a
                  href="#tech-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#tech-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="#tech-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Cloud & DevOps
                </a>
              </li>
              <li>
                <a
                  href="#tech-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Data Analytics & BI
                </a>
              </li>
              <li>
                <a
                  href="#tech-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#tech-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Cybersecurity
                </a>
              </li>
              <li>
                <a
                  href="#tech-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-[0.12em] text-(--nl-grey)">
              Marketing Services
            </h5>
            <div className="mt-4 border-t border-white/10 pt-4" />
            <ul className="mt-4 space-y-2 text-[14px] text-white/60">
              <li>
                <a
                  href="#mkt-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  SEO & Organic Search
                </a>
              </li>
              <li>
                <a
                  href="#mkt-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  PPC & Paid Advertising
                </a>
              </li>
              <li>
                <a
                  href="#mkt-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Content Marketing
                </a>
              </li>
              <li>
                <a
                  href="#mkt-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a
                  href="#mkt-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Brand Strategy
                </a>
              </li>
              <li>
                <a
                  href="#mkt-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Email Marketing
                </a>
              </li>
              <li>
                <a
                  href="#mkt-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Market Research
                </a>
              </li>
              <li>
                <a
                  href="#mkt-services"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Digital Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-[0.12em] text-(--nl-grey)">
              Products & Company
            </h5>
            <div className="mt-4 border-t border-white/10 pt-4" />
            <ul className="mt-4 space-y-2 text-[14px] text-white/60">
              <li>
                <a href="#seed" className="font-semibold text-(--nl-green)">
                  🌱 SEED - Inventory System
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Insights & Blog
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  About NumerLett
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-(--nl-green)"
                >
                  Partner Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-(--nl-green)"
                >
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
  );
}
