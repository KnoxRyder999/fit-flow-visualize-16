
import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp } from "lucide-react";

// Mock data
const weeklyData = [
  { date: "05/01", bench: 200, squat: 285, deadlift: 350, weight: 180 },
  { date: "05/08", bench: 205, squat: 290, deadlift: 365, weight: 179 },
  { date: "05/15", bench: 205, squat: 295, deadlift: 375, weight: 178 },
  { date: "05/22", bench: 210, squat: 300, deadlift: 380, weight: 177 },
  { date: "05/29", bench: 215, squat: 305, deadlift: 390, weight: 176 },
  { date: "06/05", bench: 215, squat: 315, deadlift: 395, weight: 175 },
  { date: "06/12", bench: 225, squat: 315, deadlift: 405, weight: 175 },
];

const monthlyData = [
  { date: "Jan", bench: 185, squat: 250, deadlift: 315, weight: 190 },
  { date: "Feb", bench: 195, squat: 265, deadlift: 330, weight: 187 },
  { date: "Mar", bench: 200, squat: 275, deadlift: 345, weight: 185 },
  { date: "Apr", bench: 210, squat: 290, deadlift: 365, weight: 183 },
  { date: "May", bench: 225, squat: 315, deadlift: 405, weight: 175 },
];

const cardioData = [
  { date: "05/01", distance: 3.2, time: 28.5, pace: 8.9 },
  { date: "05/08", distance: 3.5, time: 29.8, pace: 8.5 },
  { date: "05/15", distance: 4.0, time: 33.2, pace: 8.3 },
  { date: "05/22", distance: 4.0, time: 32.4, pace: 8.1 },
  { date: "05/29", distance: 4.5, time: 36.0, pace: 8.0 },
  { date: "06/05", distance: 5.0, time: 39.5, pace: 7.9 },
  { date: "06/12", distance: 5.5, time: 42.9, pace: 7.8 },
];

const bodyStats = [
  { date: "Jan", weight: 190, bodyFat: 18, muscle: 140 },
  { date: "Feb", weight: 187, bodyFat: 17, muscle: 141 },
  { date: "Mar", weight: 185, bodyFat: 16.5, muscle: 142 },
  { date: "Apr", weight: 183, bodyFat: 16, muscle: 143 },
  { date: "May", weight: 180, bodyFat: 15, muscle: 145 },
  { date: "Jun", weight: 175, bodyFat: 14, muscle: 146 },
];

export default function ProgressPage() {
  const [timeRange, setTimeRange] = useState<"weekly" | "monthly">("weekly");

  const strengthData = timeRange === "weekly" ? weeklyData : monthlyData;

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Progress Tracking</h1>
            <p className="text-muted-foreground">
              Visualize your fitness journey over time
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Time Range:</span>
            <Tabs 
              value={timeRange} 
              onValueChange={(v) => setTimeRange(v as "weekly" | "monthly")}
              className="w-[200px]"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Strength Progress Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-fitness-primary" /> Strength Progress
              </CardTitle>
              <div className="flex justify-end">
                <Select defaultValue="mainLifts">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Exercises" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mainLifts">Main Lifts</SelectItem>
                    <SelectItem value="upperBody">Upper Body</SelectItem>
                    <SelectItem value="lowerBody">Lower Body</SelectItem>
                    <SelectItem value="custom">Custom Selection</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={strengthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="bench" stroke="#8B5CF6" name="Bench Press (lbs)" strokeWidth={2} />
                  <Line type="monotone" dataKey="squat" stroke="#10B981" name="Squat (lbs)" strokeWidth={2} />
                  <Line type="monotone" dataKey="deadlift" stroke="#F59E0B" name="Deadlift (lbs)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Body Stats Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-fitness-primary" /> Body Composition
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={bodyStats} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="weight" name="Weight (lbs)" fill="#4F46E5" stroke="#4F46E5" fillOpacity={0.1} />
                  <Area type="monotone" dataKey="bodyFat" name="Body Fat %" fill="#EF4444" stroke="#EF4444" fillOpacity={0.1} />
                  <Area type="monotone" dataKey="muscle" name="Muscle Mass (lbs)" fill="#10B981" stroke="#10B981" fillOpacity={0.1} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Cardio Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-fitness-primary" /> Cardio Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cardioData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="distance" name="Distance (km)" fill="#8B5CF6" />
                  <Bar dataKey="time" name="Time (mins)" fill="#F59E0B" />
                  <Bar dataKey="pace" name="Pace (min/km)" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
