import { AppLayout } from "@/components/app-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/data";
import { Book, Code, Edit, Trophy } from "lucide-react";

export default function ProfilePage() {
  const stats = [
    { label: "Lessons Completed", value: 12, icon: Book },
    { label: "Projects Created", value: 3, icon: Code },
    { label: "Leaderboard Rank", value: "#4", icon: Trophy },
  ];

  const badges = ["HTML Initiate", "CSS Apprentice", "JS Novice", "First Project"];

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto w-full">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold font-headline tracking-tight">My Profile</h1>
            <p className="text-muted-foreground mt-2">Your personal space in the coding galaxy.</p>
          </div>
          <Button variant="outline" className="mt-4 sm:mt-0">
            <Edit className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </header>

        <Card className="mb-8">
            <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-primary">
                    <AvatarImage src={placeholderImages.userProfile?.imageUrl} data-ai-hint="person professional"/>
                    <AvatarFallback className="text-4xl">V</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                    <h2 className="text-3xl font-bold font-headline">Voyager</h2>
                    <p className="text-muted-foreground">voyager@codevoyage.com</p>
                    <p className="text-sm mt-2">Joined on June 15, 2024</p>
                </div>
            </CardContent>
        </Card>

        <section className="mb-8">
            <h3 className="text-2xl font-bold font-headline mb-4">Stats</h3>
            <div className="grid gap-4 sm:grid-cols-3">
                {stats.map(stat => (
                    <Card key={stat.label}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold font-headline mb-4">Badges Earned</h3>
            <Card>
                <CardContent className="p-6 flex flex-wrap gap-2">
                    {badges.map(badgeName => (
                         <Badge key={badgeName} variant="secondary" className="text-base px-4 py-2 bg-accent/20 text-accent-foreground hover:bg-accent/30">
                            {badgeName}
                         </Badge>
                    ))}
                </CardContent>
            </Card>
        </section>

      </div>
    </AppLayout>
  );
}
