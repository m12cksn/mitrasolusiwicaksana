import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Hero from "@/components/Hero";

const visi = () => {
  const title = "Tentang Kami";
  const titleLarge =
    "PT Mitra Solusi Wicaksana berdiri pada tahun 2017, dan konsultasi Hukum sendiri mulai beroperasi pada tahun 2017. Sebagai perusahaan konsultan hukum, kami memberikan dukungan terhadap klien nasional maupun multinasional dalam memulai dan mengelola bisnis  di Indonesia. Tim kami terdiri dari konsultan hukum yang berkualifikasi, akuntabel dan terpercaya dalam setiap produk yang dilahirkannya. PT Mitra Solusi Wicaksana berspesialiasasi dalam pendirian bisnis, layanan konsultan hukum, kepatuhan hukum, layanan penasehat hukum, legalitas perusahaan, dan ahli dalam bidang legalitas pertambangan ";
  const titleSmall =
    "PT Mitra Solusi Wicaksana berdiri pada tahun 2017, dan konsultasi Hukum sendiri mulai beroperasi pada tahun 2017. Sebagai perusahaan konsultan hukum, kami memberikan dukungan terhadap klien nasional maupun multinasional dalam memulai dan mengelola bisnis  di Indonesia. Tim kami terdiri dari konsultan hukum yang berkualifikasi, akuntabel dan terpercaya dalam setiap produk yang dilahirkannya. PT Mitra Solusi Wicaksana berspesialiasasi dalam pendirian bisnis, layanan konsultan hukum, kepatuhan hukum, layanan penasehat hukum, legalitas perusahaan, dan ahli dalam bidang legalitas pertambangan ";
  return (
    <div>
      <Navbar />
      <Hero title={title} titleLarge={titleLarge} titleSmall={titleSmall} />
      <div className="bg-secondary p-3">
        <div className="flex flex-col gap-10 items-center justify-center container pt-10 pb-8">
          <div className="flex items-center py-6 relative bg-red-200 max-w-xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl md:max-w-4xl container mx-auto rounded shadow">
            <h1 className="w-32 h-10 lg:w-44 lg:h-12 lg:text-2xl text-teks tracking-wide absolute z-30 bg-primary text-lg  flex items-center justify-center rounded-full -top-5 left-0 md:text-xl font-bold xl:w-52 xl:h-14 xl:text-3xl ">
              Tentang
            </h1>
            <h1 className=" text-justify  tracking-wide leading-normal text-slate-700 md:text-lg md:p-5  lg:text-xl lg:leading-normal xl:leading-relaxed xl:p-8 xl:text-2xl">
              Konsultan Hukum Mitra Solusi Wicaksana memiliki keahlian di bidang
              industri dengan keterampilan komunikasi yang baik, keterampilan
              dalam memecahkan permasalahan, fleksibilitas, reputasi, mampu
              menjaga kerahasiaan klien dan mengedepankan hubungan kerja yang
              baik. Kami mampu mengidentifikasi setiap masalah dam memberikan
              solusi praktis, mengantisipasi potensi tantangan kedepan dan
              beradaptasi dengan kebutuhan klien dengan tetap berpedoman
              terhadap Undang-Undang di Indonesia. Kami juga memiliki
              kepercayaan tinggi dalam menjaga kerahasiaan klien dan memiliki
              reputasi yang kuat pada bidang bisnis dan hukum;
            </h1>
          </div>
          <div className="flex items-center py-6 relative bg-red-200 max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl container mx-auto rounded shadow">
            <h1 className="w-32 h-10 lg:w-44 lg:h-12 xl:w-52 xl:h-14 text-teks lg:text-2xl  absolute z-30 bg-primary  tracking-wide flex items-center justify-center rounded-full -top-5 left-0 font-bold md:text-xl xl:text-3xl  ">
              Visi
            </h1>
            <h1 className=" text-justify tracking-wide leading-normal text-slate-700 md:text-lg md:p-5 lg:text-xl lg:leading-normal xl:leading-relaxed xl:p-8 xl:text-2xl">
              Menjadi mitra usaha yang solutif bagi perusaahaan yang mengalami
              kendala usaha, dengan mengedepankan solusi sesuai ketentuan hukum
              yang berlaku.
            </h1>
          </div>
          <div className="flex items-center py-6 relative bg-red-200 max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl container mx-auto rounded shadow">
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
      <Footer />
    </div>
  );
};

export default visi;
