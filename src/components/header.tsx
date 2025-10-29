import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";

export function Header() {
  return (
    <header className="sticky top-0 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:static md:h-auto md:border-0 md:bg-transparent md:px-6 lg:h-[60px]">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
              <Icons.logo className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg">CodeVoyage</span>
            </Link>
          </div>
          <MainNav />
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <UserNav />
      </div>
    </header>
  );
}