import Contents from "@/components/Contents.jsx";
import Hero from "@/components/Hero.jsx";
import Msw from "@/components/Msw";
import Whyus from "@/components/Whyus.jsx";
import Paket from "@/components/Paket";
import Harga from "@/components/Harga";
import Footer from "@/components/Footer";
import Faq from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import VO from "@/components/VO";
import Maps from "@/components/Maps";
import Discuss from "@/components/Discuss";
import Aboutmsw from "@/components/Aboutmsw";

export default function Home() {
  const title = "PT Mitra Solusi Wicaksana";
  const titleLarge =
    " Perseroan Terbatas yang bergerak di bidang Jasa Konsultan Hukum Perusahaan, berperan sebagai mitra usaha dalam menunjang aktivitas  kegiatan usaha khususnya pada sektor perizinan dan legalitas usaha  termasuk pada kegiatan due diligence dokumen hukum. Jasa konsultan  hukum yang diberikan baik kepada perusahaan ataupun perorangan  senantiasa mengikuti dinamisasi regulasi yang berlaku, sehingga solusi  yang diberikan sesuai dengan koridor hukum positif. Berdiri sejak  tahun 2017 , perusahaan kami berpengalaman didukung dengan tenaga  profesional yang berkompeten berkomitmen memberikan solusi terbaik  sebagai mitra usaha sehingga membentuk suatu kepercayaan di tengah  tingginya resiko usaha saat ini. Pada tahun 2023, Perusahaan kami pun  semakin mengembangkan bidang usaha dalam penyediaan Jasa Kantor  bersama (Virtual Office) untuk mendukung sarana dan prasarana mitra  usaha.";
  const titleSmall =
    " Perseroan Terbatas yang bergerak di bidang Jasa Konsultan Hukum    Perusahaan, berperan sebagai mitra usaha dalam menunjang aktivitas kegiatan usaha khususnya pada sektor perizinan dan legalitas usaha termasuk pada kegiatan due diligence dokumen hukum.";
  return (
    <div>
      <div>
        <Navbar />
        <Hero titleLarge={titleLarge} titleSmall={titleSmall} />
        <Aboutmsw />
        {/* <VO />
      <Contents />
      <Whyus />
      <Msw />
      <Paket />
      <Harga /> */}
        <Maps />
        {/* <Faq /> */}
        <Discuss />
        <Footer />
      </div>
    </div>
  );
}
