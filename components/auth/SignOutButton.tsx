"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2Icon, LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function SignOutButton({ className }: { className?: string }) {
  const [signingOut, startSignOut] = useTransition();
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        startSignOut(async () => {
          await signOut({ redirect: false });
          router.refresh();
        });
      }}
      disabled={signingOut}
      variant="destructive"
      size="sm"
      className={cn("active:scale-90", className)}
    >
      {signingOut ? (
        <Loader2Icon className="size-4 animate-spin" />
      ) : (
        <LogOutIcon className="size-4" />
      )}
      {signingOut ? "Signing out…" : "Sign out"}
    </Button>
  );
}
