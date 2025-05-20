
import { Activity, Dumbbell, Medal, TrendingUp } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { WorkoutList } from "@/components/WorkoutList";
import { ProgressChart } from "@/components/ProgressChart";
import { PersonalRecords } from "@/components/PersonalRecords";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your fitness journey.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Weekly Workouts"
            value="5"
            description="May 14 - May 20"
            trend={10}
            icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Total Hours"
            value="8.5"
            description="This week"
            trend={5}
            icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Strength Increase"
            value="12%"
            description="Last 30 days"
            trend={12}
            icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="New PRs"
            value="3"
            description="This month"
            trend={0}
            icon={<Medal className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <WorkoutList />
          </div>
          <div className="md:col-span-1">
            <PersonalRecords />
          </div>
        </div>
        
        <div className="grid gap-4">
          <ProgressChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
