const Pages = () => {
  return (
    <div className="pt-16">
      <div className="px-28 py-10">
      <span>INQUIRY</span>
      <h1 className="text-4xl font-extrabold">Let’s Get in Touch</h1>
      </div>
      <div className="w-full  bg-[#eaffe6] bg-blend-overlay flex flex-wrap justify-evenly items-center py-32 ">
        <div className="md:w-2/5 w-full " > 
        <div className="flex justify-evenly items-center ">
          <div className="w-2/5 ">
            <span>Sales Department</span>
            <div className="p-5 text-xl bg-white rounded-2xl text-black">7678339789</div>
          </div>
          <div className="w-2/5 ">
            <span>Sales Department</span>
            <div className="p-5 bg-white rounded-2xl text-xl text-black">7678339789</div>
          </div>
          </div>
        <div className="flex justify-evenly items-center text-white my-10">
          <div className="w-2/5 ">
            <span>Sales Department</span>
            <div className="p-5 text-xl bg-white rounded-2xl text-black">7678339789</div>
          </div>
          <div className="w-2/5 ">
            <span>Sales Department</span>
            <div className="p-5 bg-white rounded-2xl text-xl text-black">7678339789</div>
          </div>
          </div>
        </div>
        <div className="md:w-2/5 w-full bg-gray-100 text-center rounded-2xl p-10 -mt-64 border border-black">
          <h1 className="text-3xl my-5 font-bold">Please fill in the form below.</h1>
          <div className="flex flex-wrap justify-evenly items-center">
            <input
              placeholder="Name"
              className="w-2/5 border h-12 rounded-xl m-3 "
              type="text"
            />
            <input
              placeholder="Name"
              className="w-2/5 border h-12 rounded-xl m-3"
              type="text"
            />
            <input
              placeholder="Name"
              className="w-2/5 border h-12 rounded-xl m-3"
              type="text"
            />
            <input
              placeholder="Name"
              className="w-2/5 border h-12 rounded-xl m-3"
              type="text"
            />
            <input
              placeholder="Name"
              className="w-2/5 border h-12 rounded-xl m-3"
              type="text"
            />
            <input
              placeholder="Name"
              className="w-2/5 border h-12 rounded-xl m-3"
              type="text"
            />
            <textarea name="" id="" className="w-4/5 border m-3"></textarea>
          </div>
          <div className="flex items-center mb-4">
            <input
              checked
              onChange={()=>{}}
              id="checkbox-1"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
            htmlFor="checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <div className="">
              <a
                className="group flex items-center justify-between gap-4 rounded-full border bg-gradient-to-r from-[#9648F6] via-[#587AF9] via-[#14B4FF] to-[#66D898]  px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring "
                href="/download"
              >
                <span className="font-medium text-white transition-colors group-hover:text-white group-active:text-indigo-500">
                  Send your Inquiry
                </span>

                <span className="shrink-0 rounded-full  bg-white p-2 text-indigo-600 group-active:text-indigo-500">
                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Pages;
