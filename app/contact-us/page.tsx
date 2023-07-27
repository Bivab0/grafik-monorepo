import { MdSupportAgent } from "react-icons/md";
import { AiFillWechat, AiTwotoneMail } from "react-icons/ai";

export default function ContactUs() {
  return (
    <>
      <div className="mt-28 w-full">
        <div className="font-semibold text-4xl flex items-center justify-center w-full">
          Contact Us
        </div>
        <div className="w-full flex justify-center">
          <div className="w-11/12 border mt-4"></div>
        </div>
        <div className="grid grid-cols-3 w-full">
          <div className="col-span-1 flex items-center flex-col mt-24">
            <div className="text-8xl text-orange-400">
              <MdSupportAgent />
            </div>
            <div className="font-roboto font-semibold text-xl uppercase my-6">
              By Phone
            </div>
            <div className="flex flex-col text-gray-500 items-center">
              <span className="text-xs m-2">
                (Monday to Friday,9am to 7pm IST)
              </span>
              <span className="font-semibold text-xl">India: </span>
              <span>+91 **** *** ***</span>
              <span className="text-xl font-semibold mt-6">International:</span>
              <span>+91 **** *** ***</span>
            </div>
          </div>

          <div className="col-span-1 flex items-center flex-col mt-24">
            <div className="text-8xl text-orange-400">
              <AiTwotoneMail />
            </div>
            <div className="font-roboto font-semibold text-xl uppercase my-6">
              Write Us
            </div>
            <div className="flex flex-col text-gray-500 items-center">
              <div className="flex flex-col justify-center items-center mt-4">
                <div className="mb-1">
                  <div className="font-serif my-2">Your Name</div>
                  <div className="flex border border-black items-center py-2 px-4">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="focus:outline-none focus:ring-0 text-lg"
                    />
                  </div>
                </div>
                <div className="my-1">
                  <div className="font-serif my-2">Your Email</div>
                  <div className="flex border border-black items-center py-2 px-4">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="focus:outline-none focus:ring-0 text-lg"
                    />
                  </div>
                </div>
                <div className="my-1">
                  <div className="font-serif my-2">Message</div>
                  <div className="flex border border-black items-center py-2 px-4">
                    <textarea
                      name="message"
                      id="message"
                      cols={24}
                      rows={5}
                      className="focus:outline-none focus:ring-0 text-lg"
                    ></textarea>
                  </div>
                </div>
                <div className="px-6 py-2 m-4 rounded-full bg-blue-500 text-white">
                  Submit
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center flex-col mt-24">
            <div className="text-8xl text-orange-400">
              <AiFillWechat />
            </div>
            <div className="font-roboto font-semibold text-xl uppercase my-6">
              Live Chat
            </div>
            <div className="flex flex-col text-gray-500 items-center font-semibold text-xl">
              <span>Chat With a member of our </span>{" "}
              <span> in-house team</span>
              <div className="text-blue-500 font-light uppercase m-8 border-2 border-blue-500 px-20 py-4">
                Start Chat
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
