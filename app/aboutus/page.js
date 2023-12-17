import AboutUs from "@/components/AboutUs";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const Page = () => {
  return (
    <div className="bg-slate-950 text-white">
      <div className="flex justify-evenly items-center md:p-28 p-5 flex-wrap ">
        <div className="md:w-1/2 w-full">
          <div className="flex items-center  ">
            <FaBuilding />
            <h4 className="ms-5 text-xl">WHO WE ARE</h4>
          </div>
          <h1 className="text-5xl font-bold my-5">
            We are a creative digital agency based in India.
          </h1>
          <p className="text-xl mt-10">
            We are a team of top talent delivering enterprise solutions
            globally. we evolve with the advancement in technology because we
            believe in making our technology as your innovation. Our experts
            provide a wide range of services including app design, web
            development, digital marketing, ecommerce solutions and cloud
            development. We stay updated with the technology to build innovative
            digital products that meet client requirements across multiple
            business verticals and domains by housing some of the best
            professionals in the industry.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <Image
            className="rounded-3xl"
            width={500}
            height={500}
            unoptimized
            src={
              "https://img.freepik.com/free-photo/building_1127-3357.jpg?w=1800&t=st=1702843107~exp=1702843707~hmac=2a335b80c955f90dec0f736cf8e6194783c2ac29aa50b88296e8ffb96d8e5a6a"
            }
            alt="image"
          ></Image>
        </div>
      </div>

      <AboutUs />
      <div className="text-center py-20 p-5">
        <h1 className="text-3xl font-extrabold mb-12">
          Transparency and Ethics
        </h1>
        <div className="md:mx-28 md:mt-16 flex justify-between items-center  flex-wrap">
          <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">
              Client-centric Approach
            </h3>
            <p className="my-5 text-zinc-500">
              Our software house has been recognised by google for outstanding
              android application quality.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={40}
                unoptimized
                src="https://separateweb.com/demo-reevan/images/icons/target.svg"
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">
              Service Delivered in Time
            </h3>
            <p className="my-5 text-zinc-500">
              Our software house has been recognised by google for outstanding
              android application quality.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={60}
                src={
                  "https://separateweb.com/demo-reevan/images/icons/fast-time.svg"
                }
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">
              Effective Collaboration
            </h3>
            <p className="my-5 text-zinc-500">
              Our software house has been recognised by google for outstanding
              android application quality.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={60}
                src={
                  "https://separateweb.com/demo-reevan/images/icons/united.svg"
                }
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">Employee Benefits</h3>
            <p className="my-5 text-zinc-500">
              Our software house has been recognised by google for outstanding
              android application quality.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={60}
                src={
                  "https://separateweb.com/demo-reevan/images/icons/team.svg"
                }
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">Team Work</h3>
            <p className="my-5 text-zinc-500">
              Our software house has been recognised by google for outstanding
              android application quality.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={60}
                src={
                  "https://separateweb.com/demo-reevan/images/icons/partnership.svg"
                }
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="md:w-[30%] w-full text-left  px-7 pt-16 pb-8 rounded-2xl relative bg-zinc-100 shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">
              Quality of Service
            </h3>
            <p className="my-5 text-zinc-500">
              Our software house has been recognised by google for outstanding
              android application quality.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={60}
                src={
                  "https://separateweb.com/demo-reevan/images/icons/qualitys.svg"
                }
                alt="image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-28 p-5 bg-[#BDE0FF] text-black">
        <h1 className="text-2xl">CAREER</h1>
        <div className="flex justify-evenly  flex-wrap ">
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl font-bold  pe-10 my-5">
              Teamwork is the ability to work together toward a common vision.
            </h1>
            <Link href="/contactus">
              <button
                class="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                
              >
                <span class="flex justify-evenly items-center rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Join Our Team
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
          <Image
            unoptimized
            className="md:w-1/2 w-full"
            width={400}
            height={400}
            src="https://separateweb.com/demo-reevan/images/cta/teamwork.svg"
            alt="image"
          ></Image>
        </div>
      </div>
    </div>
  );
};
export default Page;
