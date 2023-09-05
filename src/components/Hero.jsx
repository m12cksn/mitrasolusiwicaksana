"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";

const Hero = (props) => {
  const images = [
    {
      id: 1,
      imageUrl: "/imagesmsw/hero1.jpg",
    },
    {
      id: 2,
      imageUrl: "/imagesmsw/hero2.png",
    },
    {
      id: 3,
      imageUrl: "/imagesmsw/hero3.jpg",
    },
  ];
  return (
    <section className="bg-center relative bg-no-repeat bg-[url('/imagesmsw/logo5.jpg')] bg-cover bg-gray-700 bg-blend-multiply overflow-hidden ">
      {/* <div className="w-72 h-6 absolute bg-white bottom-0 rounded-tr-3xl "></div> */}
      <div className="px-6 mx-auto py-10 lg:py-20 sm:max-w-2xl md:max-w-4xl md:px-10  lg:max-w-5xl xl:max-w-7xl 2xl:w-full">
        <h1 className="mb-4 text-4xl font-extrabold tracking-widerleading-none text-secondary leading-snug md:text-5xl lg:text-6xl">
          {props.title}
        </h1>
        <p className="mb-8 hidden md:block text-lg font-normal text-gray-300 lg:text-2xl lg:leading-normal  text-justify xl:leading-relaxed">
          {props.titleLarge}
        </p>
        <p className="mb-8 md:hidden text-lg font-normal text-gray-300 lg:text-xl  text-justify">
          {props.titleSmall}
        </p>
        <div className="w-full mt-8  shadow-lg rounded-md overflow-hidden">
          <Link
            href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
            className="flex py-4 md:py-5 px-4 md:px-7 bg-white items-center justify-between"
          >
            <div>
              <h1 className="md:text-2xl text-sm font-semibold text-secondary   mb-1">
                Hubungi Kami
              </h1>
              <p className="md:text-lg text-xs text-secondary">
                Untuk mendapat informasi menarik lainnya
              </p>
            </div>
            <svg
              className="md:w-6 md:h-6 w-4 h-4 ml-2 text-secondary"
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
        {/* <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
          <svg
            className="w-3.5 h-3.5 ml-2"
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
        </a>
        <a
          href="#"
          className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Learn more
        </a>
      </div> */}
      </div>
    </section>
  );
};

export default Hero;
