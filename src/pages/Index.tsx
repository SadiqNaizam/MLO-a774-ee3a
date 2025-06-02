import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatCardGrid from '../components/Dashboard/StatCardGrid';
import ProductSalesChart from '../components/Dashboard/ProductSalesChart';
import TotalProductsSold from '../components/Dashboard/TotalProductsSold';
import WebsiteTrafficChart from '../components/Dashboard/WebsiteTrafficChart';
import CircularScoreGrid from '../components/Dashboard/CircularScoreGrid';

/**
 * StatusDashboardPage
 * 
 * The main overview dashboard page for weekly status metrics.
 * It arranges various data visualization components within a responsive grid layout.
 * This page uses the MainAppLayout to provide a consistent header and overall page structure.
 */
const StatusDashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        Main content area with padding as defined in layout requirements.
        Layout requirements: overall.sizing.mainContent: "py-8 px-6"
      */}
      <div className="py-8 px-6">
        {/* 
          Responsive grid for dashboard components.
          - Small screens (default): Single column, components stack vertically.
          - Medium screens and up (md:): Three-column grid.
          Layout requirements: mainContent.layout: "grid grid-cols-3 gap-6"
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1: Statistic Cards Grid - Spans all 3 columns on medium screens and up */}
          <StatCardGrid className="md:col-span-3" />

          {/* Row 2: Charts and KPIs - Each takes 1 column on medium screens and up */}
          <ProductSalesChart className="md:col-span-3 lg:col-span-1" />
          <TotalProductsSold className="md:col-span-3 lg:col-span-1" />
          <WebsiteTrafficChart className="md:col-span-3 lg:col-span-1" />
          
          {/* Row 3: Circular Score Indicators - Spans all 3 columns on medium screens and up */}
          <CircularScoreGrid className="md:col-span-3" />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default StatusDashboardPage;
