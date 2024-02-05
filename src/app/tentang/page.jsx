import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";

const visi = () => {
  const title = "Tentang Kami";
  const titleLarge =
    "Konsultan Hukum Mitra Solusi Wicaksana memiliki keahlian di bidang industri dengan keterampilan komunikasi yang baik, keterampilan dalam memecahkan permasalahan, fleksibilitas, reputasi, mampu menjaga kerahasiaan klien dan mengedepankan hubungan kerja yang baik. Kami mampu mengidentifikasi setiap masalah dam memberikan solusi praktis, mengantisipasi potensi tantangan kedepan dan beradaptasi dengan kebutuhan klien dengan tetap berpedoman terhadap Undang-Undang di Indonesia. Kami juga memiliki kepercayaan tinggi dalam menjaga kerahasiaan klien dan memiliki reputasi yang kuat pada bidang bisnis dan hukum ";
  const titleSmall =
    "Konsultan Hukum Mitra Solusi Wicaksana memiliki keahlian di bidang industri dengan keterampilan komunikasi yang baik, keterampilan dalam memecahkan permasalahan, fleksibilitas, reputasi, mampu menjaga kerahasiaan klien dan mengedepankan hubungan kerja yang baik. Kami mampu mengidentifikasi setiap masalah dam memberikan solusi praktis, mengantisipasi potensi tantangan kedepan dan beradaptasi dengan kebutuhan klien dengan tetap berpedoman terhadap Undang-Undang di Indonesia. Kami juga memiliki kepercayaan tinggi dalam menjaga kerahasiaan klien dan memiliki reputasi yang kuat pada bidang bisnis dan hukum";
  return (
    <div>
      <div className="bg-background mt-5 mb-7 group lg:container lg:pt-5 pb-7">
        <div className="px-4 xl:px-0 pt-5 xl:pt-10 max-w-md mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-5xl  md:grid grid-cols-12 md:gap-5 lg:gap-7 xl:max-w-7xl  items-center">
          <Image
            className=" md:aspect-[4/5] lg:aspect-[4/3] md:max-w-xs lg:max-w-lg md:col-span-5 xl:max-w-2xl   w-full lg:col-span-6 2xl:col-span-7 mb-5 rotate-3 p-2 border   transition-all duration-500  object-cover  bg-cover bg-center"
            src={"/imagesmsw/tentang.webp"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
          <div className=" md:col-span-7 lg:col-span-6 2xl:col-span-5  ">
            <h4 className="text-secondary text-2xl xl:text-3xl font-medium flex items-center gap-3">
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

            <h3 className="text-slate-600 mt-3 sm:text-lg xl:text-xl 2xl:leading-loose text-justify">
              {titleLarge}
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
      <div className="bg-slate-100 p-3">
        <div className="flex flex-col gap-10 items-center justify-center container pt-10 pb-8">
          <div className="flex items-center py-6 relative bg-white max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl container mx-auto rounded shadow">
            <h1 className="w-32 h-10 lg:w-44 lg:h-12 xl:w-52 xl:h-14 text-teks lg:text-2xl  absolute z-30 bg-primary  tracking-wide flex items-center justify-center rounded-full -top-5 left-0 font-bold md:text-xl xl:text-3xl  ">
              Visi
            </h1>
            <h1 className=" text-justify tracking-wide leading-normal text-slate-700 md:text-lg md:p-5 lg:text-xl lg:leading-normal xl:leading-relaxed xl:p-8 xl:text-2xl">
              Menjadi mitra usaha yang solutif bagi perusaahaan yang mengalami
              kendala usaha, dengan mengedepankan solusi sesuai ketentuan hukum
              yang berlaku.
            </h1>
          </div>
          <div className="flex items-center py-6 relative bg-white max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl container mx-auto rounded shadow">
            <h1 className="w-32 h-10 lg:w-44 lg:h-12 lg:text-2xl xl:w-52 xl:h-14 xl:text-3xl  absolute z-30 bg-primary text-slate-50 tracking-wide flex items-center justify-center rounded-full -top-5 left-0 font-bold md:text-xl ">
              Misi:
            </h1>
            <quoute className=" text-justify tracking-wide leading-normal text-slate-700 md:text-lg md:p-5 lg:text-xl lg:leading-normal xl:leading-relaxed xl:p-8 xl:text-2xl  ">
              Membantu usaha para mitra berjalan sesuai dengan prosedur hukum
              yang berlaku dan senantiasa mengikuti dinamisasi regulasi hukum
              yang berlaku di Indonesia
            </quoute>
          </div>
        </div>
      </div>
    </div>
  );
};

export default visi;
