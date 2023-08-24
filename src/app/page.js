
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

export default function Home() {
  return (
  <div>
    <div>
      <Navbar />
      <Hero />
      <VO />
      <Contents />
      <Whyus />
      <Msw />
      <Paket />
      <Harga />
      <Maps />
      <Faq />
      <Footer />
    </div>
  </div>
  )
}
