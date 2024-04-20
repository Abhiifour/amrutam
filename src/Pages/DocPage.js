import React from "react";
import Navbar from "../Components/Navbar";
import profilecover from "../assests/profileframe.png";
import docprofile from "../assests/doc.png";
import bluetick from "../assests/bluetick.png";
import star from "../assests/icon.png";
import plus from "../assests/plus.png";
import social from "../assests/social.png";
import frame1 from "../assests/frame1.png";
import frame2 from "../assests/frame2.png";
import frame3 from "../assests/frame3.png";
import frame4 from "../assests/frame4.png";
import home from "../assests/homeicon.png";
import review from "../assests/review.png";
import calender from "../assests/calender.png";
import left from "../assests/left.png";
import right from "../assests/right.png";

function DocPage() {
  return (
    <div className="doc-detail-main">
      

      <div className="doc-profile w-[1220px] m-auto mt-[50px] ">
        <div className="img-wrapper w-[1220px] h-[155px]">
          <img
            src={profilecover}
            alt="cover"
            className="w-[1220px] h-[155px]"
          />
        </div>
        <div className="profile w-[1220px] h-[151px] relative border-[2px] bg-lightCream ">
          <div className="img-wrapper w-[159px] h-[159px] absolute left-[40px] bottom-[30px]">
            <img
              src={docprofile}
              alt="profile"
              className=" w-[159px] h-[159px]"
            />
          </div>
          <div className="content pl-[160px] flex items-center h-[151px] justify-evenly">
            <div className="details w-[172px] h-[70px]">
              <div className="name font-semibold text-[18px] flex gap-2 items-center text-title font-poppins">
                Dr. Bruce Willis
                <div className="img-wrapper w-[23px] h-[23px]">
                  <img
                    src={bluetick}
                    alt="Bluetick"
                    className="w-[23px] h-[23px]"
                  />
                </div>
              </div>
              <div className="profession text-[14px] text-start text-green font-medium font-poppins">
                Gynecologist
              </div>
              <div className="rating flex gap-[2px] text-stone-600 mt-[5px] font-nunito">
                4.3
                <div className="img-wrapper w-[20px] h-[22px]">
                  <img src={star} alt="star" className=" w-[20px] h-[22px]" />
                </div>
                <div className="img-wrapper w-[20px] h-[22px]">
                  <img src={star} alt="star" className=" w-[20px] h-[22px]" />
                </div>
                <div className="img-wrapper w-[20px] h-[22px]">
                  <img src={star} alt="star" className=" w-[20px] h-[22px]" />
                </div>
                <div className="img-wrapper w-[20px] h-[22px]">
                  <img src={star} alt="star" className=" w-[20px] h-[22px]" />
                </div>
              </div>
            </div>
            <div className="follow-details w-[300px] h-[45px] flex gap-[70px] font-poppins">
              <div className="box">
                <div className="title text-[14px] font-medium text-green ">
                  Followers
                </div>
                <div className="number font-semibold text-[20px] text-name">
                  850
                </div>
              </div>
              <div className="box">
                <div className="title text-[14px] font-medium text-green">
                  Following
                </div>
                <div className="number font-semibold text-[20px] text-name">
                  18K
                </div>
              </div>
              <div className="box">
                <div className="title text-[14px] font-medium text-green">
                  Posts
                </div>
                <div className="number font-semibold text-[20px] text-name">
                  250
                </div>
              </div>
            </div>
            <div className="book w-[270px] h-[59px]  rounded-[8px] flex justify-center items-center text-[20px] bg-green text-heroText2 font-medium font-inter">
              Book an Appointment
            </div>
          </div>
          <div className="doc-documents mt-[30px] flex gap-[30px]">
            <div className="left w-[628px]">
              <div className="card1 w-[628px] h-[410px] rounded-[18px] border-[1px] overflow-hidden">
                <div className="title h-[60px] flex items-center justify-between px-[40px] bg-gradient-to-r from-grey2 via-grey2 to-grey1">
                  <p className="text-[24px] font-semibold pl-[5px] text-docTitle font-nunito">
                    A Little About me
                  </p>
                  <div className="follow h-[36px] flex gap-[10px] items-center w-[100px] border-[1px] rounded-[10px] justify-center bg-white border-green">
                    <p className="text-[16px] text-inputText font-medium font-poppins">
                      Follow
                    </p>
                    <div className="img-wrapper h-[14px] w-[14px]">
                      <img src={plus} alt="" className="h-[14px] w-[14px" />
                    </div>
                  </div>
                </div>
                <div className="content w-[534px] h-[134px] ml-[40px]  text-start mt-[30px]">
                  <p className="text-[16px] w-[520px] leading-[27px] font-medium py-[10px] px-[6px] text-docText font-poppins">
                    Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni
                    Hospital Surat. love to work with all my hospital staff and
                    seniour doctors. Completed my graduation in Gynaecologist
                    Medicine from the
                  </p>
                  <div className="read-more flex justify-between items-center py-[4px]  ">
                    <div className=" w-[437px] h-[0.5px] bg-stone-300"></div>
                    <p className="text-name font-medium underline font-poppins">Read More</p>
                  </div>
                </div>

                <div className="language w-[490px] h-[40px] flex  mt-[30px] ml-[40px] justify-evenly items-center font-nunito">
                  <p className="text-[20px] text-title font-medium ">
                    Language Spoken
                  </p>
                  <div className="select text-[20px] rounded-[16px] px-[20px] flex items-center bg-language py-[5px] text-langText">
                    English
                  </div>
                  <div className="select text-[20px] rounded-[16px] px-[20px] flex items-center  bg-language py-[5px]  text-langText">
                    Hindi
                  </div>
                  <div className="select text-[20px] rounded-[16px] px-[20px] flex items-center  bg-language py-[5px]  text-langText">
                    Telugu
                  </div>
                </div>
                <div className="social-media w-[200px] h-[40px] ml-[40px] mt-[30px]">
                  <img src={social} alt="" className=" w-[200px] h-[40px]" />
                </div>
              </div>
              <div className="card2 w-[628px] h-[260px] rounded-[18px] border-[1px] mt-[30px] overflow-hidden">
                <div className="title h-[60px] flex items-center justify-start px-[40px] bg-gradient-to-r from-grey2 via-grey2 to-grey1 ">
                  <p className="text-[24px] font-semibold pl-[5px] text-docTitle font-nunito">
                    I Specialize In
                  </p>
                </div>
                <div className="content w-[455px] h-[130px] ml-[40px] mt-[30px] flex justify-evenly gap-[10px] font-nunito">
                  <div className="banner flex flex-col items-center gap-1">
                    <div className="img-wrapper w-[100px] h-[96px]">
                      <img src={frame1} alt="" className="w-[100px] h-[96px]" />
                    </div>

                    <p className="text-[16px] font-medium text-title">
                      Women’s Health
                    </p>
                  </div>
                  <div className="banner flex flex-col items-center gap-1">
                    <div className="img-wrapper w-[100px] h-[96px]">
                      <img src={frame2} alt="" className="w-[100px] h-[96px]" />
                    </div>

                    <p className="text-[16px] font-medium text-title">
                      Skin Care
                    </p>
                  </div>
                  <div className="banner flex flex-col items-center gap-1">
                    <div className="img-wrapper w-[100px] h-[96px]">
                      <img src={frame3} alt="" className="w-[100px] h-[96px]" />
                    </div>

                    <p className="text-[16px] font-medium text-title">
                      Immunity
                    </p>
                  </div>
                  <div className="banner flex flex-col items-center gap-1">
                    <div className="img-wrapper w-[100px] h-[96px]">
                      <img src={frame4} alt="" className="w-[100px] h-[96px]" />
                    </div>

                    <p className="text-[16px] font-medium text-title">
                      Hair Care
                    </p>
                  </div>
                </div>
              </div>

              <div className="card3 w-[628px] h-[222px] rounded-[18px] border-[1px] mt-[30px] overflow-hidden">
                <div className="title h-[60px] flex items-center justify-start px-[40px] bg-gradient-to-r from-grey2 via-grey2 to-grey1 ">
                  <p className="text-[24px] font-semibold pl-[5px] text-docTitle font-nunito">
                    The Concerns I Treat
                  </p>
                </div>
                <div className="content w-[580px]  ml-[40px] mt-[30px] flex flex-wrap gap-[10px] font-poppins">
                  <div className="select rounded-[19px] p-[10px] text-[16px] font-medium  bg-concerns text-green ">
                    <p>Skin Treatment</p>
                  </div>
                  <div className="select rounded-[19px] p-[10px] text-[16px] font-medium  bg-concerns text-green">
                    Pregnancy
                  </div>
                  <div className="select rounded-[19px] p-[10px] text-[16px] font-medium  bg-concerns text-green">
                    Period Doubts
                  </div>
                  <div className="select rounded-[19px] p-[10px] text-[16px] font-medium  bg-concerns text-green">
                    Endometriosis
                  </div>
                  <div className="select rounded-[19px] p-[10px] text-[16px] font-medium  bg-concerns text-green">
                    Pelvic Pain
                  </div>
                  <div className="select rounded-[19px] p-[10px] text-[16px] font-medium  bg-concerns text-green">
                    Ovarian Cysts
                  </div>
                  <div className="select rounded-[19px] h-[42px] px-[15px] flex items-center justify-center text-[16px]  border-[1px] font-medium  bg-white text-green">
                    +5 More
                  </div>
                </div>
              </div>
              <div className="card4 w-[628px] h-[330px] rounded-[18px] border-[1px] mt-[30px] overflow-hidden">
                <div className="title h-[60px] flex items-center justify-start px-[40px] overflow-hidden bg-gradient-to-r from-grey2 via-grey2 to-grey1">
                  <p className="text-[22px] font-semibold pl-[5px] text-docTitle font-nunito">
                    My Work Experience
                  </p>
                </div>
                <div className="content w-[580px]  ml-[40px] mt-[30px] flex flex-col gap-[20px]">
                  <div className="practise-year">
                    <p className="text-[18px] text-start text-green font-semibold font-poppins">
                      I HAVE BEEN IN PRACTISE FOR : 7+ YEARS
                    </p>
                  </div>
                  <div className="line w-[420px] h-[0.5px] bg-stone-300"></div>
                  <div className="exp-item w-[470px] h-[50px] flex gap-[10px] font-poppins">
                    <div className="wraper w-[48px] h-[48px]">
                      <img src={home} alt="" className="w-[48px] h-[48px]" />
                    </div>
                    <div className="name w-[237px] h-[50px] flex flex-col items-start ">
                      <div className="title font-semibold text-schoolTitle">
                        Midtown Medical Clinic
                      </div>
                      <p className="text-[16px] text-docText font-medium">
                        Senior doctor
                      </p>
                    </div>
                    <div className="date pl-[60px]">
                      <p className="text-[15px] text-docText">2016-PRESENT</p>
                    </div>
                  </div>
                  <div className="exp-item w-[470px] h-[50px] flex gap-[10px] font-poppins">
                    <div className="wraper w-[48px] h-[48px]">
                      <img src={home} alt="" className="w-[48px] h-[48px]" />
                    </div>
                    <div className="name w-[237px] h-[50px] flex flex-col items-start ">
                      <div className="title font-semibold text-schoolTitle">
                        Midtown Medical Clinic
                      </div>
                      <p className="text-[16px] text-docText font-medium">
                        Senior doctor
                      </p>
                    </div>
                    <div className="date pl-[60px]">
                      <p className="text-[15px] text-docText">2010-2015</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card5 w-[628px] h-[520px] rounded-[18px] border-[1px] mt-[30px] overflow-hidden">
                <div className="title h-[60px] flex items-center justify-start px-[40px] overflow-hidden bg-gradient-to-r from-grey2 via-grey2 to-grey1">
                  <p className="text-[24px] font-semibold pl-[5px] text-docTitle font-nunito">
                    Featured Reviews (102)
                  </p>
                </div>
                <div className="content w-[580px]  ml-[40px] mt-[30px] flex flex-col gap-[20px]">
                  <div className="review-card w-[540px] h-[180px] px-[35px] py-[15px] bg-reviewBg rounded-[17px]">
                    <div className="box flex flex-col gap-[14px]">
                      <div className="top flex justify-between items-center">
                        <div className="left flex gap-[6px]">
                          <div className="img-wrapper w-[54px] h-[56px]">
                            <img
                              src={review}
                              alt=""
                              className=" w-[54px] h-[56px]"
                            />
                          </div>
                          <div className="details">
                            <p className="text-[20px] font-semibold text-reviewName font-nunito">
                              Alicent Hightower
                            </p>
                            <p className="text-[16px] text-reviewSub font-medium font-nunito">
                              Consulted for Skin Care
                            </p>
                          </div>
                        </div>
                        <div className="right">
                          <p className="text-[16px] text-reviewSub font-nunito">
                            20 January 2023
                          </p>
                        </div>
                      </div>
                      <div className="bottom flex flex-col gap-[5px]">
                        <div className="stars flex gap-[2px]">
                          <div className="img-wrapper w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                          <div className="img-wrapper w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                          <div className="img-wrapper w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                          <div className="img-wrapper w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                          <div className="img-wrapper w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                        </div>
                        <div className="text-field">
                          <p className="text-start text-[15px] text-review font-nunito">
                            Might be bit early to confirm but yes I can see
                            noticeable difference in my hairfall. will write
                            again after using it for longer periods
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-card w-[540px] h-[180px] px-[35px] py-[15px] bg-reviewBg rounded-[17px] ">
                    <div className="box flex flex-col gap-[14px]">
                      <div className="top flex justify-between items-center">
                        <div className="left flex gap-[6px]">
                          <div className="img-wrapper w-[54px] h-[56px]">
                            <img
                              src={review}
                              alt=""
                              className=" w-[54px] h-[56px]"
                            />
                          </div>
                          <div className="details">
                            <p className="text-[20px] font-semibold text-reviewName  font-nunito">
                              Alicent Hightower
                            </p>
                            <p className="text-[16px] text-reviewSub font-medium  font-nunito">
                              Consulted for Skin Care
                            </p>
                          </div>
                        </div>
                        <div className="right">
                          <p className="text-[16px] text-reviewSub  font-nunito">
                            20 January 2023
                          </p>
                        </div>
                      </div>
                      <div className="bottom flex flex-col gap-[5px]">
                        <div className="stars flex gap-[2px]">
                          <div className="img-wrapper w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                          <div className="img-wrapper w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                          <div className="img-wrapper w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                          <div className="img-wrapper w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                          <div className="img-wrapper w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                        </div>
                        <div className="text-field">
                          <p className="text-start text-[15px] text-review   font-nunito">
                            Might be bit early to confirm but yes I can see
                            noticeable difference in my hairfall. will write
                            again after using it for longer periods
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right w-[564px]">
              <div className="card w-[564px] h-[950px] border-[1px] rounded-[29px] flex flex-col items-center py-[30px] gap-[30px]">
                <div className="header w-[530px] h-[56px] border-[1px] rounded-[15px] flex items-center justify-between px-[30px] ">
                  <p className="text-[20px] font-semibold text-title font-nunito">
                    Appointment Fee
                  </p>
                  <p className="text-[20px] font-semibold text-green font-inter">
                    ₹699.00
                  </p>
                </div>
                <div className="select flex items-center gap-[20px]">
                  <p className="text-[20px] font-bold text-title font-nunito">
                    Select your mode of session
                  </p>
                  <div className="line w-[232px] h-[0.5px] bg-stone-200"></div>
                </div>
                <div className="select-sessions flex gap-[16px]">
                  <div className="box1 flex flex-col items-center w-[158px] h-[70px] border-[1px] rounded-[10px] justify-center">
                    <p className="text-[16px] text-modeText font-medium font-poppins">
                      In-Clinic
                    </p>
                    <p className="text-[16px] text-modeSubtext font-nunito">45 Mins</p>
                  </div>
                  <div className="box1 flex flex-col items-center w-[158px] h-[70px] border-[1px] rounded-[10px] justify-center border-green bg-bgLightGreen">
                    <p className="text-[18px] text-green  font-medium font-poppins">Video</p>
                    <p className="text-[16px] text-modeSubtext font-nunito">45 Mins</p>
                  </div>
                  <div className="box1 flex flex-col items-center w-[158px] h-[70px] border-[1px] rounded-[10px] justify-center">
                    <p className="text-[16px] text-modeText  font-medium font-poppins">
                      Chat
                    </p>
                    <p className="text-[16px] text-modeSubtext font-nunito">10 Mins</p>
                  </div>
                </div>

                <div className="pick-time-slot flex flex-col items-center gap-[20px]">
                  <div className="label flex items-center gap-[12px]">
                    <p className="text-[20px] font-bold text-title font-nunito">
                      Pick a Time slot
                    </p>
                    <div className="line w-[290px] h-[0.5px] bg-stone-200"></div>
                    <div className="img-wrapper w-[44px] h-[44px]">
                      <img
                        src={calender}
                        alt=""
                        className="w-[44px] h-[44px]"
                      />
                    </div>
                  </div>
                  <div className="time-corouse flex items-center gap-[8px] w-[530px] h-[120px] border-[1px] rounded-[21px] justify-center">
                    <div className="img-wrapper w-[20px] h-[20px] mr-[10px]">
                      <img src={left} alt="" className=" w-[20px] h-[20px] " />
                    </div>
                    <div className="box1 flex flex-col items-center w-[123px] h-[70px] border-[1px] border-green rounded-[10px] justify-center bg-bgLightGreen">
                      <p className="text-[16px] text-green font-semibold font-inter">
                        Mon, 10 Oct
                      </p>
                      <p className="text-[16px] text-modeSubtext h">10 slots</p>
                    </div>
                    <div className="box1 flex flex-col items-center w-[123px] h-[70px] border-[1px] rounded-[10px] justify-center">
                      <p className="text-[16px] text-modeText  font-medium font-inter">
                        Tue , 11 Oct
                      </p>
                      <p className="text-[16px] text-red font-bold font-nunito">02 slots</p>
                    </div>
                    <div className="box1 flex flex-col items-center w-[123px] h-[70px] border-[1px] rounded-[10px] justify-center">
                      <p className="text-[16px] text-modeText font-medium font-nunito">
                        Wed , 12 Oct
                      </p>
                      <p className="text-[16px] text-yellow font-bold font-inter">
                        05 slots
                      </p>
                    </div>
                    <div className="img-wrapper w-[20px] h-[20px] ml-[10px]">
                      <img src={right} alt="" className=" w-[20px] h-[20px]" />
                    </div>
                  </div>
                  <div className="timing w-[500px] h-[160px]">
                    <div className="title">
                      <p className="text-[18px]  text-start px-[10px] font-bold text-title font-nunito">
                        Morning
                      </p>
                    </div>
                    <div className="select-timing flex flex-wrap gap-[12px] text-[16px] mt-[10px] text-timing font-inter">
                      <div className="box p-[12px] border-[1px] rounded-[22px] ">
                        09:00 AM
                      </div>
                      <div className="box p-[14px] border-[1px] rounded-[22px]">
                        09:30 AM
                      </div>
                      <div className="box p-[14px] border-[1px] rounded-[22px]">
                        10:00 AM
                      </div>
                      <div className="box p-[14px] border-[1px] rounded-[22px]">
                        10:15 AM
                      </div>
                      <div className="box p-[14px] border-[1px] rounded-[22px]">
                        10:45 AM
                      </div>
                      <div className="box p-[14px] border-[1px] rounded-[22px] bg-green text-heroText2">
                        11:00 AM
                      </div>
                    </div>
                  </div>
                  <div className="timing w-[500px] h-[160px]">
                    <div className="title">
                      <p className="text-[18px] font-bold text-start px-[10px]   text-title font-nunito">
                        Evening
                      </p>
                    </div>
                    <div className="select-timing flex flex-wrap gap-[12px] mt-[10px] text-[16px] text-timing font-inter">
                      <div className="box p-[14px] border-[1px] rounded-[22px]">
                        04:00 PM
                      </div>
                      <div className="box p-[14px] border-[1px] rounded-[22px]">
                        04:15 PM
                      </div>
                      <div className="box p-[14px] border-[1px] rounded-[22px]">
                        04:30 PM
                      </div>
                      <div className="box p-[14px] border-[1px] rounded-[22px]">
                        04:45 PM
                      </div>
                      <div className="box p-[14px] border-[1px] rounded-[22px]">
                        05:15 PM
                      </div>
                    </div>
                  </div>
                </div>

                <div className="book-button w-[470px] h-[60px]  rounded-[8px] flex justify-center items-center bg-green">
                  <p className="text-[20px] text-heroText2 font-medium font-inter">
                    Make An Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocPage;
