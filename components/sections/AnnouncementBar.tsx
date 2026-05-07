import { Rocket } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div
      className="bg-primary text-primary-foreground relative z-50 px-4 py-2 text-center text-[12px] leading-snug font-medium sm:px-6 sm:text-[13px]"
      role="banner"
    >
      <Rocket
        className="inline-block size-3.5 align-middle"
        aria-hidden="true"
      />
      <span className="ml-2">
        SEED - Our AI-powered Inventory Management System is now live.
      </span>
      <a
        target="_blank"
        href="https://seed.numerlett.com"
        className="ml-2 underline underline-offset-2 transition-opacity hover:opacity-100"
        aria-label="Learn more about SEED inventory system"
      >
        Explore SEED →
      </a>
    </div>
  );
}
