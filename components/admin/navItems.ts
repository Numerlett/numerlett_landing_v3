import { FileText, LayoutDashboard, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Contact", href: "/admin/contact", icon: MessageSquare },
  { label: "Articles", href: "/admin/articles", icon: FileText },
];
