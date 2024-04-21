import React from "react";
import logo from "../assests/amrutamlogo.png";
import ham from "../assests/hamburger.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="nav-main flex items-center justify-center  h-[94px] bg-cream sm:w-[100%] sm:h-[104px]">
      <div className="inner-nav w-[1232px] h-[56px] flex items-center justify-between sm:w-[100%]">
        <div className="nav-left flex w-[669px] h-[49px] gap-[80px] items-center sm:w-[100%] sm:h-[104px]  sm:gap-[70px]">
        <div className="hamburger hidden sm:block px-[20px]">
          <div className="img-wrapper w-[32px] h-[14px]">
            <img src={ham} alt="" className="w-[32px] h-[14px]" />
          </div>
        </div>
          <div className="logo-section">
            <div className="img-wrapper w-[259px] h-[49px] sm:w-[122px] sm:h-[24px]">
              <img
                src={logo}
                alt="Amrutam"
                className="w-[259px] h-[49px] sm:w-[122px] sm:h-[24px]"
              />
            </div>
          </div>

          <div className="nav-links flex w-[330px] h-[28px] gap-[40px] items-center text-footerText font-medium font-inter sm:hidden">
            <div
              className="home text-[18px]  hover:text-green hover:font-bold cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </div>
            <div
              className="find-doc text-[18px]  hover:text-green hover:font-bold cursor-pointer"
              onClick={() => navigate("/Find")}
            >
              Find Doctors
            </div>
            <div className="about-us text-[18px]  hover:text-green hover:font-bold cursor-pointer">
              About Us
            </div>
          </div>
        </div>
        <div className="nav-right w-[297px] h-[56px] flex gap-[10px] font-inter sm:hidden">
          <div className="login-button">
            <div className="button w-[118px] h-[56px] flex items-center justify-center rounded-[11px] border-[2px] border-green text-[20px] font-medium text-green">
              Login
            </div>
          </div>
          <div className="signup">
            <div className="button w-[163px] h-[56px] flex items-center justify-center rounded-[11px] bg-green font-medium text-heroText2 text-[20px]">
              Sign-up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
