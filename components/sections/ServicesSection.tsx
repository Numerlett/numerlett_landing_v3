"use client";

import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Globe,
  LineChart,
  Megaphone,
  PenLine,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
  Users2,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import Container from "@/components/Container";

const techCards = [
  {
    title: "Custom Software Development",
    description:
      "Bespoke web applications, enterprise platforms, and SaaS products tailored to your exact workflow and business model.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform iOS & Android apps with sleek UX, high performance, and seamless backend integration.",
    icon: Smartphone,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Generative AI integrations, ML pipelines, NLP solutions, and intelligent automation that make your product smarter.",
    icon: Brain,
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS, GCP, Azure infrastructure design, containerization with Docker/Kubernetes, and automated CI/CD pipelines.",
    icon: Cloud,
  },
  {
    title: "Data Analytics & BI",
    description:
      "Custom dashboards, data pipelines, and business intelligence tools that convert raw data into actionable insights.",
    icon: LineChart,
  },
  {
    title: "Web Development & Design",
    description:
      "High-performance websites, e-commerce platforms, and landing pages designed for conversions and SEO from day one.",
    icon: Globe,
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Security audits, penetration testing, compliance frameworks (GDPR, ISO 27001), and ongoing threat monitoring.",
    icon: ShieldCheck,
  },
  {
    title: "IT Consulting & Strategy",
    description:
      "Technology roadmapping, digital transformation advisory, and architecture reviews for startups to enterprises.",
    icon: Wrench,
  },
];

const marketingCards = [
  {
    title: "Search Engine Optimization",
    description:
      "Technical SEO, on-page optimization, link building, and content strategies that dominate Google rankings and drive organic traffic.",
    icon: Search,
  },
  {
    title: "PPC & Paid Advertising",
    description:
      "Google Ads, Meta Ads, LinkedIn campaigns with laser-targeted audience segmentation and continuous optimization for max ROAS.",
    icon: Target,
  },
  {
    title: "Content Marketing",
    description:
      "SEO-driven blogs, whitepapers, case studies, and video scripts that establish thought leadership and build organic authority.",
    icon: PenLine,
  },
  {
    title: "Social Media Marketing",
    description:
      "Platform-specific content strategy, community management, and influencer partnerships across LinkedIn, Instagram, Twitter & more.",
    icon: Users2,
  },
  {
    title: "Brand Strategy & Identity",
    description:
      "Brand positioning, visual identity design, tone of voice, and messaging frameworks that make you unforgettable in your market.",
    icon: Megaphone,
  },
  {
    title: "Email Marketing & CRM",
    description:
      "Automated drip campaigns, segmentation, A/B testing, and lifecycle marketing that nurtures leads into paying customers.",
    icon: BarChart3,
  },
  {
    title: "Market Research & Intelligence",
    description:
      "Competitive analysis, consumer insights, international market entry research, and data-backed growth opportunity mapping.",
    icon: LineChart,
  },
  {
    title: "Digital Analytics & Reporting",
    description:
      "GA4 setup, custom dashboard builds, attribution modeling, and monthly performance reports tied to revenue metrics.",
    icon: BarChart3,
  },
];

type ServicesPanelProps = {
  id: string;
  labelledBy: string;
  title: string;
  description: string;
  chips: string[];
  cards: typeof techCards;
  active: boolean;
  headingId: string;
};

