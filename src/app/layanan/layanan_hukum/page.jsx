import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import React from "react";
import Image from "next/image";

const page = () => {
  const contents = [
    {
      title: "Pembuatan Perjanjian",
      desc: "Kami memberikan pelayanan pembuatan sebuah perjanjian dengan didampingi oleh konsultan hukum dan advokat maupun notaris yang berpengalaman.",
    },
    {
      title: "Konsultasi Hukum",
      desc: "Kami memberikan pelayanan konsultasi hukum dengan didampingi oleh konsultan hukum dan advokat yang berpengalaman.",
    },
    {
      title: "Surat Somasi",
      desc: "Permasalahan sengketa anda dapat kami bantu berupa menyampaikan surat somasi dari pengacara professional dan berpengalaman. Kami akan menyediakan tim konsultan hukum yang siap membantu berbagai permasalahan hukum anda.",
    },
    {
      title: "Pendapat Hukum / Legal Opinion",
      desc: "Anda mendapatkan saran dan pendapat hukum secara tertulis dari para konsultan hukum berpengalaman yang dapat dipertanggung jawabkan dalam menghadapi permasalahan hukum.",
    },
    {
      title: "Mediasi",
      desc: "Kami bersedia mendampingi anda dalam mediasi demi mencapai titik damai serta tercapainya kesepakatan para pihak",
    },
    {
      title: "Layanan Negoisasi",
      desc: "Kami siap dalam membantu dan mendampingi anda dalam melakukan perundingan demi tercapainya kesepakatan ",
    },
    {
      title: "Pendampingan di Kepolisian",
      desc: "Kami siap dalam mendampingi anda secara profisional dalam hal pendampingan pada Kepolisian",
    },
  ];
  return (
    <div>
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
          <span className="font-bold text-xl"> Layanan Hukum</span>: Layanan
          Hukum merupakan pelayanan yang kami berikan yang orientasi atas
          permasalahan hukum yang sedang anda hadapi.
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
    </div>
  );
};

export default page;
