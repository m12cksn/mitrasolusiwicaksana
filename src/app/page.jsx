"use client";
import Discuss from "@/components/Discuss";
import Hero from "@/components/Hero.jsx";
import Readmore from "@/components/Readmore";

export default function Home() {
  const title = "PT Mitra Solusi Wicaksana";
  const titleLarge =
    " Perseroan Terbatas yang bergerak di bidang Jasa Konsultan Hukum Perusahaan, berperan sebagai mitra usaha dalam menunjang aktivitas  kegiatan usaha khususnya pada sektor perizinan dan legalitas usaha  termasuk pada kegiatan due diligence dokumen hukum. Jasa konsultan  hukum yang diberikan baik kepada perusahaan ataupun perorangan  senantiasa mengikuti dinamisasi regulasi yang berlaku, sehingga solusi  yang diberikan sesuai dengan koridor hukum positif. Berdiri sejak  tahun 2017 , perusahaan kami berpengalaman didukung dengan tenaga  profesional yang berkompeten berkomitmen memberikan solusi terbaik  sebagai mitra usaha sehingga membentuk suatu kepercayaan di tengah  tingginya resiko usaha saat ini. Pada tahun 2023, Perusahaan kami pun  semakin mengembangkan bidang usaha dalam penyediaan Jasa Kantor  bersama (Virtual Office) untuk mendukung sarana dan prasarana mitra  usaha.";
  const titleSmall =
    " Perseroan Terbatas yang bergerak di bidang Jasa Konsultan Hukum    Perusahaan, berperan sebagai mitra usaha dalam menunjang aktivitas kegiatan usaha khususnya pada sektor perizinan dan legalitas usaha termasuk pada kegiatan due diligence dokumen hukum.";
  return (
    <div>
      <div>
        <Hero title={title} titleLarge={titleLarge} titleSmall={titleSmall} />
        <Readmore />
        <Discuss />
      </div>
    </div>
  );
}
