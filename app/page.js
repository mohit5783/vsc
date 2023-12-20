import Image from "next/image";
import Carousel from "../components/Carousel";
import { MdEngineering, MdCelebration } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { SiSnapcraft } from "react-icons/si";
import { FaHandshake } from "react-icons/fa";
import { TbNeedleThread } from "react-icons/tb";

import HeroHome from "@/components/HeroHome";

export default function Home() {
  return (
    <>
      <div>
<<<<<<< HEAD
        <HeroHome />
=======
        <div className="lg:px-28 px-5 lg:pb-20 lg:pt-12 flex flex-wrap justify-between items-center bg-slate-950 text-white">
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
>>>>>>> fe1b8d4 (contact page updated with links)
        {/* ===========Award winning development=========== */}
        <div className="bg-slate-950  py-16 px-5">
          <div className="w-full text-white">
            <div className="w-full lg:w-3/4 text-center m-auto ">
              <h1 className="lg:text-5xl text-4xl font-bold">
                Building Strong Narrative
              </h1>

              <p className="mt-6 lg:text-xl text-md">
                Our dedicated team of experts is committed to understanding your
                unique needs and objectives, working closely with you to develop
                and execute strategies that propel your brand forward.
              </p>
            </div>
            <div className="flex justify-center items-center my-5 flex-col ">
              <Image
                width={1300}
                height={400}
                src="/team.webp"
                className="rounded-t-3xl"
                alt="team image"
              ></Image>
              <div className=" grid grid-cols-5 divide-x my-2">
                <div className="flex items-center flex-col ">
                  <p className="lg:text-5xl text-md font-bold">20+</p>
                  <p className="lg:text-2xl text-xs text-center">
                    Expert Members
                  </p>
                </div>
                <div className="flex items-center flex-col">
                  <p className="lg:text-5xl text-md font-bold">35+</p>
                  <p className="lg:text-2xl text-xs text-center">
                    Marketing Tactics
                  </p>
                </div>
                <div className="flex items-center flex-col">
                  <p className="lg:text-5xl text-md font-bold">3yr+</p>
                  <p className="lg:text-2xl text-xs text-center">
                    Industry Experience
                  </p>
                </div>
                <div className="flex items-center flex-col">
                  <p className="lg:text-5xl text-md font-bold">99%</p>
                  <p className="lg:text-2xl text-xs text-center">
                    Client Satisfaction
                  </p>
                </div>
                <div className="flex items-center flex-col">
                  <p className="lg:text-5xl text-md font-bold">36+</p>
                  <p className="lg:text-2xl text-xs text-center">
                    Global Companies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================what we do====== */}
        <div className="lg:p-16 lg:px-28 bg-[#230B46] px-5 py-10">
          <h1 className="lg:text-5xl text-4xl text-[#5179F5]">WHAT WE DO</h1>
          <p className="lg:text-xl text-md  text-justify lg:my-10 my-5 text-white">
            Virtualify is a forward-thinking IT company specializing in
            comprehensive technological solutions. From designing user-friendly
            interfaces to implementing robust network infrastructures, we cater
            to diverse needs across industries. Our expertise encompasses
            software development, IT consulting, cybersecurity, and managed
            services. We thrive on transforming complex challenges into
            streamlined, efficient systems that empower businesses to thrive in
            the digital age. At ABC Tech Services, innovation meets reliability,
            ensuring our clients stay ahead in an ever-evolving technological
            landscape.
          </p>
          <div className="flex items-center justify-between flex-wrap">
<<<<<<< HEAD
            <Image
              className=""
              width={600}
              height={350}
              src="/2.webp"
              alt="image"
            />
            <div>
              <p className="lg:text-6xl text-white">App Development</p>
              <p className="lg:text-7xl text-[#9648F6] my-3">Web Development</p>
              <p className="lg:text-6xl text-white">Cloud Services</p>
=======
            <Image className="lg:w-auto w-full" width={600} height={350} src="/2.webp" alt="image" />
            <div className="text-center w-full lg:w-auto">
              <p className="lg:text-6xl text-3xl text text-white">App Development</p>
              <p className="lg:text-7xl text-4xl text-[#9648F6] my-3">Web Development</p>
              <p className="lg:text-6xl text-3xl text-white">Cloud Services</p>
>>>>>>> fe1b8d4 (contact page updated with links)
            </div>
          </div>
        </div>
        {/* =======Technology we work with======== */}
        <div className="text-center  lg:py-16 p-5 bg-slate-950  text-white">
          <h1 className="text-5xl font-bold mb-7">Skills</h1>
          <p className="text-xl lg:px-56">
            Each skill is a brushstroke contributing to the masterpiece of your
            online presence. Let us weave innovation, aesthetics, and leadership
            into the fabric of your digital journey.
          </p>
          <div className="bg-[#D8F7F2] lg:mx-40 lg:py-20 py-5 lg:rounded-[100px] rounded-3xl my-12">
            <span className="bg-gradient-to-r from-[#9648F6] via-[#14B4FF] to-[#66D898] lg:text-5xl text-3xl ms-2 bg-clip-text text-transparent font-bold">
              TECHNOLOGIES WE WORK WITH
            </span>
            <div className="flex justify-center flex-wrap items-center mt-6">
              <div className="lg:w-48 lg:h-36 w-full lg:mx-2  h-32 my-3  flex justify-center items-center">
                <Image
                  width={100}
                  height={100}
                  className="w-20"
                  src="/android.svg"
                  alt="Android"
                />
                <span className="text-3xl font-bold text-black mx-2">
                  Android
                </span>
              </div>
              <div className="lg:w-48 lg:h-36  lg:mx-2 w-full h-32 my-3 flex justify-center items-center ">
                <Image
                  width={100}
                  height={100}
                  className="w-20"
                  src="/flutter.svg"
                  alt="flutter"
                />
                <span className="text-3xl font-bold text-black mx-2">
                  flutter
                </span>
              </div>
              <div className="lg:w-48 lg:h-36  lg:mx-2 w-full h-32 flex justify-center items-center ">
                <Image
                  width={100}
                  height={100}
                  className="w-20"
                  src="/apple.svg"
                  alt="ios"
                />
                <span className="text-3xl font-bold text-black mx-2">ios</span>
              </div>
              <div className="lg:w-48 lg:h-36  lg:mx-2 w-full my-3 h-32 flex justify-center items-center ">
                <Image
                  width={100}
                  height={100}
                  className="w-20"
                  src="/java.svg"
                  alt="JAVA"
                />
                <span className="text-3xl font-bold text-black mx-2">JAVA</span>
              </div>
              <div className="lg:w-48 lg:h-36  lg:mx-2 w-full my-3 h-32 flex justify-center items-center ">
                <Image
                  width={100}
                  height={100}
                  className="w-20"
                  src="/python.svg"
                  alt="Python"
                />
                <span className="text-3xl font-bold text-black mx-2">
                  Python
                </span>
              </div>
              <div className="lg:w-48 lg:h-36  lg:mx-2 w-full my-3 h-32 flex justify-center items-center ">
                <Image
                  width={100}
                  height={100}
                  className="w-20"
                  src="/react.svg"
                  alt="React Native"
                />
                <span className="text-3xl font-bold text-black mx-2">
                  React Native
                </span>
              </div>
              <div className="lg:w-48 lg:h-36  lg:mx-2 w-full my-3 h-32 flex justify-center items-center ">
                <Image
                  width={100}
                  height={100}
                  className="w-20"
                  src="/swift.svg"
                  alt="swift"
                />
                <span className="text-3xl font-bold text-black mx-2">
                  Swift
                </span>
              </div>
              <div className="lg:w-48 lg:h-36  lg:mx-2 w-full my-3 h-32 flex justify-center items-center ">
                <Image
                  width={100}
                  height={100}
                  className="w-20"
                  src="/pwa.svg"
                  alt="PWA"
                />
                <span className="text-3xl font-bold text-black mx-2">PWA</span>
              </div>
            </div>
          </div>
        </div>
        {/* ====================why us==================== */}
        <div className="lg:px-20 py-10 bg-slate-950 text-white px-5">
          <h1 className="text-5xl font-bold ">Why Choose Virtualify?</h1>
          <div className="flex justify-between items-center my-16 flex-wrap">
            <div className="lg:w-[29%] w-[90%] border rounded-3xl p-4 mb-12 mx-auto">
              <div className="flex items-center mb-3">
                <div className="text-2xl">
                  <MdEngineering
                    className="text-yellow-400 text-6xl
                "
                  />
                </div>
                <h2 className="text-xl ms-2">
                  Pioneers in Emerging Technologies:
                </h2>
              </div>
              <p className="text-md text-justify">
                Dive into the future with Virtualify, where we are at the
                forefront of the latest technological revolutions. From IoT to
                Web3.0, NFTs, and beyond, we embrace innovation to turn your
                ideas into reality.
              </p>
            </div>
            <div className="lg:w-[29%] w-[90%] border rounded-3xl p-4 mb-12 mx-auto">
              <div className="flex items-center mb-3">
                <div className="text-2xl">
                  <ImMobile
                    className="text-blue-500 text-6xl
                "
                  />
                </div>
                <h2 className="text-xl ms-2">
                  Seamless Mobile App Development:{" "}
                </h2>
              </div>
              <p className="text-md text-justify">
                Immerse your audience in captivating user experiences with our
                world-class mobile app development services. Our team of skilled
                developers and designers ensures that your app not only meets
                but exceeds industry standards.
              </p>
            </div>
            <div className="lg:w-[29%] w-[90%] border rounded-3xl p-4 mb-12 mx-auto">
              <div className="flex items-center mb-3">
                <div className="text-2xl">
                  <SiSnapcraft
                    className="text-green-400 text-6xl
                "
                  />
                </div>
                <h2 className="text-xl ms-2">
                  Crafting Tomorrow&apos;s Solutions Today:
                </h2>
              </div>
              <p className="text-md text-justify">
                At Virtualify, we don&apos;t just follow trends; we set them.
                Our commitment to staying abreast of the latest technological
                trends ensures that your project is not just current but
                future-proof.
              </p>
            </div>
            <div className="lg:w-[29%] w-[90%] border rounded-3xl p-4 mb-12 mx-auto">
              <div className="flex items-center mb-3">
                <div className="text-2xl">
                  <TbNeedleThread
                    className="text-pink-400 text-6xl
                "
                  />
                </div>
                <h2 className="text-xl ms-2">
                  Tailored Solutions for Every Need:
                </h2>
              </div>
              <p className="text-md text-justify">
                Whether you&apos;re a startup looking to make your mark or an
                established enterprise seeking digital transformation,
                Virtualify has the expertise to tailor solutions that align with
                your unique requirements.
              </p>
            </div>
            <div className="lg:w-[29%] w-[90%] border rounded-3xl p-4 mb-12 mx-auto">
              <div className="flex items-center mb-3">
                <div className="text-2xl">
                  <FaHandshake
                    className="text-orange-400 text-6xl
                "
                  />
                </div>
                <h2 className="text-xl ms-2">Collaborative Partnership:</h2>
              </div>
              <p className="text-md text-justify">
                Your success is our success. Virtualify values collaborative
                partnerships, working hand-in-hand with you to bring your vision
                to life. From ideation to deployment, we are committed to your
                project&apos;s success.
              </p>
            </div>
            <div className="lg:w-[29%] w-[90%] border rounded-3xl p-4 mb-12 mx-auto">
              <div className="flex items-center mb-3">
                <div className="text-2xl">
                  <MdCelebration
                    className="text-red-500 text-6xl
                "
                  />
                </div>
                <h2 className="text-xl ms-2">
                  Celebrating three Year of Innovation:
                </h2>
              </div>
              <p className="text-md text-justify">
                It&apos;s been an incredible journey, and as we mark our first
                anniversary, we express gratitude to our clients, partners, and
                our dedicated team for being a part of this remarkable
                adventure.
              </p>
            </div>
          </div>
        </div>
        {/* ==============Our clients praise========== */}
        <div className="text-center  bg-slate-950 text-white lg:py-16 p-5">
          <h1 className="text-5xl font-bold ">
            Our clients praise us for our great results
          </h1>
          <div className="">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
