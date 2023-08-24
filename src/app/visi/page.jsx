import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const visi = () => {
  return (
    <div>
      <div className="bg-secondary p-3">
        <Navbar />
        <div className="flex flex-col gap-10 items-center justify-center container pt-32 pb-8">
          <div className="flex items-center py-6 relative bg-red-200 max-w-xl lg:max-w-3xl  container mx-auto rounded shadow">
            <h1 className="w-32 h-10  absolute z-30 bg-primary text-slate-50 tracking-wide flex items-center justify-center rounded-full -top-5 left-0 md:text-lg font-bold text-slate-900">
              Tentang
            </h1>
            <h1 className="pl-3 tracking-wide leading-normal text-slate-700">
              Perseroan Terbatas yang bergerak di bidang{" "}
              <span className="font-bold text-lg">
                Jasa Konsultan Hukum Perusahaan{" "}
              </span>
              , berperan sebagai mitra usaha dalam menunjang aktivitas kegiatan
              usaha khususnya pada sektor perizinan dan legalitas usaha termasuk
              pada kegiatan due diligence dokumen hukum. Jasa konsultan hukum
              yang diberikan baik kepada perusahaan ataupun perorangan
              senantiasa mengikuti dinamisasi regulasi yang berlaku, sehingga
              solusi yang diberikan sesuai dengan koridor hukum positif.{" "}
              <span className="font-bold text-lg">
                {" "}
                Berdiri sejak tahun 2017{" "}
              </span>
              , perusahaan kami berpengalaman didukung dengan tenaga profesional
              yang berkompeten berkomitmen memberikan solusi terbaik sebagai
              mitra usaha sehingga membentuk suatu kepercayaan di tengah
              tingginya resiko usaha saat ini. Pada tahun 2023,{" "}
              <span className="font-bold text-lg">
                {" "}
                Perusahaan kami pun semakin mengembangkan bidang usaha dalam
                penyediaan Jasa Kantor bersama (Virtual Office){" "}
              </span>
              untuk mendukung sarana dan prasarana mitra usaha.
            </h1>
          </div>
          <div className="flex items-center py-6 relative bg-red-200 max-w-xl lg:max-w-3xl container mx-auto rounded shadow">
            <h1 className="w-32 h-10  absolute z-30 bg-primary text-slate-50 tracking-wide flex items-center justify-center rounded-full -top-5 left-0 font-bold md:text-lg font-bold text-slate-900">
              Visi
            </h1>
            <h1 className="pl-3 tracking-wide leading-normal text-slate-700 font-semibold">
              Menjadi mitra usaha yang solutif bagi perusaahaan yang mengalami
              kendala usaha, dengan mengedepankan solusi sesuai ketentuan hukum
              yang berlaku.
            </h1>
          </div>
          <div className="flex items-center py-6 relative bg-red-200 max-w-xl lg:max-w-3xl container mx-auto rounded shadow">
            <h1 className="w-32 h-10  absolute z-30 bg-primary text-slate-50 tracking-wide flex items-center justify-center rounded-full -top-5 left-0 font-bold md:text-lg font-bold text-slate-900">
              Misi:
            </h1>
            <quoute className="pl-3 tracking-wide leading-normal text-slate-700 font-extrabold">
              Membantu usaha para mitra berjalan sesuai dengan prosedur hukum
              yang berlaku dan senantiasa mengikuti dinamisasi regulasi hukum
              yang berlaku di Indonesia
            </quoute>
          </div>
          <div className="flex items-center py-6 relative bg-red-200 max-w-xl lg:max-w-3xl container mx-auto rounded shadow">
            <h1 className="w-80 md:w-96 h-10 absolute z-30 bg-primary  text-slate-50 flex items-center justify-center rounded-full -top-5 left-0 font-bold text-base md:text-lg font-bold text-slate-900">
              Bidang Usaha PT Mitra Solusi Wicaksana
            </h1>
            <div>
              <h2 className="pl-3 tracking-wide leading-normal text-slate-700 font-extrabold">
                1. Jasa Konsultan Hukum Perusahaan
              </h2>
              <h2 className="pl-3 tracking-wide leading-normal text-slate-700 font-extrabold">
                2. Jasa Konsultan Hukum Perusahaan
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default visi;
