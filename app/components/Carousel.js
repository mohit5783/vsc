"use client";
import { useState } from "react";

const Carousel = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of zeta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.",
      words:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ea hic commodi perferendis consequuntur, quo, aut optio amet repellat eveniet voluptates nulla provident eaque. Amet obcaecati natus minima consectetur provident?",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.",
      words:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ea hic commodi perferendis consequuntur, quo, aut optio amet repellat eveniet voluptates nulla provident eaque. Amet obcaecati natus minima consectetur provident?",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ",
      words:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ea hic commodi perferendis consequuntur, quo, aut optio amet repellat eveniet voluptates nulla provident eaque. Amet obcaecati natus minima consectetur provident?",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ul>
              {testimonials.map((item, idx) =>
                currentTestimonial == idx ? (
                  <li key={idx}>
                    <figure>
                      <blockquote>
                        <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                          “{item.quote}“
                        </p>
                        <p className="py-10">{item.words}</p>
                        <div className="mt-3">
                          <span className="block text-gray-800 font-semibold">
                            {item.name}
                          </span>
                          <span className="block text-gray-600 text-sm mt-0.5">
                            {item.title}
                          </span>
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
                <div
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`mt-6 ${currentTestimonial == idx ?  "ring-2  ring-offset-4 ring-indigo-500 rounded-xl" : null}`}
                >
                  <img
                    src={item.avatar}
                    className="w-16 h-16 mx-auto rounded-xl"
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Carousel;
