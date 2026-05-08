import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export interface DashboardStatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  shortcut?: { link: string; label: string };
  className?: string;
}

export default function DashboardStatCard({
  title,
  value,
  icon,
  shortcut,
  className,
}: DashboardStatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between pb-2">
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          {icon && <span className="text-muted-foreground">{icon}</span>}
        </div>
        <p className="text-3xl font-bold">{value}</p>
        {shortcut && (
          <>
            <Separator className="my-3" />
            <Link href={shortcut.link}>
              <Button variant="link" size="sm" className="group h-auto p-0">
                {shortcut.label}
                <ArrowRightIcon
                  className="size-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
}
