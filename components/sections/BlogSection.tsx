import Container from "@/components/Container";

const posts = [
  {
    tag: "SEO Strategy",
    title: "How to Rank #1 on Google in 2025: The Complete Technical SEO Guide",
    description:
      "Core Web Vitals, E-E-A-T signals, schema markup, and the 12-step audit checklist that gets our clients to position one.",
    date: "April 2025",
    icon: "📊",
    bg: "bg-(--nl-green-light)",
  },
  {
    tag: "AI & Software",
    title:
      "AI in Inventory Management: How SEED Uses Machine Learning to Predict Demand",
    description:
      "A deep dive into the demand forecasting models behind SEED, and how AI reduces overstock and stockout losses for manufacturers.",
    date: "March 2025",
    icon: "🤖",
    bg: "bg-[#fff8e8]",
  },
  {
    tag: "Digital Marketing",
    title:
      "The D2C Marketing Playbook: How to Profitably Scale from ₹0 to ₹1Cr Revenue",
    description:
      "The exact channel mix, budget allocation model, and content calendar framework we use for D2C brands entering the Indian market.",
    date: "March 2025",
    icon: "📣",
    bg: "bg-[#f0f4ff]",
  },
];

export default function BlogSection() {
  return (
    <section
      className="bg-(--nl-grey-light) py-24"
      id="blog"
      aria-labelledby="blog-heading"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-(--nl-green)">
              <span
                className="h-0.5 w-6 rounded bg-(--nl-green)"
                aria-hidden="true"
              />
              Insights & Thought Leadership
            </div>
            <h2
              id="blog-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            >
              From Our
              <br />
              Knowledge Base.
            </h2>
          </div>
          <a
            href="#"
            className="reveal delay-2 inline-flex items-center gap-2 rounded-(--nl-radius-sm) border border-(--nl-border-dark) px-6 py-3 text-[14px] font-semibold text-(--nl-text-primary) transition-all hover:-translate-y-0.5 hover:border-(--nl-green) hover:text-(--nl-green)"
          >
            View All Articles <span className="text-base">→</span>
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`reveal ${index ? `delay-${index + 1}` : ""} overflow-hidden rounded-(--nl-radius-md) border border-(--nl-border) bg-white transition-all hover:-translate-y-1 hover:border-(--nl-green) hover:shadow-(--nl-shadow-md)`}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div
                className={`aspect-4/3 ${post.bg} flex items-center justify-center text-[40px]`}
              >
                {post.icon}
              </div>
              <div className="p-6">
                <span
                  className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-(--nl-green)"
                  itemProp="keywords"
                >
                  {post.tag}
                </span>
                <h4
                  className="mt-2 font-display text-[16px] font-bold leading-[1.3] tracking-[-0.3px]"
                  itemProp="headline"
                >
                  {post.title}
                </h4>
                <p
                  className="mt-2 text-[13.5px] leading-[1.7] text-(--nl-text-secondary)"
                  itemProp="description"
                >
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className="font-mono text-[11.5px] text-(--nl-text-muted)"
                    itemProp="datePublished"
                  >
                    {post.date}
                  </span>
                  <a
                    href="#"
                    className="text-[12.5px] font-semibold text-(--nl-green)"
                  >
                    Read →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
