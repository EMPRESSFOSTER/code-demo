"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Book,
  Code,
  FolderKanban,
  Trophy,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/lessons", label: "Lessons", icon: Book },
  { href: "/playground", label: "Playground", icon: Code },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center gap-2 px-2 sm:py-5">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  "flex h-12 w-full items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-10 md:justify-start md:px-3 md:py-2",
                  isActive && "bg-primary/10 text-primary",
                  "group"
                )}
              >
                <item.icon className="h-6 w-6 transition-all group-hover:scale-110 md:h-5 md:w-5" />
                <span className="sr-only md:not-sr-only md:ml-3">{item.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="md:hidden">
              {item.label}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </nav>
  );
}
