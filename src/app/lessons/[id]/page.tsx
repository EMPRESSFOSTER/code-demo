import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { lessons } from "@/lib/data";
import { Code, Lightbulb, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  const lesson = lessons.find(l => l.id === params.id);

  if (!lesson) {
    notFound();
  }

  const playgroundLink = `/playground?lesson=${lesson.id}`;

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <p className="text-primary font-semibold">{lesson.topic} Fundamentals</p>
          <h1 className="text-4xl font-bold font-headline mt-1 tracking-tight">{lesson.title}</h1>
        </header>

        <article className="prose prose-invert max-w-none text-foreground/90">
          <p className="text-xl text-muted-foreground">{lesson.description}</p>
          <p>{lesson.content}</p>
        </article>

        <Separator className="my-8" />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-headline flex items-center"><Code className="mr-3 text-primary"/>Example Code</h2>
          <Card className="bg-background/50">
            <CardContent className="p-4">
              <pre className="p-4 rounded-md bg-black/50 overflow-x-auto">
                <code className="font-code text-sm">
                  {lesson.exampleCode.html}
                </code>
              </pre>
            </CardContent>
          </Card>
          <Button asChild>
            <Link href={playgroundLink}>
              Try it Yourself <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>

        <Separator className="my-8" />

        <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline flex items-center"><Lightbulb className="mr-3 text-accent"/>Knowledge Check</h2>
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">{lesson.quiz.question}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {lesson.quiz.options.map(option => (
                        <Button key={option} variant="outline" className="w-full justify-start text-left h-auto py-3">
                           {option}
                        </Button>
                    ))}
                    <p className="text-sm text-muted-foreground pt-4">Select an option to see if you are correct!</p>
                </CardContent>
            </Card>
        </section>
      </div>
    </AppLayout>
  );
}
