
import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Dumbbell, Filter, History, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Extended mock workout data
const workouts = [
  {
    id: 1,
    title: "Morning Strength",
    date: "2025-05-18",
    duration: "45 min",
    type: "Strength",
    metrics: { calories: "320", sets: "15", weight: "2250 lbs (total)" },
    notes: "Focused on chest and triceps. Increased bench press weight by 5 lbs."
  },
  {
    id: 2,
    title: "Evening Run",
    date: "2025-05-16",
    duration: "30 min",
    type: "Cardio",
    metrics: { distance: "5km", calories: "280", pace: "6:00/km" },
    notes: "Felt good, pace was consistent throughout. Slight knee discomfort at the end."
  },
  {
    id: 3,
    title: "Full Body Workout",
    date: "2025-05-14",
    duration: "60 min",
    type: "Strength",
    metrics: { calories: "450", sets: "20", weight: "2800 lbs (total)" },
    notes: "Great session, hit PR on deadlift at 315 lbs for 5 reps."
  },
  {
    id: 4,
    title: "Hill Sprints",
    date: "2025-05-12",
    duration: "25 min",
    type: "HIIT",
    metrics: { calories: "310", intervals: "8", distance: "2.5km" },
    notes: "Tough session. Legs were tired but pushed through."
  },
  {
    id: 5,
    title: "Back & Biceps",
    date: "2025-05-10",
    duration: "50 min",
    type: "Strength",
    metrics: { calories: "380", sets: "18", weight: "2400 lbs (total)" },
    notes: "Focused on lat pulldowns and barbell curls. Good pump."
  },
  {
    id: 6,
    title: "Long Distance Run",
    date: "2025-05-08",
    duration: "65 min",
    type: "Cardio",
    metrics: { distance: "10km", calories: "520", pace: "6:30/km" },
    notes: "Longest run of the month. Maintained consistent pace throughout."
  },
  {
    id: 7,
    title: "Leg Day",
    date: "2025-05-06",
    duration: "55 min",
    type: "Strength",
    metrics: { calories: "420", sets: "16", weight: "3200 lbs (total)" },
    notes: "Focused on squats and Romanian deadlifts. Legs feeling strong."
  },
  {
    id: 8,
    title: "Swimming",
    date: "2025-05-04",
    duration: "40 min",
    type: "Cardio",
    metrics: { distance: "1.5km", calories: "350", laps: "30" },
    notes: "First swim session in a while. Felt good to be back in the pool."
  }
];

export default function WorkoutHistory() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Workout History</h1>
            <p className="text-muted-foreground">
              View and filter your past workout sessions
            </p>
          </div>
          <Button className="bg-fitness-primary hover:bg-fitness-secondary">
            <Calendar className="mr-2 h-4 w-4" /> Calendar View
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-muted/50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Workout Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="strength">Strength</SelectItem>
                <SelectItem value="cardio">Cardio</SelectItem>
                <SelectItem value="hiit">HIIT</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="recent">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Last 30 Days</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">Reset</Button>
          </div>
        </div>
        
        <div className="space-y-6">
          {workouts.map((workout) => (
            <Card key={workout.id} className="overflow-hidden">
              <CardHeader className="bg-muted/30 pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg",
                        workout.type === "Cardio"
                          ? "bg-fitness-red/10 text-fitness-red"
                          : workout.type === "Strength"
                          ? "bg-fitness-primary/10 text-fitness-primary"
                          : "bg-fitness-yellow/10 text-fitness-yellow"
                      )}
                    >
                      {workout.type === "Cardio" ? (
                        <TrendingUp className="h-5 w-5" />
                      ) : (
                        <Dumbbell className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{workout.title}</CardTitle>
                      <div className="flex items-center text-xs text-muted-foreground gap-4 mt-1">
                        <span>{new Date(workout.date).toLocaleDateString()}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {workout.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Badge
                    variant="outline"
                    className={cn(
                      workout.type === "Cardio"
                        ? "border-fitness-red/50 text-fitness-red"
                        : workout.type === "Strength"
                        ? "border-fitness-primary/50 text-fitness-primary"
                        : "border-fitness-yellow/50 text-fitness-yellow"
                    )}
                  >
                    {workout.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-3 mb-3">
                  {Object.entries(workout.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="px-3 py-1 bg-muted rounded-full text-sm flex items-center gap-1"
                    >
                      <span className="font-medium capitalize">{key}:</span> {value}
                    </div>
                  ))}
                </div>
                {workout.notes && (
                  <p className="text-sm text-muted-foreground border-t pt-3 mt-1">
                    <span className="font-medium">Notes:</span> {workout.notes}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
