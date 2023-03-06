import React from 'react';
import { useNavigate } from 'react-router-dom';
import logologin from '../images/loginLogo.png';
import logoImg from '../images/logo.png';
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center pt-12 px-10 bg-hero-pattern h-screen">
      <div className="max-w-[786px]">
        <div className="flex justify-center">
          <img src={logoImg} alt="" className="w-1/2 mb-20" />
        </div>
        <div>
          <h1 className="mb-4 text-white text-center text-xl">
            <span className="text-light-green font-bold ">Hello,</span>
            Welcome !
          </h1>
          <div className="bg-white rounded-xl px-5 pt-6 pb-3">
            <button
              onClick={() => navigate('/login')}
              className=" flex gap-5 pl-4 items-center w-full border-none bg-white  py-3 text-sm font-semibold shadow-xxl"
            >
              <p className="bg-black rounded p-1">
                <img src={logologin} alt="" />
              </p>
              Fazer Login
            </button>
            <p className="font-sans mt-4 text-center text-xs">Term Of Use</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
