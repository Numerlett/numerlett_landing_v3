"use client";

import Logo from "@/components/Logo";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Loader2Icon, LogOutIcon, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTransition } from "react";

function getInitials(email: string): string {
  const local = email.split("@")[0];
  const parts = local.split(".");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return local.slice(0, 2).toUpperCase();
}

export default function AdminHeader({
  expanded,
  onToggle,
  className,
}: {
  expanded: boolean;
  onToggle: () => void;
  className?: string;
}) {
  const { data: session } = useSession();
  const email = session?.user?.email ?? "";
  const initials = email ? getInitials(email) : "AD";

  const [signingOut, startSignOut] = useTransition();

  return (
    <header
      className={cn(
        "bg-background border-border flex flex-row items-center gap-3 border-b p-3 shadow-md",
        className,
      )}
    >
      <Logo className="text-2xl" />

      <Button variant="ghost" size="icon" onClick={onToggle}>
        {expanded ? (
          <PanelLeftClose className="size-5" aria-hidden="true" />
        ) : (
          <PanelLeftOpen className="size-5" aria-hidden="true" />
        )}
        <span className="sr-only">
          {expanded ? "Collapse sidebar" : "Expand sidebar"}
        </span>
      </Button>

      <Separator orientation="vertical" className="h-6" />

      <span className="text-lg font-bold">Admin</span>

      <div className="ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Account menu"
            >
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {email && (
              <>
                <DropdownMenuLabel className="text-muted-foreground truncate text-xs font-normal">
                  {email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </>
            )}
            <DropdownMenuItem
              onSelect={() => {
                startSignOut(async () => {
                  await signOut({ callbackUrl: "/login" });
                });
              }}
              disabled={signingOut}
              className="text-destructive focus:text-destructive cursor-pointer"
            >
              {signingOut ? (
                <Loader2Icon className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <LogOutIcon className="size-4" aria-hidden="true" />
              )}
              {signingOut ? "Signing out…" : "Sign out"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
