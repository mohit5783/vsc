"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import customerLogo1 from "../public/images/BrandLogo/customer-logo-1.png";
import customerLogo2 from "../public/images/BrandLogo/customer-logo-2.png";
import customerLogo3 from "../public/images/BrandLogo/customer-logo-3.png";
import customerLogo4 from "../public/images/BrandLogo/customer-logo-4.png";
import customerLogo5 from "../public/images/BrandLogo/customer-logo-5.png";
import customerLogo6 from "../public/images/BrandLogo/customer-logo-6.png";
import app from "../public/images//BrandLogo/appfutura-logo.png";
import clutch from "../public/images/BrandLogo/clutch-logo.png";
import good from "../public/images/BrandLogo/goodfirm-logo.png";
import mobile from "../public/images/BrandLogo/mobile-app-logo.png";
import mobile1 from "../public/images/mobile.png";
import top from "../public/images/BrandLogo/top.png";
import office from "../public/images/others/office-view.jpg";
import team from "../public/images/team.png";
import circle from "../public/images/others/app-development.webp";
import mockup from "../public/images/sliders/app-mockup.png";
import flutter from "../public/images/flutter.svg";
import android from "../public/images/android.svg";
import apple from "../public/images/apple.svg";
import java from "../public/images/java.svg";
import python from "../public/images/python.svg";
import react from "../public/images/react.svg";
import swift from "../public/images/swift.svg";
import pwa from "../public/images/pwa.svg";
import tab from "../public/images/2.png";
import underm from "../public/images/underm.gif";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
  const [isloading, setisloading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setisloading(true);
    }, 2000);
  }, []);

  const theme = useSelector((state) => state.toggle.value);

  return (
    <>
      {isloading ? (
        <div className={`${theme && "dark"}`}>
          <div className="sticky top-0 z-20">
            {" "}
            <Header />
          </div>
        
          <div className="md:px-28 md:pb-20 md:pt-12 flex flex-wrap justify-between items-center dark:bg-slate-950 dark:text-white">
            <div className="w-full text-center px-24">
              <h1 className="md:text-6xl text-4xl font-bold my-10">
                Top Mobile App Development Company in India
              </h1>
              <p className="md:text-2xl text-md  my-9 md:m-0  m-5 text-[#00E2C2] font-thin">
                Virtualify solve the world&apos;s biggest problems with
                Expertise.
              </p>
              <p className="md:text-2xl text-md text-[#00E2C2] font-thin">
                Virtualify helps global brand with digital products on web,
                mobile and connected platforms.
              </p>
              <div className="flex items-center md:justify-between justify-center mb-9 md:flex-nowrap flex-wrap my-4">
                <div className="border border-[#00E2C2] p-2 flex items-center justify-evenly rounded-full md:w-[30%] w-[90%] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>

                  <p>100k User Engagement</p>
                </div>
                <div className="border border-[#00E2C2] p-2 flex items-center justify-evenly  rounded-full  md:w-[30%] w-[90%] my-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>

                  <p>100+ Featured App</p>
                </div>
                <div className="border border-[#00E2C2] p-2 flex items-center justify-evenly rounded-full md:w-[30%] w-[90%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>

                  <p>600+ App Published</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:-mt-36">
              <Image className="w-3/4 " src={mobile1} alt="image"></Image>
              <a
                className="group inline-block rounded-full bg-gradient-to-r from-[#3EC7E7] to-[#5179F5] p-[2px] focus:outline-none focus:ring ms-10"
                href="/download"
              >
                <span className="block rounded-full px-6 py-2 text-sm font-medium group-hover:bg-transparent text-white">
                  Find out more
                </span>
              </a>
            </div>
          </div>
          {/* ===========Award winning development=========== */}
          <div className="dark:bg-slate-950  py-16">
            {" "}
            <div className="w-full dark:text-white">
              <div className="w-full md:w-3/4 text-center m-auto ">
                <h1 className="text-5xl font-bold">
                  Building Strong Narrative
                </h1>

                <p className="mt-6 text-xl">
                  Our dedicated team of experts is committed to understanding
                  your unique needs and objectives, working closely with you to
                  develop and execute strategies that propel your brand forward.
                </p>
              </div>
              <div className="flex justify-center items-center my-5 flex-col relative">
                <Image
                  src={team}
                  className="w-[85%] rounded-t-3xl"
                  alt="image"
                ></Image>
                <div className="w-[85%] absolute bottom-0 grid grid-cols-5 divide-x px-5">
                  <div className="vc items-center flex-col ">
                    <p className="text-5xl font-bold">84+</p>
                    <p className="text-2xl">Expert Members</p>
                  </div>
                  <div className="vc items-center flex-col">
                    <p className="text-5xl font-bold">30+</p>
                    <p className="text-2xl">Marketing Tactics</p>
                  </div>
                  <div className="vc items-center flex-col">
                    <p className="text-5xl font-bold">15yr+</p>
                    <p className="text-2xl">Industry Experience</p>
                  </div>
                  <div className="vc items-center flex-col">
                    <p className="text-5xl font-bold">99%</p>
                    <p className="text-2xl">Client Satisfaction</p>
                  </div>
                  <div className="vc items-center flex-col">
                    <p className="text-5xl font-bold">145+</p>
                    <p className="text-2xl">Global Companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================what we do====== */}

          <div className="p-16 px-28 dark:bg-[#230B46]">
            <h1 className="text-5xl text-[#5179F5]">WHAT WE DO</h1>
            <p className="text-xl w-1/2 text-justify my-10 dark:text-white">
              We imagine and build experiences, products and businesses that
              disrupt the status quo, win hearts and realize the future. Explore
              how we work.
            </p>
            <div className="vc justify-between">
              <Image className="w-[550px]" src={tab}></Image>
              <div>
                <p className="text-6xl text-[#735992]">App Development</p>
                <p className="text-7xl text-[#9648F6] my-3">Web Development</p>
                <p className="text-6xl text-[#735992]">Cloud Services</p>
              </div>
            </div>
          </div>

          {/* =======Technology we work with======== */}
          <div className="text-center  py-16 dark:bg-slate-950 dark:text-white">
            <h1 className="text-5xl font-bold mb-7">Skills</h1>
            <p className="text-xl px-56">
              Each skill is a brushstroke contributing to the masterpiece of
              your online presence. Let us weave innovation, aesthetics, and
              leadership into the fabric of your digital journey.
            </p>
            <div className="bg-[#D8F7F2] mx-40 py-20 rounded-[100px] my-12">
              <span className="bg-gradient-to-r from-[#9648F6] via-[#14B4FF] to-[#66D898] text-5xl  ms-2 bg-clip-text text-transparent font-bold">
                TECHNOLOGIES WE WORK WITH
              </span>
              <div className="flex justify-center flex-wrap items-center mt-6">
                <div className="md:w-48 md:h-36  md:mx-2 w-40 h-32 my-3  flex justify-center items-center">
                  <Image className="w-20" src={android}></Image>
                  <span className="text-3xl font-bold dark:text-black mx-2">
                    Android
                  </span>
                </div>
                <div className="md:w-48 md:h-36  md:mx-2 w-40 h-32 my-3 flex justify-center items-center ">
                  <Image className="w-20" src={flutter}></Image>
                  <span className="text-3xl font-bold dark:text-black mx-2">
                    flutter
                  </span>
                </div>
                <div className="md:w-48 md:h-36  md:mx-2 w-40 h-32 flex justify-center items-center ">
                  <Image className="w-20" src={apple}></Image>
                  <span className="text-3xl font-bold dark:text-black mx-2">
                    ios
                  </span>
                </div>
                <div className="md:w-48 md:h-36  md:mx-2 w-40 my-3 h-32 flex justify-center items-center ">
                  <Image className="w-20" src={java}></Image>
                  <span className="text-3xl font-bold dark:text-black mx-2">
                    JAVA
                  </span>
                </div>
                <div className="md:w-48 md:h-36  md:mx-2 w-40 my-3 h-32 flex justify-center items-center ">
                  <Image className="w-20" src={python}></Image>
                  <span className="text-3xl font-bold dark:text-black mx-2">
                    Python
                  </span>
                </div>
                <div className="md:w-48 md:h-36  md:mx-2 w-40 my-3 h-32 flex justify-center items-center ">
                  <Image className="w-20" src={react}></Image>
                  <span className="text-3xl font-bold dark:text-black mx-2">
                    React Native
                  </span>
                </div>
                <div className="md:w-48 md:h-36  md:mx-2 w-40 my-3 h-32 flex justify-center items-center ">
                  <Image className="w-20" src={swift}></Image>
                  <span className="text-3xl font-bold dark:text-black mx-2">
                    Swift
                  </span>
                </div>
                <div className="md:w-48 md:h-36  md:mx-2 w-40 my-3 h-32 flex justify-center items-center ">
                  <Image className="w-20" src={pwa}></Image>
                  <span className="text-3xl font-bold dark:text-black mx-2">
                    PWA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ==============Our clients praise========== */}
          <div className="text-center  dark:bg-slate-950 dark:text-white py-16">
            <div className="flex justify-between items-center md:px-28 flex-wrap">
              <Image
                src={customerLogo1}
                width={110}
                // height={200}
                alt="Picture of the author"
              />
              <Image
                src={customerLogo2}
                width={110}
                // height={200}
                alt="Picture of the author"
              />
              <Image
                src={customerLogo3}
                width={110}
                // height={200}
                alt="Picture of the author"
              />
              <Image
                src={customerLogo4}
                width={110}
                // height={200}
                alt="Picture of the author"
              />
              <Image
                src={customerLogo5}
                width={110}
                // height={200}
                alt="Picture of the author"
              />
              <Image
                src={customerLogo6}
                width={110}
                // height={200}
                alt="Picture of the author"
              />
            </div>
            <h1 className="text-5xl font-bold mt-16">
              Our clients praise us for our great results
            </h1>
            <div className="">
              <Carousel />
            </div>
          </div>
          {/* =================contact us============= */}
          {/* <Inquiry /> */}
          <Footer />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image width={1000} height={1000} src={underm} alt="img"></Image>
          <h1 className="text-5xl">is under maintenance...</h1>
        </div>
      )}
    </>
  );
}
