import React from 'react';
import profile from '../images/profile.png';

const Notification = () => {
  return (
    <div className="fixed w-5/6 top-4 flex bg-white justify-between py-2 px-3 rounded-2xl z-20">
      <div className="rounded-full w-14 h-14 bg-grey border-black border">
        <img src={profile} alt="" className="w-full h-full" />
      </div>
      <div>
        <p className="w-24 overflow-hidden md:overflow-visible md:w-full text-ellipsis">
          testLinda@test.com
        </p>
        <p className="font-bold text-sm md:text-2xl">
          <span className="text-light-green">R$</span> 123,500
        </p>
      </div>
      <div className="flex justify-center items-center text-black bg-light-green px-4 text-sm font-semibold rounded-3xl">
        SACAR
      </div>
    </div>
  );
};

export default Notification;
