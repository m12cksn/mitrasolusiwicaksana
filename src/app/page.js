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
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
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
