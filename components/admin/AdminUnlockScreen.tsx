"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { type Variants, motion } from "framer-motion";
import { LockIcon, Loader2Icon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function AdminUnlockScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const unlock = (emailVal: string, codeVal: string) => {
    setError("");
    startTransition(async () => {
      const result = await signIn("credentials", {
        email: emailVal,
        code: codeVal,
        redirect: false,
      });
      if (result?.error) {
        setError("Invalid email or access code.");
        setCode("");
      } else {
        router.refresh();
      }
    });
  };

  const handleCodeChange = (val: string) => {
    setCode(val);
    if (val.length === 6 && email) unlock(email, val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && code.length === 6) unlock(email, code);
  };

  return (
    <div className="bg-background flex min-h-dvh flex-col items-center justify-center p-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-sm space-y-8"
      >
        <motion.div variants={item} className="flex justify-center">
          <Logo />
        </motion.div>

        <motion.div variants={item} className="flex flex-col items-center gap-3">
          <div className="bg-primary/10 border-primary/20 flex size-20 items-center justify-center rounded-full border-2">
            <LockIcon className="text-primary size-9" aria-hidden="true" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight">Admin Access</h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Enter your credentials to unlock
            </p>
          </div>
        </motion.div>

        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="border-border bg-card rounded-brand-lg border p-6 shadow-brand-sm space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@numerlett.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
              required
              autoFocus
            />
          </div>

          <div className="space-y-3">
            <Label>Access Code</Label>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={code}
                onChange={handleCodeChange}
                disabled={isPending}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          {error && (
            <p className={cn("text-destructive text-center text-sm")}>{error}</p>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isPending || !email || code.length < 6}
          >
            {isPending ? (
              <Loader2Icon className="size-4 animate-spin" />
            ) : (
              <LockIcon className="size-4" />
            )}
            {isPending ? "Unlocking…" : "Unlock Dashboard"}
          </Button>
        </motion.form>
      </motion.div>
    </div>
  );
}
