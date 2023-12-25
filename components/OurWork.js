import Image from "next/image";

const OurWork = () => {
  return (
    <div>
      <div className="lg:p-16 lg:px-28 bg-[#230B46] px-5 py-10">
        <h1 className="lg:text-5xl text-4xl text-[#5179F5]">WHAT WE DO</h1>
        <p className="lg:text-xl text-md  text-justify lg:my-10 my-5 text-white">
          Virtualify is a forward-thinking IT company specializing in
          comprehensive technological solutions. From designing user-friendly
          interfaces to implementing robust network infrastructures, we cater to
          diverse needs across industries. Our expertise encompasses software
          development, IT consulting, cybersecurity, and managed services. We
          thrive on transforming complex challenges into streamlined, efficient
          systems that empower businesses to thrive in the digital age. At ABC
          Tech Services, innovation meets reliability, ensuring our clients stay
          ahead in an ever-evolving technological landscape.
        </p>
        <div className="flex items-center justify-between flex-wrap">
          <Image
            className="lg:w-auto w-full"
            width={600}
            height={350}
            src="/2.webp"
            alt="image"
          />
          <div className="text-center w-full lg:w-auto">
            <p className="lg:text-6xl text-3xl text text-white">
              App Development
            </p>
            <p className="lg:text-7xl text-4xl text-[#9648F6] my-3">
              Web Development
            </p>
            <p className="lg:text-6xl text-3xl text-white">Cloud Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurWork;
