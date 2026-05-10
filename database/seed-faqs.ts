import "dotenv/config";
import mongoose from "mongoose";
import { FaqModel } from "./models/faq";
import { FaqStatus } from "./types";

const seeds = [
  {
    question: "What technology services does NumerLett offer?",
    answer:
      "NumerLett offers a full spectrum of technology services: custom software & web application development, mobile app development (iOS/Android), AI & ML solutions, cloud computing & DevOps, data analytics & BI, cybersecurity, and IT consulting & strategy. We handle everything from MVP builds to enterprise-scale digital transformations.",
    status: FaqStatus.PUBLISHED,
    order: 0,
  },
  {
    question: "What marketing services does NumerLett provide?",
    answer:
      "Our marketing services include SEO (technical, on-page, off-page), PPC & paid advertising (Google, Meta, LinkedIn), content marketing, social media marketing, brand strategy & identity, email marketing & CRM automation, market research & competitive intelligence, and digital analytics & reporting.",
    status: FaqStatus.PUBLISHED,
    order: 1,
  },
  {
    question: "What is SEED and who is it for?",
    answer:
      "SEED (Smart Enterprise Efficiency & Distribution) is NumerLett's AI-powered Inventory Management System. It's ideal for manufacturers, distributors, retailers, and e-commerce businesses managing multiple SKUs and warehouses. SEED provides real-time tracking, AI demand forecasting, ERP integration, and actionable analytics.",
    status: FaqStatus.PUBLISHED,
    order: 2,
  },
  {
    question: "Do you work with startups or only large enterprises?",
    answer:
      "Both. We work with early-stage startups (MVP development, initial SEO), growing SMEs (scaling tech & marketing), and large enterprises (complex integrations, enterprise software). Our engagement models are flexible — from project-based to long-term retainers.",
    status: FaqStatus.PUBLISHED,
    order: 3,
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A marketing audit & SEO strategy takes 2–3 weeks. A simple website: 4–6 weeks. A mobile app: 3–5 months. An enterprise software like SEED deployment: 2–4 months depending on customization needs. We always commit to a timeline upfront.",
    status: FaqStatus.PUBLISHED,
    order: 4,
  },
  {
    question: "How does NumerLett approach SEO to rank on Google?",
    answer:
      "We follow a comprehensive SEO methodology: technical audit & site health fixes, keyword research aligned to commercial intent, on-page optimization (schema markup, meta tags, heading structure), content creation targeting search intent, authoritative link building, and Core Web Vitals optimization. Every website we build is SEO-architected from the ground up.",
    status: FaqStatus.PUBLISHED,
    order: 5,
  },
];

async function seed() {
  const uri = process.env.DATABASE_URL;
  if (!uri) throw new Error("DATABASE_URL is not set in .env");

  await mongoose.connect(uri);
  console.log("Connected to MongoDB");

  await FaqModel.deleteMany({});
  console.log("Cleared existing FAQs");

  await FaqModel.insertMany(seeds);
  console.log(`Seeded ${seeds.length} FAQs`);

  await mongoose.disconnect();
  console.log("Done");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
