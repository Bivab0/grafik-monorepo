export default function Navbar() {
  return (
      <div className="flex justify-between px-10 py-4 border-b border-blue-500 shadow-xl items-center w-full bg-white">
        <div className="text-3xl text-blue-500 font-bold hover:cursor-pointer">
          GRAFIQ
        </div>
        <div className="flex font-medium text-blue-700 items-center">
          <div className="border-r-2 px-4 hover:cursor-pointer hover:text-red-500 hover:scale-105">
            Home
          </div>
          <div className="border-r-2 px-4 hover:cursor-pointer hover:text-red-500 hover:scale-105">
            Join Us
          </div>
          <div className="px-4 hover:cursor-pointer hover:text-red-500 hover:scale-105">
            Contact Us
          </div>
        </div>
      </div>
  );
}
