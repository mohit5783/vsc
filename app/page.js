"use client";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import customerLogo1 from "../images/BrandLogo/customer-logo-1.png";
import customerLogo2 from "../images/BrandLogo/customer-logo-2.png";
import customerLogo3 from "../images/BrandLogo/customer-logo-3.png";
import customerLogo4 from "../images/BrandLogo/customer-logo-4.png";
import customerLogo5 from "../images/BrandLogo/customer-logo-5.png";
import customerLogo6 from "../images/BrandLogo/customer-logo-6.png";
import app from "../images/BrandLogo/appfutura-logo.png";
import clutch from "../images/BrandLogo/clutch-logo.png";
import good from "../images/BrandLogo/goodfirm-logo.png";
import mobile from "../images/BrandLogo/mobile-app-logo.png";
import top from "../images/BrandLogo/top.png";
import office from "../images/others/office-view.jpg";
import circle from "../images/others/app-development.webp";
import mockup from "../images/sliders/app-mockup.png";
import user4 from "../images/users/user4.jpg";
import underm from "../images/underm.gif";
// import Inquiry from "./inquiry/page";
import { motion } from "framer-motion";
import Link from "next/link";
import { rule } from "postcss";
import { useEffect, useState } from "react";

export default function Home() {
  const [isloading, setisloading] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setisloading(true)
    },2000)
  },[])
  return (
    <>
      {!isloading ? (
        <>
          <div className="sticky top-0 z-20">
            {" "}
            <Header />
          </div>

          <div className="md:px-28 md:pb-20 md:pt-3 flex flex-wrap justify-between items-center ">
            <div className="w-full md:w-1/2 text-center md:text-start">
              <h1 className="md:text-5xl text-4xl font-extrabold m-6">
                Top Mobile App Development Company in India
              </h1>
              <p className="md:text-xl text-md text-zinc-500 my-9 md:m-0  m-5 ">
                Reevan solve the world's biggest problems with Expertise. Reevan
                helps global brand with digital products on web, mobile and
                connected platforms.
              </p>
              <div className="flex items-center md:justify-between justify-center mb-9 md:flex-nowrap flex-wrap px3">
                <div className="border p-3 flex items-center justify-evenly rounded-2xl py-8 md:w-[30%] w-[90%] ">
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
                <div className="border p-3 flex items-center justify-evenly  rounded-2xl py-8 md:w-[30%] w-[90%] my-5">
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
                <div className="border p-3 flex items-center justify-between rounded-2xl py-8 md:w-[30%] w-[90%]">
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
              <div className="flex flex-wrap  items-center md:justify-between justify-center">
                <div className="">
                  <Link
                    className="group flex items-center justify-between gap-4 rounded-full border bg-gradient-to-r from-[#9648F6] via-[#587AF9] via-[#14B4FF] to-[#66D898]  px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring "
                    href="/download"
                  >
                    <span className="font-medium text-white transition-colors group-hover:text-white group-active:text-indigo-500">
                      Find out more
                    </span>

                    <span className="shrink-0 rounded-full  bg-white p-2 text-indigo-600 group-active:text-indigo-500">
                      <svg
                        className="h-5 w-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div className="flex justify-center items-center ">
                  <Image
                    className="rounded-full w-20 me-8 md:mx-8 mt-5 md:mt-0"
                    src={user4}
                    alt="image"
                  ></Image>
                  <div>
                    <h3>Lovkesh Deshmukh</h3>
                    <p>Business Head</p>
                  </div>
                </div>
              </div>
            </div>
            <Image className="w-full md:w-1/2" src={mockup} alt="image"></Image>
          </div>
          {/* ===========Award winning development=========== */}
          <div>
            {" "}
            <div className="bg-[#00A6FB] w-full text-white">
              <div className="w-full md:w-3/4 text-center m-auto py-32 ">
                <h1 className="text-lg ">WE ARE VIRTUALIFY</h1>
                <h1 className="text-3xl my-6 font-extrabold">
                  Award Winning App Development Company
                </h1>
                <h1 className="text-lg font-bold">
                  #1 Mobile App Company, Awarded for its Top Features/Editor
                  Apps Delivered.
                </h1>
                <p className="mt-6">
                  Reevan started its operation in the year 1999. We are
                  Worldwide, based Web, App and Digital Marketing Company. Our
                  main Domain is Web Design, App Development, Digital Marketing,
                  Product Design and Cloud Services. Customer Satisfactio and
                  the Highest rate of Customer Repeatability make us one of the
                  pioneers in the field. So, what are you waiting for? Let us
                  discuss your ideas and our innovation in detail because
                  catering your requirement and converting it into a final
                  product is our main goal.
                </p>
              </div>
            </div>
            <Image src={office} width={"100%"} alt="image"></Image>
            <div className="flex  justify-between items-center md:px-20 bg-[#eaffe6] flex-wrap-reverse">
              <div>
                <button className="px-7 py-4 text-white duration-150 bg-[#9648F6] rounded-full hover:bg-indigo-500 active:bg-indigo-700">
                  Button
                </button>
              </div>
              <div className="md:w-1/2 w-full p-10 flex justify-between items-center rounded-3xl bg-[#9648F6] md:-mt-36 text-white">
                <div>
                  <div className="mb-12">
                    <div className="text-5xl font-extrabold">75+</div>
                    <div>Project Delivered</div>
                  </div>
                  <div>
                    <div className="text-5xl font-extrabold">20+</div>
                    <div>Experts Team</div>
                  </div>
                </div>
                <div>
                  <div className="mb-12">
                    <div className="text-5xl font-extrabold">70+</div>
                    <div>Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-5xl font-extrabold">20%</div>
                    <div>Success Years</div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotateZ: 960 }}
                  // initial={{ y: 600 }}
                  transition={{
                    duration: 50,
                    repeat: "Infinity",
                    type: "tween",
                  }}
                >
                  <Image width={150} src={circle} alt="image"></Image>
                </motion.div>
              </div>
            </div>
            <div className="md:px-32 py-10  bg-[#eaffe6] flex flex-wrap md:justify-between justify-center items-center">
              <Image
                className="w-[150px] md:w-[200px]"
                src={app}
                alt="image"
              ></Image>
              <Image
                className="w-[150px] md:w-[200px]"
                src={good}
                alt="image"
              ></Image>
              <Image
                className="w-[150px] md:w-[200px]"
                src={top}
                alt="image"
              ></Image>
              <Image
                className="w-[150px] md:w-[200px]"
                src={mobile}
                alt="image"
              ></Image>
              <Image
                className="w-[150px] md:w-[200px]"
                src={clutch}
                alt="image"
              ></Image>
            </div>
          </div>
          {/* ==============Services============== */}
          <div className="text-center py-20">
            <h3 className="mb-6">Our Services</h3>
            <h1 className="text-3xl font-extrabold">
              We build modern creative mobile experiences.
            </h1>
            <div className="md:mx-28 md:mt-16 flex justify-between items-center  flex-wrap">
              <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
                <h3 className="text-2xl font-bold">Android Development</h3>
                <p className="my-5 text-zinc-500">
                  Our software house has been recognised by google for
                  outstanding android application quality.
                </p>
                <span className="text-xl">
                  Read More<span aria-hidden="true">&rarr;</span>
                </span>
                <div
                  style={{ top: "-40px" }}
                  className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
                >
                  <svg
                    height="35pt"
                    viewBox="0 -99 512 511"
                    width="35pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                      fill="#6ae5d3"
                    />
                    <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <g fill="#51dbca">
                      <path d="m480 281.394531h32v32h-32zm0 0" />
                      <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                      <path d="m0 281.394531h32v32h-32zm0 0" />
                      <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
                <h3 className="text-2xl font-bold">Android Development</h3>
                <p className="my-5 text-zinc-500">
                  Our software house has been recognised by google for
                  outstanding android application quality.
                </p>
                <span className="text-xl">
                  Read More<span aria-hidden="true">&rarr;</span>
                </span>
                <div
                  style={{ top: "-40px" }}
                  className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
                >
                  <svg
                    height="35pt"
                    viewBox="0 -99 512 511"
                    width="35pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                      fill="#6ae5d3"
                    />
                    <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <g fill="#51dbca">
                      <path d="m480 281.394531h32v32h-32zm0 0" />
                      <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                      <path d="m0 281.394531h32v32h-32zm0 0" />
                      <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
                <h3 className="text-2xl font-bold">Android Development</h3>
                <p className="my-5 text-zinc-500">
                  Our software house has been recognised by google for
                  outstanding android application quality.
                </p>
                <span className="text-xl">
                  Read More<span aria-hidden="true">&rarr;</span>
                </span>
                <div
                  style={{ top: "-40px" }}
                  className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
                >
                  <svg
                    height="35pt"
                    viewBox="0 -99 512 511"
                    width="35pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                      fill="#6ae5d3"
                    />
                    <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <g fill="#51dbca">
                      <path d="m480 281.394531h32v32h-32zm0 0" />
                      <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                      <path d="m0 281.394531h32v32h-32zm0 0" />
                      <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
                <h3 className="text-2xl font-bold">Android Development</h3>
                <p className="my-5 text-zinc-500">
                  Our software house has been recognised by google for
                  outstanding android application quality.
                </p>
                <span className="text-xl">
                  Read More<span aria-hidden="true">&rarr;</span>
                </span>
                <div
                  style={{ top: "-40px" }}
                  className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
                >
                  <svg
                    height="35pt"
                    viewBox="0 -99 512 511"
                    width="35pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                      fill="#6ae5d3"
                    />
                    <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <g fill="#51dbca">
                      <path d="m480 281.394531h32v32h-32zm0 0" />
                      <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                      <path d="m0 281.394531h32v32h-32zm0 0" />
                      <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
                <h3 className="text-2xl font-bold">Android Development</h3>
                <p className="my-5 text-zinc-500">
                  Our software house has been recognised by google for
                  outstanding android application quality.
                </p>
                <span className="text-xl">
                  Read More<span aria-hidden="true">&rarr;</span>
                </span>
                <div
                  style={{ top: "-40px" }}
                  className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
                >
                  <svg
                    height="35pt"
                    viewBox="0 -99 512 511"
                    width="35pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                      fill="#6ae5d3"
                    />
                    <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <g fill="#51dbca">
                      <path d="m480 281.394531h32v32h-32zm0 0" />
                      <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                      <path d="m0 281.394531h32v32h-32zm0 0" />
                      <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
                <h3 className="text-2xl font-bold">Android Development</h3>
                <p className="my-5 text-zinc-500">
                  Our software house has been recognised by google for
                  outstanding android application quality.
                </p>
                <span className="text-xl">
                  Read More<span aria-hidden="true">&rarr;</span>
                </span>
                <div
                  style={{ top: "-40px" }}
                  className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
                >
                  <svg
                    height="35pt"
                    viewBox="0 -99 512 511"
                    width="35pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                      fill="#0ac1a7"
                    />
                    <path
                      d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                      fill="#6ae5d3"
                    />
                    <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                    <g fill="#51dbca">
                      <path d="m480 281.394531h32v32h-32zm0 0" />
                      <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                      <path d="m0 281.394531h32v32h-32zm0 0" />
                      <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* =======Technology we work with======== */}
          <div className="text-center md:p-20 py-5 ">
            <h1 className="text-4xl font-bold mb-7">
              Technologies we work with
            </h1>
            <div className="flex justify-center flex-wrap items-center ">
              <div className="md:w-48 md:h-36 md:m-3 m-auto w-40 h-32 my-3  rounded-2xl bg-zinc-100 flex flex-col justify-center items-center ">
                <svg
                  height="40pt"
                  viewBox="0 -99 512 511"
                  width="40pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                    fill="#6ae5d3"
                  />
                  <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <g fill="#51dbca">
                    <path d="m480 281.394531h32v32h-32zm0 0" />
                    <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    <path d="m0 281.394531h32v32h-32zm0 0" />
                    <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                  </g>
                </svg>
                <span>iOS</span>
              </div>
              <div className="md:w-48 md:h-36 md:m-3 m-auto w-40 h-32 my-3 rounded-2xl bg-zinc-100 flex flex-col justify-center items-center ">
                <svg
                  height="40pt"
                  viewBox="0 -99 512 511"
                  width="40pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                    fill="#6ae5d3"
                  />
                  <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <g fill="#51dbca">
                    <path d="m480 281.394531h32v32h-32zm0 0" />
                    <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    <path d="m0 281.394531h32v32h-32zm0 0" />
                    <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                  </g>
                </svg>
                <span>Android</span>
              </div>
              <div className="md:w-48 md:h-36 md:m-3 mx-auto my-3 w-40 h-32 rounded-2xl bg-zinc-100 flex flex-col justify-center items-center ">
                <span>PWA</span>
              </div>
              <div className="md:w-48 md:h-36 md:m-3 m-auto w-40 my-3 h-32 rounded-2xl bg-zinc-100 flex flex-col justify-center items-center ">
                <svg
                  height="40pt"
                  viewBox="0 -99 512 511"
                  width="40pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                    fill="#6ae5d3"
                  />
                  <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <g fill="#51dbca">
                    <path d="m480 281.394531h32v32h-32zm0 0" />
                    <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    <path d="m0 281.394531h32v32h-32zm0 0" />
                    <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                  </g>
                </svg>
                <span>Flutter</span>
              </div>
              <div className="md:w-48 md:h-36 md:m-3 m-auto w-40 my-3 h-32 rounded-2xl bg-zinc-100 flex flex-col justify-center items-center ">
                <svg
                  height="40pt"
                  viewBox="0 -99 512 511"
                  width="40pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                    fill="#6ae5d3"
                  />
                  <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <g fill="#51dbca">
                    <path d="m480 281.394531h32v32h-32zm0 0" />
                    <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    <path d="m0 281.394531h32v32h-32zm0 0" />
                    <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                  </g>
                </svg>
                <span>Java</span>
              </div>
              <div className="md:w-48 md:h-36 md:m-3 m-auto w-40 my-3 h-32 rounded-2xl bg-zinc-100 flex flex-col justify-center items-center ">
                <svg
                  height="40pt"
                  viewBox="0 -99 512 511"
                  width="40pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                    fill="#6ae5d3"
                  />
                  <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <g fill="#51dbca">
                    <path d="m480 281.394531h32v32h-32zm0 0" />
                    <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    <path d="m0 281.394531h32v32h-32zm0 0" />
                    <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                  </g>
                </svg>
                <span>React Native</span>
              </div>
              <div className="md:w-48 md:h-36 md:m-3 m-auto w-40 my-3 h-32 rounded-2xl bg-zinc-100 flex flex-col justify-center items-center ">
                <svg
                  height="40pt"
                  viewBox="0 -99 512 511"
                  width="40pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                    fill="#6ae5d3"
                  />
                  <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <g fill="#51dbca">
                    <path d="m480 281.394531h32v32h-32zm0 0" />
                    <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    <path d="m0 281.394531h32v32h-32zm0 0" />
                    <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                  </g>
                </svg>
                <span>Python</span>
              </div>
              <div className="md:w-48 md:h-36 md:m-3 m-auto w-40 my-3 h-32 rounded-2xl bg-zinc-100 flex flex-col justify-center items-center ">
                <svg
                  height="40pt"
                  viewBox="0 -99 512 511"
                  width="40pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                    fill="#6ae5d3"
                  />
                  <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <g fill="#51dbca">
                    <path d="m480 281.394531h32v32h-32zm0 0" />
                    <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    <path d="m0 281.394531h32v32h-32zm0 0" />
                    <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                  </g>
                </svg>
                <span>Java</span>
              </div>
              <div className="md:w-48 md:h-36 md:m-3 m-auto w-40 my-3 h-32 rounded-2xl bg-zinc-100 flex flex-col justify-center items-center ">
                <svg
                  height="40pt"
                  viewBox="0 -99 512 511"
                  width="40pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m150.785156 84.703125-56.882812-56.894531c-6.246094-6.246094-6.246094-16.375 0-22.625 6.25-6.246094 16.378906-6.246094 22.625 0l56.878906 56.898437zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m361.214844 84.703125-22.621094-22.621094 56.878906-56.898437c6.246094-6.246094 16.375-6.246094 22.625 0 6.246094 6.25 6.246094 16.378906 0 22.625zm0 0"
                    fill="#0ac1a7"
                  />
                  <path
                    d="m432 233.394531h-352v-32c0-97.203125 78.796875-176 176-176s176 78.796875 176 176zm0 0"
                    fill="#6ae5d3"
                  />
                  <path d="m176 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <path d="m304 137.394531h32v32h-32zm0 0" fill="#fff" />
                  <g fill="#51dbca">
                    <path d="m480 281.394531h32v32h-32zm0 0" />
                    <path d="m80 281.394531h352c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-352c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                    <path d="m0 281.394531h32v32h-32zm0 0" />
                    <path d="m16 201.394531h480c8.835938 0 16 7.160157 16 16 0 8.835938-7.164062 16-16 16h-480c-8.835938 0-16-7.164062-16-16 0-8.839843 7.164062-16 16-16zm0 0" />
                  </g>
                </svg>
                <span>Swift</span>
              </div>
            </div>
          </div>

          {/* ==============Our clients praise========== */}
          <div className="text-center py-5 bg-zinc-100">
            <div className="flex justify-between items-center md:p-28 flex-wrap">
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
            <h1 className="text-4xl font-bold ">
              Our clients praise us for our great results
            </h1>
            <Carousel />
          </div>
          {/* =================contact us============= */}
          {/* <Inquiry /> */}
          <Footer />
        </>
      ) : (
        <div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Image width={1000} height={1000} src="https://assets-v2.lottiefiles.com/a/f10b0b16-1163-11ee-b83c-6f51864feb33/8tmoF5c41v.gif" alt="img"></Image>
          <h1 className="text-5xl">is under maintenance...</h1>
        </div>
      )}
    </>
  );
}
