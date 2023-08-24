"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Title from "./Title";

const FAQ = () => {
  const accordionData = [
    {
      id: 1,
      question: "Mitra Solusi Wicaksana ini perusahaan di bidang apa?",
      answer:
        "PT MITRA SOLUSI WICAKSANA berkedudukan di Lippo Tower Holland Village, Lantai 12 Unit 2910, Jalan Letjend Suprapto Kav.60 Nomor 1, Jakarta Pusat,, berdiri sejak tanggal 20 Juni Tahun 2017 sesuai dengan Surat Keputusan Menteri Hukum dan HAM Nomor AHU-0031771.AH.01.01 Tahun 2017, bergerak pada bidang jasa konsultan hukum perusahaan dan jasa kantor bersama (virtual office) terdafkat dalam Perhimpunan Pengusaha Jasa Kantor Bersama Indonesia (PERJAKBI) berdasarkan Sertifikat Nomor:007/Perjakbi-Keanggotaan/V/2023.",
    },
    {
      id: 2,
      question: "Apa saja Layanannya?",
      answer:
        "Kami ada 3 penawaran layanan. Yaitu virtual office, private office, dan jasa pengurusan legalitas perusahaan.",
    },
    {
      id: 3,
      question: "Apakah bisa konsultasi terlebih dahulu?",
      answer:
        "Kami akan dengan senang hati melayani Anda jika ingin konsultasi mengenai virtual office dan pengurusan legalitas perusahaan, tim kami siap membantu Anda.",
    },
    {
      id: 4,
      question:
        "Jika saya tertarik dengan layanan Mitra Solusi Wicaksana harus menghubungi kemana?",
      answer:
        "Baik, Anda bisa langsung hubungi kami nomor berikut bisa via tlp/whatsappp 0822-xxxx-xxxx.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };
  return (
    <section className="bg-slate-100 pt-5 pb-10 grid place-items-center">
      <Title img="/MSW/content.svg" title="FAQS" />
      <div className="px-7 md:px-10 md:max-w-3xl xl:max-w-6xl xl:py-2">
        {accordionData.map((data, index) => (
          <div className="pt-3 md:5 xl:pt-7" key={index}>
            <div
              className="bg-white shadow py-[25px] px-5 gap-5 flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <p className="font-semibold text-lg">{data.question}</p>
              <div className="text-[30px]">
                {openIndexes.includes(index) ? (
                  <AiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </div>
            </div>
            <Collapse isOpened={openIndexes.includes(index)}>
              <div className="bg-slate-100 shadow-lg px-5 tracking-wide pb-[20-px] leading-loose py-8">
                {data.answer}
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
