import React from "react";
import Navbar from "../Components/Navbar";
import DocCard from "../Components/DocCard";
import cross from "../assests/cross.png";

function FindDoc() {
  return (
    <div className="main sm:w-[100%]">
      {/** Page for Searching consultants */}

      {/** section for the head tagline of finding doctors  */}
      <div className="find-doc-section h-[221px] flex flex-col justify-evenly pt-[20px] items-center relative overflow-hidden bg-sky sm:w-[100%] sm:justify-center sm:gap-[30px] sm:h-[300px]">
        <div className="circle w-[184px] h-[184px] absolute left-[284px] top-[113px] bg-circle rounded-full z-0"></div>
        <div className="circle w-[184px] h-[184px] absolute left-[145px] top-[-100px]   bg-circle rounded-full z-0"></div>
        <div className="circle w-[184px] h-[184px] absolute left-[1180px] top-[-108px]  bg-circle rounded-full"></div>
        <div className="circle w-[184px] h-[184px] absolute left-[1130px] top-[104px]  bg-circle rounded-full"></div>
        <div className="heading w-[810px] text-[34px] font-semibold leading-[24px] text-title font-nunito sm:text-[22px] sm:w-[90%] z-10">
          Find Expert Doctors For An In-Clinic Session Here
        </div>
        <div className="input-section w-[683px] h-[48px] flex justify-between z-10 font-inter sm:w-[80%] sm:flex-col sm:gap-2">
          <div className="select-icon ">
            <select className="border-[1px] w-[195px] h-[48px]  rounded-[10px] px-2 text-inputLabel  ">
              <option value="">Select Location</option>
            </select>
          </div>
          <div className="input-area ">
            <input
              type="text"
              className="w-[470px] h-[48px] text-inputLabel  rounded-[10px] border-[1px] px-2 sm:w-[100%]"
              placeholder="eg. Doctor, specialisation, clinic name"
            />
          </div>
        </div>
      </div>
      {/** filter section */}
      <div className="filter-section h-[72px] flex items-center justify-center gap-[32px] border-b-[1px] border-bottom font-nunito sm:w-[100%] sm:flex-wrap sm:justify-start sm:px-[20px] sm:py-[20px]">
        <div className="left-filter-section">
          <select className=" w-[148px] h-[38px]  rounded-[7px] px-2 bg-inputBg text-inputText font-medium ">
            <option value="">Expertise</option>
          </select>
        </div>
        <div className="right-filter-section flex gap-[32px] sm:flex-wrap ">
          <select className=" w-[148px] h-[38px]  rounded-[7px] px-2 bg-inputBg  text-inputText font-medium">
            <option value="">Gender</option>
          </select>
          <select className=" w-[148px] h-[38px]  rounded-[7px] px-2 bg-inputBg  text-inputText font-medium">
            <option value="">Fees</option>
          </select>
          <select className=" w-[142px] h-[38px] rounded-[7px] px-2 bg-inputBg  text-inputText font-medium">
            <option value="">Language</option>
          </select>
          <select className=" w-[142px] h-[38px]  rounded-[7px] px-2 bg-circle  text-green font-medium ">
            <option value="">All filters</option>
          </select>
        </div>
      </div>
      {/** selected filters */}
      <div className="filter-icons w-[1240px] flex justify-end m-auto mt-[50px] px-[30px] sm:w-[100%] sm:mt-[200px]">
        <div className="selected-filter w-[570px] h-[40px] flex justify-evenly font-inter sm:justify-end sm:gap-2">
          <div className="icon h-[40px] rounded-[31px] w-[139px] flex justify-center items-center border-[1px] gap-2 bg-selected sm:text-[14px] text-title">
            <p>Hair care</p>
            <div className="img-wrapper w-[12px] h-[12px]">
              <img src={cross} alt="" className="w-[12px] h-[12px]" />
            </div>
          </div>
          <div className="icon h-[40px] rounded-[31px] w-[126px] flex justify-center items-center border-[1px] gap-2 bg-selected sm:text-[14px] text-title">
            <p>Female</p>
            <div className="img-wrapper w-[12px] h-[12px]">
              <img src={cross} alt="" className="w-[12px] h-[12px]" />
            </div>
          </div>
          <div className="icon h-[40px] rounded-[31px] w-[150px] flex justify-center items-center border-[1px] gap-2 bg-selected text-title sm:hidden">
            <p>Rs.0-Rs.500</p>
            <div className="img-wrapper w-[12px] h-[12px]">
              <img src={cross} alt="" className="w-[12px] h-[12px]" />
            </div>
          </div>
          <div className="icon h-[40px] rounded-[31px] w-[100px] flex justify-center items-center border-[1px] gap-2 bg-selected text-title sm:hidden">
            <p>Hindi</p>
            <div className="img-wrapper w-[12px] h-[12px]">
              <img src={cross} alt="" className="w-[12px] h-[12px]" />
            </div>
          </div>
        </div>
      </div>
      {/** card of doctors   */}
      <div className="card-content w-[1240px] m-auto py-[30px] flex justify-evenly mt-[30px] mb-[100px] sm:w-[100%] sm:items-center sm:flex-col sm:gap-[20px]">
        <DocCard />
        <DocCard />
        <DocCard />
      </div>
    </div>
  );
}

export default FindDoc;
