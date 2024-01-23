import React, { useState } from "react";
import Link from "next/link";

const Readmore = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  //   const [isShowLessVisible, setIsShowLessVisible] = useState(false);
  //   const maxLength = 595; // Jumlah karakter maksimal yang ingin ditampilkan secara default

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
    // setIsShowLessVisible(!isShowLessVisible);
  };

  const toggleShowLess = () => {
    setIsExpanded(false);
    // setIsShowLessVisible(false);
  };

  //   const truncatedText = isExpanded
  //     ? fullText // Gantilah fullText dengan teks lengkap Anda
  //     : fullText.slice(0, maxLength) + " . . .";

  return (
    <section className="bg-center relative bg-no-repeat bg-[url('/imagesmsw/logo5.jpg')] bg-cover bg-gray-700 bg-blend-multiply overflow-hidden ">
      <div className="px-4 xl:px-0 pt-5 xl:pt-10 max-w-md mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl l py-10">
        <div className=" flex justify-center">
          <h1 className="text-slate-50 mt-8 text-3xl font-bold mb-3 border-b-4 inline-block ">
            Mitra Solusi Wicaksana
          </h1>
        </div>
        <p
          className={`text-justify text-lg text-slate-50 pb-8 md:text-xl lg:text-2xl md:leading-relaxed lg:leading-loose ${
            !isExpanded ? "line-clamp-7" : ""
          }`}
        >
          <span className="font-bold text-xl lg:text-2xl">
            PT Mitra Solusi Wicaksana
          </span>{" "}
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

        <p
          className={`text-justify text-lg text-slate-50 pb-8 md:text-xl lg:text-2xl lg:leading-normal ${
            !isExpanded ? "hidden" : ""
          }`}
        >
          <span className="font-bold text-xl lg:text-2xl">
            PT Mitra Solusi Wicaksana
          </span>{" "}
          juga menawarkan berbagai layanan konsultasi untuk membantu klien kami
          mengembangkan bisnis mereka di Indonesia. Tim kami terdiri dari
          konsultan hukum yang berkualifikasi demi pencapaian kesuksesan bisnis
          anda.
        </p>

        <p
          className={`text-justify text-lg text-slate-50 pb-8 md:text-xl lg:text-2xl lg:leading-normal ${
            !isExpanded ? "hidden" : ""
          }`}
        >
          Pada tahun 2023{" "}
          <span className="font-bold text-xl lg:text-2xl">
            PT Mitra Solusi Wicaksana
          </span>{" "}
          mengembangkan bisnisnya pada bidang bidang usaha penyediaan Jasa
          Kantor Bersama (Virtual Office)
        </p>

        <p
          className={`text-justify text-lg text-slate-50 pb-8 md:text-xl lg:text-2xl lg:leading-normal ${
            !isExpanded ? "hidden" : ""
          }`}
        >
          Jika anda mencari saran dan panduan ahli untuk membantu pengembangan
          bisnis anda dalam mencapai tujuannya, hubungi kami untuk mempelajari
          lebih lanjut tentang layanan konsultasi kami. Tim konsultan kami siap
          membantu anda membawa bisnis anda ketingkat selanjutnya.”
        </p>
        {!isExpanded && (
          <button
            onClick={toggleReadMore}
            className="text-blue-500 lg:text-xl font-semibold cursor-pointer"
          >
            Read more . . .
          </button>
        )}
        {isExpanded && (
          <button
            onClick={toggleShowLess}
            className="text-blue-500 lg:text-xl font-semibold cursor-pointer"
          >
            Show Less . . .
          </button>
        )}
      </div>
    </section>
  );
};

export default Readmore;
