"use client";
import Image from "next/image";
import { useState } from "react";
import photo1 from "../public/photo1.webp"
import photo2 from "../public/photo2.webp"

const Carousel = () => {
  const testimonials = [
    {
      avatar: photo1,
      name: "Yogesh Makode",
      title: "Founder of zeta",
      quote:
        "Our experience with Virtualify has been marked by a perfect blend of technical prowess and outstanding customer service. The team's responsiveness and ability to tailor solutions to our unique needs have made them an integral part of our success. I highly recommend Virtualify to any business seeking top-tier IT services."
    },
    {
      avatar: photo2,
      name: "Bhanu Pratap Singh Tomar",
      title: "Product designer",
      quote:
        "Our journey with Virtualify has been nothing short of exceptional. Their strategic IT solutions have not only boosted our efficiency but also positioned us as industry leaders. The dedicated support and forward-thinking approach have made them an invaluable partner in our growth.",
    
    },
    {
      // avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Lovkesh Deshmukh",
      title: "DevOp engineer",
      quote:
        "Choosing Virtualify was one of the best decisions we made for our IT needs. Their team's expertise and commitment to client satisfaction shine through in every interaction. The seamless integration of their solutions has brought about a positive transformation in our operations. ",
    
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="text-center   text-white lg:py-16 p-5">
       <h1 className="text-5xl font-bold ">
            Our clients praise us for our great results
          </h1>
      <section className="py-14 ">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ul>
              {testimonials.map((item, idx) =>
                currentTestimonial == idx ? (
                  <li key={idx}>
                    <figure>
                      <blockquote>
                        <p className=" text-white text-xl font-semibold sm:text-xl">
                          <span className="text-red-500">"</span>{item.quote} <span className="text-red-500">"</span>
                        </p>
                        <div className="mt-3">
                          <span className="block  font-semibold text-[#5179F5]">
                            {item.name}
                          </span>
                          {/* <span className="block text-sm mt-0.5 text-gray-300">
                            {item.title}
                          </span> */}
                        </div>
                      </blockquote>
                    </figure>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-3 justify-center">
              {testimonials.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`mt-6 ${currentTestimonial == idx ?  "ring-4  ring-offset-4 ring-[#5179F5] rounded-xl" : null}`}
                >
                  <Image
                  // loader={() => item.avatar} 
                  width={50}
                  height={50}
                    src={item?.avatar}
                    className="w-16 h-16 mx-auto rounded-xl"
                    alt="client's image"

                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
     
    </div>
  );
};
export default Carousel;
