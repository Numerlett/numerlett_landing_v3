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
      className="sticky top-0 z-50 h-(--nl-nav-h) border-b border-(--nl-border) bg-white/95 backdrop-blur"
    >
      <Container className="flex h-full items-center justify-between gap-8">
        <a
          href="/"
          className="font-display text-[24px] font-extrabold tracking-tight"
        >
          <span className="text-(--nl-black)">Numer</span>
          <span className="text-(--nl-green)">Lett</span>
          <span className="relative -top-px text-[30px] leading-none text-(--nl-green)">
            .
          </span>
        </a>

        <ul
          className="flex flex-1 items-center justify-center gap-1"
          role="list"
        >
          <li className="group relative">
            <a
              href="#services"
              className="flex items-center gap-1 rounded-md px-3.5 py-2 text-[14px] font-medium text-(--nl-text-secondary) transition-colors hover:bg-(--nl-grey-light) hover:text-(--nl-text-primary)"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services{" "}
              <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </a>
            <div
              className="absolute left-1/2 top-[calc(100%+8px)] hidden w-170 -translate-x-1/2 grid-cols-2 gap-8 rounded-(--nl-radius-lg) border border-(--nl-border) bg-white p-8 shadow-(--nl-shadow-lg) group-hover:grid"
              role="menu"
              aria-label="Services submenu"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--nl-text-muted)">
                  Technology Services
                </div>
                <div className="mt-4 border-t border-(--nl-border) pt-4">
                  <a
                    href="#tech-services"
                    className="mb-1 flex gap-3 rounded-md p-2.5 transition-colors hover:bg-(--nl-green-light)"
                    role="menuitem"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--nl-grey-light) text-(--nl-text-primary) transition-colors group-hover:bg-(--nl-green-mid)">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-(--nl-text-primary)">
                        Software Development
                      </div>
                      <div className="text-[12px] leading-normal text-(--nl-text-muted)">
                        Custom web, mobile & enterprise apps
                      </div>
                    </div>
                  </a>
                  <a
                    href="#tech-services"
                    className="mb-1 flex gap-3 rounded-md p-2.5 transition-colors hover:bg-(--nl-green-light)"
                    role="menuitem"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--nl-grey-light) text-(--nl-text-primary)">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-(--nl-text-primary)">
                        AI & ML Solutions
                      </div>
                      <div className="text-[12px] leading-normal text-(--nl-text-muted)">
                        Intelligent automation & data models
                      </div>
                    </div>
                  </a>
                  <a
                    href="#tech-services"
                    className="mb-1 flex gap-3 rounded-md p-2.5 transition-colors hover:bg-(--nl-green-light)"
                    role="menuitem"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--nl-grey-light) text-(--nl-text-primary)">
                      <Cloud className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-(--nl-text-primary)">
                        Cloud & DevOps
                      </div>
                      <div className="text-[12px] leading-normal text-(--nl-text-muted)">
                        Scalable infrastructure & CI/CD
                      </div>
                    </div>
                  </a>
                  <a
                    href="#tech-services"
                    className="flex gap-3 rounded-md p-2.5 transition-colors hover:bg-(--nl-green-light)"
                    role="menuitem"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--nl-grey-light) text-(--nl-text-primary)">
                      <BarChart3 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-(--nl-text-primary)">
                        Data Analytics
                      </div>
                      <div className="text-[12px] leading-normal text-(--nl-text-muted)">
                        BI dashboards & market intelligence
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--nl-text-muted)">
                  Marketing Services
                </div>
                <div className="mt-4 border-t border-(--nl-border) pt-4">
                  <a
                    href="#mkt-services"
                    className="mb-1 flex gap-3 rounded-md p-2.5 transition-colors hover:bg-(--nl-green-light)"
                    role="menuitem"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--nl-grey-light) text-(--nl-text-primary)">
                      <Search className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-(--nl-text-primary)">
                        SEO & SEM
                      </div>
                      <div className="text-[12px] leading-normal text-(--nl-text-muted)">
                        Rank higher, acquire more customers
                      </div>
                    </div>
                  </a>
                  <a
                    href="#mkt-services"
                    className="mb-1 flex gap-3 rounded-md p-2.5 transition-colors hover:bg-(--nl-green-light)"
                    role="menuitem"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--nl-grey-light) text-(--nl-text-primary)">
                      <Megaphone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-(--nl-text-primary)">
                        Digital Marketing
                      </div>
                      <div className="text-[12px] leading-normal text-(--nl-text-muted)">
                        Full-funnel performance campaigns
                      </div>
                    </div>
                  </a>
                  <a
                    href="#mkt-services"
                    className="mb-1 flex gap-3 rounded-md p-2.5 transition-colors hover:bg-(--nl-green-light)"
                    role="menuitem"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--nl-grey-light) text-(--nl-text-primary)">
                      <PenLine className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-(--nl-text-primary)">
                        Content & Brand
                      </div>
                      <div className="text-[12px] leading-normal text-(--nl-text-muted)">
                        Strategy, storytelling & identity
                      </div>
                    </div>
                  </a>
                  <a
                    href="#mkt-services"
                    className="flex gap-3 rounded-md p-2.5 transition-colors hover:bg-(--nl-green-light)"
                    role="menuitem"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--nl-grey-light) text-(--nl-text-primary)">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-(--nl-text-primary)">
                        Market Research
                      </div>
                      <div className="text-[12px] leading-normal text-(--nl-text-muted)">
                        Intelligence-driven growth insights
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li className="group relative">
            <a
              href="#seed"
              className="flex items-center gap-1 rounded-md px-3.5 py-2 text-[14px] font-medium text-(--nl-text-secondary) transition-colors hover:bg-(--nl-grey-light) hover:text-(--nl-text-primary)"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products{" "}
              <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </a>
            <div
              className="absolute left-0 top-[calc(100%+8px)] hidden w-55 rounded-(--nl-radius-md) border border-(--nl-border) bg-white p-2 shadow-(--nl-shadow-md) group-hover:block"
              role="menu"
            >
              <a
                href="#seed"
                className="flex items-center gap-2 rounded-md px-3.5 py-2 text-[13.5px] font-medium text-(--nl-text-secondary) transition-colors hover:bg-(--nl-green-light) hover:text-(--nl-green)"
                role="menuitem"
              >
                <Leaf className="h-4 w-4" /> SEED - Inventory System
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-md px-3.5 py-2 text-[13.5px] font-medium text-(--nl-text-secondary) transition-colors hover:bg-(--nl-green-light) hover:text-(--nl-green)"
                role="menuitem"
              >
                <BarChart3 className="h-4 w-4" /> Analytics Dashboard
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-md px-3.5 py-2 text-[13.5px] font-medium text-(--nl-text-secondary) transition-colors hover:bg-(--nl-green-light) hover:text-(--nl-green)"
                role="menuitem"
              >
                <Sparkles className="h-4 w-4" /> AI MarCom Suite
              </a>
              <span className="block px-3.5 py-2 text-[13.5px] font-normal text-(--nl-text-muted)">
                + More coming soon
              </span>
            </div>
          </li>

          <li>
            <a
              href="#cases"
              className="rounded-md px-3.5 py-2 text-[14px] font-medium text-(--nl-text-secondary) transition-colors hover:bg-(--nl-grey-light) hover:text-(--nl-text-primary)"
            >
              Case Studies
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="rounded-md px-3.5 py-2 text-[14px] font-medium text-(--nl-text-secondary) transition-colors hover:bg-(--nl-grey-light) hover:text-(--nl-text-primary)"
            >
              Insights
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="rounded-md px-3.5 py-2 text-[14px] font-medium text-(--nl-text-secondary) transition-colors hover:bg-(--nl-grey-light) hover:text-(--nl-text-primary)"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-md px-3.5 py-2 text-[14px] font-medium text-(--nl-text-secondary) transition-colors hover:bg-(--nl-grey-light) hover:text-(--nl-text-primary)"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+918000000000"
            className="flex items-center gap-2 rounded-md border border-(--nl-border-dark) px-4 py-2 text-[13px] font-semibold text-(--nl-text-primary) transition-all hover:-translate-y-0.5 hover:border-(--nl-green) hover:text-(--nl-green)"
          >
            <Phone className="h-4 w-4" /> Call Us
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-md border border-(--nl-green) bg-(--nl-green) px-4 py-2 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-(--nl-green-dark)"
          >
            Get Started <span className="text-base">→</span>
          </a>
        </div>
      </Container>
    </nav>
  );
}
