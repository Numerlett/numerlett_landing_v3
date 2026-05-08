import ContactClient from "@/components/admin/ContactClient";
import { getContactForms } from "@/actions/contactForm";

export default async function ContactPage() {
  const result = await getContactForms();
  const forms = result.success ? (result.data ?? []) : [];

  return <ContactClient initialForms={forms} />;
}
