import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

interface ProductSalesData {
  region: string;
  sales: number;
}

// Data reversed to match image (Region 5 at top)
const salesData: ProductSalesData[] = [
  { region: 'Region 1', sales: 70 },
  { region: 'Region 2', sales: 103 },
  { region: 'Region 3', sales: 116 },
  { region: 'Region 4', sales: 35 },
  { region: 'Region 5', sales: 40 },
].reverse();

interface ProductSalesChartProps {
  className?: string;
}

const ProductSalesChart: React.FC<ProductSalesChartProps> = ({ className }) => {
  const primaryColor = 'hsl(var(--primary))';
  const mutedForeground = 'hsl(var(--muted-foreground))';
  const cardColor = 'hsl(var(--card))';
  const cardForegroundColor = 'hsl(var(--card-foreground))';
  const borderColor = 'hsl(var(--border))';

  return (
    <Card className={cn("w-full shadow-sm", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">PRODUCT SALES</CardTitle>
      </CardHeader>
      <CardContent className="pl-2 pr-4 pb-4">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={salesData} layout="vertical" margin={{ top: 5, right: 5, left: 10, bottom: 5 }}>
            <XAxis 
              type="number" 
              stroke={mutedForeground} 
              fontSize={12} 
              axisLine={false} 
              tickLine={false} 
              tickFormatter={(value) => `${value}`}
              tick={{ fill: mutedForeground }}
            />
            <YAxis 
              dataKey="region" 
              type="category" 
              stroke={mutedForeground} 
              fontSize={12} 
              axisLine={false} 
              tickLine={false}
              width={70} 
              tick={{ fill: mutedForeground }}
            />
            <Tooltip
              cursor={{ fill: 'hsla(var(--primary-hsl), 0.1)'}}
              contentStyle={{
                backgroundColor: cardColor,
                borderColor: borderColor,
                borderRadius: 'var(--radius)',
                color: cardForegroundColor,
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
              }}
              labelStyle={{ color: cardForegroundColor, marginBottom: '4px', fontWeight: 'bold' }}
              itemStyle={{ color: cardForegroundColor }}
            />
            <Bar dataKey="sales" barSize={16} radius={[0, 4, 4, 0]}>
              {salesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={primaryColor} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProductSalesChart;
