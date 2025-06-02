import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

interface ScoreData {
  id: string;
  label: string;
  value: number;
}

const scores: ScoreData[] = [
  { id: 'score1', label: 'SCORE #1', value: 85 },
  { id: 'score2', label: 'SCORE #2', value: 73 },
  { id: 'score3', label: 'SCORE #3', value: 92 },
  { id: 'score4', label: 'SCORE #4', value: 54 },
  { id: 'score5', label: 'SCORE #5', value: 75 },
];

interface CircularScoreProps {
  value: number;
  label: string;
  max?: number;
}

const CircularScore: React.FC<CircularScoreProps> = ({ value, label, max = 100 }) => {
  const primaryColor = 'hsl(var(--primary))';
  const trackColor = 'hsla(var(--foreground), 0.15)'; 
  
  const chartData = [{ name: label, value: value, fill: primaryColor }];

  return (
    <div className="flex flex-col items-center text-center w-[130px] sm:w-[150px]">
      <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="90%"
            barSize={12} 
            data={chartData}
            startAngle={90}
            endAngle={-270} 
          >
            <PolarAngleAxis
              type="number"
              domain={[0, max]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background={{ fill: trackColor }}
              dataKey="value"
              angleAxisId={0}
              cornerRadius="50%"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-2xl sm:text-3xl font-bold" style={{ color: primaryColor }}>{value}</span>
        </div>
      </div>
      <p className="mt-3 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{label}</p>
    </div>
  );
};

interface CircularScoreGridProps {
  className?: string;
}

const CircularScoreGrid: React.FC<CircularScoreGridProps> = ({ className }) => {
  return (
    <Card className={cn("w-full shadow-sm", className)}>
      <CardContent className="p-4 sm:p-6 flex flex-row flex-wrap items-center justify-around gap-4 sm:gap-6">
        {scores.map((score) => (
          <CircularScore
            key={score.id}
            label={score.label}
            value={score.value}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default CircularScoreGrid;
