import Image from "next/image";
import Link from "next/link";
import HeroHomeImage from "../public/HeroHomeImage.webp";
import { GiDiamondTrophy, GiTeamIdea } from "react-icons/gi";
import { GrDeploy } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

const HeroHome = () => {
  return (
    <div className=" md:flex block justify-between items-center">
      <div className="pl-8 justify-center">
        <h1 className="font-raleway font-bold text-6xl">
          Welcome to Virtualify
        </h1>
        <h2 className="font-zcool text-3xl  text-[#66D898]">
          Where Innovation Meets Imagination!
        </h2>
        <p className="font-raleway text-lg mt-8 text-[#14B4FF]">
          We don't just develop apps; we craft digital experiences that
          transcend boundaries and redefine possibilities.{" "}
        </p>
        <div className="flex justify-center mt-8">
          <div className="flex bg-purple-200 text-black font-inter font-bold text-md px-4 py-2 rounded-md mt-8 hover:bg-[#14B4FF] gap-2 justify-center items-center">
            <GiDiamondTrophy className="text-4xl" />
            11+ Happy Clients
          </div>
          <div className="flex bg-blue-200 text-black font-inter font-bold text-md px-4 py-2 rounded-md mt-8 ml-4 hover:bg-[#9648F6] gap-2 justify-center items-center">
            <GrDeploy className="text-4xl" />
            20+ Projects
          </div>
          <div className="flex bg-green-200 text-black font-inter font-bold text-md px-4 py-2 rounded-md mt-8 ml-4 hover:bg-[#14B4FF] gap-2 justify-center items-center">
            <GiTeamIdea className="text-4xl" />
            5+ Team Members
          </div>
        </div>
        <div className="flex justify-center items-center mt-12">
          <div className="flex bg-[#66D898] text-black font-inter font-bold text-md px-4 py-2 rounded-md mt-8 ml-4 gap-2 justify-center items-center">
            Talk to Our Expert! &nbsp; &rarr;
          </div>
          <FaUserCircle className="text-6xl mt-8 ml-4" />
          <div className="mt-8 ml-4">
            <span className="text-[#14B4FF] font-bold text-lg">
              Bhagwat Singh Chauhan
            </span>
            <br />
            <span className="text-[#66D898] text-sm"> Managing Director</span>
          </div>
        </div>
      </div>
      <Image
        src={HeroHomeImage}
        priority
        alt="Welcome to Virtualify"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};

export default HeroHome;
