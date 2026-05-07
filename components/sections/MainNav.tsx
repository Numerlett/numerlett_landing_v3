"use client";

import {
  BarChart3,
  Bot,
  ChevronDown,
  Cloud,
  Code2,
  Leaf,
  Megaphone,
  Menu,
  PenLine,
  Phone,
  Search,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type ServiceItem = {
  Icon: LucideIcon;
  label: string;
  sub: string;
  href: string;
};

type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

type ProductLink = {
  Icon: LucideIcon;
  label: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
};

const serviceGroups: ServiceGroup[] = [
  {
    title: "Technology Services",
    items: [
      { Icon: Code2, label: "Software Development", sub: "Custom web, mobile & enterprise apps", href: "#tech-services" },
      { Icon: Bot, label: "AI & ML Solutions", sub: "Intelligent automation & data models", href: "#tech-services" },
      { Icon: Cloud, label: "Cloud & DevOps", sub: "Scalable infrastructure & CI/CD", href: "#tech-services" },
      { Icon: BarChart3, label: "Data Analytics", sub: "BI dashboards & market intelligence", href: "#tech-services" },
    ],
  },
  {
    title: "Marketing Services",
    items: [
      { Icon: Search, label: "SEO & SEM", sub: "Rank higher, acquire more customers", href: "#mkt-services" },
      { Icon: Megaphone, label: "Digital Marketing", sub: "Full-funnel performance campaigns", href: "#mkt-services" },
      { Icon: PenLine, label: "Content & Brand", sub: "Strategy, storytelling & identity", href: "#mkt-services" },
      { Icon: TrendingUp, label: "Market Research", sub: "Intelligence-driven growth insights", href: "#mkt-services" },
    ],
  },
];

const productLinks: ProductLink[] = [
  { Icon: Leaf, label: "SEED - Inventory System", href: "#seed" },
  { Icon: BarChart3, label: "Analytics Dashboard", href: "#" },
  { Icon: Sparkles, label: "AI MarCom Suite", href: "#" },
];

const navLinks: NavLink[] = [
  { label: "Case Studies", href: "#cases" },
  { label: "Insights", href: "#blog" },
  { label: "About", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const linkClass = cn(
  "px-3.5 py-2",
  "text-[13px] font-medium text-muted-foreground md:text-[14px]",
  "transition-colors hover:text-primary",
);

export default function MainNav() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "products" | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const [navBottom, setNavBottom] = useState(64);

  const openDropdown = (name: "services" | "products") => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveDropdown(name);
  };

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavBottom(navRef.current.getBoundingClientRect().bottom);
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
    <nav
      ref={navRef}
      id="mainNav"
      role="navigation"
      aria-label="Main navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      className={cn(
        "sticky top-0 z-50",
        "border-b border-border bg-background/95 backdrop-blur",
        "h-auto py-3 md:h-(--nl-nav-h) md:py-0",
      )}
    >
      <Container
        className={cn(
          "flex w-full items-center justify-between gap-4 md:h-full md:gap-8",
        )}
      >
        <Link href="/">
          <Logo className="text-2xl" />
        </Link>

        <ul
          className={cn(
            "hidden flex-1 items-center justify-center gap-1",
            "md:flex",
          )}
          role="list"
        >
          <li
            className="relative"
            onMouseEnter={() => openDropdown("services")}
            onMouseLeave={scheduleClose}
          >
            <Link
              href="#services"
              className={cn(linkClass, "flex items-center gap-1")}
              aria-haspopup="true"
              aria-expanded={activeDropdown === "services"}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  activeDropdown === "services" && "rotate-180",
                )}
                aria-hidden="true"
              />
            </Link>
            <div
              className={cn(
                "absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2",
                "w-170 grid grid-cols-2 gap-8 rounded-brand-lg z-10",
                "border border-border bg-background p-8 shadow-brand-lg",
                "transition-all duration-200 origin-top",
                activeDropdown === "services"
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 translate-y-2 scale-[0.97] pointer-events-none",
              )}
              role="menu"
              aria-label="Services submenu"
              onMouseEnter={() => openDropdown("services")}
              onMouseLeave={scheduleClose}
            >
              {serviceGroups.map((group) => (
                <div key={group.title}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                    {group.title}
                  </div>
                  <div className="mt-4 border-t border-border pt-4">
                    {group.items.map(({ Icon, label, sub, href }, i) => (
                      <Link
                        key={label}
                        href={href}
                        className={cn(
                          "flex gap-3 rounded-md p-2.5 transition-colors hover:bg-accent",
                          i < group.items.length - 1 && "mb-1",
                        )}
                        role="menuitem"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-[13.5px] font-semibold text-foreground">{label}</div>
                          <div className="text-[12px] leading-normal text-text-muted">{sub}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </li>

          <li
            className="relative"
            onMouseEnter={() => openDropdown("products")}
            onMouseLeave={scheduleClose}
          >
            <Link
              href="#seed"
              className={cn(linkClass, "flex items-center gap-1")}
              aria-haspopup="true"
              aria-expanded={activeDropdown === "products"}
            >
              Products
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  activeDropdown === "products" && "rotate-180",
                )}
                aria-hidden="true"
              />
            </Link>
            <div
              className={cn(
                "absolute left-0 top-[calc(100%+8px)]",
                "w-55 rounded-brand-md z-10",
                "border border-border bg-background p-2 shadow-brand-md",
                "transition-all duration-200 origin-top",
                activeDropdown === "products"
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 translate-y-2 scale-[0.97] pointer-events-none",
              )}
              role="menu"
              onMouseEnter={() => openDropdown("products")}
              onMouseLeave={scheduleClose}
            >
              {productLinks.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3.5 py-2",
                    "text-[13.5px] font-medium text-muted-foreground",
                    "transition-colors hover:bg-accent hover:text-primary",
                  )}
                  role="menuitem"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </Link>
              ))}
              <span className="block px-3.5 py-2 text-[13.5px] font-normal text-text-muted">
                + More coming soon
              </span>
            </div>
          </li>

          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className={linkClass}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={cn("hidden items-center gap-3", "md:flex")}>
          <Link
            href="tel:+918000000000"
            className={cn(
              "flex items-center gap-2 rounded-md border border-border-dark px-4 py-2",
              "text-[13px] font-semibold text-foreground",
              "transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call Us
          </Link>
          <Link
            href="#contact"
            className={cn(
              "flex items-center gap-2 rounded-md border border-primary bg-primary px-4 py-2",
              "text-[13px] font-semibold text-primary-foreground",
              "transition-all hover:-translate-y-0.5 hover:bg-primary-dark",
            )}
          >
            Get Started <span className="text-base" aria-hidden="true">→</span>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setExpanded((prev) => !prev);
            setServicesOpen(false);
            setProductsOpen(false);
          }}
          className="relative flex md:hidden"
          aria-label={expanded ? "Close menu" : "Open menu"}
        >
          <X
            className={cn(
              "absolute transition-all duration-200",
              expanded ? "scale-100 rotate-0" : "scale-0 rotate-180",
            )}
          />
          <Menu
            className={cn(
              "absolute transition-all duration-200",
              expanded ? "scale-0 rotate-180" : "scale-100 rotate-0",
            )}
          />
        </Button>
      </Container>
    </nav>

    <div
      className={cn(
        "fixed inset-0 z-40",
        "bg-background overflow-y-auto",
        "transition-all duration-300",
        "md:hidden",
        expanded
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none",
      )}
    >
      <div style={{ height: navBottom }} />
      <Container className="flex flex-col gap-1 py-6">
        <button
          onClick={() => setServicesOpen((p) => !p)}
          className={cn(
            "flex items-center justify-between px-3 py-2",
            "text-[15px] font-medium text-muted-foreground",
            "transition-colors hover:text-primary",
          )}
        >
          Services
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              servicesOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
        <div
          className={cn(
            "grid transition-all duration-300",
            servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            {serviceGroups.flatMap((g) => g.items).map(({ Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setExpanded(false)}
                className={cn(
                  "flex items-center gap-2 px-6 py-2",
                  "text-[14px] font-medium text-muted-foreground",
                  "transition-colors hover:text-primary",
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => setProductsOpen((p) => !p)}
          className={cn(
            "flex items-center justify-between px-3 py-2",
            "text-[15px] font-medium text-muted-foreground",
            "transition-colors hover:text-primary",
          )}
        >
          Products
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              productsOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
        <div
          className={cn(
            "grid transition-all duration-300",
            productsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            {productLinks.map(({ Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setExpanded(false)}
                className={cn(
                  "flex items-center gap-2 px-6 py-2",
                  "text-[14px] font-medium text-muted-foreground",
                  "transition-colors hover:text-primary",
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="my-4 border-t border-border" />

        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setExpanded(false)}
            className={cn(
              "px-3 py-2",
              "text-[15px] font-medium text-muted-foreground",
              "transition-colors hover:text-primary",
            )}
          >
            {label}
          </Link>
        ))}

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="tel:+918000000000"
            className={cn(
              "flex items-center justify-center gap-2 rounded-md border border-border-dark px-4 py-2.5",
              "text-[13px] font-semibold text-foreground",
              "transition-all hover:border-primary hover:text-primary",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call Us
          </Link>
          <Link
            href="#contact"
            onClick={() => setExpanded(false)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-md border border-primary bg-primary px-4 py-2.5",
              "text-[13px] font-semibold text-primary-foreground",
              "transition-all hover:bg-primary-dark",
            )}
          >
            Get Started <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </div>
    </>
  );
}
