import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardData {
  id: string;
  title: string;
  value: string;
}

const statCardData: StatCardData[] = [
  { id: 'revenue', title: 'REVENUE', value: '$92,463' },
  { id: 'production', title: 'PRODUCTION OUTPUT', value: '315' },
  { id: 'satisfaction', title: 'CUSTOMER SATISFACTION SCORE', value: '91%' },
  { id: 'attendance', title: 'EMPLOYEE ATTENDANCE', value: '96%' },
];

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <Card className="bg-card text-card-foreground shadow-sm">
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider whitespace-nowrap truncate">{title}</p>
        <p className="text-3xl font-bold text-foreground mt-1">{value}</p>
      </CardContent>
    </Card>
  );
};

interface StatCardGridProps {
  className?: string;
}

const StatCardGrid: React.FC<StatCardGridProps> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-4 gap-6", className)}>
      {statCardData.map((stat) => (
        <StatCard key={stat.id} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
};

export default StatCardGrid;
