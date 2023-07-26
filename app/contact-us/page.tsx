export default function ContactUS() {
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/2 h-full mt-24">
          <div className="flex flex-col justify-center items-center font-serif">
            <span className=" text-4xl"> Let&apos;s Work </span>
            <span className="text-3xl"> Together</span>

            <span className="mt-2">We&apos;d love to work with you</span>
          </div>
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
          <div className="">
            <img src="/road.jpg" width="50%" className="road1" />
            <img src="/road.jpg" width="50%" className="road2 " />
            <div className="main">
              <span className="face"></span>
              <span className="neck"></span>
              <span className="chest">
                <span className="arm1"></span>
                <span className="arm2"></span>
                <span className="leg1">
                  <span className="shoe1"></span>
                </span>
                <span className="leg2">
                  <span className="shoe2"></span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-blue-800 px-10 flex items-center h-[100vh] flex-col pt-24">
          <div className="text-white font-semibold font-mono text-xl flex w-full">
            <div className="flex flex-col justify-center items-center w-1/2">
              <div className=" flex flex-col items-start ">
                <div className="mb-1">
                  <div className="flex border border-black items-center bg-white py-2 px-4">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={12}
                      className="focus:outline-none focus:ring-0 text-lg text-black"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-between items-center">
              <div className="">
                <div className="my-2">
                  <div className="underline">E-mail</div>
                  <div>das.bivab@gmail.com</div>
                </div>
                <div className="my-2">
                  <div className="underline">Phone</div>
                  <div>+91 **** *** ***</div>
                </div>
                <div className="my-2">
                  <div className="underline">Address</div>
                  <div>Samia, Kalakla</div>
                  <div>Jajapur, 74082</div>
                  <div>OR, IN</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center absolute bottom-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29858.856417255327!2d85.93672146314991!3d20.695720766395393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a194108f0c53e8b%3A0x45f460cea047d263!2sSamian%2C%20Odisha%20754082!5e0!3m2!1sen!2sin!4v1690368657421!5m2!1sen!2sin"
              width="100%"
              height="500"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
