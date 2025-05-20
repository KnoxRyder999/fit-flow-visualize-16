
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  description?: string;
  trend?: number;
  className?: string;
}

export function StatCard({
  title,
  value,
  icon,
  description,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {typeof trend === "number" && (
          <div
            className={cn(
              "mt-2 flex items-center text-xs",
              trend > 0
                ? "text-fitness-green"
                : trend < 0
                ? "text-fitness-red"
                : "text-muted-foreground"
            )}
          >
            {trend > 0 ? "↑" : trend < 0 ? "↓" : "→"}
            <span className="ml-1">
              {Math.abs(trend)}% from last {trend > 0 ? "week" : "week"}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
