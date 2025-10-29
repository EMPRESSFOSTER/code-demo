import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";

function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">CodeVoyage</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/lessons" className="transition-colors hover:text-foreground/80 text-foreground/60">Lessons</Link>
          <Link href="/playground" className="transition-colors hover:text-foreground/80 text-foreground/60">Playground</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function LandingFooter() {
    return (
        <footer className="border-t">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <Icons.logo className="h-6 w-6 text-primary"/>
                    <p className="text-center text-sm leading-loose md:text-left">
                        Built by CodeVoyage. The journey to mastering code.
                    </p>
                </div>
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} CodeVoyage, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}


export function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </div>
  );
}