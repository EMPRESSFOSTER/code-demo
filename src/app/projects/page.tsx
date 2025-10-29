import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsData } from "@/lib/data";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold font-headline tracking-tight">My Projects</h1>
          <p className="text-muted-foreground mt-2">
            Your personal collection of coding creations.
          </p>
        </div>
        <Button asChild>
            <Link href="/playground">
                <Plus className="mr-2 h-4 w-4" /> New Project
            </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {projectsData.map(project => (
          <Link href="/playground" key={project.id} className="group">
            <Card className="overflow-hidden transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10">
              <CardHeader className="p-0">
                {project.thumbnail && (
                    <Image
                        src={project.thumbnail}
                        alt={project.name}
                        width={400}
                        height={300}
                        className="aspect-[4/3] w-full object-cover"
                        data-ai-hint="abstract code"
                    />
                )}
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors">{project.name}</CardTitle>
              </CardContent>
              <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
                Last modified {project.lastModified}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </AppLayout>
  );
}
