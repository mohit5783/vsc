import Image from "next/image";
import Carousel from "../components/Carousel";
import { MdEngineering, MdCelebration } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { SiSnapcraft } from "react-icons/si";
import { FaHandshake } from "react-icons/fa";
import { TbNeedleThread } from "react-icons/tb";

import HeroHome from "@/components/HeroHome";
import Skills from "@/components/Skills";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurWork from "@/components/OurWork";
import Narration from "@/components/Narration";

export default function Home() {
  return (
    <>
      <div>
        <HeroHome />
        <div className="lg:px-28 px-5 lg:pb-20 lg:pt-12 flex flex-wrap justify-between items-center  text-white">
          <div className="w-full text-center lg:px-24">
            <h1 className="lg:text-6xl text-4xl font-bold my-10">
              Top Mobile App Development Company in India
            </h1>

            <p className="lg:text-2xl text-md text-[#00E2C2] font-thin ">
              Welcome to our Vitualify&apos;s digital playground, where
              innovation meets expertise! We&apos;re a passionate team of web
              wizards dedicated to optimize your ideas into stunning realities.
              From sleek designs to seamless functionality, we breathe life into
              your online presence. Whether you&apos;re a startup, an
              established enterprise, or somewhere in between, our tailored
              solutions cater to your every digital need. Join us on this
              transformative journey as we build, optimize, and elevate your web
              experience, one pixel at a time.
            </p>
            <div className="flex items-center lg:justify-between justify-center mb-9 lg:flex-nowrap flex-wrap my-4">
              <div className="border border-[#00E2C2] p-2 flex items-center justify-evenly rounded-full lg:w-[30%] w-[90%]">
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
              <div className="border border-[#00E2C2] p-2 flex items-center justify-evenly  rounded-full  lg:w-[30%] w-[90%] my-5">
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

                <p>50+ Featured App</p>
              </div>
              <div className="border border-[#00E2C2] p-2 flex items-center justify-evenly rounded-full lg:w-[30%] w-[90%]">
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

                <p>15+ App Published</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center lg:-mt-36 -mt-16 ">
            <Image
              width={900}
              height={300}
              src="/mobile.webp"
              alt="image"
            ></Image>
          </div>
        </div>
        
        <Narration/>

        <OurWork />

        <Skills />

        <WhyChooseUs />

        <Carousel />
      </div>
    </>
  );
}
