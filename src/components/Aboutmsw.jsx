import React from "react";
import Title from "./Title";
import Image from "next/image";
const Aboutmsw = () => {
  return (
    <div>
      <div className="relative ">
        <div className="container  px-5 mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
          <Title img="/MSW/content.svg" title="PT. Mitra Solusi Wicaksana " />
          <p className="text-justify text-lg text-slate-600 pb-8 md:text-xl lg:text-2xl lg:leading-normal  ">
            <span className="font-bold text-xl">PT Mitra Solusi Wicaksana</span>{" "}
            merupakan Perseroan Terbatas yang bergerak di bidang Jasa Konsultan
            Hukum sejak tahun 2017. Mitra Solusi Wicaksana berpengalaman dalam
            memberikan nasehat dan Konsultan hukum dalam mengembangkan bisnis
            anda, jasa konsultan hukum yang diberikan baik kepada perusahaan
            ataupun perorangan senantiasa mengikuti dinamisasi regulasi yang
            berlaku. Tim Konsultasi yang diberikan Mitra Solusi Wicaksana
            berpengalaman memiliki pemahaman mendalam tentang aspek Bisnis dan
            Hukum serta Mitra Solusi Wicaksana turut bekerja sama dengan klien
            untuk membantu mengembangkan bisnis mereka.
          </p>
          <p className="text-justify text-lg text-slate-600 pb-8 md:text-xl lg:text-2xl lg:leading-normal  ">
            <span className="font-bold text-xl">PT Mitra Solusi Wicaksana</span>{" "}
            juga menawarkan berbagai layanan konsultasi untuk membantu klien
            kami mengembangkan bisnis mereka di Indonesia. Tim kami terdiri dari
            konsultan hukum yang berkualifikasi demi pencapaian kesuksesan
            bisnis anda.
          </p>
          <p className="text-justify text-lg text-slate-600 pb-8 md:text-xl lg:text-2xl lg:leading-normal  ">
            Pada tahun 2023{" "}
            <span className="font-bold text-xl">PT Mitra Solusi Wicaksana</span>{" "}
            mengembangkan bisnisnya pada bidang bidang usaha penyediaan Jasa
            Kantor Bersama (Virtual Office)
          </p>
          <p className="text-justify text-lg text-slate-600 pb-8 md:text-xl lg:text-2xl lg:leading-normal  ">
            Jika anda mencari saran dan panduan ahli untuk membantu pengembangan
            bisnis anda dalam mencapai tujuannya, hubungi kami untuk mempelajari
            lebih lanjut tentang layanan konsultasi kami. Tim konsultan kami
            siap membantu anda membawa bisnis anda ketingkat selanjutnya.”
          </p>
        </div>
        <Image
          className="absolute md:w-36 xl:w-48 top-0 w-24 object-center object-cover"
          src={"/MSW/fill1.svg"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <Image
          className="absolute md:w-28 xl:w-52 bottom-0 right-0 w-24 object-center object-cover rotate-180"
          src={"/MSW/fill1.svg"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Aboutmsw;
