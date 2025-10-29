import { AppLayout } from "@/components/app-layout";
import { PlaygroundClient } from "./playground-client";

export default function PlaygroundPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const lessonId = searchParams?.lesson as string;

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-100px)]">
        <header className="mb-4">
          <h1 className="text-4xl font-bold font-headline tracking-tight">Playground</h1>
          <p className="text-muted-foreground mt-2">
            Experiment with HTML, CSS, and JavaScript in real-time.
          </p>
        </header>
        <PlaygroundClient lessonId={lessonId} />
      </div>
    </AppLayout>
  );
}
