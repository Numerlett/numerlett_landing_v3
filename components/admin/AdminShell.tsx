"use client";

import { useState } from "react";
import AdminBottomBar from "./AdminBottomBar";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import NextAuthSessionProviders from "@/providers/NextAuthSessionProviders";

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <NextAuthSessionProviders>
      <div className="bg-background text-foreground flex h-dvh flex-row overflow-hidden">
        <AdminSidebar expanded={expanded} className="hidden md:flex" />
        <div className="flex flex-1 flex-col">
          <AdminHeader
            expanded={expanded}
            onToggle={() => setExpanded((prev) => !prev)}
          />
          <main className="flex-1 overflow-y-auto p-4 pb-20 md:pb-4">
            {children}
          </main>
          <AdminBottomBar className="block md:hidden" />
        </div>
      </div>
    </NextAuthSessionProviders>
  );
}
