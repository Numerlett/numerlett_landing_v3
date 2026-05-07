export default function AnnouncementBar() {
  return (
    <div
      className="bg-(--nl-green) px-6 py-2 text-center text-[13px] font-medium text-white"
      role="banner"
    >
      <span aria-hidden="true">🚀</span>
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
