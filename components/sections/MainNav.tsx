import {
  BarChart3,
  Bot,
  ChevronDown,
  Cloud,
  Code2,
  Leaf,
  Megaphone,
  PenLine,
  Phone,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/Container";

export default function MainNav() {
  return (
    <nav
      id="mainNav"
      role="navigation"
      aria-label="Main navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      className="sticky top-0 z-50 h-auto border-b border-border bg-background/95 py-3 backdrop-blur md:h-(--nl-nav-h) md:py-0"
    >
      <Container className="flex w-full flex-col items-start gap-4 md:h-full md:flex-row md:items-center md:justify-between md:gap-8">
        <a href="/" className="font-display text-[24px] font-extrabold tracking-tight">
          <span className="text-foreground">Numer</span>
          <span className="text-primary">Lett</span>
          <span className="relative -top-px text-[30px] leading-none text-primary">.</span>
        </a>

        <ul
          className="flex w-full flex-wrap items-center justify-start gap-2 md:w-auto md:flex-1 md:justify-center md:gap-1"
          role="list"
        >
          <li className="group relative">
            <a
              href="#services"
              className="flex items-center gap-1 rounded-md px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:text-[14px]"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services{" "}
              <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </a>
            <div
              className="absolute left-1/2 top-[calc(100%+8px)] hidden w-170 -translate-x-1/2 grid-cols-2 gap-8 rounded-brand-lg border border-border bg-background p-8 shadow-brand-lg lg:group-hover:grid"
              role="menu"
              aria-label="Services submenu"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                  Technology Services
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  {[
                    { Icon: Code2, label: "Software Development", sub: "Custom web, mobile & enterprise apps" },
                    { Icon: Bot, label: "AI & ML Solutions", sub: "Intelligent automation & data models" },
                    { Icon: Cloud, label: "Cloud & DevOps", sub: "Scalable infrastructure & CI/CD" },
                    { Icon: BarChart3, label: "Data Analytics", sub: "BI dashboards & market intelligence" },
                  ].map(({ Icon, label, sub }, i) => (
                    <a
                      key={label}
                      href="#tech-services"
                      className={`${i < 3 ? "mb-1" : ""} flex gap-3 rounded-md p-2.5 transition-colors hover:bg-accent`}
                      role="menuitem"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[13.5px] font-semibold text-foreground">{label}</div>
                        <div className="text-[12px] leading-normal text-text-muted">{sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                  Marketing Services
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  {[
                    { Icon: Search, label: "SEO & SEM", sub: "Rank higher, acquire more customers" },
                    { Icon: Megaphone, label: "Digital Marketing", sub: "Full-funnel performance campaigns" },
                    { Icon: PenLine, label: "Content & Brand", sub: "Strategy, storytelling & identity" },
                    { Icon: TrendingUp, label: "Market Research", sub: "Intelligence-driven growth insights" },
                  ].map(({ Icon, label, sub }, i) => (
                    <a
                      key={label}
                      href="#mkt-services"
                      className={`${i < 3 ? "mb-1" : ""} flex gap-3 rounded-md p-2.5 transition-colors hover:bg-accent`}
                      role="menuitem"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[13.5px] font-semibold text-foreground">{label}</div>
                        <div className="text-[12px] leading-normal text-text-muted">{sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </li>

          <li className="group relative">
            <a
              href="#seed"
              className="flex items-center gap-1 rounded-md px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:text-[14px]"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products{" "}
              <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </a>
            <div
              className="absolute left-0 top-[calc(100%+8px)] hidden w-55 rounded-brand-md border border-border bg-background p-2 shadow-brand-md lg:group-hover:block"
              role="menu"
            >
              {[
                { Icon: Leaf, label: "SEED - Inventory System", href: "#seed" },
                { Icon: BarChart3, label: "Analytics Dashboard", href: "#" },
                { Icon: Sparkles, label: "AI MarCom Suite", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 rounded-md px-3.5 py-2 text-[13.5px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                  role="menuitem"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ))}
              <span className="block px-3.5 py-2 text-[13.5px] font-normal text-text-muted">
                + More coming soon
              </span>
            </div>
          </li>

          {[
            { href: "#cases", label: "Case Studies" },
            { href: "#blog", label: "Insights" },
            { href: "#faq", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="rounded-md px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:text-[14px]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
          <a
            href="tel:+918000000000"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-border-dark px-4 py-2 text-[13px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call Us
          </a>
          <a
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-primary bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-dark sm:w-auto"
          >
            Get Started <span className="text-base">→</span>
          </a>
        </div>
      </Container>
    </nav>
  );
}
