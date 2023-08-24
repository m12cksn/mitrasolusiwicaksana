import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const visi = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Image
          className="w-full xl:h-[40rem]  object-center object-cover"
          src={"/imagesmsw/banner4.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <div className="bg-secondary text-primary p-5">
          <div>
            <h1 className="text-2xl">PT MITRA SOLUSI WICAKSANA</h1>
            <h3 className="mt-3">
              Perseroan Terbatas yang bergerak di bidang jasa konsultan hukum
              perusahaan, berperan sebagai mitra usaha dalam menunjang aktivitas
              kegiatan usaha khususnya pada sektor perizinan dan legalitas usaha
              termasuk pada kegiatan due diligence dokumen hukum. Jasa konsultan
              hukum yang diberikan baik kepada perusahaan ataupun perorangan
              senantiasa mengikuti dinamisasi regulasi yang berlaku, sehingga
              solusi yang diberikan sesuai dengan koridor hukum positif. Berdiri
              sejak tahun 2017, perusahaan kami berpengalaman didukung dengan
              tenaga profesional yang berkompeten berkomitmen memberikan solusi
              terbaik sebagai mitra usaha sehingga membentuk suatu kepercayaan
              di tengah tingginya resiko usaha saat ini. Pada tahun 2023,
              perusahaan kami pun semakin mengembangkan bidang usaha dalam
              penyediaan jasa kantor bersama (virtual office) untuk mendukung
              sarana dan prasarana mitra usaha.
            </h3>
          </div>
          <div className="mt-5">
            <h1 className="text-2xl text-center">Visi Dan Misi Perusahaan</h1>
            <div className="mt-3">
              <h1 className="text-xl text-center">Visi</h1>
              <h2 className="mt-3 text-center">
                Menjadi mitra usaha yang solutif bagi perusaahaan yang mengalami
                kendala usaha, dengan mengedepankan solusi sesuai ketentuan
                hukum yang berlaku.”
              </h2>
            </div>
            <div>
              <h1 className="text-xl text-center mt-5">Misi</h1>
              <h2 className="text-center mt-3">
                “Membantu usaha para mitra berjalan sesuai dengan prosedur hukum
                yang berlaku dan senantiasa mengikuti dinamisasi regulasi hukum
                yang berlaku di Indonesia.”
              </h2>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-2xl text-center">
              Bidang Usaha PT Mitra Solusi Wicaksana:
            </h1>
            <ul className="text-center">
              <li className="mt-3">Jasa Konsultan Hukum Perusahaan</li>
              <li>Jasa Kantor Bersama (Virtual Ofice)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default visi;
