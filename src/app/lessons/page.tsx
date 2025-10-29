import { AppLayout } from "@/components/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { lessons, placeholderImages } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const topics = ['HTML', 'CSS', 'JavaScript'];
const icons: { [key: string]: string | undefined } = {
  HTML: placeholderImages.htmlIcon?.imageUrl,
  CSS: placeholderImages.cssIcon?.imageUrl,
  JavaScript: placeholderImages.jsIcon?.imageUrl,
};

export default function LessonsPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold font-headline tracking-tight">Lessons</h1>
          <p className="text-muted-foreground mt-2">
            Your comprehensive guide to mastering web development.
          </p>
        </header>

        {topics.map(topic => (
          <section key={topic}>
            <h2 className="text-2xl font-bold font-headline mb-4">{topic} Fundamentals</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lessons.filter(l => l.topic === topic).map(lesson => (
                <Link href={`/lessons/${lesson.id}`} key={lesson.id} className="group">
                  <Card className="h-full transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:-translate-y-1">
                    <CardHeader className="flex-row items-center gap-4">
                      {icons[topic] && (
                         <Image
                            src={icons[topic]!}
                            alt={`${topic} icon`}
                            width={40}
                            height={40}
                            className="rounded-md"
                            data-ai-hint="code technology"
                        />
                      )}
                      <div>
                        <CardTitle className="font-headline text-lg">{lesson.title}</CardTitle>
                        <CardDescription className="mt-1">{lesson.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm font-medium text-primary flex items-center">
                        Start Learning <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppLayout>
  );
}
