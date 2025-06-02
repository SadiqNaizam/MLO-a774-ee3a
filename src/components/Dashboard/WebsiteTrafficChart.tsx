import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ResponsiveContainer, AreaChart, Area, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

interface TrafficDataPoint {
  date: string;
  visits: number;
  pageViews: number;
}

const trafficData: TrafficDataPoint[] = [
  { date: "06/19", visits: 65, pageViews: 80 },
  { date: "06/20", visits: 105, pageViews: 115 },
  { date: "06/21", visits: 42, pageViews: 55 },
  { date: "06/22", visits: 122, pageViews: 135 },
  { date: "06/23", visits: 78, pageViews: 90 },
  { date: "06/24", visits: 50, pageViews: 60 },
  { date: "06/25", visits: 115, pageViews: 130 },
];

interface WebsiteTrafficChartProps {
  className?: string;
}

const WebsiteTrafficChart: React.FC<WebsiteTrafficChartProps> = ({ className }) => {
  const primaryColor = 'hsl(var(--primary))'; 
  const foregroundColor = 'hsl(var(--foreground))';
  const mutedForeground = 'hsl(var(--muted-foreground))';
  const cardColor = 'hsl(var(--card))';
  const borderColor = 'hsl(var(--border))';
  const visitsGradientId = "visitsGradient";

  return (
    <Card className={cn("w-full shadow-sm", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">WEBSITE TRAFFIC</CardTitle>
      </CardHeader>
      <CardContent className="pl-2 pr-4 pb-4">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={trafficData} margin={{ top: 5, right: 10, left: -15, bottom: 25 }}>
            <defs>
              <linearGradient id={visitsGradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={foregroundColor} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={foregroundColor} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={borderColor} vertical={false} />
            <XAxis 
              dataKey="date" 
              stroke={mutedForeground} 
              fontSize={12} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: mutedForeground }}
            />
            <YAxis 
              stroke={mutedForeground} 
              fontSize={12} 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: mutedForeground }}
              domain={[0, (dataMax: number) => Math.max(140, dataMax + 20)]}
            />
            <Tooltip
              cursor={{ stroke: primaryColor, strokeWidth: 1, strokeDasharray: "3 3" }}
              contentStyle={{
                backgroundColor: cardColor,
                borderColor: borderColor,
                borderRadius: 'var(--radius)',
                color: foregroundColor,
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
              }}
              labelStyle={{ color: foregroundColor, marginBottom: '4px', fontWeight: 'bold' }}
              formatter={(value: number, name: string) => {
                const displayName = name === 'visits' ? 'Website Visits' : 'Website Page Views';
                return [value, displayName];
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              align="center"
              iconSize={10}
              wrapperStyle={{ fontSize: "12px", color: mutedForeground, paddingTop: "20px" }}
              formatter={(value, entry) => {
                const name = value === 'visits' ? 'Website Visits' : 'Website Page Views';
                const color = entry.color === primaryColor ? primaryColor : foregroundColor;
                return <span style={{ color: color }}>{name}</span>;
              }}
            />
            <Area 
              type="monotone" 
              dataKey="visits" 
              stroke={foregroundColor} 
              fillOpacity={1} 
              fill={`url(#${visitsGradientId})`} 
              strokeWidth={2} 
              name="visits" 
              dot={false}
              activeDot={{ r: 4, strokeWidth: 1, stroke: foregroundColor, fill: cardColor }}
            />
            <Line 
              type="monotone" 
              dataKey="pageViews" 
              stroke={primaryColor} 
              strokeWidth={2.5} 
              name="pageViews" 
              dot={{ r:3, strokeWidth:0, fill: primaryColor}}
              activeDot={{ r: 5, strokeWidth: 1, stroke: primaryColor, fill: cardColor }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default WebsiteTrafficChart;
