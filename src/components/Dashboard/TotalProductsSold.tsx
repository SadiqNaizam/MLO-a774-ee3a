import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Boxes } from 'lucide-react';

interface TotalProductsSoldProps {
  className?: string;
}

const TotalProductsSold: React.FC<TotalProductsSoldProps> = ({ className }) => {
  const totalSold = 364;
  const dateRange = "06/19/2024 - 06/25/2024";

  return (
    <Card className={cn("w-full text-center shadow-sm", className)}>
      <CardHeader className="pb-2 pt-4">
        <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">TOTAL PRODUCTS SOLD</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-4 pt-2">
        <p className="text-5xl font-bold text-primary mb-3">{totalSold}</p>
        <Boxes className="h-16 w-16 text-primary mb-3" strokeWidth={1.25} />
        <p className="text-xs text-muted-foreground">{dateRange}</p>
      </CardContent>
    </Card>
  );
};

export default TotalProductsSold;
