"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsFacebook,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";

export default function Home() {
  const data = [
    {
      id: 1,
      date: "2023-10-10",
      message: "Kung Fu Genda out now",
    },
    {
      id: 2,
      date: "2023-09-09",
      message: "Announcement of release date of Kung Fu Genda ",
    },
    {
      id: 3,
      date: "2023-08-08",
      message: "Penguins of Kalakala trailer out now  ",
    },
    {
      id: 4,
      date: "2023-08-01",
      message: "Two Piece new episode out now  ",
    },
    {
      id: 5,
      date: "2023-07-31",
      message: "New Recruitement added",
    },
    {
      id: 6,
      date: "2023-07-24",
      message: "Update for Anime fest",
    },
  ];

  const slides = [
    {
      url: "008.png",
    },
    {
      url: "roronoa.jpg",
    },
    {
      url: "your-name.jpg",
    },

    {
      url: "yourname.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  });

  return (
    <div className="w-full">
      <div className="flex w-full items-center mt-28">
        <div className="w-1/2 flex items-center justify-center">
          <Image src="/luffy.jpeg" alt="luffy" width={320} height={320} />
        </div>
        <div className="text-3xl font-bold w-1/2 flex items-center justify-center">
          <div>
            <span className="text-red-500 text-stroke">&quot;Animated </span>
            <span>
              Face can express <br /> the
            </span>
            <span className="text-white text-stroke"> emotions </span>
            <span>
              which human face <br /> can&apos;t
            </span>
            <span className="text-red-500 text-stroke"> &quot;</span>
          </div>
        </div>
      </div>
      <div className="bg-blue-200 w-full flex py-10">
        <div className="w-1/2 px-10">
          <div className="text-3xl font-bold py-10">Company and Business</div>
          <div className="font-light text-xl">
            We specialize in creating captivating animation stories tat tell
            stories,entertain audiences and leave a lasting impression. Our team
            of talented artists and animators are dedicated ti bringing your
            ideas to life with stunning visuals and seamless motions. Whether
            you need a promotional video,a character animation, or a full-length
            feature film, we have to make it happen.
          </div>
          <div className="w-full flex items-center justify-center mt-20">
            <div className="font-xl font-light text-white w-max py-2 px-4 rounded-full border bg-blue-500">
              Learn More
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image src="/business.png" alt="business" height={750} width={750} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <div className="text-white border rounded bg-blue-600 w-max  py-3 px-6 text-3xl font-semibold mb-10">
          Announcement
        </div>
        <div className="text-sm w-1/2 flex flex-col justify-center p-10">
          {data.map((item, index) => (
            <div className="" key={index}>
              <div className="flex gap-10 w-full">
                <div className="text-gray-500 w-1/3 ml-16">{item.date}</div>
                <div className="w-1/2">{item.message}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-white border rounded bg-blue-500 w-max  py-2 px-4 text-2xl font-semibold my-10">
          More
        </div>
      </div>
      <div className="w-full h-96 m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>
        <div className="hidden md:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden md:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-3xl cursor-pointer ${
                slideIndex === currentIndex ? "text-black" : "text-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
     
    </div>
  );
}
