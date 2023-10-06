import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

const page = () => {
  const contents = [
    {
      title: "Layanan Penasehat Hukum",
      desc: "Layanan Penasehat Hukum merupakan pelayanan profesional yang memberikan nasehat dan bimbingan hukum terhadap individu, bisnis, organisasi maupun badan hukum",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-secondary p-3">
        <Image
          className=" mt-5 mb-3 w-24 mx-auto text-teks"
          src="/MSW/content.svg"
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <h1 className="text-center text-2xl md:text-3xl xl:text-4xl md:leading-normal text-teks font-semibold px-5 lg:mb-3">
          Layanan Penasehat Hukum
        </h1>
        <h1 className="text-center text-2xl md:text-3xl xl:text-4xl md:leading-normal text-teks font-semibold px-5">
          PT. Mitra Solusi Wicaksana
        </h1>
        <div className="flex flex-col gap-10 items-center justify-center container pt-10 pb-8">
          {contents.map((content, index) => (
            <div
              key={index}
              className="flex items-center py-6 relative bg-red-200 max-w-xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl md:max-w-4xl container mx-auto rounded shadow"
            >
              <h1 className="w-80 h-10 lg:w-[23rem] lg:h-12 lg:text-xl xl:text-2xl text-teks tracking-wide absolute z-30 bg-primary text-lg  flex items-center justify-center rounded-full -top-5 left-0 md:text-xl font-bold xl:w-[30rem] xl:h-14  ">
                {content.title}
              </h1>
              <h1 className=" text-justify  tracking-wide leading-normal text-slate-700 md:text-lg md:p-5  lg:text-xl md:leading-normal xl:leading-relaxed xl:p-8 xl:text-2xl">
                {content.desc}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
