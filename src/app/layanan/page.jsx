import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Title from "@/components/Title";
import Link from "next/link";

const page = () => {
  const dataCard = [
    {
      imgUrl: "/layanan/legalitas-perusahaan.jpg",
      title: "Pendirian Badan Hukum",
      desc: "Kami menyediakan layanan pendirian dan pengabungan bisnis di Indonesia. yang meliputi Perseroan Terbatas (PT) maupun Commanditaire Vennootschap (CV)",
      link: "//layanan/pendirian_badan_hukum",
    },
    {
      imgUrl: "/layanan/relasi.jpg",
      title: "Layanan Hukum ",
      desc: "Layanan Hukum merupakan pelayanan yang kami berikan yang orientasi atas permasalahan hukum yang sedang anda hadapi hingga pendampingan ke kepolisian",
      link: "/layanan/layanan_hukum",
    },
    {
      imgUrl: "/layanan/penasehat.jpg",
      title: "Layanan Penasehat Hukum",
      desc: "merupakan pelayanan profesional yang memberikan nasehat dan bimbingan hukum terhadap individu, bisnis, organisasi maupun badan hukum",
      link: "/layanan/penasehat_hukum",
    },
    {
      imgUrl: "/layanan/Haki.jpg",
      title: "Layanan HAKI",
      desc: "Layanan HAKI merupakan pelayanan yang memberikan jaminan atas perlindungan hak kekayaan intelektual anda",
      link: "/layanan/haki",
    },
    {
      imgUrl: "/layanan/virtual.jpg",
      title: "	Layanan Virtual Office",
      desc: "Menyediakan layanan jasa kantor bersama dan menawarkan fasilitas ruang perkantoran terlengkap dengan didukung staff profesional dan komunikatif.",
      link: "/layanan/virtual_office",
    },
    {
      imgUrl: "/layanan/pajak.jpg",
      title: "Layanan Pajak",
      desc: "Mitra Solusi Wicaksana menawarkan pelayanan dalam kegiatan laporan Pajak perorangan maupun perusahaan  dalam skala bulanan maupun tahunan.",
      link: "/layanan/pajak",
    },
  ];

  const title = "Layanan Mitra Solusi Wicaksana";
  const titleLarge =
    "Konsultan Mitra Solusi Wicaksana berpengalaman dalam memberikan saran dan panduan bisnis untuk mencapai tujuan klien. Tim konsultan kami memiliki pengalaman dan mampu dalam menganalisa dalam aspek bisnis dan hukum. Kami bekerja sama dengan klien dalam mengembangkan bisnis mereka dengan memenuhi kebutuhan klien kami.";
  const titleSmall =
    "Konsultan Mitra Solusi Wicaksana berpengalaman dalam memberikan saran dan panduan bisnis untuk mencapai tujuan klien. Tim konsultan kami memiliki pengalaman dan mampu dalam menganalisa dalam aspek bisnis dan hukum. Kami bekerja sama dengan klien dalam mengembangkan bisnis mereka dengan memenuhi kebutuhan klien kami.";
  return (
    <div className="">
      <Navbar />
      <Hero title={title} titleLarge={titleLarge} titleSmall={titleSmall} />
      <Title
        img="/MSW/content.svg"
        title="Layanan PT. Mitra Solusi Wicaksana Antara Lain : "
      />

      <div className=" w-full mx-auto ">
        <div className="mt-5 pb-28 px-7 relative  lg:flex lg:flex-wrap z-30 md:container grid mx-auto gap-8 shadow xl:to-blue-300 grid-flow-col-1 xl:gap-10 xl:mt-12  place-content-center ">
          {dataCard.map((data, index) => (
            <div
              key={index}
              className="max-w-md lg:max-w-md sm:max-w-2xl xl:max-w-xl sm:flex md:max-w-3xl lg:block xl:flex md:pb-10 overflow-hidden bg-slate-100 lg:bg-white shadow lg:shadow-none"
            >
              <div
                // href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                className="relative sm:basis-2/5 md:basis-1/2"
              >
                <Image
                  className="w-full -xl h-72 md:h-96 object-center object-cover"
                  src={data.imgUrl}
                  width={1000}
                  height={1000}
                  alt="Cruise"
                  priority={true}
                />
              </div>
              <div className="py-5 px-3 sm:px-6 sm:basis-3/5 md:basis-1/2 md:mt-5 lg:mt-0 md:shadow-lg md:p-6 md:bg-slate-50 ">
                <h1 className="mb-2 md:mb-5 md:text-3xl lg:text-2xl md:tracking-normal text-2xl font-bold tracking-tight text-primary ">
                  {data.title}
                </h1>
                <p className="text-justify sm:leading-relaxed sm:tracking-wide md:mb-4 font-normal text-lg text-gray-500 ">
                  {data.desc}
                </p>
                <Link href={data.link}>
                  <h5 className="mb-2 md:mb-5 md:text-3xl md:tracking-normal text-xl mt-3 font-bold tracking-tight text-primary lg:text-lg ">
                    see more ...
                  </h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
