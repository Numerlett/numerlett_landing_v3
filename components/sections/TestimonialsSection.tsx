import Container from "@/components/Container";

const testimonials = [
  {
    quote:
      '"NumerLett didn\'t just build our website — they made it rank. We went from invisible to the #1 position on Google for our main keywords in under 6 months. The ROI has been extraordinary."',
    name: "Arjun Patel",
    role: "CEO, FashionFirst India",
    initials: "AP",
    avatarBg: "bg-(--nl-green-light)",
    avatarColor: "text-(--nl-green)",
  },
  {
    quote:
      '"SEED transformed how we manage our 4 warehouses. What used to take 3 hours of spreadsheet hell is now real-time, automated, and accurate. Worth every rupee."',
    name: "Sneha Kulkarni",
    role: "Operations Head, MechPro Manufacturing",
    initials: "SK",
    avatarBg: "bg-[#e8f4ff]",
    avatarColor: "text-[#2563eb]",
  },
  {
    quote:
      '"They built our mobile app on time, within budget, and it hit 4.8 stars on the App Store. The team is rare — they think like founders, not contractors."',
    name: "Rohan Mehta",
    role: "Founder, InvestEasy App",
    initials: "RM",
    avatarBg: "bg-[#fff8e8]",
    avatarColor: "text-[#d97706]",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="bg-(--nl-grey-light) py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-(--nl-green)">
              <span
                className="h-0.5 w-6 rounded bg-(--nl-green)"
                aria-hidden="true"
              />
              Client Testimonials
            </div>
            <h2
              id="testimonials-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            >
              What Our Clients
              <br />
              Actually Say.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.name}
              className={`reveal ${index ? `delay-${index + 1}` : ""} rounded-(--nl-radius-md) border border-(--nl-border) bg-white p-8 transition-all hover:border-(--nl-green-mid) hover:shadow-(--nl-shadow-md)`}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div
                className="mb-4 text-[16px] tracking-[2px] text-(--nl-green)"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>
              <p
                className="mb-6 text-[14.5px] font-light leading-[1.8] text-(--nl-text-secondary)"
                itemProp="reviewBody"
              >
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-[14px] font-extrabold ${testimonial.avatarBg} ${testimonial.avatarColor}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-[14px] font-bold" itemProp="author">
                    {testimonial.name}
                  </div>
                  <div className="text-[12px] text-(--nl-text-muted)">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
