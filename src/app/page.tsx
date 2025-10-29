import { LandingLayout } from "@/components/landing-layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Target, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { lessons, placeholderImages } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Interactive Lessons",
      description:
        "Learn by doing with hands-on lessons that guide you from beginner to expert.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Live Playground",
      description:
        "Experiment with HTML, CSS, and JavaScript in a real-time code editor.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Gamified Learning",
      description:
        "Earn points and badges, and climb the leaderboard as you master new skills.",
    },
  ];

  return (
    <LandingLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6 text-center">
            <Badge
              variant="outline"
              className="py-2 px-4 rounded-full text-sm font-medium bg-primary/10 border-primary/20 text-primary"
            >
              Learn, Build, Conquer
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mt-4">
              Your Galactic Journey into Code
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground">
              CodeVoyage is a fun, interactive platform to master web
              development. Start your adventure today and become a coding
              astronaut.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/register">
                  Start Your Voyage <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/lessons">Explore Lessons</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container px-4 md:px-6">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Why CodeVoyage?
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                We've built a learning experience that's engaging, effective,
                and out of this world.
              </p>
            </header>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      {feature.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-headline text-xl">
                      {feature.title}
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Available Courses Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Available Courses
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Begin your learning journey with our curated selection of
                courses.
              </p>
            </header>
            <div className="grid gap-8 md:grid-cols-3">
              {lessons.map((lesson) => (
                <Link
                  href={`/lessons/${lesson.id}`}
                  key={lesson.id}
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:-translate-y-1">
                    <CardHeader className="flex-row items-center gap-4">
                      {placeholderImages.courseIcon?.imageUrl && (
                        <Image
                          src={placeholderImages.courseIcon.imageUrl}
                          alt={`${lesson.topic} icon`}
                          width={40}
                          height={40}
                          className="rounded-md"
                          data-ai-hint={placeholderImages.courseIcon.imageHint}
                        />
                      )}
                      <div>
                        <CardTitle className="font-headline text-lg">
                          {lesson.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{lesson.description}</CardDescription>
                      <div className="text-sm font-medium text-primary flex items-center mt-4">
                        Start Learning{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Ready for Liftoff?
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              Your journey to becoming a web development expert starts now.
              Create your free account and begin your first lesson.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/register">Create Your Free Account</Link>
            </Button>
          </div>
        </section>
      </main>
    </LandingLayout>
  );
}
