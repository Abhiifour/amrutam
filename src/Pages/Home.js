import React from "react";
import Navbar from "../Components/Navbar";
import herobanner from "../assests/hero.png";
import icon1 from "../assests/icon1.png";
import icon2 from "../assests/icon2.png";
import icon3 from "../assests/icon3.png";
import icon4 from "../assests/icon4.png";
import yoga from "../assests/yoga.png";
import yoga1 from "../assests/yoga1.png";
import yoga2 from "../assests/yoga2.png";
import yoga3 from "../assests/yoga3.png";
import yoga4 from "../assests/yoga4.png";
import yoga5 from "../assests/yoga5.png";
import yoga6 from "../assests/yoga6.png";
import add1 from "../assests/add1.jpg";
import add2 from "../assests/add2.png";
import add3 from "../assests/add3.jpg";
import book from "../assests/booknow.png";
import star from "../assests/star.png";
import dot from "../assests/dot.png";
import doc from "../assests/docImg.png";
import cap from "../assests/cap.png";
import clip from "../assests/clip.png";
import leftArrow from "../assests/leftArrow.png";
import rightArrow from "../assests/rightArrow.png";
import next from "../assests/Vector.png";
import google from "../assests/google.png";
import apple from "../assests/apple.png";
import mobile from "../assests/mobile.png";
import social from "../assests/sociallink.png";

