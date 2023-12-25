import { MdEngineering, MdCelebration } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { SiSnapcraft } from "react-icons/si";
import { FaHandshake } from "react-icons/fa";
import { TbNeedleThread } from "react-icons/tb";

const WhyChooseUs = () => {
  return <div>
     <div className="lg:px-20 py-10  text-white px-5">
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
                  world-class mobile app development services. Our team of
                  skilled developers and designers ensures that your app not
                  only meets but exceeds industry standards.
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
                  Virtualify has the expertise to tailor solutions that align
                  with your unique requirements.
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
                  partnerships, working hand-in-hand with you to bring your
                  vision to life. From ideation to deployment, we are committed
                  to your project&apos;s success.
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
                  anniversary, we express gratitude to our clients, partners,
                  and our dedicated team for being a part of this remarkable
                  adventure.
                </p>
              </div>
            </div>
          </div>
  </div>;
};
export default WhyChooseUs;