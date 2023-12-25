import Image from "next/image";

const Skills = () => {
  return (
    <div>
      <div className="text-center  lg:py-16 p-5   text-white">
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
              <span className="text-3xl font-bold text-black mx-2">Python</span>
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
              <span className="text-3xl font-bold text-black mx-2">Swift</span>
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
    </div>
  );
};
export default Skills;
