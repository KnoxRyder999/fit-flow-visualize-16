
import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Medal, Search, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock personal records data by category
const strengthRecords = [
  {
    id: 1,
    exercise: "Bench Press",
    value: "225 lbs",
    date: "2025-05-12",
    previousValue: "215 lbs",
    improvement: "+10 lbs",
    isRecent: true,
  },
  {
    id: 2,
    exercise: "Squat",
    value: "315 lbs",
    date: "2025-04-28",
    previousValue: "300 lbs",
    improvement: "+15 lbs",
    isRecent: false,
  },
  {
    id: 3,
    exercise: "Deadlift",
    value: "405 lbs",
    date: "2025-05-15",
    previousValue: "385 lbs",
    improvement: "+20 lbs",
    isRecent: true,
  },
  {
    id: 4,
    exercise: "Pull-ups",
    value: "15 reps",
    date: "2025-05-05",
    previousValue: "12 reps",
    improvement: "+3 reps",
    isRecent: false,
  },
  {
    id: 5,
    exercise: "Overhead Press",
    value: "135 lbs",
    date: "2025-05-01",
    previousValue: "125 lbs",
    improvement: "+10 lbs",
    isRecent: false,
  },
];

const cardioRecords = [
  {
    id: 6,
    exercise: "5K Run",
    value: "22:45",
    date: "2025-05-18",
    previousValue: "23:30",
    improvement: "-0:45",
    isRecent: true,
  },
  {
    id: 7,
    exercise: "10K Run",
    value: "48:20",
    date: "2025-04-12",
    previousValue: "49:15",
    improvement: "-0:55",
    isRecent: false,
  },
  {
    id: 8,
    exercise: "1 Mile Run",
    value: "6:15",
    date: "2025-05-10",
    previousValue: "6:30",
    improvement: "-0:15",
    isRecent: false,
  },
  {
    id: 9,
    exercise: "Cycling 20km",
    value: "35:10",
    date: "2025-05-05",
    previousValue: "36:45",
    improvement: "-1:35",
    isRecent: false,
  },
];

const bodyweightRecords = [
  {
    id: 10,
    exercise: "Max Push-ups",
    value: "45 reps",
    date: "2025-05-14",
    previousValue: "40 reps",
    improvement: "+5 reps",
    isRecent: true,
  },
  {
    id: 11,
    exercise: "Max Dips",
    value: "20 reps",
    date: "2025-04-20",
    previousValue: "18 reps",
    improvement: "+2 reps",
    isRecent: false,
  },
  {
    id: 12,
    exercise: "Plank",
    value: "3:15",
    date: "2025-05-08",
    previousValue: "2:45",
    improvement: "+0:30",
    isRecent: false,
  },
];

export default function PersonalRecordsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Filter records based on search query and active tab
  const filterRecords = (records: any[]) => {
    return records.filter((record) =>
      record.exercise.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const allRecords = [...strengthRecords, ...cardioRecords, ...bodyweightRecords];
  const filteredStrengthRecords = filterRecords(strengthRecords);
  const filteredCardioRecords = filterRecords(cardioRecords);
  const filteredBodyweightRecords = filterRecords(bodyweightRecords);
  const filteredAllRecords = filterRecords(allRecords);

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Personal Records</h1>
          <p className="text-muted-foreground">
            Track and celebrate your fitness milestones
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search exercises..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="all">All Records</TabsTrigger>
            <TabsTrigger value="strength">Strength</TabsTrigger>
            <TabsTrigger value="cardio">Cardio</TabsTrigger>
            <TabsTrigger value="bodyweight">Bodyweight</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <RecordsGrid records={filteredAllRecords} />
          </TabsContent>

          <TabsContent value="strength">
            <RecordsGrid records={filteredStrengthRecords} />
          </TabsContent>

          <TabsContent value="cardio">
            <RecordsGrid records={filteredCardioRecords} />
          </TabsContent>

          <TabsContent value="bodyweight">
            <RecordsGrid records={filteredBodyweightRecords} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

function RecordsGrid({ records }: { records: any[] }) {
  if (records.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        No records found. Try adjusting your search.
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {records.map((record) => (
        <Card key={record.id} className="overflow-hidden">
          <CardHeader className={cn("pb-2", record.isRecent ? "bg-fitness-primary/5" : "")}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-fitness-yellow/10 text-fitness-yellow">
                  <Medal className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{record.exercise}</CardTitle>
              </div>
              {record.isRecent && (
                <Badge className="bg-fitness-green text-white">New</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-2xl font-bold">{record.value}</div>
              <div className="text-sm text-muted-foreground">
                {new Date(record.date).toLocaleDateString()}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm border-t pt-3">
              <div className="text-muted-foreground">Previous: {record.previousValue}</div>
              <div className="flex items-center gap-1 text-fitness-green">
                <TrendingUp className="h-4 w-4" />
                {record.improvement}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
