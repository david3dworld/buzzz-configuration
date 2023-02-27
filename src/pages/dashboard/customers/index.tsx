import React from 'react';
import { CustomerTable, DashboardHeader } from '../../../components';

const Index = () => {
  return (
    <div className="buzzz-customer-page-container">
      <DashboardHeader title="Dashboard" />
      <CustomerTable showNumber />
    </div>
  );
};

export default Index;
