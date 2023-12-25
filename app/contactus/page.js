"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow,FaLinkedin } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";

const Page = () => {
  return (
    <>
      <div className="w-full flex justify-evenly flex-wrap items-center lg:px-36 p-5  text-white">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center text-[#66D898]">
            <MdHeadsetMic className="text-3xl me-3" />
            <h4 className="text-2xl">CONTACT US</h4>
          </div>
          <h1 className="text-5xl font-bold my-8">
            Get in Touch with Tech Excellence: Reach Out to Our IT Experts
            Today!
          </h1>
        </div>
        <Image
          className="w-full lg:w-1/2"
          width={650}
          height={400}
          src="/contactus.svg"
          alt="image"
        ></Image>
      </div>
      <div className=" text-white p-5  ">
        <div>
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-evenly  ">
            <div className="w-full lg:w-1/2 flex flex-col lg:items-start items-center">
              <h4 className="text-[#66D898] text-2xl">LET&apos;S TALK</h4>
              <h1 className="text-5xl font-bold my-8">
                Good talks make good projects
              </h1>
              <p>
                We would be happy to hear from you, Please Call us or mail us
                your requirements.
              </p>

              <Image src="/brain.webp" width={600} height={400} alt="image" />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center item-center flex-col   lg:px-16">
              <div className="flex flex-col lg:items-start items-center">
                <h1 className="text-4xl font-bold ">Get in touch</h1>
                <div className=" flex items-center mt-3">
                  <div>
                    <FaPhoneAlt className="text-xl me-3" />
                  </div>
                  <p className="text-xl underline">+91 9826057445</p>
                </div>
                <div className=" flex items-center mt-3">
                  <div>
                    <FaWhatsapp className="text-2xl me-3" />
                  </div>
                  <p className="text-xl underline">+91 9826065894</p>
                </div>
                <div className=" flex items-center mt-3">
                  <div>
                    <MdEmail className="text-2xl me-3" />
                  </div>
                  <p className="text-xl underline">
                    virtualifyme2023@gmail.com
                  </p>
                </div>
              </div>
              <div className="text-center flex flex-col lg:items-start  items-center my-10">
                <h1 className="text-4xl font-bold">Come meet us</h1>
                <div className=" flex mt-3">
                  <div>
                    <FaLocationDot className="text-2xl" />
                  </div>
                  <p className="text-xl underline">
                    103, Maharana Pratap Colony, Harda MP 461 331
                  </p>
                </div>
                <div className=" flex justify-start items-center my-3 text-center">
                  <div>
                    <FaLocationArrow className="text-2xl me-3" />
                  </div>
                  <p className="text-xl underline text-center">
                    Get Directions
                  </p>
                </div>
              </div>
              <div className=" flex flex-col lg:items-start  items-center my-10">
                <h1 className="text-4xl font-bold ">Follow us</h1>
                <div className=" flex items-center mt-3">
                  <ul className=" flex gap-6 justify-center lg:justify-start">
                    <li>
                      <Link
                        href="https://www.facebook.com/profile.php?id=61554813479212"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">Facebook</span>

                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://www.instagram.com/virtualifysoftwareconsultancy/"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">Instagram</span>

                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://twitter.com/vscsocialhandle"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">Twitter</span>

                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/virtualify-software-consultancy-78b7242a5/"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">Linkedin</span>

                        <FaLinkedin className="text-2xl"/>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">GitHub</span>

                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </li>

                 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:px-24 py-16">
          <h1 className="text-5xl text-center font-bold">
            {" "}
            We&apos; re Here to Help{" "}
          </h1>
          <p className="text-center mt-5">
            At Virtualify, we're more than technology – we&apos;re here to help
            you navigate the future with confidence.
          </p>
          <div className="flex justify-evenly items-center flex-wrap my-10">
            <div className="lg:w-96 lg:h-96 w-full h-auto  border rounded-2xl p-6 my-5">
              <Image
                width={100}
                height={100}
                src={
                  "https://separateweb.com/demo-reevan/images/icons/to-do-list.svg"
                }
                alt="image"
              ></Image>
              <h4 className="text-2xl font-bold text-[#66D898]">
                Communicate Your Requirements
              </h4>
              <p className="text-justify">
                We value your unique needs. Communicate your requirements, and
                we'll transform your vision into tailored IT solutions. Our team
                is ready to listen, understand, and collaborate, ensuring that
                your specific goals drive the design and delivery of technology
                solutions that exceed expectations. Let's turn your requirements
                into reality.
              </p>
            </div>
            <div className="lg:w-96 lg:h-96 w-full h-auto border rounded-2xl p-6 my-5">
              <Image
                width={100}
                height={100}
                src={
                  "https://separateweb.com/demo-reevan/images/icons/policy.svg"
                }
                alt="image"
              ></Image>
              <h4 className="text-2xl font-bold text-[#66D898]">
                Understanding the Requirement
              </h4>
              <p className="text-justify">
                we recognize the paramount importance of understanding your
                requirements. Our process begins with in-depth consultations to
                grasp the nuances of your goals, challenges, and aspirations.
                Through active listening and collaboration, we ensure paving the
                way for customized IT solutions that precisely align with your
                needs.
              </p>
            </div>
            <div className="lg:w-96 lg:h-96 w-full h-auto border rounded-2xl p-6  my-5">
              <Image
                width={100}
                height={100}
                src={
                  "https://separateweb.com/demo-reevan/images/icons/contract.svg"
                }
                alt="image"
              ></Image>
              <h4 className="text-2xl font-bold text-[#66D898]">
                Respecting the Client Needs
              </h4>
              <p className="text-justify">
                We uphold a fundamental principle: respecting our clients'
                needs. We recognize that every client is unique, and we approach
                each project with a deep understanding .Our commitment to
                respect goes beyond delivering solutions; it's about fostering a
                partnership where client needs are not just met but prioritized.
              </p>
            </div>
          </div>
        </div>
        <div className="  flex justify-evenly items-center lg:p-20 bg-[#d0f4de] text-black flex-wrap">
          <div className="w-60 flex justify-center items-center flex-col my-5">
            <Image
              width={100}
              height={100}
              alt="image"
              src={"https://separateweb.com/demo-reevan/images/icons/world.svg"}
            ></Image>
            <p className="text-2xl font-bold text-center">
              Work at Your Time Zone
            </p>
          </div>
          <div className="w-60 flex justify-center items-center flex-col my-5">
            <Image
              width={100}
              height={100}
              src={
                "https://separateweb.com/demo-reevan/images/icons/conversation.svg"
              }
              alt="image"
            ></Image>
            <p className="text-2xl font-bold text-center">
              Work at Your Time Zone
            </p>
          </div>
          <div className="w-60 flex justify-center items-center flex-col my-5">
            <Image
              width={100}
              height={100}
              src={
                "https://separateweb.com/demo-reevan/images/icons/tech-support.svg"
              }
              alt="image"
            ></Image>
            <p className="text-2xl font-bold text-center">
              Work at Your Time Zone
            </p>
          </div>
          <div className="w-60 flex justify-center items-center flex-col my-5">
            <Image
              width={100}
              height={100}
              src={"https://separateweb.com/demo-reevan/images/icons/rate.svg"}
              alt="image"
            ></Image>
            <p className="text-2xl font-bold text-center">
              Work at Your Time Zone
            </p>
          </div>
          <div className="w-60 flex justify-center items-center flex-col my-5">
            <Image
              width={100}
              height={100}
              src={
                "https://separateweb.com/demo-reevan/images/icons/awards.svg"
              }
              alt="image"
            ></Image>
            <p className="text-2xl font-bold text-center">
              Work at Your Time Zone
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
