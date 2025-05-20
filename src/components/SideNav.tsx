
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BarChart, Calendar, Dumbbell, History, Medal, TrendingUp } from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: <BarChart className="h-5 w-5" />,
  },
  {
    title: "Workout History",
    href: "/history",
    icon: <History className="h-5 w-5" />,
  },
  {
    title: "Personal Records",
    href: "/records",
    icon: <Medal className="h-5 w-5" />,
  },
  {
    title: "Progress",
    href: "/progress",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Schedule",
    href: "/schedule",
    icon: <Calendar className="h-5 w-5" />,
  },
];

export function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "border-r bg-fitness-card transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2 font-semibold",
            collapsed ? "justify-center" : "justify-start"
          )}
        >
          <Dumbbell
            className={cn(
              "h-6 w-6 text-fitness-primary transition-all",
              collapsed ? "rotate-0" : "rotate-0"
            )}
          />
          {!collapsed && <span className="text-lg">FitFlow</span>}
        </Link>
      </div>
      <div className="space-y-2 py-4">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            className={cn(
              "w-full justify-start",
              collapsed ? "px-2" : "px-4"
            )}
            asChild
          >
            <Link to={item.href} className={cn("flex items-center gap-3")}>
              {item.icon}
              {!collapsed && <span>{item.title}</span>}
            </Link>
          </Button>
        ))}

        <Button
          variant="ghost"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full mt-auto"
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>
    </div>
  );
}
