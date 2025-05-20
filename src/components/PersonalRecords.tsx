
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Medal } from "lucide-react";

// Mock personal records data
const records = [
  {
    id: 1,
    exercise: "Bench Press",
    value: "225 lbs",
    date: "2025-05-12",
    isRecent: true,
  },
  {
    id: 2,
    exercise: "Squat",
    value: "315 lbs",
    date: "2025-04-28",
    isRecent: false,
  },
  {
    id: 3,
    exercise: "Deadlift",
    value: "405 lbs",
    date: "2025-05-15",
    isRecent: true,
  },
  {
    id: 4,
    exercise: "Pull-ups",
    value: "15 reps",
    date: "2025-05-05",
    isRecent: false,
  },
  {
    id: 5,
    exercise: "5K Run",
    value: "22:45",
    date: "2025-05-18",
    isRecent: true,
  },
];

export function PersonalRecords() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Medal className="h-5 w-5 text-fitness-yellow" /> Personal Records
        </CardTitle>
        <CardDescription>Your top achievements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {records.map((record) => (
            <div key={record.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-fitness-yellow/10 text-fitness-yellow">
                  <Medal className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{record.exercise}</p>
                  <p className="text-sm text-muted-foreground">{new Date(record.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-fitness-foreground">{record.value}</span>
                {record.isRecent && (
                  <Badge className="bg-fitness-green text-white">New</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
