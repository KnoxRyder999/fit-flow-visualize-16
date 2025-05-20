
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Dumbbell, History, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock workout data
const workouts = [
  {
    id: 1,
    title: "Morning Strength",
    date: "2025-05-18",
    duration: "45 min",
    type: "Strength",
    metrics: { calories: "320", sets: "15" },
  },
  {
    id: 2,
    title: "Evening Run",
    date: "2025-05-16",
    duration: "30 min",
    type: "Cardio",
    metrics: { distance: "5km", calories: "280" },
  },
  {
    id: 3,
    title: "Full Body Workout",
    date: "2025-05-14",
    duration: "60 min",
    type: "Strength",
    metrics: { calories: "450", sets: "20" },
  },
  {
    id: 4,
    title: "Hill Sprints",
    date: "2025-05-12",
    duration: "25 min",
    type: "HIIT",
    metrics: { calories: "310", intervals: "8" },
  },
];

export function WorkoutList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <History className="h-5 w-5 text-fitness-primary" /> Recent Workouts
        </CardTitle>
        <CardDescription>Your last 4 workouts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="flex items-start space-x-4 rounded-md border p-4 transition-all hover:bg-accent"
            >
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-lg",
                  workout.type === "Cardio"
                    ? "bg-fitness-red/10 text-fitness-red"
                    : workout.type === "Strength"
                    ? "bg-fitness-primary/10 text-fitness-primary"
                    : "bg-fitness-yellow/10 text-fitness-yellow"
                )}
              >
                {workout.type === "Cardio" ? (
                  <TrendingUp className="h-6 w-6" />
                ) : (
                  <Dumbbell className="h-6 w-6" />
                )}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{workout.title}</h4>
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
                <div className="flex items-center text-xs text-muted-foreground gap-4">
                  <span>{new Date(workout.date).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {workout.duration}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Object.entries(workout.metrics).map(([key, value]) => (
                    <span
                      key={key}
                      className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md"
                    >
                      {key}: {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
