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
        <HeroHome />
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
                <div className="vc items-center flex-col ">
                  <p className="lg:text-5xl text-md font-bold">20+</p>
                  <p className="lg:text-2xl text-xs text-center">
                    Expert Members
                  </p>
                </div>
                <div className="vc items-center flex-col">
                  <p className="lg:text-5xl text-md font-bold">35+</p>
                  <p className="lg:text-2xl text-xs text-center">
                    Marketing Tactics
                  </p>
                </div>
                <div className="vc items-center flex-col">
                  <p className="lg:text-5xl text-md font-bold">3yr+</p>
                  <p className="lg:text-2xl text-xs text-center">
                    Industry Experience
                  </p>
                </div>
                <div className="vc items-center flex-col">
                  <p className="lg:text-5xl text-md font-bold">99%</p>
                  <p className="lg:text-2xl text-xs text-center">
                    Client Satisfaction
                  </p>
                </div>
                <div className="vc items-center flex-col">
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
