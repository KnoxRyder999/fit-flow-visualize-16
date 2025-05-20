
import React from "react";
import { SideNav } from "./SideNav";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-fitness-background">
      <SideNav />
      <main className={cn("flex-1 p-6 lg:p-8", className)}>
        {children}
      </main>
    </div>
  );
}
