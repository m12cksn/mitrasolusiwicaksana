import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  const contents = [
    {
      title: "Pajak Bulanan Perusahaan ",
      desc: "Layanan perhitungan / penyetoran / pelaporan pajak bulanan Perusahaan",
    },
    {
      title: "Pajak Tahunan Perusahaan ",
      desc: "Layanan perhitungan / penyetoran / pelaporan pajak bulanan Perusahaan",
    },
    {
      title: "Pajak Bulanan Perorangan ",
      desc: "Layanan perhitungan / penyetoran / pelaporan pajak bulanan Perorangan",
    },
    {
      title: "Pajak Tahunan Perorangan ",
      desc: "Layanan perhitungan / penyetoran / pelaporan pajak bulanan Perorangan",
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
        <h1 className="text-center text-2xl md:text-3xl xl:text-4xl md:leading-normal text-teks font-semibold px-5 mb-3">
          Layanan Hukum
        </h1>
        <h1 className="text-center text-2xl md:text-3xl xl:text-4xl md:leading-normal text-teks font-semibold px-5">
          PT. Mitra Solusi Wicaksana
        </h1>
        <h1 className=" text-lg mt-5 py-6 text-justify bg-red-400 max-w-xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl md:max-w-4xl container mx-auto rounded shadow text-teks ">
          <span className="font-bold text-xl"> Layanan Pajak </span>: Mitra
          Solusi Wicaksana menawarkan pelayanan dalam kegiatan laporan Pajak
          perorangan maupun perusahaan dalam skala bulanan maupun tahunan.
        </h1>
        <div className="flex flex-col gap-7 md:gap-9 items-center justify-center container pt-10 pb-8">
          {contents.map((content, index) => (
            <div
              key={index}
              className="flex items-center pt-4 pb-3 md:pb-1 md:pt-2 lg:pt-6 lg:pb-4 relative bg-red-200 max-w-xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl md:max-w-4xl container mx-auto rounded shadow"
            >
              <h1 className="w-64 h-8 lg:w-[23rem] lg:h-12 lg:text-xl  text-teks tracking-wide absolute z-30 bg-primary   flex items-center justify-center rounded-full -top-5 left-0 md:text- font-bold">
                {content.title}
              </h1>
              <h1 className=" text-justify text-sm tracking-wide leading-normal text-slate-700 md:text-lg md:p-3  lg:text-xl md:leading-normal xl:leading-relaxed  ">
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
