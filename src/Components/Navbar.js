import React from "react";
import logo from "../assests/amrutamlogo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="nav-main flex items-center justify-center  h-[94px] bg-cream">
      <div className="inner-nav w-[1232px] h-[56px] flex items-center justify-between">
        <div className="nav-left flex w-[669px] h-[49px] gap-[80px] items-center">
          <div className="logo-section">
            <div className="img-wrapper w-[259px] h-[49px]">
              <img src={logo} alt="Amrutam" className="w-[259px] h-[49px]" />
            </div>
          </div>
          <div className="nav-links flex w-[330px] h-[28px] gap-[40px] items-center text-footerText font-medium font-inter">
            <div className="home text-[18px]  hover:text-green hover:font-bold cursor-pointer" onClick={() => navigate("/")}>
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
        <div className="nav-right w-[297px] h-[56px] flex gap-[10px] font-inter">
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
