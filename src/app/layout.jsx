import Navbar from "@/components/Navbar";
import "./globals.css";
import { Lato } from "next/font/google";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "PT. Mitra Solusi Wicaksana",
  description:
    "Mitra solusi wicaksana, Jasa Konsultan Hukum Perusahaan dan Penyewaan Virtual Office",
  verification: {
    google:
      "google-site-verification=kk-gz3fKOsZwThRqPUyOxVr9pqQrtgdoTuR4Nuz92ec",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className} suppressHydrationWarning>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
      {/* <Whatsapp /> */}
    </html>
  );
}
