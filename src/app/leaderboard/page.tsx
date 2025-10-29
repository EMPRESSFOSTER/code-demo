import { AppLayout } from "@/components/app-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { leaderboardData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Trophy } from "lucide-react";

export default function LeaderboardPage() {
  return (
    <AppLayout>
      <div>
        <h1 className="text-4xl font-bold font-headline tracking-tight">Leaderboard</h1>
        <p className="text-muted-foreground mt-2">
          See who's at the top of the coding cosmos.
        </p>
      </div>
      <Card className="mt-8">
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><Trophy className="text-primary"/>Top Voyagers</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[80px]">Rank</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {leaderboardData.map(user => (
                        <TableRow key={user.rank} className={cn(user.name === 'You' && 'bg-primary/10 hover:bg-primary/20')}>
                            <TableCell className="font-bold text-lg">{user.rank}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="person portrait"/>
                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium">{user.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right font-mono font-semibold">{user.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
