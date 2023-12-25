import Image from "next/image";

const Narration = () => {
  return <div>
    <div className="  py-16 px-5">
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
  </div>;
};
export default Narration;