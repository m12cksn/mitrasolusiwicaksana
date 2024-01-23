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
    <div className="bg-background mt-5 mb-7 group lg:container lg:pt-5 pb-7">
      <div className="px-4 xl:px-0 pt-5 xl:pt-10 max-w-md mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-5xl  md:grid grid-cols-12 md:gap-5 lg:gap-7 xl:max-w-7xl  items-center">
        <Image
          className=" md:aspect-[4/5] lg:aspect-[4/3] md:max-w-xs lg:max-w-lg md:col-span-5 xl:max-w-2xl   w-full lg:col-span-6 2xl:col-span-7 mb-5 rotate-3 p-2 border   transition-all duration-500  object-cover  bg-cover bg-center"
          src={"/imagesmsw/logo5.jpg"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <div className=" md:col-span-7 lg:col-span-6 2xl:col-span-5  ">
          <h4 className="text-secondary xl:text-xl font-medium flex items-center gap-3">
            Mitra Solusi Wicaksana{" "}
            <span>
              <Image
                className="w-6 h-6 xl:w-6 xl:h-6 group-hover:scale-110 transition-all duration-500 drop-shadow-xl object-cover  bg-cover bg-center"
                src={"/icons/workshop.png"}
                width={1000}
                height={1000}
                alt="Cruise"
                priority={true}
              />
            </span>
          </h4>
          <h1 className="text-primary  text-3xl sm:text-[2.8rem]  mt-1 font-bold leading-snug md:leading-snug xl:text-[3.4rem] md:text">
            Your Best Partner For Beyond Business Growth In Indonesia
          </h1>
          <h3 className="text-slate-600 mt-3 sm:text-lg xl:text-xl 2xl:leading-loose text-justify">
            PT Mitra Solusi Wicaksana sebuah perusahaan penasihat atau konsultan
            berdomisili di Indonesia yang menyediakan klien lokal dan
            multinasional untuk memulai dan mengelola operasi bisnis di
            indonesia
          </h3>
          <div className=" mt-3 xl:mt-10  flex gap-10 items-center">
            <Link
              className="bg-primary text-white px-5 py-2 md:text-lg md:font-bold rounded"
              href="#"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
