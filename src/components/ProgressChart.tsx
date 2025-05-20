
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Mock data for charts
const weeklyData = [
  { name: "Mon", weight: 180, reps: 8, distance: 2.1 },
  { name: "Tue", weight: 185, reps: 8, distance: 0 },
  { name: "Wed", weight: 185, reps: 9, distance: 3.2 },
  { name: "Thu", weight: 190, reps: 7, distance: 0 },
  { name: "Fri", weight: 190, reps: 9, distance: 2.8 },
  { name: "Sat", weight: 195, reps: 8, distance: 5.5 },
  { name: "Sun", weight: 195, reps: 10, distance: 0 },
];

const monthlyData = [
  { name: "Week 1", weight: 175, reps: 6, distance: 8 },
  { name: "Week 2", weight: 180, reps: 7, distance: 12 },
  { name: "Week 3", weight: 185, reps: 8, distance: 15 },
  { name: "Week 4", weight: 195, reps: 10, distance: 18 },
];

const metrics = [
  { id: "weight", name: "Weight (lbs)", color: "#8B5CF6" },
  { id: "reps", name: "Reps", color: "#10B981" },
  { id: "distance", name: "Distance (km)", color: "#F59E0B" },
];

export function ProgressChart() {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(["weight"]);
  const [timeRange, setTimeRange] = useState<"weekly" | "monthly">("weekly");

  const data = timeRange === "weekly" ? weeklyData : monthlyData;

  const toggleMetric = (metric: string) => {
    if (selectedMetrics.includes(metric)) {
      setSelectedMetrics(selectedMetrics.filter((m) => m !== metric));
    } else {
      setSelectedMetrics([...selectedMetrics, metric]);
    }
  };

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-xl">Progress Overview</CardTitle>
        <CardDescription>Track your performance across different metrics</CardDescription>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {metrics.map((metric) => (
              <button
                key={metric.id}
                onClick={() => toggleMetric(metric.id)}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  selectedMetrics.includes(metric.id)
                    ? `bg-[${metric.color}] text-white`
                    : "bg-muted text-muted-foreground"
                }`}
                style={{
                  backgroundColor: selectedMetrics.includes(metric.id) ? metric.color : undefined,
                  color: selectedMetrics.includes(metric.id) ? "white" : undefined,
                }}
              >
                {metric.name}
              </button>
            ))}
          </div>
          <Tabs value={timeRange} onValueChange={(v) => setTimeRange(v as "weekly" | "monthly")} className="w-[200px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #f0f0f0",
                borderRadius: "4px",
                fontSize: "12px",
              }}
            />
            <Legend />
            {selectedMetrics.includes("weight") && (
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Weight (lbs)"
              />
            )}
            {selectedMetrics.includes("reps") && (
              <Line
                type="monotone"
                dataKey="reps"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Reps"
              />
            )}
            {selectedMetrics.includes("distance") && (
              <Line
                type="monotone"
                dataKey="distance"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Distance (km)"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
