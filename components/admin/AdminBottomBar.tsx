"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";

export default function AdminBottomBar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "bg-background border-border z-50 border-t shadow-lg backdrop-blur-lg",
        className,
      )}
    >
      <div className="flex items-center justify-around px-4 py-2">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch
              className="flex flex-col items-center justify-center rounded-lg px-3 py-2 transition-all duration-150 active:scale-90"
            >
              <item.icon
                className={cn(
                  "mb-1 size-8 rounded p-1",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground",
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "max-w-full truncate text-center text-xs leading-tight",
                  active ? "text-primary font-bold" : "text-muted-foreground",
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
