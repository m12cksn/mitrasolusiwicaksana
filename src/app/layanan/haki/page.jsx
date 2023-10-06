import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { BiSolidCheckShield } from "react-icons/bi";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-secondary p-3">
        <Image
          className=" mt-5 mb-3 w-24 mx-auto text-teks"
          src="/MSW/content.svg"
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <h1 className="text-center mb-1 text-2xl md:text-3xl xl:text-4xl md:leading-normal text-teks font-semibold px-5">
          Layanan HAKI
        </h1>
        <h1 className="text-center text-2xl md:text-3xl xl:text-4xl md:leading-normal text-teks font-semibold px-5 lg:mt-4">
          PT. Mitra Solusi Wicaksana
        </h1>
        <div className=" container pt-5 pb-8">
          <h1 className="w-36 h-10 lg:w-60 lg:h-12 lg:text-xl xl:text-2xl text-teks tracking-wider uppercase z-30 bg-primary text-xl  flex items-center justify-center py-2 px-5 rounded-sm  md:text-xl font-bold  xl:h-14 mb-3 ">
            Meliputi
          </h1>
          <div className="flex flex-col gap-3">
            <h1 className=" text-justify bg-red-200 py-2 px-5 tracking-wide leading-normal text-slate-700 md:text-lg md:p-5  lg:text-xl md:leading-normal xl:leading-relaxed  ">
              <span className="font-bold">Layanan Pengecekan Merek </span>:
              untuk mengetahui peluang atas pendaftaran merek
            </h1>
            <div className="bg-red-200 py-2 px-5 md:p-5 ">
              <h1 className="text-slate-800 text-justify tracking-wide leading-normal  md:text-lg   lg:text-xl md:leading-normal xl:leading-relaxed ">
                <span className="font-bold ">Pendaftaran Merek</span> : Merek
                merupakan identitas dagang yang yang melekat pada perusahaan
                anda
              </h1>
              <ul className="mt-2 flex gap-2 flex-col">
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">Pengecekan merek </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Permohonan pendaftaran{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Monitoring pendaftaran{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Sertifikat pendaftaran{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Konsultasi seputar pendaftaran merek{" "}
                  </span>
                </li>
              </ul>
            </div>
            <h1 className=" text-justify bg-red-200 py-2 px-5 tracking-wide leading-normal text-slate-700 md:text-lg md:p-5  lg:text-xl md:leading-normal xl:leading-relaxed  ">
              <span className="font-bold">Perpanjangan Mereke </span>:
              perpanjangan atas hak merek yang terdaftar
            </h1>
            <h1 className=" text-justify bg-red-200 py-2 px-5 tracking-wide leading-normal text-slate-700 md:text-lg md:p-5  lg:text-xl md:leading-normal xl:leading-relaxed  ">
              <span className="font-bold">Pengalihan Merek </span>: Pengalihan
              Hak Merek terdaftar kepada pihak lain
            </h1>
            <div className="bg-red-200 py-2 px-5 md:p-5 ">
              <h1 className="text-slate-800 text-justify tracking-wide leading-normal  md:text-lg   lg:text-xl md:leading-normal xl:leading-relaxed">
                <span className="font-bold ">Pendaftaran Hak Cipta</span> :
                pendaftaran Hak Kekayaan Intelektual (karya seni seperti lagu,
                lukisan dan lain sebagainya)
              </h1>
              <ul className="mt-2 flex gap-2 flex-col ">
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Persiapan Pendaftaran Hak Cipta{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Permohonan Pendaftaran Hak Cipta{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Monitoring Pendaftaran Hak Cipta{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Sertifikat Hak Cipta{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Konsultasi seputar hak cipta{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-red-200 py-2 px-5 md:p-5 ">
              <h1 className="text-slate-800 text-justify tracking-wide leading-normal  md:text-lg   lg:text-xl md:leading-normal xl:leading-relaxed">
                <span className="font-bold ">Pendaftaran Hak Paten</span> :
                pendaftaran Hak Kekayaan Intelektual (karya seni seperti lagu,
                lukisan dan lain sebagainya)
              </h1>
              <ul className="mt-2 flex gap-2 flex-col">
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Konsultasi Pendaftaran Hak Paten{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Pengecekan Hak Paten{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Persiapan Pendaftaran Hak Paten{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Monitoring Pendaftaran Hak Paten{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg"> Sertifikat Paten</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-200 py-2 px-5 md:p-5">
              <h1 className="text-slate-800 text-justify tracking-wide leading-normal  md:text-lg   lg:text-xl md:leading-normal xl:leading-relaxed">
                <span className="font-bold ">Pendaftaran Design Industri</span>{" "}
                : Pendaftaran Hak Kekayaan Intelektual berupa kreasi design
                khusus
              </h1>
              <ul className="mt-2 flex gap-2 flex-col">
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Pengecekan Design Industri{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Permohonan pendaftaran design industry{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Monitoring pendaftaran design{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    Sertifikasi design industry{" "}
                  </span>
                </li>
                <li className="flex gap-2 items-center text-slate-800">
                  <BiSolidCheckShield className="text-primary lg:text-lg" />
                  <span className="text-sm lg:text-lg">
                    {" "}
                    Konsultasi seputar pendaftaran design industri
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
