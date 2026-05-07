import { Rocket } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div
      className="bg-primary px-4 py-2 text-center text-[12px] font-medium leading-snug text-primary-foreground sm:px-6 sm:text-[13px]"
      role="banner"
    >
      <Rocket className="inline-block size-3.5 align-middle" aria-hidden="true" />
      <span className="ml-2">
        SEED - Our AI-powered Inventory Management System is now live.
      </span>
      <a
        href="#seed"
        className="ml-2 underline underline-offset-2 transition-opacity hover:opacity-100"
        aria-label="Learn more about SEED inventory system"
      >
        Explore SEED →
      </a>
    </div>
  );
}
