"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2Icon, LogInIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/admin";

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    startTransition(async () => {
      const result = await signIn("credentials", {
        email,
        code,
        redirect: false,
      });
      if (result?.error) {
        setError("Invalid email or access code.");
      } else {
        window.location.href = callbackUrl;
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@numerlett.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="code">Access Code</Label>
        <Input
          id="code"
          type="password"
          placeholder="Enter access code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          disabled={isPending}
        />
      </div>

      {error && <p className="text-destructive text-sm">{error}</p>}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <LogInIcon className="size-4" />
        )}
        {isPending ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
}
