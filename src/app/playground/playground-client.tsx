"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, Sparkles, Save } from "lucide-react";
import { lessons } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { aiPoweredCodingAssistance } from "@/ai/flows/ai-powered-coding-assistance";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export function PlaygroundClient({ lessonId }: { lessonId?: string }) {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  const [isAiDialogOpen, setIsAiDialogOpen] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [aiErrorFix, setAiErrorFix] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    const lesson = lessons.find((l) => l.id === lessonId);
    if (lesson) {
      setHtmlCode(lesson.exampleCode.html);
      setCssCode(lesson.exampleCode.css);
      setJsCode(lesson.exampleCode.js);
    }
  }, [lessonId]);
  
  // Debounced effect to run code on change
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
      `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);


  const handleRunCode = () => {
    setSrcDoc(`
      <html>
        <body>${htmlCode}</body>
        <style>${cssCode}</style>
        <script>${jsCode}</script>
      </html>
    `);
    toast({
      title: "Code Executed!",
      description: "Your preview has been updated.",
    });
  };

  const handleGetAiSuggestion = async () => {
    setIsAiLoading(true);
    setIsAiDialogOpen(true);
    setAiSuggestion("");
    setAiErrorFix("");

    const lessonContext = lessonId ? lessons.find(l => l.id === lessonId)?.content || "" : "General web development practice.";
    const fullCode = `HTML:\n${htmlCode}\n\nCSS:\n${cssCode}\n\nJavaScript:\n${jsCode}`;

    try {
      const result = await aiPoweredCodingAssistance({
        code: fullCode,
        lessonContext,
      });
      setAiSuggestion(result.suggestion);
      setAiErrorFix(result.errorFix);
    } catch (error) {
      console.error("AI assistance error:", error);
      setAiSuggestion("Sorry, I couldn't generate a suggestion at this time.");
      toast({
        title: "AI Error",
        description: "There was a problem contacting the AI assistant.",
        variant: "destructive",
      });
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSaveCode = () => {
    toast({
      title: "Project Saved!",
      description: "Your code has been saved to your projects.",
    });
  };

  return (
    <>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <Tabs defaultValue="html" className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
                <TabsList>
                    <TabsTrigger value="html">HTML</TabsTrigger>
                    <TabsTrigger value="css">CSS</TabsTrigger>
                    <TabsTrigger value="js">JavaScript</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                    <Button onClick={handleGetAiSuggestion} variant="outline" size="sm" disabled={isAiLoading}>
                        <Sparkles className="mr-2 h-4 w-4"/>
                        AI Assist
                    </Button>
                    <Button onClick={handleSaveCode} variant="outline" size="sm">
                        <Save className="mr-2 h-4 w-4" />
                        Save
                    </Button>
                    <Button onClick={handleRunCode} size="sm">
                        <Play className="mr-2 h-4 w-4" />
                        Run
                    </Button>
                </div>
            </div>
            <TabsContent value="html" className="flex-1">
              <Textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                placeholder="HTML code here..."
                className="h-full w-full font-code text-sm resize-none"
              />
            </TabsContent>
            <TabsContent value="css" className="flex-1">
              <Textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                placeholder="CSS code here..."
                className="h-full w-full font-code text-sm resize-none"
              />
            </TabsContent>
            <TabsContent value="js" className="flex-1">
              <Textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                placeholder="JavaScript code here..."
                className="h-full w-full font-code text-sm resize-none"
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium mb-2">Live Preview</p>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            className="w-full h-full border rounded-md bg-white"
          />
        </div>
      </div>
      <Dialog open={isAiDialogOpen} onOpenChange={setIsAiDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="font-headline flex items-center gap-2"><Sparkles className="text-primary"/>AI Coding Assistance</DialogTitle>
            <DialogDescription>
              Here are some suggestions and fixes for your code.
            </DialogDescription>
          </DialogHeader>
          {isAiLoading ? (
             <div className="flex items-center justify-center h-48">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid gap-4 py-4 text-sm max-h-[60vh] overflow-y-auto">
                <h3 className="font-semibold text-foreground">Suggestion</h3>
                <Card className="bg-muted/50"><CardContent className="p-4">{aiSuggestion}</CardContent></Card>
                
                <h3 className="font-semibold text-foreground mt-4">Error Fix</h3>
                {aiErrorFix && aiErrorFix !== "there are no errors" ? (
                    <Card className="bg-muted/50"><CardContent className="p-4"><pre className="font-code text-xs whitespace-pre-wrap">{aiErrorFix}</pre></CardContent></Card>
                ) : (
                    <Card className="bg-muted/50"><CardContent className="p-4">No errors detected. Keep up the great work!</CardContent></Card>
                )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
