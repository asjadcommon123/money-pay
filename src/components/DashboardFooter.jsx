import React from 'react';
import Home from '../images/home.png';
import wallet from '../images/wallet.png';

const DashboardFooter = () => {
  return (
    <div className="flex justify-center items-center gap-5 fixed bottom-0 bg-black h-24 w-full z-20">
      <img src={Home} alt="" />
      <img src={wallet} alt="" />
      <div className="flex justify-center items-center text-black bg-white py-3 px-4 text-sm font-semibold rounded-2xl">
        SACAR
      </div>
    </div>
  );
};

export default DashboardFooter;
