import React from 'react';
import DashboardFooter from './DashboardFooter';
import Notification from './Notification';

const Dashboardlayout = ({ children }) => {
  return (
    <div className="relative px-6 overflow-hidden flex flex-col items-center justify-center pt-20 bg-hero-pattern h-screen ">
      <Notification />
      {children}
      <DashboardFooter />
    </div>
  );
};

export default Dashboardlayout;
