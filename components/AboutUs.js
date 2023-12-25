"use client";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa";
import { useState } from "react";

const AboutUs = () => {
  const [screen, setscreen] = useState(1);
  return (
    <>
      <div className="flex  justify-evenly  xl:p-28 p-5 bg-[#cfe8fe] text-black flex-wrap">
        <div className="lg:w-1/4 w-full lg:block flex flex-wrap justify-evenly">
          <div
            onClick={() => setscreen(1)}
            className={`flex ${
              screen === 1 ? "bg-[#b1d9fc]" : "bg-[#dfeffc]"
            } justify-evenly items-center shadow p-6 rounded-3xl bg-[#b1d9fc]  md:mb-3`}
          >
            <BsRocketTakeoffFill
              className={`text-2xl mx-5 ${
                screen === 1 ? "text-[#9648F6]" : "text-black"
              } `}
            />
            <div
              className={`text-2xl lg:w-60 w-56 ${
                screen === 1 ? "text-[#9648F6]" : "text-black"
              }`}
            >
              Our Mission
            </div>
          </div>
          <div
            onClick={() => setscreen(2)}
            className={`flex ${
              screen === 2 ? "bg-[#b1d9fc]" : "bg-[#dfeffc]"
            } justify-evenly items-center shadow p-6 rounded-3xl bg-[#b1d9fc] lg:my-3 md:my-0 my-3 md:mb-3`}
          >
            <MdRemoveRedEye
              className={`text-3xl mx-5 ${
                screen === 2 ? "text-[#9648F6]" : "text-black"
              } `}
            />
            <div
              className={`text-2xl lg:w-60 w-56 ${
                screen === 2 ? "text-[#9648F6]" : "text-black"
              }`}
            >
              Our Vision
            </div>
          </div>
          <div
            onClick={() => setscreen(3)}
            className={`flex ${
              screen === 3 ? "bg-[#b1d9fc]" : "bg-[#dfeffc]"
            } justify-evenly items-center shadow p-6 rounded-3xl bg-[#b1d9fc]  `}
          >
            <FaHandsHelping
              className={`text-3xl mx-5 ${
                screen === 3 ? "text-[#9648F6]" : "text-black"
              } `}
            />
            <div
              className={`text-2xl lg:w-60 w-56  ${
                screen === 3 ? "text-[#9648F6]" : "text-black"
              }`}
            >
              Our Commitment
            </div>
          </div>
          <div
            onClick={() => setscreen(4)}
            className={`flex ${
              screen === 4 ? "bg-[#b1d9fc]" : "bg-[#dfeffc]"
            } justify-evenly items-center shadow p-6 rounded-3xl bg-[#b1d9fc] lg:my-3 md:my-0 my-3 `}
          >
            <FaHandPeace
              className={`text-2xl mx-5 ${
                screen === 4 ? "text-[#9648F6]" : "text-black"
              } `}
            />
            <div
              className={`text-2xl lg:w-60 w-56 ${
                screen === 4 ? "text-[#9648F6]" : "text-black"
              }`}
            >
              Core Values
            </div>
          </div>
        </div>
        {screen === 1 ? (
          <div className="lg:w-3/4 lg:full  lg:px-24 my-8 lg:my-0">
            <h1 className="text-4xl font-bold mb-5"> Our Mission</h1>
            <p className="text-xl text-justify lg:text-left">
              Virtualify is dedicated to revolutionizing the digital landscape
              by providing innovative and cutting-edge IT solutions. Our mission
              is to empower businesses and individuals with transformative
              virtual technologies that enhance efficiency, connectivity, and
              overall productivity. Through a commitment to excellence, we aim
              to be a driving force behind the evolution of virtual experiences.
            </p>
          </div>
        ) : null}
        {screen === 2 ? (
          <div className="lg:w-3/4 lg:full  lg:px-24 my-8 lg:my-0">
            <h1 className="text-4xl font-bold mb-5"> Our Vision</h1>
            <p className="text-xl text-justify lg:text-left">
              At Virtualify, we envision a future where the virtual realm
              seamlessly integrates with everyday life, creating limitless
              possibilities for collaboration, communication, and growth. Our
              vision is to be a global leader in IT, recognized for pioneering
              advancements that redefine the way people interact with technology
              and each other.
            </p>
          </div>
        ) : null}
        {screen === 3 ? (
          <div className="lg:w-3/4 lg:full  lg:px-24 my-8 lg:my-0">
            <h1 className="text-4xl font-bold mb-5"> Our Commitment</h1>
            <p className="text-xl text-justify lg:text-left">
              Our commitment is rooted in delivering unparalleled value to our
              clients, partners, and stakeholders. Virtualify is dedicated to
              maintaining the highest standards of quality, reliability, and
              security in all our products and services. We are committed to
              fostering long-term relationships built on trust, transparency,
              and mutual success.
            </p>
          </div>
        ) : null}

        {screen === 4 ? (
          <div className="lg:w-3/4 lg:full  lg:px-24 my-8 lg:my-0">
            <h1 className="text-4xl font-bold mb-5"> Our Values</h1>
            <ul className="list-disc text-xl text-justify lg:text-left">
              <li>
                <span className="font-bold">Innovation:</span> We embrace
                creativity and encourage a culture of constant innovation,
                pushing the boundaries of what is possible in the virtual realm.
              </li>
              <li>
                <span className="font-bold">Integrity:</span> We conduct
                business with the utmost integrity, upholding ethical principles
                in all our interactions and decisions.
              </li>
              <li>
                <span className="font-bold">Customer-Centricity:</span> Our
                focus is on understanding and exceeding customer expectations.
                We prioritize customer satisfaction and success in every aspect
                of our business.
              </li>
              <li>
                <span className="font-bold">Collaboration:</span> We believe in
                the power of collaboration and teamwork. By working together, we
                can achieve more and create solutions that have a lasting
                impact.
              </li>
              <li>
                <span className="font-bold">Adaptability:</span> In the
                ever-evolving landscape of technology, we remain adaptable and
                agile, ready to embrace change and respond to emerging
                opportunities and challenges.
              </li>
              <li>
                <span className="font-bold">Quality:</span> We are committed to
                delivering products and services of the highest quality,
                ensuring reliability, security, and performance.
              </li>
              <li>
                <span className="font-bold">Sustainability:</span> We recognize
                our responsibility to contribute to a sustainable future.
                Virtualify is committed to environmentally conscious practices
                and social responsibility.
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default AboutUs;