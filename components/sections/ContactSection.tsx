"use client";

import { createContactForm } from "@/actions/contactForm";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Clock, Lock, Mail, MapPin, Phone } from "lucide-react";
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
  { Icon: Mail, label: "Email", content: <a href="mailto:hello@numerlett.com" className="text-primary">hello@numerlett.com</a> },
  { Icon: Phone, label: "Phone", content: <a href="tel:+918000000000" className="text-primary">+91 80000 00000</a> },
  { Icon: MapPin, label: "Location", content: "Bengaluru, Karnataka, India" },
  { Icon: Clock, label: "Response Time", content: "Within 24 hours · Mon–Sat" },
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
      setError("root", { message: result.error ?? "Something went wrong. Please try again." });
    }
  }

  return (
    <section className="bg-background py-24" id="contact" aria-labelledby="contact-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
              <span className="h-0.5 w-6 rounded bg-primary" aria-hidden="true" />
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
            <p className="reveal delay-2 mt-4 text-[16px] font-light leading-[1.75] text-muted-foreground">
              Tell us what you need — tech, marketing, SEED, or all three. We'll get back to you
              within 24 hours.
            </p>

            <div className="reveal delay-2 mt-8 space-y-6">
              {contactDetails.map(({ Icon, label, content }) => (
                <div key={label} className="flex gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-primary-mid bg-accent">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h5 className="font-display text-[14px] font-bold">{label}</h5>
                    <p className="text-[13.5px] text-muted-foreground">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right delay-2">
            <div className="rounded-brand-lg border border-border bg-muted p-6 sm:p-8 lg:p-10">
              <h3 className="font-display text-[22px] font-bold tracking-[-0.5px]">
                Send Us a Message
              </h3>

              {isSubmitSuccessful ? (
                <div className="mt-8 flex flex-col items-center gap-3 py-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                    <Check className="size-7 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <p className="text-[17px] font-semibold">Message Sent!</p>
                  <p className="text-[14px] text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-5">
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
                    <FieldLabel htmlFor="message">Tell Us About Your Project *</FieldLabel>
                    <Textarea
                      id="message"
                      placeholder="Brief description of your project, goals, timeline, and any specific requirements…"
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    <FieldError errors={[errors.message]} />
                  </Field>

                  {errors.root && (
                    <p role="alert" className="text-sm text-destructive">
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

                  <p className="flex items-center justify-center gap-1.5 text-center text-[12px] text-muted-foreground">
                    <Lock className="size-3" aria-hidden="true" />
                    Your data is safe with us. We never spam or share your information.
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
