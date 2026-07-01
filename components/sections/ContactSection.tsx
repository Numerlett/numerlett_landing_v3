"use client";

import { createContactForm } from "@/actions/contactForm";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteContact } from "@/data";
import { Check, Lock, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  mobile: z.string().min(7, "Enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const contactDetails = [
  {
    Icon: Mail,
    label: "Email",
    content: (
      <a href={`mailto:${siteContact.email}`} className="text-primary">
        {siteContact.email}
      </a>
    ),
  },
  {
    Icon: Phone,
    label: "Phone",
    content: (
      <a href={`tel:${siteContact.phone.tel}`} className="text-primary">
        {siteContact.phone.display}
      </a>
    ),
  },
  { Icon: MapPin, label: "Location", content: siteContact.location },
];

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    const result = await createContactForm(values);
    if (!result.success) {
      setError("root", {
        message: result.error ?? "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <section
      className="bg-background py-24"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <div className="reveal text-primary inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.14em] uppercase">
              <span
                className="bg-primary h-0.5 w-6 rounded"
                aria-hidden="true"
              />
              Contact Us
            </div>
            <h2
              id="contact-heading"
              className="reveal font-display mt-4 text-[clamp(32px,4vw,52px)] leading-[1.1] font-bold tracking-[-1.5px] delay-1"
            >
              Let&apos;s Start
              <br />
              Something Big.
            </h2>
            <p className="reveal text-muted-foreground mt-4 text-[16px] leading-[1.75] font-light delay-2">
              Tell us what you need — tech, marketing, SEED, or all three. We&apos;ll
              get back to you within 24 hours.
            </p>

            <div className="reveal mt-8 space-y-6 delay-2">
              {contactDetails.map(({ Icon, label, content }) => (
                <div key={label} className="flex gap-4">
                  <div className="border-primary-mid bg-accent flex h-11 w-11 items-center justify-center rounded-[10px] border">
                    <Icon className="text-primary size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h5 className="font-display text-[14px] font-bold">
                      {label}
                    </h5>
                    <p className="text-muted-foreground text-[13.5px]">
                      {content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right delay-2">
            <div className="rounded-brand-lg border-border bg-muted border p-6 sm:p-8 lg:p-10">
              <h3 className="font-display text-[22px] font-bold tracking-[-0.5px]">
                Send Us a Message
              </h3>

              {isSubmitSuccessful ? (
                <div className="mt-8 flex flex-col items-center gap-3 py-8 text-center">
                  <div className="bg-primary flex h-14 w-14 items-center justify-center rounded-full">
                    <Check
                      className="text-primary-foreground size-7"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-[17px] font-semibold">Message Sent!</p>
                  <p className="text-muted-foreground text-[14px]">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="mt-6 space-y-5"
                >
                  <Field data-invalid={!!errors.name}>
                    <FieldLabel htmlFor="name">Full Name *</FieldLabel>
                    <Input
                      id="name"
                      placeholder="Rahul Sharma"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    <FieldError errors={[errors.name]} />
                  </Field>

                  <Field data-invalid={!!errors.email}>
                    <FieldLabel htmlFor="email">Business Email *</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="rahul@company.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    <FieldError errors={[errors.email]} />
                  </Field>

                  <Field data-invalid={!!errors.mobile}>
                    <FieldLabel htmlFor="mobile">Phone Number *</FieldLabel>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      aria-invalid={!!errors.mobile}
                      {...register("mobile")}
                    />
                    <FieldError errors={[errors.mobile]} />
                  </Field>

                  <Field data-invalid={!!errors.message}>
                    <FieldLabel htmlFor="message">
                      Tell Us About Your Project *
                    </FieldLabel>
                    <Textarea
                      id="message"
                      placeholder="Brief description of your project, goals, timeline, and any specific requirements…"
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    <FieldError errors={[errors.message]} />
                  </Field>

                  {errors.root && (
                    <p role="alert" className="text-destructive text-sm">
                      {errors.root.message}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 text-[15.5px] font-semibold"
                  >
                    {isSubmitting ? "Sending…" : "Send Message →"}
                  </Button>

                  <p className="text-muted-foreground flex items-center justify-center gap-1.5 text-center text-[12px]">
                    <Lock className="size-3" aria-hidden="true" />
                    Your data is safe with us. We never spam or share your
                    information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
