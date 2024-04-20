import React from "react";
import docimg from "../assests/docImg.png";
import star from "../assests/star.png";
import clip from "../assests/clip.png";
import cap from "../assests/cap.png";
import comment from "../assests/comment.png";
import { useNavigate } from "react-router-dom";

function DocCard() {
  const navigate = useNavigate();
  return (
    <div className="doc-card-main w-[356px] h-[561px] rounded-[30px] border-[1px] px-[30px] py-[28px] bg-cream shadow-md ">
      <div className="inner-content">
        <div className="top-content flex flex-col items-center gap-[16px]">
          <div className="doc-img relative">
            <div className="img-wrapper w-[149px] h-[154px]">
              <img src={docimg} alt="doctor" className="w-[149px] h-[154px]" />
            </div>
            <div className="rating bg-gradient-to-b from-starGrad1 to-starGrad2 w-[70px] h-[28px] rounded-[17px] font-inter  text-heroText2 font-semibold absolute bottom-[0px] left-[40px] flex justify-center items-center gap-1">
              4.5
              <div className="img-wrapper w-[20px] h-[20px]">
                <img src={star} alt="" className="w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
          <div className="name text-[32px] font-bold text-name font-nunito">
            Dr. Prerna Narang
          </div>
          <div className="detail-box flex flex-col gap-[16px]">
            <div className="qualification-box flex flex-col gap-[7px] w-[247px] m-auto text-[16px] font-nunito">
              <div className="specialization flex gap-2 items-center text-qualification">
                <div className="img-wrapper w-[16px] h-[16px]">
                  <img src={clip} alt="" className="w-[16px] h-[16px]" />
                </div>
                Male-Female Infertility
              </div>
              <div className="experiance flex gap-1 items-center text-qualification font-semibold">
                <div className="img-wrapper w-[24px] h-[24px]">
                  <img src={cap} alt="" className="w-[24px] h-[24px]" />
                </div>
                7 Years of Experience
              </div>
              <div className="speaking flex gap-2 items-center text-qualification">
                <div className="img-wrapper w-[18px] h-[16px]">
                  <img src={comment} alt="" className="w-[18px] h-[16px]" />
                </div>
                Speaks: English,Hindi,Marathi
              </div>
            </div>
            <div className="buttons flex gap-[8px] w-[289px] font-nunito">
              <div className="consult w-1/2 h-[57px] border-[1px] rounded-[10px] flex flex-col items-center justify-center border-green">
                <div className="top text-[14px] text-name font-medium">
                  Video Consultation
                </div>
                <div className="price text-[14px] text-green font-bold">₹800</div>
              </div>
              <div className=" w-1/2 h-[57px] border-[1px] rounded-[10px] flex flex-col items-center justify-center border-green">
                <div className="top text-[14px] text-name font-medium">
                  Chat Consultation
                </div>
                <div className="price text-[14px] text-green font-bold">Free</div>
              </div>
            </div>
          </div>
          <div className="bottom-section flex flex-col gap-[10px] font-nunito">
            <div className="view w-[290px] h-[36px] rounded-[8px] border-[1px] border-green bg-white text-green flex justify-center cursor-pointer items-center font-semibold text-[16px]" onClick = {()=>navigate("/Doc")}>
              View Profile
            </div>
            <div className="book  w-[290px] h-[44px] rounded-[8px]  flex justify-center items-center font-semibold text-[16px] bg-green text-heroText2">
              Book a Consultation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocCard;
