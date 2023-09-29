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
      imgUrl: "/imagesmsw/4.png",
      title: "Pendirian Badan Hukum",
      desc: "Kami menyediakan layanan pendirian dan pengabungan bisnis di Indonesia. ",
    },
    {
      imgUrl: "/imagesmsw/3.png",
      title: "Layanan Hukum ",
      desc: "Layanan Hukum merupakan pelayanan yang kami berikan yang orientasi atas permasalahan hukum yang sedang anda hadapi.",
    },
    {
      imgUrl: "/imagesmsw/2.jpg",
      title: "•	Layanan Penasehat Hukum",
      desc: "merupakan pelayanan profesional yang memberikan nasehat dan bimbingan hukum terhadap individu, bisnis, organisasi maupun badan hukum",
    },
    {
      imgUrl: "/imagesmsw/1.png",
      title: "•	Layanan HAKI",
      desc: "Layanan HAKI merupakan pelayanan yang memberikan jaminan atas perlindungan hak kekayaan intelektual anda",
    },
    {
      imgUrl: "/imagesmsw/1.png",
      title: "•	Layanan Virtual Office",
      desc: "Menyediakan layanan jasa kantor bersama dan menawarkan fasilitas ruang perkantoran terlengkap dengan didukung staff profesional dan komunikatif.",
    },
    {
      imgUrl: "/imagesmsw/1.png",
      title: "•	Layanan Pajak",
      desc: "Mitra Solusi Wicaksana menawarkan pelayanan dalam kegiatan laporan Pajak perorangan maupun perusahaan  dalam skala bulanan maupun tahunan.",
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
        <div className="mt-5 pb-28 px-3 relative xl:flex xl:flex-wrap z-30 md:container grid mx-auto gap-5 grid-flow-col-1 xl:gap-10 xl:mt-12  place-content-center ">
          {dataCard.map((data, index) => (
            <div
              key={index}
              className="max-w-md  xl:max-w-xl md:flex md:max-w-3xl  md:pb-10 rounded-xl    overflow-hidden "
            >
              <div
                // href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                className="relative md:basis-1/2"
              >
                <Image
                  className="w-full rounded-xl h-72 md:h-96 object-center object-cover"
                  src={data.imgUrl}
                  width={1000}
                  height={1000}
                  alt="Cruise"
                  priority={true}
                />
              </div>
              <div className="py-5 px-2 md:basis-1/2 md:mt-5 md:shadow-lg md:p-6 md:bg-slate-50 ">
                <Link href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A">
                  <h5 className="mb-2 md:mb-5 md:text-3xl md:tracking-normal text-2xl font-bold tracking-tight text-primary ">
                    {data.title}
                  </h5>
                </Link>
                <p className=" md:mb-4 font-normal md:text-lg text-gray-500 ">
                  {data.desc}
                </p>
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