function ServicesPanel({
  id,
  labelledBy,
  title,
  description,
  chips,
  cards,
  active,
  headingId,
}: ServicesPanelProps) {
  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={labelledBy}
      className={`mt-14 ${active ? "block" : "hidden"}`}
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <h3
            className="reveal font-display text-[22px] font-bold tracking-[-0.5px]"
            id={headingId}
          >
            {title}
          </h3>
          <p className="reveal delay-1 mt-3 max-w-105 text-[15px] text-(--nl-text-secondary)">
            {description}
          </p>
        </div>
        <div className="reveal delay-2 flex flex-col gap-3 lg:items-start">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex w-fit items-center gap-1 rounded-full border border-(--nl-green-mid) bg-(--nl-green-light) px-3 py-1 text-[12.5px] font-semibold text-(--nl-green-dark)"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <article
              key={card.title}
              className={`reveal ${index ? `delay-${(index % 4) + 1}` : ""} relative overflow-hidden rounded-(--nl-radius-md) border border-(--nl-border) bg-white p-7 transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0.75 before:origin-left before:scale-x-0 before:bg-(--nl-green) before:transition-transform hover:-translate-y-1 hover:border-(--nl-green) hover:shadow-(--nl-shadow-md) hover:before:scale-x-100`}
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[12px] bg-(--nl-green-light) text-(--nl-text-primary) transition-colors">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h4
                className="font-display text-[16px] font-bold tracking-[-0.3px]"
                itemProp="name"
              >
                {card.title}
              </h4>
              <p
                className="mt-2 text-[13.5px] leading-[1.7] text-(--nl-text-secondary)"
                itemProp="description"
              >
                {card.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-(--nl-green)"
                itemProp="url"
              >
                Learn more <span className="text-base">→</span>
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"tech" | "mkt">("tech");

  return (
    <section
      className="bg-white py-24"
      id="services"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-(--nl-green)">
              <span
                className="h-0.5 w-6 rounded bg-(--nl-green)"
                aria-hidden="true"
              />
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
          <p className="reveal delay-2 max-w-100 text-[18px] font-light leading-[1.75] text-(--nl-text-secondary)">
            Whether you need cutting-edge technology built or your market
            presence amplified — we do both, and we connect them.
          </p>
        </div>

        <div
          className="mt-14 flex flex-wrap gap-2 border-b-2 border-(--nl-border)"
          role="tablist"
        >
          <button
            type="button"
            role="tab"
            id="tab-tech"
            aria-selected={activeTab === "tech"}
            aria-controls="panel-tech"
            className={`border-b-[3px] px-6 py-3 text-[15px] font-semibold transition-colors ${
              activeTab === "tech"
                ? "border-(--nl-green) text-(--nl-green)"
                : "border-transparent text-(--nl-text-muted) hover:text-(--nl-text-primary)"
            }`}
            onClick={() => setActiveTab("tech")}
          >
            <span className="mr-2">💻</span> Technology Services
          </button>
          <button
            type="button"
            role="tab"
            id="tab-mkt"
            aria-selected={activeTab === "mkt"}
            aria-controls="panel-mkt"
            className={`border-b-[3px] px-6 py-3 text-[15px] font-semibold transition-colors ${
              activeTab === "mkt"
                ? "border-(--nl-green) text-(--nl-green)"
                : "border-transparent text-(--nl-text-muted) hover:text-(--nl-text-primary)"
            }`}
            onClick={() => setActiveTab("mkt")}
          >
            <span className="mr-2">📣</span> Marketing Services
          </button>
        </div>

        <ServicesPanel
          id="panel-tech"
          labelledBy="tab-tech"
          title="Technology Services"
          description="From concept to deployment — we architect, build, and scale digital products that solve real business problems and create competitive advantages."
          chips={[
            "✓ Agile delivery",
            "✓ 99.9% SLA uptime",
            "✓ Enterprise-grade security",
          ]}
          cards={techCards}
          active={activeTab === "tech"}
          headingId="tech-services"
        />
        <ServicesPanel
          id="panel-mkt"
          labelledBy="tab-mkt"
          title="Marketing Services"
          description="Data-driven, full-funnel marketing strategies that build brand authority, generate qualified leads, and convert them into loyal customers."
          chips={[
            "✓ SEO-first approach",
            "✓ Analytics & attribution",
            "✓ ROI-guaranteed framework",
          ]}
          cards={marketingCards}
          active={activeTab === "mkt"}
          headingId="mkt-services"
        />
      </Container>
    </section>
  );
}
