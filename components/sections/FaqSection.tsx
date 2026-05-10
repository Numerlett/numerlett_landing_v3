"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import Container from "@/components/Container";

const answerVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { height: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2, delay: 0.05 } },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { height: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.15 } },
  },
};

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "What technology services does NumerLett offer?",
    answer:
      "NumerLett offers a full spectrum of technology services: custom software & web application development, mobile app development (iOS/Android), AI & ML solutions, cloud computing & DevOps, data analytics & BI, cybersecurity, and IT consulting & strategy. We handle everything from MVP builds to enterprise-scale digital transformations.",
  },
  {
    question: "What marketing services does NumerLett provide?",
    answer:
      "Our marketing services include SEO (technical, on-page, off-page), PPC & paid advertising (Google, Meta, LinkedIn), content marketing, social media marketing, brand strategy & identity, email marketing & CRM automation, market research & competitive intelligence, and digital analytics & reporting.",
  },
  {
    question: "What is SEED and who is it for?",
    answer:
      "SEED (Smart Enterprise Efficiency & Distribution) is NumerLett's AI-powered Inventory Management System. It's ideal for manufacturers, distributors, retailers, and e-commerce businesses managing multiple SKUs and warehouses. SEED provides real-time tracking, AI demand forecasting, ERP integration, and actionable analytics.",
  },
  {
    question: "Do you work with startups or only large enterprises?",
    answer:
      "Both. We work with early-stage startups (MVP development, initial SEO), growing SMEs (scaling tech & marketing), and large enterprises (complex integrations, enterprise software). Our engagement models are flexible — from project-based to long-term retainers.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A marketing audit & SEO strategy takes 2–3 weeks. A simple website: 4–6 weeks. A mobile app: 3–5 months. An enterprise software like SEED deployment: 2–4 months depending on customization needs. We always commit to a timeline upfront.",
  },
  {
    question: "How does NumerLett approach SEO to rank on Google?",
    answer:
      "We follow a comprehensive SEO methodology: technical audit & site health fixes, keyword research aligned to commercial intent, on-page optimization (schema markup, meta tags, heading structure), content creation targeting search intent, authoritative link building, and Core Web Vitals optimization. Every website we build is SEO-architected from the ground up.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section className="bg-background py-24" id="faq" aria-labelledby="faq-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
              <span className="h-0.5 w-6 rounded bg-primary" aria-hidden="true" />
              FAQ
            </div>
            <h2
              id="faq-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            >
              Questions?
              <br />
              We've Got
              <br />
              Answers.
            </h2>
            <p className="reveal delay-2 mt-4 text-[15px] font-light leading-[1.75] text-muted-foreground">
              Can't find what you need?{" "}
              <a href="#contact" className="font-semibold text-primary">
                Talk to our team
              </a>{" "}
              — no sales pitch, just honest answers.
            </p>
          </div>

          <div className="reveal delay-1">
            <div className="border-t border-border">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.question} className="border-b border-border">
                    <button
                      type="button"
                      className="font-display flex w-full items-center justify-between gap-4 py-5 text-left text-[15px] font-semibold transition-colors hover:text-primary"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      {faq.question}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 25 }}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-dark text-text-muted transition-colors ${
                          isOpen ? "border-primary bg-primary text-primary-foreground" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          variants={reduced ? undefined : answerVariants}
                          initial="collapsed"
                          animate="open"
                          exit="exit"
                          style={{ overflow: "hidden" }}
                        >
                          <div className="pb-5 text-[14.5px] font-light leading-[1.8] text-muted-foreground">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
