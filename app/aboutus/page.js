import AboutUs from "@/components/AboutUs";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const Page = () => {
  return (
    <div className=" text-white">
      <div className="flex justify-evenly items-center xl:p-28 p-5 flex-wrap ">
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center  ">
            <FaBuilding className="text-[#9648F6] text-2xl" />
            <h4 className="ms-5 text-2xl text-[#9648F6]">WHO WE ARE</h4>
          </div>
          <h1 className="text-5xl font-bold my-5">
            We are a creative digital agency based in India.
          </h1>
          <p className="text-xl mt-10 text-justify lg:text-left">
            We are a team of top talent delivering enterprise solutions
            globally. We evolve with the advancement in technology because we
            believe in making our technology as your innovation. Our experts
            provide a wide range of services including app design, web
            development, digital marketing, ecommerce solutions and cloud
            development. We stay updated with the technology to build innovative
            digital products that meet client requirements across multiple
            business verticals and domains by housing some of the best
            professionals in the industry.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center items-center my-5">
          <Image
            className="rounded-3xl"
            width={500}
            height={500}
            src="/building.webp"
            alt="image"
          ></Image>
        </div>
      </div>

      <AboutUs />
      <div className="text-center py-20 p-5">
        <h1 className="text-5xl font-extrabold">
          Transparency and Ethics
        </h1>
        <div className="xl:mx-28 lg:mt-24 flex justify-between items-center  flex-wrap mt-16">
          <div className="lg:w-[30%] w-full text-left xl:h-80 h-auto px-7 pt-16 pb-8 rounded-2xl relative bg-white shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">
              Client-centric Approach
            </h3>
            <p className="my-5 text-zinc-500 text-justify">
            Our company prioritizes understanding and fulfilling the unique needs of each client.  Our commitment to client satisfaction drives innovation, transparency, and a collaborative spirit, ensuring that their success is at the forefront of our business strategy.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={40}
               
                src="/target.svg"
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="lg:w-[30%] w-full text-left xl:h-80 h-auto px-7 pt-16 pb-8 rounded-2xl relative bg-white shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">
              Service Delivered in Time
            </h3>
            <p className="my-5 text-zinc-500 text-justify">
            We understand the critical importance of meeting deadlines in the fast-paced tech landscape. Through efficient project management and a dedicated team, we guarantee timely delivery of high-quality solutions, empowering our clients to stay ahead in their endeavors.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={60}
                src={
                  "/time.svg"
                }
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="lg:w-[30%] w-full text-left xl:h-80 h-auto px-7 pt-16 pb-8 rounded-2xl relative bg-white shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">
              Effective Collaboration
            </h3>
            <p className="my-5 text-zinc-500 text-justify">
            We empower our teams to deliver innovative solutions. This collaborative approach not only enhances project outcomes but also cultivates a dynamic and supportive work culture, ensuring success in every endeavor.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={60}
                src={
                  "/united.svg"
                }
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="lg:w-[30%] w-full text-left xl:h-80 h-auto  px-7 pt-16 pb-8 rounded-2xl relative bg-white shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">Employee Benefits</h3>
            <p className="my-5 text-zinc-500 text-justify">
            We invest in our team's success and happiness. Our commitment to employee satisfaction extends beyond the workplace, promoting a healthy work-life balance and fostering a culture that values the overall growth and fulfillment of each team member.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={60}
                src={
                  "/team.svg"
                }
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="lg:w-[30%] w-full text-left xl:h-80 h-auto px-7 pt-16 pb-8 rounded-2xl relative bg-white shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">Team Work</h3>
            <p className="my-5 text-zinc-500 text-justify">
            Embracing the strengths of each team member, we foster a collaborative culture that not only drives project success but also cultivates a dynamic and cohesive work environment, propelling us to new heights in the ever-evolving tech landscape.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={60}
                src={
                  "/partnership.svg"
                }
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="lg:w-[30%] w-full text-left xl:h-80 h-auto px-7 pt-16 pb-8 rounded-2xl relative bg-white shadow-xl mb-20">
            <h3 className="text-2xl font-bold text-black">
              Quality of Service
            </h3>
            <p className="my-5 text-zinc-500 text-justify">
            Through rigorous testing, continuous improvement, we ensure the highest standards in every aspect of our service delivery. Our unwavering dedication to quality reflects in the reliability, efficiency, and innovation embedded in our solutions, forging lasting partnerships and trust with our clients.
            </p>

            <div
              style={{ top: "-40px" }}
              className="p-4 rounded-xl w-20 shadow-xl absolute bg-white"
            >
              <Image
                width={60}
                height={60}
                src="/qualitys.svg"
              
                alt="image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-28 p-5 bg-[#BDE0FF] text-black">
        <h1 className="text-2xl text-[#9648F6] cursor-pointer">CAREER</h1>
        <div className="flex justify-evenly  flex-wrap ">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-4xl font-bold  pe-10 my-5">
              Teamwork is the ability to work together toward a common vision.
            </h1>
            <Link href="/contactus">
              <button
                className="group inline-block rounded-full bg-gradient-to-r from-[#9648F6] to-[#14B4FF]  p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                
              >
                <span className="flex justify-evenly items-center rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Join Our Team
                  <FaArrowRight className="ms-3" />
                </span>
              </button>
            </Link>
          </div>
          <Image
            className="lg:w-1/2 w-full"
            width={400}
            height={400}
            src="/teamwork.svg"
            alt="image"
          ></Image>
        </div>
      </div>
    </div>
  );
};
export default Page;
