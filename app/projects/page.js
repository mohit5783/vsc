"use client";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const Page = () => {
  return (
    <div className=" text-white">
      <div className="">
        <div className="bg-black">
          <Image
            className="w-full"
            width={1200}
            height={200}
            src="/coming.webp"
            alt="image"
          />
          <div className="mdw-1/2 w-full mx-auto text-center ">
            <h1 className="">
              <span className="lg:text-5xl text-2xl font-bold">
                JourneyCrafter
              </span>{" "}
              <br />
              <span className="italic lg:text-4xl text-xl">
                {" "}
                - Crafting travel experiences.
              </span>
            </h1>
            <p className="py-12 lg:px-48">
              Get ready to experience a new dimension of digital engagement. Our
              upcoming product will combine the magic of NFTs, the power of
              blockchain, and the excitement of immersive 3D experiences. Stay
              tuned for an innovation that will redefine your digital journey.
            </p>
          </div>
        </div>
        <div className="lg:px-64 p-5 border-b bg-black">
          <h1 className="text-center text-5xl my-5">A Glimpse into Tomorrow</h1>
          <div className="w-3/4 ">
            <h2 className="text-2xl underline">⁠User Input:</h2>
            <ul>
              <li>
                Collect destination location and the number of days the user
                plans to spend there.
              </li>
              <li>Obtain the number of travelers in the group.</li>
            </ul>
          </div>
          <div className="text-end w-3/4 my-10 ms-auto">
            <h2 className="text-2xl underline">
              ⁠Traveler Group Classification:
            </h2>
            <ul className="">
              <li>
                Determine the group type: Solo, Couple, Family (with the number
                of children), Group of Families, Only Male Friends, Only Female
                Friends.
              </li>
            </ul>
          </div>
          <div className="w-3/4 ">
            <h2 className="text-2xl underline"> ⁠Source Location:</h2>
            <ul>
              <li>
                Gather information about the user&apos;s starting location for
                trip planning.
              </li>
            </ul>
          </div>
          <div className="text-end w-3/4 my-5 ms-auto">
            <h2 className="text-2xl underline">Accommodations:</h2>
            <ul className="">
              <li>
                Assist users in finding suitable hotels or accommodations at the
                destination.{" "}
              </li>
              <li>
                {" "}
                Suggest multiple hotels for extended stays or wide-area
                exploration.
              </li>
            </ul>
          </div>
          <div className="w-3/4 ">
            <h2 className="text-2xl underline"> ⁠Source Location:</h2>
            <ul>
              <li>
                Gather information about the user&apos;s starting location for
                trip planning.
              </li>
            </ul>
          </div>
          <div className="text-end w-3/4  my-5 ms-auto">
            <h2 className="text-2xl underline">Accommodations:</h2>
            <ul className="">
              <li>
                Assist users in finding suitable hotels or accommodations at the
                destination.{" "}
              </li>
              <li>
                {" "}
                Suggest multiple hotels for extended stays or wide-area
                exploration.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-20 mx-5">
        <h1 className="text-center text-5xl font-bold">Creative work</h1>
        <p className="text-center">
          We have completed thousands of projects, some of them showing
          important projects here.
        </p>
        <div className="flex justify-evenly p-5  lg:p-20 lg:px-32 flex-wrap">
          <div ata-aos="zoom-in-right" className=" lg:w-1/2 w-full ">
            <h1 className="text-2xl text-[#9648F6]">iOS, Android, Swift</h1>
            <h1 className="text-4xl my-5 font-bold">
              Furniture ios app kit developed in swift framework
            </h1>
            <p className="my-5 flex  items-center">
              Vist <FaLongArrowAltRight />
            </p>

            <Image
              className="bg-white"
              unoptimized
              width={200}
              height={200}
              src="https://separateweb.com/demo-reevan/images/brand-logo/customer-logo-2.png"
              alt="image"
            />
            <p className="text-3xl font-bold">ACB Ltd Pvt </p>
          </div>
          <div
            ata-aos="zoom-in-right"
            className="lg:w-1/2 w-full  overflow-hidden hover:scale-95 hover:duration-500 rounded-3xl transition-all"
          >
            <Image
              unoptimized
              className="hover:scale-110 transition hover:duration-500"
              src={
                "https://separateweb.com/demo-reevan/images/portfolio/portfolio-2.jpg"
              }
              width={950}
              height={500}
              alt="image"
            ></Image>
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap-reverse  p-5 lg:p-20 lg:px-32">
          <div className=" lg:w-1/2 w-full overflow-hidden hover:scale-95 hover:duration-500 rounded-3xl transition-all">
            <Image
              unoptimized
              className="hover:scale-110 transition hover:duration-500"
              src={
                "https://separateweb.com/demo-reevan/images/portfolio/portfolio-1.jpg"
              }
              width={950}
              height={500}
              alt="image"
            ></Image>
          </div>
          <div className=" lg:w-1/2 w-full text-end">
            <h1 className="text-2xl text-[#9648F6]">iOS, Android, Swift</h1>
            <h1 className="text-4xl my-5 font-bold">
              Furniture ios app kit developed in swift framework
            </h1>
            <p className="my-5 flex items-center justify-end">
              Vist <FaLongArrowAltRight />
            </p>
            <div className="flex justify-end">
              <Image
                unoptimized
                width={200}
                height={200}
                className=" bg-white"
                src="https://separateweb.com/demo-reevan/images/brand-logo/customer-logo-2.png"
                alt="image"
              />
            </div>
            <p className="text-xl font-bold">ACB Ltd Pvt </p>
          </div>
        </div>
        <div className="flex justify-evenly p-5  lg:p-20 lg:px-32 flex-wrap">
          <div className=" lg:w-1/2 w-full ">
            <h1 className="text-2xl text-[#9648F6]">iOS, Android, Swift</h1>
            <h1 className="text-4xl my-5 font-bold">
              Furniture ios app kit developed in swift framework
            </h1>
            <p className="my-5 flex  items-center">
              Vist <FaLongArrowAltRight />
            </p>

            <Image
              className="bg-white"
              unoptimized
              width={200}
              height={200}
              src="https://separateweb.com/demo-reevan/images/brand-logo/customer-logo-2.png"
              alt="image"
            />
            <p className="text-3xl font-bold">ACB Ltd Pvt </p>
          </div>
          <div className="lg:w-1/2 w-full  overflow-hidden hover:scale-95 hover:duration-500 rounded-3xl transition-all">
            <Image
              unoptimized
              className="hover:scale-110 transition hover:duration-500"
              src={
                "https://separateweb.com/demo-reevan/images/portfolio/portfolio-4.jpg"
              }
              width={950}
              height={500}
              alt="image"
            ></Image>
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap-reverse  p-5 lg:p-20 lg:px-32">
          <div className=" lg:w-1/2 w-full overflow-hidden hover:scale-95 hover:duration-500 rounded-3xl transition-all">
            <Image
              unoptimized
              className="hover:scale-110 transition hover:duration-500"
              src={
                "https://separateweb.com/demo-reevan/images/portfolio/portfolio-3.jpg"
              }
              width={950}
              height={500}
              alt="image"
            ></Image>
          </div>
          <div className=" lg:w-1/2 w-full text-end">
            <h1 className="text-2xl text-[#9648F6]">iOS, Android, Swift</h1>
            <h1 className="text-4xl my-5 font-bold">
              Furniture ios app kit developed in swift framework
            </h1>
            <p className="my-5 flex items-center justify-end">
              Vist <FaLongArrowAltRight />
            </p>
            <div className="flex justify-end">
              <Image
                unoptimized
                width={200}
                height={200}
                className=" bg-white"
                src="https://separateweb.com/demo-reevan/images/brand-logo/customer-logo-2.png"
                alt="image"
              />
            </div>
            <p className="text-xl font-bold">ACB Ltd Pvt </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
