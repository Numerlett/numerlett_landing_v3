"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Container from "@/components/Container";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      className="bg-white py-24"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-(--nl-green)">
              <span
                className="h-0.5 w-6 rounded bg-(--nl-green)"
                aria-hidden="true"
              />
              Contact Us
            </div>
            <h2
              id="contact-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            >
              Let's Start
              <br />
              Something Big.
            </h2>
            <p className="reveal delay-2 mt-4 text-[16px] font-light leading-[1.75] text-(--nl-text-secondary)">
              Tell us what you need — tech, marketing, SEED, or all three. We'll
              get back to you within 24 hours.
            </p>

            <div className="reveal delay-2 mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-(--nl-green-mid) bg-(--nl-green-light)">
                  <Mail
                    className="h-5 w-5 text-(--nl-green)"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h5 className="font-display text-[14px] font-bold">Email</h5>
                  <p className="text-[13.5px] text-(--nl-text-secondary)">
                    <a
                      href="mailto:hello@numerlett.com"
                      className="text-(--nl-green)"
                    >
                      hello@numerlett.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-(--nl-green-mid) bg-(--nl-green-light)">
                  <Phone
                    className="h-5 w-5 text-(--nl-green)"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h5 className="font-display text-[14px] font-bold">Phone</h5>
                  <p className="text-[13.5px] text-(--nl-text-secondary)">
                    <a href="tel:+918000000000" className="text-(--nl-green)">
                      +91 80000 00000
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-(--nl-green-mid) bg-(--nl-green-light)">
                  <MapPin
                    className="h-5 w-5 text-(--nl-green)"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h5 className="font-display text-[14px] font-bold">
                    Location
                  </h5>
                  <p className="text-[13.5px] text-(--nl-text-secondary)">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-(--nl-green-mid) bg-(--nl-green-light)">
                  <Clock
                    className="h-5 w-5 text-(--nl-green)"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h5 className="font-display text-[14px] font-bold">
                    Response Time
                  </h5>
                  <p className="text-[13.5px] text-(--nl-text-secondary)">
                    Within 24 hours · Mon–Sat
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right delay-2">
            <div className="rounded-(--nl-radius-lg) border border-(--nl-border) bg-(--nl-grey-light) p-10">
              <h3 className="font-display text-[22px] font-bold tracking-[-0.5px]">
                Send Us a Message
              </h3>
              <form className="mt-6 space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fname"
                      className="mb-2 block text-[13px] font-semibold text-(--nl-text-secondary)"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="first_name"
                      placeholder="Rahul"
                      required
                      autoComplete="given-name"
                      className="w-full rounded-(--nl-radius-sm) border border-(--nl-border) bg-white px-4 py-3 text-[14px] text-(--nl-text-primary) outline-none transition focus:border-(--nl-green) focus:shadow-[0_0_0_3px_rgba(51,175,145,0.12)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lname"
                      className="mb-2 block text-[13px] font-semibold text-(--nl-text-secondary)"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="last_name"
                      placeholder="Sharma"
                      required
                      autoComplete="family-name"
                      className="w-full rounded-(--nl-radius-sm) border border-(--nl-border) bg-white px-4 py-3 text-[14px] text-(--nl-text-primary) outline-none transition focus:border-(--nl-green) focus:shadow-[0_0_0_3px_rgba(51,175,145,0.12)]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[13px] font-semibold text-(--nl-text-secondary)"
                  >
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="rahul@company.com"
                    required
                    autoComplete="email"
                    className="w-full rounded-(--nl-radius-sm) border border-(--nl-border) bg-white px-4 py-3 text-[14px] text-(--nl-text-primary) outline-none transition focus:border-(--nl-green) focus:shadow-[0_0_0_3px_rgba(51,175,145,0.12)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[13px] font-semibold text-(--nl-text-secondary)"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    className="w-full rounded-(--nl-radius-sm) border border-(--nl-border) bg-white px-4 py-3 text-[14px] text-(--nl-text-primary) outline-none transition focus:border-(--nl-green) focus:shadow-[0_0_0_3px_rgba(51,175,145,0.12)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[13px] font-semibold text-(--nl-text-secondary)"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-(--nl-radius-sm) border border-(--nl-border) bg-white px-4 py-3 text-[14px] text-(--nl-text-primary) outline-none transition focus:border-(--nl-green) focus:shadow-[0_0_0_3px_rgba(51,175,145,0.12)]"
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    <optgroup label="Technology Services">
                      <option>Custom Software Development</option>
                      <option>Mobile App Development</option>
                      <option>AI & Machine Learning</option>
                      <option>Cloud & DevOps</option>
                      <option>Data Analytics & BI</option>
                      <option>Web Development</option>
                      <option>Cybersecurity</option>
                      <option>IT Consulting</option>
                    </optgroup>
                    <optgroup label="Marketing Services">
                      <option>SEO / Organic Search</option>
                      <option>PPC & Paid Advertising</option>
                      <option>Content Marketing</option>
                      <option>Social Media Marketing</option>
                      <option>Brand Strategy</option>
                      <option>Email Marketing</option>
                      <option>Market Research</option>
                    </optgroup>
                    <optgroup label="Products">
                      <option>SEED — Inventory Management System</option>
                    </optgroup>
                    <option>Full Package (Tech + Marketing)</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[13px] font-semibold text-(--nl-text-secondary)"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Brief description of your project, goals, timeline, and any specific requirements…"
                    className="min-h-25 w-full resize-y rounded-(--nl-radius-sm) border border-(--nl-border) bg-white px-4 py-3 text-[14px] text-(--nl-text-primary) outline-none transition focus:border-(--nl-green) focus:shadow-[0_0_0_3px_rgba(51,175,145,0.12)]"
                  />
                </div>
                <button
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                  disabled={submitted}
                  className={`w-full justify-center rounded-(--nl-radius-sm) border-2 border-(--nl-green) px-6 py-4 text-[15.5px] font-semibold text-white transition-all ${
                    submitted
                      ? "bg-(--nl-green-dark)"
                      : "bg-(--nl-green) hover:-translate-y-0.5 hover:bg-(--nl-green-dark)"
                  }`}
                >
                  {submitted
                    ? "✓ Message Sent! We'll respond within 24 hours."
                    : "Send Message →"}
                </button>
                <p className="text-center text-[12px] text-(--nl-text-muted)">
                  🔒 Your data is safe with us. We never spam or share your
                  information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
