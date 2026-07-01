"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import Container from "@/components/Container";
import type { IFaq } from "@/database/types";

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

interface FaqSectionProps {
  faqs: IFaq[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
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
              We&apos;ve Got
              <br />
              Answers.
            </h2>
            <p className="reveal delay-2 mt-4 text-[15px] font-light leading-[1.75] text-muted-foreground">
              Can&apos;t find what you need?{" "}
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
