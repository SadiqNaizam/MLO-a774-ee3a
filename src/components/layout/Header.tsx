import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const projectTitle = "Weekly Status Dashboard"; // From Project Info
  // Static date values from image, to be replaced with actual date pickers if functionality is added
  const startDate = "06/19/2024";
  const endDate = "06/25/2024";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-10 flex h-[80px] items-center justify-between border-b border-border bg-card px-6 shadow-sm text-card-foreground",
        className
      )}
    >
      {/* Project Title */}
      <h1 className="text-lg font-semibold uppercase tracking-wider text-foreground sm:text-xl">
        {projectTitle}
      </h1>

      {/* Date Range Display - Placeholder styling, ideally uses DatePicker components */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <span className="hidden text-xs uppercase text-muted-foreground sm:inline">
          Enter Start Date →
        </span>
        <div className="min-w-[100px] rounded-md border border-input bg-background px-3 py-1.5 text-center text-sm text-foreground sm:py-2">
          {startDate}
        </div>
        <span className="text-xs uppercase text-muted-foreground">
          Through
        </span>
        <div className="min-w-[100px] rounded-md border border-input bg-background px-3 py-1.5 text-center text-sm text-foreground sm:py-2">
          {endDate}
        </div>
      </div>
    </header>
  );
};

export default Header;
