"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Title from "./Title";

const FAQ = () => {
  const accordionData = [
    {
      id: 1,
      question: "Mitra Solusi Wicaksana perusahaan bidang apa?",
      answer:
        "Mitra Solusi Wicaksana merupakan Perseroan Terbatas yang bergerak dibidang jasa Konsultan Hukum. Tujuan kami hadir untuk menyediakan bantuan bagi klien lokal maupun multinasional dalam merintis bisnis di wilayah negara Indonesia. Kami hadir dengan berbagai layanan konsultasi untuk membantu klien kami dalam mengembangkan bisnisnya di Indonesia. Dengan pengalaman yang kami miliki, kami memiliki landasan yang kuat untuk membantu klien kami, biaya terjangkau, layanan hukum dan bisnis yang andal dengan pelayanan yang unggul, berintegritas, dan terpercaya bagi klien. Kami merupakan Konsultan yang berpengalaman dengan rekam jejak yang baik dalam menangani kasus. Berbekal pengalaman dan kemampuan kerjasama tim yang baik serta jaringan hukum dan bisnis yang luas, kami percaya kepuasan klien menjadi prioritas kami.     ",
    },
    {
      id: 2,
      question: "Apa saja layanan yang disediakan PT Mitra Solusi Wicaksana?",
      answer:
        "Kami ada 3 penawaran layanan. Yaitu virtual office, private office, dan jasa pengurusan legalitas perusahaan.",
    },
    {
      id: 3,
      question: "Apakah dapat berkonsultasi terlebih dahulu?",
      answer:
        "Kami akan dengan senang hati melayani Anda jika ingin konsultasi mengenai virtual office dan pengurusan legalitas perusahaan, tim kami siap membantu Anda.",
    },
    {
      id: 4,
      question:
        "Apakah Mitra Solusi Wicaksana dapat menyesuaikan pelayanan hukum lain?",
      answer:
        "Mitra Solusi Wicaksana menyediakan layanan yang dapat disesuaikan untuk memenuhi kebutuhan setiap klien. Dalam prakteknya kami dapat menyediakan berbagai permintaan yang sesuai dengan kebutuhan dan permintaan klien.",
    },
    {
      id: 5,
      question:
        "e	Jika tertarik dengan layanan Mitra Solusi Wicaksana harus menghubungi kemana?",
      answer:
        "Jika anda tertarik dengan pelayanan kami, silahkan hubungi kami dikontak yang telah disediakan.",
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
