import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header'; // Relative import for project components

interface MainAppLayoutProps {
  children: React.ReactNode; // Page content will be passed as children
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      <Header />
      <main className="pt-[80px]"> {/* Padding top to offset the fixed header height (80px) */}
        {/* 
          The children (typically a Page component using a specific page layout like DashboardLayout)
          will be responsible for their own internal padding (e.g., py-8 px-6) and content structure (e.g., grid).
          MainAppLayout provides the overall shell with the fixed header and the main content area below it.
        */}
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
