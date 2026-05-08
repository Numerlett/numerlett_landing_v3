import "dotenv/config";
import mongoose from "mongoose";
import { ContactFormModel, ContactFormStatus } from "./models/contactForm";

const seeds = [
  {
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    mobile: "+91 98765 43210",
    message:
      "Hi, I'm interested in your services for an upcoming product launch. Could you share your pricing and availability for Q3?",
    status: ContactFormStatus.PENDING,
  },
  {
    name: "Priya Sharma",
    email: "priya.sharma@techcorp.in",
    mobile: "+91 91234 56789",
    message:
      "We need a complete brand identity package including logo, website, and social media assets. Please get in touch.",
    status: ContactFormStatus.IN_PROGRESS,
    adminNotes: "Scheduled discovery call for next Thursday.",
  },
  {
    name: "David Chen",
    email: "david.chen@startupxyz.com",
    mobile: "+1 415 555 0192",
    message:
      "Looking for help redesigning our SaaS landing page. We have a Figma draft ready and need implementation support.",
    status: ContactFormStatus.RESOLVED,
    adminNotes: "Project completed and delivered on 2026-04-15. Client happy.",
  },
  {
    name: "Fatima Al-Rashid",
    email: "fatima@bloomagency.ae",
    mobile: "+971 50 123 4567",
    message:
      "Can you handle bilingual (Arabic/English) web projects? We have a client asking for this specifically.",
    status: ContactFormStatus.CLOSED,
    adminNotes: "Out of scope. Referred to a partner agency.",
  },
  {
    name: "Lena Müller",
    email: "lena.muller@designhaus.de",
    mobile: "+49 30 12345678",
    message:
      "Interested in ongoing retainer for UI/UX work. Budget is €3k/month. Please share your retainer packages.",
    status: ContactFormStatus.PENDING,
  },
];

async function seed() {
  const uri = process.env.DATABASE_URL;
  if (!uri) throw new Error("DATABASE_URL is not set in .env");

  await mongoose.connect(uri);
  console.log("Connected to MongoDB");

  await ContactFormModel.deleteMany({});
  console.log("Cleared existing contact_forms");

  await ContactFormModel.insertMany(seeds);
  console.log(`Seeded ${seeds.length} contact form entries`);

  await mongoose.disconnect();
  console.log("Done");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