import model from "../assests/model.jpg";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-main w-full">
      <div className="web  block sm:hidden ">
        <div className="hero-section h-[640px] flex relative">
          <div className="left w-[650px] bg-hero"></div>
          <div className="img-wrapper w-[870px] h-[640px]">
            <img src={herobanner} alt="" className="w-[870px] h-[640px]" />
          </div>

          <div className="content absolute w-full h-[640px] flex items-center pl-[100px]  bg-gradient-to-r from-gradient1 via-gradient2 to-gradient-3">
            <div className="content-box w-[900px] h-[370px] flex flex-col gap-[16px]">
              <p className="text-[28px] text-start text-heroText font-normal font-Montserrat">
                Namaste, Welcome to Amrutam
              </p>
              <p className="text-[48px] text-start text-heroText2 font-Roboto">
                Step into Holistic Healing with{" "}
                <span className="px-[2px] border-b-[3px] text-heroText ">
                  Ayurveda
                </span>{" "}
                Book Consultation with certified Experts.
              </p>
              <p className="text-[18px] text-start w-[788px] text-heroText3 font-Roboto">
                Dive into the world of ayurveda and Experience Personalized
                Health Solutions and Holistic Guidance from Trusted Ayurvedic
                Doctors Anytime, anywhere.
              </p>
              <div
                className="button w-[300px] h-[60px] rounded-[16px] flex justify-center items-center  mt-[20px] bg-green cursor-pointer"
                onClick={() => navigate("/Find")}
              >
                <p className="text-[20px] text-heroText2 font-inter">
                  BOOK AN APPOINTMENT
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="icons h-[147px]  flex justify-center items-center gap-[10px] bg-cream font-nunito">
          <div className="box w-[283px] flex">
            <div className="img-wrapper w-[80px] h-[60px]">
              <img src={icon1} alt="" className="w-[80px] h-[60px]" />
            </div>
            <p className="text-[18px] text-start text-green font-semibold">
              convenient online & In-clinic consultations
            </p>
          </div>
          <div className="box w-[283px] flex">
            <div className="img-wrapper  w-[70px] h-[60px]">
              <img src={icon2} alt="" className=" w-[70px] h-[60px]" />
            </div>
            <p className="text-[18px] text-start text-green font-semibold">
              Safe and effective treatment
            </p>
          </div>
          <div className="box w-[283px] flex">
            <div className="img-wrapper w-[80px] h-[60px]">
              <img src={icon3} alt="" className=" w-[80px] h-[60px]" />
            </div>
            <p className="text-[18px] text-start text-green font-semibold">
              Experienced Ayurvedic Practitioners
            </p>
          </div>
          <div className="box w-[283px] flex ">
            <div className="img-wrapper w-[80px] h-[60px]">
              <img src={icon4} alt="" className=" w-[80px] h-[60px]" />
            </div>
            <p className="text-[18px] text-start font-nunito  text-green font-semibold">
              personalized Treatment Plans & Guidance
            </p>
          </div>
        </div>

        <div className="yogo-banner h-[840px] flex flex-col items-center gap-[50px] pt-[40px]">
          <div className="header w-[800px] h-[160px] flex flex-col items-center gap-[20px]">
            <p className="text-[48px] text-green font-Roboto font-bold">
              Discover Ayurveda’s magic with us
            </p>
            <p className="text-[18px] w-[640px] text-subtitle font-nunito">
              Ayurvedic treatment aims to balance your body and mind, bringing
              harmony and vitality. It's like a journey to better health using
              ancient wisdom, a totally effective approach for a better life.
            </p>
          </div>
          <div className="bottom flex justify-center h-[600px] w-full relative pt-[20px]">
            <div className="img-wrapper w-[500px] h-[522px]">
              <img src={yoga} alt="" className="w-[500px] h-[522px]" />
            </div>

            <div className="box flex gap-[10px] absolute left-[200px] items-center">
              <div className="text w-[223px]">
                <p className="text-[20px] text-title text-end font-semibold font-nunito">
                  Personalized Wellness
                </p>
                <p className="text-[14px] text-end text-lightSubtitle font-nunito ">
                  Get treatments made just for you based on your individual
                  doshas (body type)
                </p>
              </div>
              <div className="image w-[100px] h-[100px]">
                <img src={yoga1} alt="" className="w-[100px] h-[100px]" />
              </div>
            </div>
            <div className="box flex gap-[10px] absolute left-[160px] top-[200px] items-center">
              <div className="text w-[223px]">
                <p className="text-[20px] text-title text-end font-semibold font-nunito">
                  Focus on prevention
                </p>
                <p className="text-[14px] text-end  text-lightSubtitle font-nunito">
                  Stop problems even before they start.
                </p>
              </div>
              <div className="image w-[100px] h-[100px]">
                <img src={yoga2} alt="" className="w-[100px] h-[100px]" />
              </div>
            </div>
            <div className="box flex gap-[10px] absolute left-[200px] top-[400px] font-nunito items-center">
              <div className="text w-[223px]">
                <p className="text-[20px] text-title text-end font-semibold">
                  Mind-Body Connection
                </p>
                <p className="text-[14px] text-end  text-lightSubtitle">
                  Keep your mind and body in sync for a happy life.
                </p>
              </div>
              <div className="image w-[100px] h-[100px]">
                <img src={yoga3} alt="" className="w-[100px] h-[100px]" />
              </div>
            </div>
            <div className="box flex gap-[10px] absolute right-[200px] font-nunito  items-center">
              <div className="image w-[100px] h-[100px]">
                <img src={yoga4} alt="" className="w-[100px] h-[100px]" />
              </div>
              <div className="text w-[223px]">
                <p className="text-[20px] text-title text-start font-semibold">
                  Holistic Healing
                </p>
                <p className="text-[14px] text-start  text-lightSubtitle">
                  Fix the root problem for long-lasting health.
                </p>
              </div>
            </div>
            <div className="box flex gap-[10px] absolute right-[160px] top-[200px] font-nunito items-center">
              <div className="image w-[100px] h-[100px]">
                <img src={yoga5} alt="" className="w-[100px] h-[100px]" />
              </div>
              <div className="text w-[223px]">
                <p className="text-[20px] text-title text-start font-semibold">
                  Natural Remedies
                </p>
                <p className="text-[14px] text-start  text-lightSubtitle">
                  Using herbs and natural therapies for healing.
                </p>
              </div>
            </div>
            <div className="box flex gap-[10px] absolute right-[200px] top-[400px] font-nunito items-center">
              <div className="image w-[100px] h-[100px]">
                <img src={yoga6} alt="" className="w-[100px] h-[100px]" />
              </div>
              <div className="text w-[223px]">
                <p className="text-[20px] text-title text-start font-semibold">
                  Boosting immunity
                </p>
                <p className="text-[14px] text-start  text-lightSubtitle">
                  Stay strong and healthy for life, not just for today.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="know-more-section h-[850px] bg-cream pt-[60px]">
          <p className="text-[48px] text-green font-Roboto font-bold">
            What sets Ayurvedic consultations apart?
          </p>
          <div className="content-box w-[1240px] h-[579px] m-auto mt-[60px] flex flex-wrap gap-[16px] font-nunito">
            <div className="box py-[48px] px-[32px] w-[522px] h-[285px]  flex flex-col gap-[10px] rounded-[20px] border-t-[5px] border-green shadow-md bg-heroText2">
              <p className="text-[32px] text-green ">
                स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
              </p>
              <p className="text-[18px] text-green">
                [ Meaning: The Goal of Ayurveda is to maintain the health of a
                healthy person and to cure the disease of a diseased person. ]
              </p>
            </div>
            <div className="img-box w-[370px] h-[285px] rounded-[20px] overflow-hidden object-center shadow-md">
              <img src={add1} alt="" className="w-[370px] h-[285px]" />
            </div>
            <div className="box px-[48px] py-[32px] w-[311px] h-[285px]  flex flex-col gap-[10px] rounded-[20px] border-t-[5px] border-green shadow-md bg-heroText2">
              <p className="text-[24px] text-green text-start">
                precise diagnosis
              </p>
              <p className="text-[18px] text-cardText text-start">
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha
                doshas, guiding you with precise diagnosis and treatment.
              </p>
            </div>
            <div className="box px-[48px] py-[32px] w-[293px] h-[277px]  flex flex-col gap-[10px] rounded-[20px] border-t-[5px] border-green shadow-md  bg-heroText2">
              <p className="text-[24px] text-green text-start">
                Zero side-effects
              </p>
              <p className="text-[18px] text-cardText text-start">
                Ayurvedic treatments are devoid of chemicals, and are based
                completely on natural herbs
              </p>
            </div>
            <div className="img-box w-[293px] h-[274px] rounded-[20px] overflow-hidden  shadow-md">
              <img src={add2} alt="" className="w-[293px] h-[274px]" />
            </div>
            <div className="box px-[48px] py-[32px] w-[293px] h-[277px]  flex flex-col gap-[10px] rounded-[20px] border-t-[5px] shadow-md border-green bg-heroText2">
              <p className="text-[24px] text-green text-start">
                Individual Treatment
              </p>
              <p className="text-[18px] text-cardText text-start">
                all Treatments are personalized based on a person's unique
                constitution and health concerns.
              </p>
            </div>
            <div className="img-box w-[294px] h-[274px] rounded-[20px] overflow-hidden shadow-md">
              <img src={add3} alt="" className="w-[293px] h-[274px]" />
            </div>
          </div>
        </div>
        <div className="book h-[590px] relative">
          <div className="img h-[590px] w-full">
            <img src={book} alt="" className="h-[590px] w-full" />
          </div>
          <div className="text-content h-[590px] absolute w-full top-0 flex justify-center items-center bg-gradient-to-r from-grad1 via-grad2 to-grad3">
            <div className="box flex flex-col justify-center items-center gap-[40px]">
              <p className="text-[64px] w-[856px] text-creamText font-Roboto font-medium">
                Ready to restore harmony in your mind, body and spirit?
              </p>
              <div className="book-button w-[270px] h-[72px] rounded-[16px] flex justify-center items-center bg-green shadow-md">
                <p className="text-[22px] text-heroText2 font-inter">
                  {" "}
                  Book a Consultation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ayurvedic-approach h-[750px] flex flex-col items-center w-full pt-[80px] gap-[70px]">
          <div className="header w-[800px] h-[160px] flex flex-col items-center">
            <p className="text-[48px] text-green font-semibold font-Roboto">
              Our Ayurvedic Approach
            </p>
            <p className="text-[18px] w-[670px] text-subtitle  font-nunito">
              At Amrutam we follow a unique and personalized approach to
              healing. Our expert practitioners begin each treatment process by
              conducting a thorough analysis of the patient’s body type, medical
              history, and current health conditions.
            </p>
          </div>
          <div className="card-section w-[1232px] h-[315px] flex gap-[24px] ">
            <div className="box  bg-cream px-[20px] py-[20px] w-[290px] h-[315px] shadow-md flex flex-col items-center gap-[10px] rounded-[20px] border-t-[5px] border-green font-nunito">
              <div className="circle w-[70px] h-[70px] rounded-full bg-lightGreen border-[1px] border-green">
                <p className="text-[38px] text-heroText2">1</p>
              </div>
              <p className="text-[24px] mt-[16px] text-green font-semibold">
                Make Appointment
              </p>
              <p className="text-[18px] text-cardSub px-[10px]">
                You must make an appointment in advance, to choose the service
                and date.
              </p>
            </div>
            <div className="box  bg-cream px-[20px] py-[20px] w-[290px] h-[315px] shadow-md flex flex-col items-center gap-[10px] rounded-[20px] border-t-[5px] border-green font-nunito">
              <div className="circle w-[70px] h-[70px] rounded-full bg-lightGreen border-[1px] border-green">
                <p className="text-[38px] text-heroText2">2</p>
              </div>
              <p className="text-[24px] mt-[16px]  text-green font-semibold">
                Consultations
              </p>
              <p className="text-[18px] text-cardSub px-[10px]">
                The next stage involves a thorough consultation with an Ayurveda
                practitioner.
              </p>
            </div>

            <div className="box  bg-cream px-[20px] py-[20px] w-[290px] h-[315px] shadow-md  flex flex-col items-center gap-[10px] rounded-[20px] border-t-[5px] border-green font-nunito">
              <div className="circle w-[70px] h-[70px] rounded-full bg-lightGreen border-[1px] border-green">
                <p className="text-[38px] text-heroText2">3</p>
              </div>
              <p className="text-[24px] mt-[16px]  text-green font-semibold">
                Treatment Planning
              </p>
              <p className="text-[18px] text-cardSub px-[10px]">
                The Ayurvedic practitioner creates a personalized treatment plan
                for you
              </p>
            </div>

            <div className="box  bg-cream px-[20px] py-[20px] w-[290px] h-[315px] shadow-md flex flex-col items-center gap-[10px] rounded-[20px] border-t-[5px] border-green font-nunito">
              <div className="circle w-[70px] h-[70px] rounded-full bg-lightGreen border-[1px] border-green">
                <p className="text-[38px] text-heroText2">4</p>
              </div>
              <p className="text-[24px] mt-[16px]  text-green font-semibold">
                Maintenance
              </p>
              <p className="text-[18px] text-cardSub px-[10px]">
                These visits allow for assessment of progress, adjustments to
                the treatment.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial h-[700px] w-full flex flex-col py-[80px] items-center bg-cream ">
          <div className="header">
            <p className="text-[48px] text-green font-semibold font-Roboto ">
              Stories From Our Valued Customers!
            </p>
          </div>
          <div className="testimonial-card flex w-[1228px] h-[370px] gap-[32px] mt-[80px]">
            <div className="card w-[388px] h-[370px] rounded-[20px] border-[1px] shadow-md bg-white font-nunito">
              <div className="top h-[54px] flex items-center px-[20px] bg-blue rounded-t-[20px]">
                <p className="text-[18px] font-semibold text-title">
                  Consulted for Skin
                </p>
              </div>
              <div className="content flex flex-col gap-[20px] w-[335px] m-auto mt-[30px]">
                <div className="profile flex justify-between">
                  <div className="left flex gap-[10px]">
                    <div className="profile-pic w-[60px] h-[60px] rounded-full bg-stone-600"></div>
                    <div className="details">
                      <p className="text-[20px] text-title">Sophie Moore</p>
                      <p className="text-[18px] text-start  text-cardText">
                        Chennai
                      </p>
                    </div>
                  </div>
                  <div className="right text-title">
                    <p>17/02/24</p>
                  </div>
                </div>
                <div className="stars flex gap-[5px]">
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                </div>
                <div className="text w-[300px]">
                  <p className="text-[22px] text-start text-header font-semibold">
                    “One of a kind service”
                  </p>
                  <p className="text-[18px] text-start text-subheader">
                    Ultrices eros in cursus turpis massa tincidunt sem nulla
                    pharetra diam sit amet nisl suscipit adipis.
                  </p>
                </div>
              </div>
            </div>
            <div className="card w-[388px] h-[370px] rounded-[20px] border-[1px] shadow-md bg-white font-nunito">
              <div className="top h-[54px] flex items-center px-[20px] rounded-t-[20px] bg-lightSky">
                <p className="text-[18px] font-semibold text-title">
                  Consulted for Hair
                </p>
              </div>
              <div className="content flex flex-col gap-[20px] w-[335px] m-auto mt-[30px]">
                <div className="profile flex justify-between">
                  <div className="left flex gap-[10px]">
                    <div className="profile-pic w-[60px] h-[60px] rounded-full bg-stone-600"></div>
                    <div className="details">
                      <p className="text-[20px] text-title">Sophie Moore</p>
                      <p className="text-[18px] text-start text-cardText">
                        Chennai
                      </p>
                    </div>
                  </div>
                  <div className="right text-title">
                    <p>17/02/24</p>
                  </div>
                </div>
                <div className="stars flex gap-[5px]">
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                </div>
                <div className="text w-[300px]">
                  <p className="text-[22px] text-start text-header font-semibold">
                    “One of a kind service”
                  </p>
                  <p className="text-[18px] text-start text-subheader">
                    Ultrices eros in cursus turpis massa tincidunt sem nulla
                    pharetra diam sit amet nisl suscipit adipis.
                  </p>
                </div>
              </div>
            </div>
            <div className="card w-[388px] h-[370px] rounded-[20px] border-[1px] shadow-md bg-white font-nunito">
              <div className="top h-[54px] flex items-center px-[20px] rounded-t-[20px] bg-lightSky">
                <p className="text-[18px] font-semibold text-title">
                  Consulted for Hair
                </p>
              </div>
              <div className="content flex flex-col gap-[20px] w-[335px] m-auto mt-[30px]">
                <div className="profile flex justify-between">
                  <div className="left flex gap-[10px]">
                    <div className="profile-pic w-[60px] h-[60px] rounded-full bg-stone-600"></div>
                    <div className="details">
                      <p className="text-[20px] text-title">Sophie Moore</p>
                      <p className="text-[18px] text-start text-cardText">
                        Chennai
                      </p>
                    </div>
                  </div>
                  <div className="right text-title">
                    <p>17/02/24</p>
                  </div>
                </div>
                <div className="stars flex gap-[5px]">
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                  <div className="img-wrap w-[24px] h-[24px]">
                    <img src={star} alt="" className="w-[24px] h-[24px]" />
                  </div>
                </div>
                <div className="text w-[300px]">
                  <p className="text-[22px] text-start text-header font-semibold">
                    “One of a kind service”
                  </p>
                  <p className="text-[18px] text-start text-subheader">
                    Ultrices eros in cursus turpis massa tincidunt sem nulla
                    pharetra diam sit amet nisl suscipit adipis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="img-wrapper w-[76px] h-[9px] mt-[50px]">
            <img src={dot} alt="" className="w-[76px] h-[9px]" />
          </div>
        </div>
        <div className="meet-instructor w-full h-[800px]  flex flex-col pt-[60px] items-center">
          <div className="header">
            <p className="text-[48px] text-green font-semibold font-Roboto">
              Meet Our Ayurveda Experts
            </p>
          </div>
          <div className="content w-full mt-[50px] flex gap-[40px] items-center justify-center">
            <div className="left w-[72px] h-[69px]">
              <img src={leftArrow} alt="" className="w-[72px] h-[69px]" />
            </div>
            <div className="card-box w-[980px] h-[440px] flex gap-[46px]">
              <div className="card w-[295px] h-[440px] rounded-[40px] flex flex-col items-center pt-[40px] justify-between  bg-cream font-nunito">
                <div className="main-content w-[250px] h-[308px] flex flex-col items-center justify-evenly">
                  <div className="img-box w-[150px] h-[150px] relative">
                    <img src={doc} alt="" className=" w-[150px] h-[150px]" />
                    <div className="rating flex gap-1 w-[70px]  rounded-[17px] absolute right-[40px] bottom-[-1px] justify-center items-center bg-gradient-to-b from-starGrad1  to-starGrad2">
                      <p className="text-[16px] text-white">4.5</p>
                      <div className="img-wrap w-[20px] h-[20px]">
                        <img src={star} alt="" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[20px] font-semibold text-title">
                    Dr. Vaishali sharma
                  </p>
                  <p className="text-[15px] text-lightInfo">
                    Ayurveda Practitioner (BAMS, MD)
                  </p>
                  <div className="exp flex gap-2">
                    <div className="img-wrap w-[24px] h-[24px]">
                      <img src={cap} alt="" className="w-[24px] h-[24px]" />
                    </div>
                    <p className="text-[16px] text-black">
                      25 years of experience
                    </p>
                  </div>
                  <div className="specialist flex gap-2 px-[13px] py-[6px] rounded-[18px] bg-bgGreen items-center mt-[10px]">
                    <div className="img-wrap w-[16px] h-[16px]">
                      <img src={clip} alt="" className="w-[16px] h-[16px]" />
                    </div>
                    <p className="text-[16px] text-green">Skin Specialist</p>
                  </div>
                </div>
                <div className="book h-[60px] flex justify-center items-center rounded-b-[40px] w-full bg-green ">
                  <p className="text-[18px] text-heroText2 ">Book A Session</p>
                </div>
              </div>
              <div className="card w-[295px] h-[440px] rounded-[40px] flex flex-col items-center pt-[40px] justify-between bg-cream font-nunito">
                <div className="main-content w-[250px] h-[308px] flex flex-col items-center justify-evenly">
                  <div className="img-box w-[150px] h-[150px] relative">
                    <img src={doc} alt="" className=" w-[150px] h-[150px]" />
                    <div className="rating bg-gradient-to-b from-starGrad1  to-starGrad2 flex gap-1 w-[70px]  rounded-[17px] absolute right-[40px] bottom-[-1px] justify-center items-center">
                      <p className="text-[16px] text-white">4.5</p>
                      <div className="img-wrap w-[20px] h-[20px]">
                        <img src={star} alt="" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[20px] font-semibold text-title">
                    Dr. Vaishali sharma
                  </p>
                  <p className="text-[15px] text-lightInfo">
                    Ayurveda Practitioner (BAMS, MD)
                  </p>
                  <div className="exp flex gap-2">
                    <div className="img-wrap w-[24px] h-[24px]">
                      <img src={cap} alt="" className="w-[24px] h-[24px]" />
                    </div>
                    <p className="text-[16px] text-black">
                      25 years of experience
                    </p>
                  </div>
                  <div className="specialist flex gap-2 px-[13px] py-[6px] rounded-[18px]  bg-bgGreen items-center mt-[10px]">
                    <div className="img-wrap w-[16px] h-[16px]">
                      <img src={clip} alt="" className="w-[16px] h-[16px]" />
                    </div>
                    <p className="text-[16px] text-green">Skin Specialist</p>
                  </div>
                </div>
                <div className="book h-[60px] flex justify-center items-center rounded-b-[40px] w-full bg-green">
                  <p className="text-[18px] text-heroText2">Book A Session</p>
                </div>
              </div>
              <div className="card w-[295px] h-[440px] rounded-[40px] flex flex-col items-center pt-[40px] justify-between bg-cream font-nunito">
                <div className="main-content w-[250px] h-[308px] flex flex-col items-center justify-evenly">
                  <div className="img-box w-[150px] h-[150px] relative">
                    <img src={doc} alt="" className=" w-[150px] h-[150px]" />
                    <div className="rating bg-gradient-to-b from-starGrad1  to-starGrad2 flex gap-1 w-[70px] rounded-[17px] absolute right-[40px] bottom-[-1px] justify-center items-center">
                      <p className="text-[16px] text-white">4.5</p>
                      <div className="img-wrap w-[20px] h-[20px]">
                        <img src={star} alt="" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[20px] font-semibold text-title">
                    Dr. Vaishali sharma
                  </p>
                  <p className="text-[15px] text-lightInfo">
                    Ayurveda Practitioner (BAMS, MD)
                  </p>
                  <div className="exp flex gap-2">
                    <div className="img-wrap w-[24px] h-[24px]">
                      <img src={cap} alt="" className="w-[24px] h-[24px]" />
                    </div>
                    <p className="text-[16px] text-black">
                      25 years of experience
                    </p>
                  </div>
                  <div className="specialist flex gap-2 px-[13px] py-[6px] rounded-[18px]  bg-bgGreen items-center mt-[10px]">
                    <div className="img-wrap w-[16px] h-[16px]">
                      <img src={clip} alt="" className="w-[16px] h-[16px]" />
                    </div>
                    <p className="text-[16px] text-green">Skin Specialist</p>
                  </div>
                </div>
                <div className="book h-[60px] flex justify-center items-center rounded-b-[40px] w-full bg-green">
                  <p className="text-[18px] text-heroText2">Book A Session</p>
                </div>
              </div>
            </div>
            <div className="right w-[72px] h-[69px]">
              <img src={rightArrow} alt="" className="w-[72px] h-[69px]" />
            </div>
          </div>
          <div className="img-wrapper w-[76px] h-[9px] mt-[50px]">
            <img src={dot} alt="" className="w-[76px] h-[9px]" />
          </div>
          <div className="findmore w-[270px] h-[62px] rounded-[7px] border-[1px] flex items-center justify-center gap-2 mt-[40px] border-green bg-findMorebg">
            <p className="text-[24px] text-green font-Roboto">
              Find more experts
            </p>
            <div className="next w-[14px] h-[20px] ">
              <img src={next} alt="" className="w-[14px] h-[20px]" />
            </div>
          </div>
        </div>

        <div className="download-app h-[700px] flex justify-center items-center bg-cream mt-[30px]">
          <div className="left w-[574px] h-[484px]">
            <p className="text-[48px]  text-start font-bold text-green font-Roboto">
              Amrutam Home App
            </p>
            <p className="text-[16px] w-[543px] text-start mt-[20px] text-lightText font-Roboto">
              The Amrutam Home App is your one-stop app for all things Ayurveda!
              Apart from mimicking the significant characteristics of our
              website, this app offers a wide range of additional features.
            </p>
            <p className="text-[32px] text-start mt-[20px] text-title font-semibold font-Roboto">
              Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across
              The Globe
            </p>

            <p className="text-[36px] text-start mt-[60px] font-bold text-title font-Roboto">
              Get The App Now
            </p>

            <div className="image-set flex justify-between mt-[40px]">
              <div className="img-wrapper w-[270px] h-[80px]">
                <img src={google} alt="" className="w-[270px] h-[80px]" />
              </div>
              <div className="img-wrapper w-[270px] h-[80px]">
                <img src={apple} alt="" className="w-[270px] h-[80px]" />
              </div>
            </div>
          </div>
          <div className="right w-[734px] h-[565px] mt-[20px]">
            <img src={mobile} alt="" className="w-[734px] h-[565px]" />
          </div>
        </div>
        <div className="footer h-[500px] w-full flex justify-center items-start bg-lightestGreen font-Roboto gap-[50px] pt-[120px]">
          <div className="left flex flex-col w-[400px] items-start text-[18px] gap-[10px] ">
            <p className="text-green font-bold">Get In Touch</p>
            <p>support@amrutam.co.in</p>
            <p className="text-start w-[300px]">
              Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
              Lashkar, Gwalior - 474001
            </p>
            <p>+91 9713171999</p>
            <div className="imgwrapper w-[400px] h-[100px]">
              <img src={social} alt="" className="w-[400px] h-[100px]" />
            </div>
          </div>
          <div className="box flex flex-col gap-[10px]">
            <p className="text-[18px]  text-start font-bold text-green">
              Information
            </p>
            <div className="links text-footerText flex flex-col gap-[2px]">
              <p className="text-[18px] text-start">About Us</p>
              <p className="text-[18px] text-start ">Terms and Conditions</p>
              <p className="text-[18px] text-start">Privacy Policy</p>
              <p className="text-[18px] text-start">
                Privacy Policy for Mobile Apps
              </p>
              <p className="text-[18px] text-start">
                Shipping and Return Policy
              </p>
              <p className="text-[18px] text-start">International Delivery</p>
              <p className="text-[18px] text-start">
                For Business, Hotel and Resorts
              </p>
            </div>
          </div>

          <div className="right w-[400px]">
            <p className="text-green font-bold text-[24px] text-start">
              Subscribe to our Newsletter and join Amrutam Family today!
            </p>
            <div className="inputbox flex rounded-[40px] overflow-hidden w-[390px] border-[1px] border-black mt-[40px]">
              <input
                type="text"
                placeholder="Your Email Address"
                className="bg-inherit placeholder-black px-[30px] text-[18px] py-[15px] "
              />
              <div className="button bg-black text-[20px] px-[20px] text-white font-semibold flex justify-center items-center ">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile  hidden sm:block">
        <div className="hero-section w-full h-[540px] relative">
          <div className="img-wrapper w-full h-[540px]">
            <img src={model} alt="" className="w-full h-[540px]" />
          </div>
          <div className="text-field absolute bg-gradient-to-b from-gradient1 via-gradient to-gradient3 h-[540px] w-full bottom-0 flex justify-center items-center">
            <div className="content-box  flex flex-col gap-[16px] w-[330px] h-[360px] pr-[30px]">
              <p className="text-[18px] text-start text-heroText font-normal font-Montserrat">
                Namaste, Welcome to Amrutam
              </p>
              <p className="text-[24px] text-start text-heroText2 font-Roboto">
                Step into Holistic Healing with{" "}
                <span className="px-[2px] border-b-[3px] text-heroText ">
                  Ayurveda
                </span>{" "}
                Book Consultation with certified Experts.
              </p>
              <p className="text-[14px] text-start  text-heroText3 font-Roboto">
                Dive into the world of ayurveda and Experience Personalized
                Health Solutions and Holistic Guidance from Trusted Ayurvedic
                Doctors Anytime, anywhere.
              </p>
              <div
                className="button w-[220px] py-[20px] rounded-[10px] flex justify-center items-center  mt-[20px] bg-green cursor-pointer"
                onClick={() => navigate("/Find")}
              >
                <p className="text-[14px] text-heroText2 font-inter">
                  BOOK AN APPOINTMENT
                </p>
              </div>
            </div>
          </div>
          <div className="icons flex flex-col justify-center items-center px-[60px] font-bold py-[20px] bg-cream font-nunito">
            <div className="box w-full flex py-[16px] gap-2 items-center">
              <div className="img-wrapper w-[80px] h-[60px]">
                <img src={icon1} alt="" className="w-[80px] h-[60px]" />
              </div>
              <p className="text-[18px] text-start text-green font-semibold">
                convenient online & In-clinic consultations
              </p>
            </div>
            <div className="box w-full flex  py-[16px] items-center">
              <div className="img-wrapper  w-[70px] h-[60px]">
                <img src={icon2} alt="" className=" w-[70px] h-[60px]" />
              </div>
              <p className="text-[18px] text-start text-green font-semibold">
                Safe and effective treatment
              </p>
            </div>
            <div className="box w-full flex  py-[16px] items-center">
              <div className="img-wrapper w-[80px] h-[60px]">
                <img src={icon3} alt="" className=" w-[80px] h-[60px]" />
              </div>
              <p className="text-[18px] text-start text-green font-semibold">
                Experienced Ayurvedic Practitioners
              </p>
            </div>
            <div className="box w-full flex  py-[16px] gap-2 items-center">
              <div className="img-wrapper w-[80px] h-[60px]">
                <img src={icon4} alt="" className=" w-[80px] h-[60px]" />
              </div>
              <p className="text-[18px] text-start font-nunito  text-green font-semibold">
                personalized Treatment Plans & Guidance
              </p>
            </div>
          </div>
          <div className="yoga w-[100%] py-[40px] flex flex-col gap-[20px]">
            <p className="text-[32px] text-green font-Roboto font-bold px-[20px]">
              Discover Ayurveda’s Magic With Us
            </p>
            <p className="text-[14px] w-full px-[30px] text-subtitle font-nunito mt-[20px]">
              Ayurvedic treatment aims to balance your body and mind, bringing
              harmony and vitality. It's like a journey to better health using
              ancient wisdom, a totally effective approach for a better life.
            </p>
            <div className="img-wrapper w-[210px] h-[210px] mt-[30px] m-auto">
              <img src={yoga} alt="" className="w-[210px] h-[210px]" />
            </div>

            <div className="box-content  flex flex-wrap gap-[20px] justify-center w-[100%] ">
              <div className="box flex gap-[10px]  items-center flex-col w-2/5 py-[18px] px-[10px] rounded-[12px] border-[1px]">
                <div className="image w-[60px] h-[60px]">
                  <img src={yoga1} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="text ">
                  <p className="text-[15px] text-title  font-bold font-nunito">
                    Personalized Wellness
                  </p>
                  <p className="text-[13px]  text-lightSubtitle font-nunito ">
                    Get treatments made just for you based on your individual
                    doshas (body type)
                  </p>
                </div>
              </div>
              <div className="box flex gap-[10px]  items-center flex-col  w-2/5 py-[18px] px-[10px] rounded-[12px] border-[1px]">
                <div className="image w-[60px] h-[60px]">
                  <img src={yoga2} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="text ">
                  <p className="text-[15px] text-title  font-bold font-nunito">
                    Focus on prevention
                  </p>
                  <p className="text-[13px]   text-lightSubtitle font-nunito">
                    Stop problems even before they start.
                  </p>
                </div>
              </div>
              <div className="box flex gap-[10px]  font-nunito items-center flex-col w-2/5 py-[18px] px-[10px] rounded-[12px] border-[1px]">
                <div className="image w-[60px] h-[60px]">
                  <img src={yoga3} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="text ">
                  <p className="text-[15px] text-title  font-bold">
                    Mind-Body Connection
                  </p>
                  <p className="text-[13px] text-lightSubtitle">
                    Keep your mind and body in sync for a happy life.
                  </p>
                </div>
              </div>
              <div className="box flex gap-[10px]  font-nunito  items-center flex-col w-2/5 py-[18px] px-[10px] rounded-[12px] border-[1px]">
                <div className="image w-[60px] h-[60px]">
                  <img src={yoga4} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="text ">
                  <p className="text-[15px] text-title  font-bold">
                    Holistic Healing
                  </p>
                  <p className="text-[13px]   text-lightSubtitle">
                    Fix the root problem for long-lasting health.
                  </p>
                </div>
              </div>
              <div className="box flex gap-[10px]  font-nunito items-center flex-col w-2/5 py-[18px] px-[10px] rounded-[12px] border-[1px]">
                <div className="image w-[60px] h-[60px]">
                  <img src={yoga5} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="text ">
                  <p className="text-[15px] text-title  font-bold">
                    Natural Remedies
                  </p>
                  <p className="text-[13px]   text-lightSubtitle">
                    Using herbs and natural therapies for healing.
                  </p>
                </div>
              </div>
              <div className="box flex gap-[10px]  font-nunito items-center flex-col w-2/5 py-[18px] px-[10px] rounded-[12px] border-[1px]">
                <div className="image w-[60px] h-[60px]">
                  <img src={yoga6} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="text ">
                  <p className="text-[15px] text-title  font-bold">
                    Boosting immunity
                  </p>
                  <p className="text-[13px]   text-lightSubtitle">
                    Stay strong and healthy for life, not just for today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="know-more flex flex-col  py-[40px] bg-cream ">
            <p className="text-[32px] text-green font-Roboto font-bold">
              What sets Ayurvedic consultations apart?
            </p>
            <div className="content-box w-[90%] m-auto flex flex-col mt-[60px]  flex-wrap gap-[24px] font-nunito px-[20px]">
              <div className="box w-full px-[24px]  h-[267px]  flex flex-col items-center justify-center gap-[10px] rounded-[20px] border-t-[5px] border-green shadow-md bg-heroText2">
                <p className="text-[24px] text-green font-bold ">
                  स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
                </p>
                <p className="text-[15px] text-green">
                  [ Meaning: The Goal of Ayurveda is to maintain the health of a
                  healthy person and to cure the disease of a diseased person. ]
                </p>
              </div>
              <div className="img-box  h-[267px] rounded-[20px] overflow-hidden object-center shadow-md">
                <img src={add1} alt="" className="w-[100%] h-[267px]" />
              </div>
              <div className="box px-[48px] py-[32px]  h-[267px]  flex flex-col gap-[10px] rounded-[20px] border-t-[5px] border-green shadow-md bg-heroText2">
                <p className="text-[24px] text-green text-start font-bold">
                  precise diagnosis
                </p>
                <p className="text-[15px] text-cardText text-start">
                  Ayurveda's core principles revolve around Vata, Pitta, and
                  Kapha doshas, guiding you with precise diagnosis and
                  treatment.
                </p>
              </div>
              <div className="box px-[48px] py-[32px]  h-[267px]  flex flex-col gap-[10px] rounded-[20px] border-t-[5px] border-green shadow-md  bg-heroText2">
                <p className="text-[24px] text-green text-start font-bold">
                  Zero side-effects
                </p>
                <p className="text-[15px] text-cardText text-start">
                  Ayurvedic treatments are devoid of chemicals, and are based
                  completely on natural herbs
                </p>
              </div>
              <div className="img-box  h-[267px] rounded-[20px] overflow-hidden  shadow-md">
                <img src={add2} alt="" className="w-[100%] h-[267px]" />
              </div>
              <div className="box px-[48px] py-[32px]  h-[267px]  flex flex-col gap-[10px] rounded-[20px] border-t-[5px] shadow-md border-green bg-heroText2">
                <p className="text-[24px] text-green text-start font-bold">
                  Individual Treatment
                </p>
                <p className="text-[15px] text-cardText text-start">
                  all Treatments are personalized based on a person's unique
                  constitution and health concerns.
                </p>
              </div>
              <div className="img-box  h-[267px] rounded-[20px] overflow-hidden shadow-md">
                <img src={add3} alt="" className="w-[100%] h-[267px]" />
              </div>
            </div>
          </div>
          <div className="banner h-[500px] relative ">
            <div className="img h-[500px] w-[100%]">
              <img src={book} alt="" className="h-[500px] w-[100%]" />
            </div>
            <div className="text-content h-[500px] absolute w-full top-0 flex justify-center px-[60px] items-center bg-gradient-to-r from-grad1 via-grad2 to-grad3">
              <div className="box flex flex-col justify-center items-center gap-[40px]">
                <p className="text-[32px]  text-creamText font-Roboto font-bold">
                  Ready to restore harmony in your mind, body and spirit?
                </p>
                <div className="book-button px-[20px] py-[24px] rounded-[16px] flex justify-center items-center bg-green shadow-md">
                  <p className="text-[18px] text-heroText2 font-inter">
                    Book a Consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ayurvedic-aproach py-[60px] flex flex-col items-center">
            <div className="header  flex flex-col items-center gap-[10px]">
              <p className="text-[32px] text-green font-bold font-Roboto px-[30px]">
                Our Ayurvedic Approach
              </p>
              <p className="text-[16px]  text-subtitle  font-nunito px-[20px]">
                At Amrutam we follow a unique and personalized approach to
                healing. Our expert practitioners begin each treatment process
                by conducting a thorough analysis of the patient’s body type,
                medical history, and current health conditions.
              </p>
            </div>
            <div className="card-section w-[90%] m-auto h-[348px]  gap-[12px] overflow-hidden mt-[30px]  ">
              <div className=" flex w-[1600px] gap-[20px]">
                <div className="box  bg-cream px-[20px] py-[20px] w-[300px] h-[348px] shadow-md flex flex-col items-center gap-[10px] rounded-[20px] border-t-[5px] border-green font-nunito">
                  <div className="circle w-[70px] h-[70px] rounded-full bg-lightGreen border-[1px] border-green">
                    <p className="text-[38px] text-heroText2">1</p>
                  </div>
                  <p className="text-[24px] mt-[16px] text-green font-semibold">
                    Make Appointment
                  </p>
                  <p className="text-[18px] text-cardSub px-[10px]">
                    You must make an appointment in advance, to choose the
                    service and date.
                  </p>
                </div>
                <div className="box  bg-cream px-[20px] py-[20px] w-[300px] h-[348px] shadow-md flex flex-col items-center gap-[10px] rounded-[20px] border-t-[5px] border-green font-nunito">
                  <div className="circle w-[70px] h-[70px] rounded-full bg-lightGreen border-[1px] border-green">
                    <p className="text-[38px] text-heroText2">2</p>
                  </div>
                  <p className="text-[24px] mt-[16px]  text-green font-semibold">
                    Consultations
                  </p>
                  <p className="text-[18px] text-cardSub px-[10px]">
                    The next stage involves a thorough consultation with an
                    Ayurveda practitioner.
                  </p>
                </div>

                <div className="box  bg-cream px-[20px] py-[20px] w-[300px] h-[348px] shadow-md  flex flex-col items-center gap-[10px] rounded-[20px] border-t-[5px] border-green font-nunito">
                  <div className="circle w-[70px] h-[70px] rounded-full bg-lightGreen border-[1px] border-green">
                    <p className="text-[38px] text-heroText2">3</p>
                  </div>
                  <p className="text-[24px] mt-[16px]  text-green font-semibold">
                    Treatment Planning
                  </p>
                  <p className="text-[18px] text-cardSub px-[10px]">
                    The Ayurvedic practitioner creates a personalized treatment
                    plan for you
                  </p>
                </div>

                <div className="box  bg-cream px-[20px] py-[20px] w-[300px] h-[348px] shadow-md flex flex-col items-center gap-[10px] rounded-[20px] border-t-[5px] border-green font-nunito">
                  <div className="circle w-[70px] h-[70px] rounded-full bg-lightGreen border-[1px] border-green">
                    <p className="text-[38px] text-heroText2">4</p>
                  </div>
                  <p className="text-[24px] mt-[16px]  text-green font-semibold">
                    Maintenance
                  </p>
                  <p className="text-[18px] text-cardSub px-[10px]">
                    These visits allow for assessment of progress, adjustments
                    to the treatment.
                  </p>
                </div>
              </div>
            </div>
            <div className="img-wrapper w-[76px] h-[9px] mt-[50px]">
              <img src={dot} alt="" className="w-[76px] h-[9px]" />
            </div>
          </div>
          <div className="testimonial flex flex-col items-center bg-cream py-[40px]">
            <div className="header">
              <p className="text-[32px] text-green font-bold font-Roboto px-[30px]">
                Stories From Our Valued Customers!
              </p>
            </div>
            <div className="testimonial-card w-[90%] h-[370px] overflow-hidden  mt-[80px]">
              <div className="flex w-[1228px] h-[370px] gap-[20px]">
                <div className="card w-[320px] h-[370px] rounded-[20px] border-[1px] shadow-md bg-white font-nunito">
                  <div className="top h-[54px] flex items-center px-[20px] bg-blue rounded-t-[20px]">
                    <p className="text-[18px] font-semibold text-title">
                      Consulted for Skin
                    </p>
                  </div>
                  <div className="content flex flex-col gap-[20px] w-[290px] m-auto mt-[30px]  pl-[10px]">
                    <div className="profile flex justify-between">
                      <div className="left flex gap-[10px]">
                        <div className="profile-pic w-[60px] h-[60px] rounded-full bg-stone-600"></div>
                        <div className="details">
                          <p className="text-[16px] text-title">Sophie Moore</p>
                          <p className="text-[15px] text-start  text-cardText">
                            Chennai
                          </p>
                        </div>
                      </div>
                      <div className="right text-title text-[12px]">
                        <p>17/02/24</p>
                      </div>
                    </div>
                    <div className="stars flex gap-[5px]">
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                    </div>
                    <div className="text w-[280px]">
                      <p className="text-[20px] text-start text-header font-semibold">
                        “One of a kind service”
                      </p>
                      <p className="text-[16px] text-start text-subheader">
                        Ultrices eros in cursus turpis massa tincidunt sem nulla
                        pharetra diam sit amet nisl suscipit adipis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card w-[320px] h-[370px] rounded-[20px] border-[1px] shadow-md bg-white font-nunito ">
                  <div className="top h-[54px] flex items-center px-[20px] rounded-t-[20px] bg-lightSky">
                    <p className="text-[18px] font-semibold text-title">
                      Consulted for Hair
                    </p>
                  </div>
                  <div className="content flex flex-col gap-[20px] w-[290px] m-auto mt-[30px]  pl-[10px]">
                    <div className="profile flex justify-between">
                      <div className="left flex gap-[10px]">
                        <div className="profile-pic w-[60px] h-[60px] rounded-full bg-stone-600"></div>
                        <div className="details">
                          <p className="text-[26px] text-title">Sophie Moore</p>
                          <p className="text-[15px] text-start text-cardText">
                            Chennai
                          </p>
                        </div>
                      </div>
                      <div className="right text-title">
                        <p>17/02/24</p>
                      </div>
                    </div>
                    <div className="stars flex gap-[5px]">
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                    </div>
                    <div className="text w-[280px]">
                      <p className="text-[20px] text-start text-header font-semibold">
                        “One of a kind service”
                      </p>
                      <p className="text-[15px] text-start text-subheader">
                        Ultrices eros in cursus turpis massa tincidunt sem nulla
                        pharetra diam sit amet nisl suscipit adipis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card w-[320px] h-[370px] rounded-[20px] border-[1px] shadow-md bg-white font-nunito">
                  <div className="top h-[54px] flex items-center px-[20px] rounded-t-[20px] bg-lightSky">
                    <p className="text-[18px] font-semibold text-title">
                      Consulted for Hair
                    </p>
                  </div>
                  <div className="content flex flex-col gap-[20px] w-[290px] m-auto mt-[30px]  pl-[10px]">
                    <div className="profile flex justify-between">
                      <div className="left flex gap-[10px]">
                        <div className="profile-pic w-[60px] h-[60px] rounded-full bg-stone-600"></div>
                        <div className="details">
                          <p className="text-[20px] text-title">Sophie Moore</p>
                          <p className="text-[18px] text-start text-cardText">
                            Chennai
                          </p>
                        </div>
                      </div>
                      <div className="right text-title">
                        <p>17/02/24</p>
                      </div>
                    </div>
                    <div className="stars flex gap-[5px]">
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                      <div className="img-wrap w-[24px] h-[24px]">
                        <img src={star} alt="" className="w-[24px] h-[24px]" />
                      </div>
                    </div>
                    <div className="text w-[280px]">
                      <p className="text-[20px] text-start text-header font-semibold">
                        “One of a kind service”
                      </p>
                      <p className="text-[16px] text-start text-subheader">
                        Ultrices eros in cursus turpis massa tincidunt sem nulla
                        pharetra diam sit amet nisl suscipit adipis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-wrapper w-[76px] h-[12px] mt-[50px]">
              <img src={dot} alt="" className="w-[76px] h-[12px]" />
            </div>
          </div>
          <div className="instructor flex flex-col py-[40px]">
            <div className="header px-[30px]">
              <p className="text-[32px] text-green font-bold font-Roboto">
                Meet Our Ayurveda Experts
              </p>
            </div>

            <div className="content w-[90%]  m-auto mt-[50px] flex gap-[40px] items-center justify-center">
              <div className="card-box w-[90%] h-[440px] overflow-hidden ">
                <div className="flex gap-[46px]">
                  <div className="card w-[295px] h-[440px] rounded-[40px] flex flex-col items-center pt-[40px] justify-between bg-cream font-nunito">
                    <div className="main-content w-[250px] h-[308px] flex flex-col items-center justify-evenly">
                      <div className="img-box w-[150px] h-[150px] relative">
                        <img
                          src={doc}
                          alt=""
                          className=" w-[150px] h-[150px]"
                        />
                        <div className="rating bg-gradient-to-b from-starGrad1  to-starGrad2 flex gap-1 w-[70px]  rounded-[17px] absolute right-[40px] bottom-[-1px] justify-center items-center">
                          <p className="text-[16px] text-white">4.5</p>
                          <div className="img-wrap w-[20px] h-[20px]">
                            <img
                              src={star}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-[20px] font-semibold text-title">
                        Dr. Vaishali sharma
                      </p>
                      <p className="text-[15px] text-lightInfo">
                        Ayurveda Practitioner (BAMS, MD)
                      </p>
                      <div className="exp flex gap-2">
                        <div className="img-wrap w-[24px] h-[24px]">
                          <img src={cap} alt="" className="w-[24px] h-[24px]" />
                        </div>
                        <p className="text-[16px] text-black">
                          25 years of experience
                        </p>
                      </div>
                      <div className="specialist flex gap-2 px-[13px] py-[6px] rounded-[18px]  bg-bgGreen items-center mt-[10px]">
                        <div className="img-wrap w-[16px] h-[16px]">
                          <img
                            src={clip}
                            alt=""
                            className="w-[16px] h-[16px]"
                          />
                        </div>
                        <p className="text-[16px] text-green">
                          Skin Specialist
                        </p>
                      </div>
                    </div>
                    <div className="book h-[60px] flex justify-center items-center rounded-b-[40px] w-full bg-green">
                      <p className="text-[18px] text-heroText2">
                        Book A Session
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-wrapper w-[76px] h-[12px] mt-[50px] m-auto">
              <img src={dot} alt="" className="w-[76px] h-[12px]" />
            </div>
          </div>
          <div className="download flex flex-col gap-[20px] items-center h-[1000px] pt-[30px] px-[20px] bg-cream">
          <div className="left w-[100%] h-[484px]">
            <p className="text-[32px]   font-bold text-green font-Roboto">
              Amrutam Home App
            </p>
            <p className="text-[14px] mt-[20px] text-lightText font-Roboto">
              The Amrutam Home App is your one-stop app for all things Ayurveda!
              Apart from mimicking the significant characteristics of our
              website, this app offers a wide range of additional features.
            </p>
            <div className="right w-[100%] h-[328px] mt-[20px]">
            <img src={mobile} alt="" className="w-[100%] h-[328px]" />
          </div>
            <p className="text-[20px] px-[20px] mt-[20px] text-title font-semibold font-Roboto">
              Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across
              The Globe
            </p>

            <p className="text-[36px]  mt-[60px] font-bold text-title font-Roboto">
              Get The App Now
            </p>

            <div className="image-set flex  flex-col justify-between items-center gap-[20px] mt-[40px]">
              <div className="img-wrapper w-[90%] h-[80px]">
                <img src={google} alt="" className="w-[100%] h-[80px]" />
              </div>
              <div className="img-wrapper w-[90%] h-[80px]">
                <img src={apple} alt="" className="w-[100%] h-[80px]" />
              </div>
            </div>
          </div>
          </div>
          <div className="footer py-[40px] w-full flex  flex-col justify-center items-center bg-lightestGreen font-Roboto gap-[30px] ">
          <div className="left flex flex-col w-[80%] items-start text-[18px] gap-[10px] ">
            <p className="text-green font-bold">Get In Touch</p>
            <p>support@amrutam.co.in</p>
            <p className="text-start w-[300px]">
              Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
              Lashkar, Gwalior - 474001
            </p>
            <p>+91 9713171999</p>
            <div className="imgwrapper w-[100%] ">
              <img src={social} alt="" className="w-[100%] " />
            </div>
          </div>
          <div className="box flex flex-col gap-[10px] w-[80%]">
            <p className="text-[18px]  text-start font-bold text-green">
              Information
            </p>
            <div className="links text-footerText flex flex-col gap-[2px]">
              <p className="text-[18px] text-start">About Us</p>
              <p className="text-[18px] text-start ">Terms and Conditions</p>
              <p className="text-[18px] text-start">Privacy Policy</p>
              <p className="text-[18px] text-start">
                Privacy Policy for Mobile Apps
              </p>
              <p className="text-[18px] text-start">
                Shipping and Return Policy
              </p>
              <p className="text-[18px] text-start">International Delivery</p>
              <p className="text-[18px] text-start">
                For Business, Hotel and Resorts
              </p>
            </div>
          </div>

          <div className="right w-[80%]">
            <p className="text-green font-bold text-[18px] text-start">
              Subscribe to our Newsletter and join Amrutam Family today!
            </p>
            <div className="inputbox flex rounded-[40px] overflow-hidden w-[100%] border-[1px] border-black mt-[40px]">
              <input
                type="text"
                placeholder="Your Email Address"
                className="bg-inherit placeholder-black px-[10px] text-[16px] py-[15px] w-[60%] "
              />
              <div className="button bg-black text-[18px] w-[40%] text-white font-semibold flex justify-center items-center ">
                Subscribe
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
