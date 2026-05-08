"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";

export default function AdminSidebar({
  expanded,
  className,
}: {
  expanded: boolean;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "group border-border bg-background z-10 flex max-h-screen w-[4.75rem] flex-col overflow-hidden border-r p-2.5 shadow-md backdrop-blur-lg transition-all duration-300 ease-in-out hover:w-60",
        expanded && "w-60",
        className,
      )}
    >
      <div className="flex min-w-max flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch
              className="hover:bg-muted relative flex cursor-pointer flex-row items-center rounded-xl"
            >
              <item.icon
                className={cn(
                  "m-2.5 size-8 rounded-lg p-1.5",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground",
                )}
                aria-hidden="true"
              />

              {/* label shown below icon when collapsed */}
              <span
                className={cn(
                  "absolute left-7 -translate-x-1/2 text-xs transition-opacity duration-200 group-hover:pointer-events-none group-hover:opacity-0",
                  active
                    ? "text-foreground top-[90%] font-bold"
                    : "text-muted-foreground top-[80%]",
                  expanded && "pointer-events-none opacity-0",
                )}
              >
                {item.label}
              </span>

              {/* label shown inline when expanded */}
              <span
                className={cn(
                  "pointer-events-none text-sm opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100",
                  active ? "text-foreground font-bold" : "text-muted-foreground",
                  expanded && "pointer-events-auto opacity-100",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
