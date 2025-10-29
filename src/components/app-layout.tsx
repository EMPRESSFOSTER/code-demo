import {
  TooltipProvider,
} from "@/components/ui/tooltip";
import { MainNav } from "@/components/main-nav";
import { Header } from "@/components/header";
import Link from "next/link";
import { Icons } from "./icons";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-background md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Icons.logo className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg">CodeVoyage</span>
              </Link>
            </div>
            <div className="flex-1">
              <MainNav />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Header />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
