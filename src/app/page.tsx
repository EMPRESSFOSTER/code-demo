import { AppLayout } from "@/components/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/data";
import { ArrowRight, Book, Code, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold font-headline tracking-tight">Welcome back, Voyager!</h1>
          <p className="text-muted-foreground">Here's a snapshot of your journey into the coding cosmos.</p>
        </header>

        <Card className="bg-gradient-to-br from-primary/20 to-accent/20">
          <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="space-y-2 flex-1">
              <Badge variant="secondary">In Progress</Badge>
              <h2 className="text-2xl font-bold font-headline">JavaScript Essentials: Variables</h2>
              <p className="text-muted-foreground">
                Continue learning about the fundamental building blocks of JavaScript.
              </p>
              <Button asChild className="mt-2">
                <Link href="/lessons/js-variables">Continue Lesson <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
            <div className="w-full md:w-1/3">
              <p className="text-sm text-muted-foreground mb-2">Your Progress</p>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <p className="text-sm font-medium text-right mt-1">45% Complete</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-md border border-primary/20">
                  <Book className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Browse Lessons</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Explore topics in HTML, CSS, and JavaScript. Each lesson is a step towards mastery.
              </CardDescription>
            </CardContent>
            <CardContent>
               <Button asChild variant="outline">
                <Link href="/lessons">View All Lessons</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-md border border-primary/20">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">My Projects</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Revisit your saved code snippets and continue building your creations.
              </CardDescription>
            </CardContent>
            <CardContent>
               <Button asChild variant="outline">
                <Link href="/projects">Go to Projects</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-md border border-primary/20">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Leaderboard</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                See how your progress stacks up against other coders in the galaxy.
              </CardDescription>
            </CardContent>
            <CardContent>
               <Button asChild variant="outline">
                <Link href="/leaderboard">Check Rankings</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
