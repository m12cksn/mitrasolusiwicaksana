"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";

const Hero = () => {
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
    <div className="">
      <div className="w-full pb-96 md:pb-[33rem] z-50 lg:flex px-5 md:px-12 lg:px-0 bg-primary  lg:py-0 pt-3 py-10">
        <div className="basis-1/2 flex justify-center  flex-col mt-20 lg:mt-0  lg:px-28 ">
          <h1 className=" lg:text-5xl text-left text-slate-100 lg:tracking-wide lg:leading-tight text-3xl  md:text-[2.8rem] md:leading-snug">
            PT. Mitra Solusi Wicaksana
          </h1>
          <h1 className=" lg:text-4xl text-slate-100 lg:tracking-wide lg:leading-tight text-3xl  md:text-[2.8rem] md:leading-snug">
            Jasa Konsultan Hukum Perusahaan dan Virtual Office
          </h1>
          <p className="  mt-5 lg:leading-relaxed lg:tracking-wide text-base lg:text-lg lg:pr-12 text-slate-200 md:text-lg">
            Perseroan Terbatas yang bergerak di bidang{" "}
            <span className="font-bold text-lg">
              Jasa Konsultan Hukum Perusahaan{" "}
            </span>
            , berperan sebagai mitra usaha dalam menunjang aktivitas kegiatan
            usaha khususnya pada sektor perizinan dan legalitas usaha termasuk
            pada kegiatan due diligence dokumen hukum. Jasa konsultan hukum yang
            diberikan baik kepada perusahaan ataupun perorangan senantiasa
            mengikuti dinamisasi regulasi yang berlaku, sehingga solusi yang
            diberikan sesuai dengan koridor hukum positif.{" "}
            <span className="font-bold text-lg">
              {" "}
              Berdiri sejak tahun 2017{" "}
            </span>
            , perusahaan kami berpengalaman didukung dengan tenaga profesional
            yang berkompeten berkomitmen memberikan solusi terbaik sebagai mitra
            usaha sehingga membentuk suatu kepercayaan di tengah tingginya
            resiko usaha saat ini. Pada tahun 2023,{" "}
            <span className="font-bold text-lg">
              {" "}
              Perusahaan kami pun semakin mengembangkan bidang usaha dalam
              penyediaan Jasa Kantor bersama (Virtual Office){" "}
            </span>
            untuk mendukung sarana dan prasarana mitra usaha.
          </p>
          <div className="w-full mt-8 hidden lg:block shadow-lg rounded-md overflow-hidden">
            <Link
              href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
              className=" group flex py-3 md:py-5 hover:bg-teks  ease-in-out transition-all duration-500 px-3 lg:py-4 md:px-7 bg-third items-center justify-between"
            >
              <div>
                <h1 className="group-hover:text-third text-xl tracking-normal font-semibold  text-teks  font-semi mb-1">
                  Hubungi kami
                </h1>
                <p className="text-base text-teks group-hover:text-third">
                  Untuk mendapat informasi menarik lainnya
                </p>
              </div>
              <svg
                className="md:w-6 md:h-6 w-4 h-4 ml-2 text-teks group-hover:text-third"
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
        <div className="basis-1/2">
          {" "}
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
          >
            {images.map((image, index) => (
              <SplideSlide className=" " key={index}>
                {/* <img src="image1.jpg" alt="Image 1" /> */}
                <Image
                  className="object-cover object-center shadow-lg w-full lg:mt-0 mt-8 h-72 md:h-[27rem] lg:h-[58rem] lg:rounded-none rounded-xl  md:h-[28rem"
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
        </div>
        <div className="w-full mt-8 lg:hidden shadow-lg rounded-md overflow-hidden">
          <Link
            href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
            className="flex py-4 md:py-5 px-4 md:px-7 bg-secondary items-center justify-between"
          >
            <div>
              <h1 className="md:text-2xl text-sm font-semibold text-primary  font-semi mb-1">
                Hubungi Kami
              </h1>
              <p className="md:text-lg text-xs text-primary">
                Untuk mendapat informasi menarik lainnya
              </p>
            </div>
            <svg
              className="md:w-6 md:h-6 w-4 h-4 ml-2 text-primary"
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
      <div className="h-[35rem] hidden lg:block relative -top-5 bg-third w-full"></div>
    </div>
  );
};

export default Hero;
