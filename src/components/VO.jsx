"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

const VO = () => {
  const right = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
      />
    </svg>
  );

  const left = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  const images = [
    {
      id: 1,
      imageUrl: "/imagesmsw/4.png",
      title: "Paket Silver",
    },
    {
      id: 2,
      imageUrl: "/imagesmsw/3.png",
      title: "Paket Gold",
    },
    {
      id: 3,
      imageUrl: "/imagesmsw/2.jpg",
      title: "Paket Platinum",
    },
    {
      id: 4,
      imageUrl: "/imagesmsw/1.png",
      title: "Paket Platinum VIP",
    },
  ];
  return (
    <div className="absolute pb-16">
      <div className=" relative -top-[22rem]  md:-top-[28rem] lg:-top-[32rem] pb-3  overflow-hidden w-full   mx-auto ">
        <h1 className="text-center md:text-[2.7rem] md:font-normal md:tracking-wider md:px-24 md:leading-snug md:mb-16 mb-5 text-2xl px-5 tracking-wide font-semibold text-teks lg:max-w-4xl mx-auto">
          Choose the Atmosphere that suits your meeting
        </h1>
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            pagination: false,
            arrows: false,
          }}
          aria-label="My Favorite Images"
          className=" overflow-hidden w-full   "
        >
          {images.map((image, index) => (
            <SplideSlide
              className="flex  flex-col w-full  items-center pt-7 relative left-0 right-0 md:px-7 md:rounded-xl"
              key={index}
            >
              {/* <img src="image1.jpg" alt="Image 1" /> */}

              <h1 className="bg-teks text-primary text-lg top-[0.2rem]  font-bold tracking-wide absolute text-center w-[19rem] md:w-[22rem] shadow-xl flex items-center justify-between px-5 rounded-md py-3 md:text-2xl  ">
                <span className="">{right}</span>
                {image.title}
                <span>{left}</span>
              </h1>
              <Image
                className="object-cover object-center w-full lg:mt-0 h-72 lg:h-[35rem] lg:max-w-5xl shadow-lg md:rounded-xl md:h-[30rem]"
                src={image.imageUrl}
                width={1000}
                height={1000}
                alt="Cruise"
                priority={true}
              />
            </SplideSlide>
          ))}
        </Splide>
        {/* <Image
    className="object-cover object-center shadow-lg w-full lg:mt-0 mt-8 h-56 lg:h-auto lg:rounded-none rounded-xl md:h-[28rem] "
    src={"/imagesmsw/banner4.png"}
    width={1000}
    height={1000}
    alt="Cruise"
    priority={true}
  /> */}
        <div className="w-full mt-8 md:max-w-3xl  mx-auto overflow-hidden px-5">
          <h1 className="text-center md:text-4xl font-semibold text-slate-800 mb-2 text-2xl md:mb-7">
            Want to Become a Host
          </h1>
          <Link
            href="https://smartofficevo.com/"
            className="flex py-4 md:py-5 px-4 md:px-7 bg-third items-center justify-between"
          >
            <div>
              <h1 className="md:text-2xl text-sm font-semibold text-teks  font-semi mb-1">
                Klik Disini
              </h1>
              <p className="md:text-lg text-xs text-teks">
                untuk daftar paket yang kami tawarkan
              </p>
            </div>
            <svg
              className="md:w-6 md:h-6 w-4 h-4 ml-2 text-teks"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VO;
