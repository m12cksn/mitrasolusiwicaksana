import React from "react";
import Image from "next/image";
import Title from "./Title";

const Whyus = () => {
  const companies = [
    {
      imgUrl: "/MSW/company.svg",
      title: "Lokasi Strategis ",
      desc: "Bertempat di daerah Jakarta Pusat, kantor kami dalam menjalankan usaha memiliki akses lokasi yang sangat strategis dengan lingkungan perkantoran yang kondusif dan nyaman memudahkan mitra usaha menjalankan aktivitasnya.",
    },
    {
      imgUrl: "/MSW/company.svg",
      title: "Kualitas ",
      desc: "Kami menyajikan tenaga professional sebagai jasa konsultan hukum dengan kulitas yang terbaik dan komunikatif.",
    },
    {
      imgUrl: "/MSW/company.svg",
      title: "Biaya yang Terjangkau ",
      desc: "Kualitas terbaik dari tenaga profesional kami tersedia dengan biaya yang bersaing dan dapat disesuaikan dengan kebutuhan para mitra usaha.",
    },
    {
      imgUrl: "/MSW/company.svg",
      title: "Kerahasiaan Perusahaan ",
      desc: "Kami berkomitmen dalam menjaga kerahasiaan setiap perusahaan yang menjadi klien kami dalam bermitra.",
    },
    {
      imgUrl: "/MSW/company.svg",
      title: "Pengalaman pada bidangnya",
      desc: "Pengalaman pengurusan perizinan terbukti memberikan solusi bagi para pengguna jasa konsultan hukum perusahaan sebagaimana pula kemitraan usaha tidak hanya berjalan saat terjadi kendala usaha namun tetap berlanjut dalam mendampingi mitra kami dalam menjalankan kegiatan usaha untuk selanjutnya",
    },
    {
      imgUrl: "/MSW/company.svg",
      title: "Didukung oleh tenaga profesional ",
      desc: "Ketersediaan tenaga profesional dalam bidang hukum perusahaan siap memberikan solusi terbaik selama 24 jam",
    },
    {
      imgUrl: "/MSW/company.svg",
      title: "Biaya yang Terjangkau ",
      desc: "Layanan Costumer Service kami dapat melayani anda dengan cepat, tanggap dalam menghadapi pertanyaan ataupun keluhan dari pelanggan kami.",
    },
  ];
  return (
    <div className="bg-[url('/imagesmsw/1.png')] object-cover bg-center">
      <div className=" bg-teks bg-opacity-95      ">
        <Title
          img="/MSW/content.svg"
          title="Mengapa memilih Mitra Solusi Wicaksana"
        />
        <div className=" container md:flex gap-5 px-3 pb-10 flex-wrap">
          {companies.map((company) => (
            <div className="container w-full mt-5 max-w-xs xl:max-w-md  rounded-lg shadow ">
              <div className="flex flex-col items-center py-10">
                <img
                  className="w-28 h-w-28 mb-5 "
                  src={company.imgUrl}
                  alt="Bonnie image"
                />
                <h5 className="text-center text-xl lg:text-2xl font-bold text-primary mb-3">
                  {company.title}
                </h5>
                <span className="text-sm text-center text-gray-500 lg:text-lg ">
                  {company.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whyus;
