import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const dataCard = [
    {
      imgUrl: "/imagesmsw/4.png",
      title: "Private Silver",
      desc: "Fasilitas lengkap untuk kegiatan Meeting Anda, Mitra Solusi Wicaksana menyediakan berbagai jenis VO  sesuai dengan kebutuhan Anda. Mendapatkan Alamat Kantor ",
      harga: "Rp 1.200.000",
    },
    {
      imgUrl: "/imagesmsw/3.png",
      title: "Paket Gold  ",
      desc: "Dapatkan fasilitas lengkap dalam melaksanakan kegiatan Meeting Anda, benefit dari paket Gold : Alamat Kantor, Virtual Office + meeting room 1jam/bulan",
      harga: "Rp 1.500.000",
    },
    {
      imgUrl: "/imagesmsw/2.jpg",
      title: "Paket Platinum",
      desc: "Mitra Solusi Wicaksana menyediakan berbagain jenis VO sesuai dengan kebutuhan Anda. benefit dari paket Platinum : Alamat Kantor, Virtual Office + meeting room 4jam/bulan",
      harga: "Rp 1.800.000",
    },
    {
      imgUrl: "/imagesmsw/1.png",
      title: "Paket Platinum VIP",
      desc: "Dapatkan berbagai jenis Virtual Office sesuai dengan kebutuhan Anda. benefit dari paket Platinum VIP : Virtual Office + meeting room 4jam/bulan + papan nama usaha",
      harga: "Rp 2.000.000",
    },
  ];
  return (
    <div>
      <div className="w-full container mx-auto mt-5 ">
        <h1 className="text-center text-2xl md:text-3xl  md:leading-normal text-slate-50 font-semibold px-10  ">
          Pilihlah ruangan yang sesuai dengan quota pertemuan Anda
        </h1>

        <div className=" w-full mx-auto ">
          <div className="mt-5 pb-28 px-3 relative   z-30 md:container sm:grid-cols-2 md:grid-cols-1  grid mx-auto gap-5 grid-flow-col-1 xl:gap-10 xl:mt-12 xl:grid xl:grid-cols-2 place-content-center ">
            {dataCard.map((data, index) => (
              <div
                key={index}
                className="max-w-xs shadow bg-slate-100 md:flex md:max-w-3xl xl:max-w-xl  md:pb-10 rounded-xl  mx-auto  overflow-hidden "
              >
                <div
                  // href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                  className="relative md:basis-1/2"
                >
                  <Image
                    className="w-80 rounded-xl h-56 md:h-96 object-center object-cover"
                    src={data.imgUrl}
                    width={1000}
                    height={1000}
                    alt="Cruise"
                    priority={true}
                  />
                  <Link
                    href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                    className="absolute top-0 left-0 bg-primary px-3 py-1 text-slate-50 hover:bg-primary font-semibold transition-all duration-500 ease-in-out hover:text-secondary md:px-5 md:py-2"
                  >
                    Pesan Sekarang
                  </Link>
                </div>
                <div className="py-5 px-2 md:basis-1/2 md:mt-5 md:shadow-lg md:p-6 md:bg-slate-50 ">
                  <Link href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A">
                    <h5 className="mb-2 md:mb-5 md:text-3xl md:tracking-normal text-2xl font-bold tracking-tight text-slate-50 ">
                      {data.title}
                    </h5>
                  </Link>
                  <p className=" md:mb-4 text-justify font-normal md:text-lg text-gray-500 ">
                    {data.desc}
                  </p>
                  <h1 className="text-slate-50 mt-2 inline-block px-5 shadow-md py-2 bg-primary font-semibold hover:bg-primary transition-all duration-500 ease-in-out hover:text-secondary md:">
                    {data.harga}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full mx-auto ">
          <div className="mt-5 pb-28 px-3 relative   z-30 md:container sm:grid-cols-2 md:grid-cols-1  grid mx-auto gap-5 grid-flow-col-1 xl:gap-10 xl:mt-12 xl:grid xl:grid-cols-2 place-content-center ">
            <div className="max-w-xs shadow bg-slate-100 md:flex md:max-w-3xl xl:max-w-xl  md:pb-10 rounded-xl  mx-auto  overflow-hidden ">
              <div
                // href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                className="relative md:basis-1/2"
              >
                <Image
                  className="w-80 rounded-xl h-56 md:h-96 object-center object-cover"
                  src="/imagesmsw/hero3.jpg"
                  width={1000}
                  height={1000}
                  alt="Cruise"
                  priority={true}
                />
                <Link
                  href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                  className="absolute top-0 left-0 bg-primary px-3 py-1 text-slate-50 hover:bg-primary font-semibold transition-all duration-500 ease-in-out hover:text-secondary md:px-5 md:py-2"
                >
                  Pesan Sekarang
                </Link>
              </div>
              <div className="py-5 px-2 md:basis-1/2 md:mt-5 md:shadow-lg md:p-6 md:bg-slate-50 ">
                <Link href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A">
                  <h5 className="mb-2 md:mb-5 md:text-3xl md:tracking-normal text-2xl font-bold tracking-tight text-primary ">
                    Work Space
                  </h5>
                </Link>
                <p className=" md:mb-4 text-justify font-normal md:text-lg text-gray-500 ">
                  Fasilitas : Ruang Kerja
                </p>
                <h1 className="text-slate-50 mt-2 inline-block px-5 shadow-md py-2 bg-primary font-semibold hover:bg-primary transition-all duration-500 ease-in-out hover:text-secondary md:">
                  1 jam = Rp, 55.000
                </h1>
                <h1 className="text-slate-50 mt-2 inline-block px-5 shadow-md py-2 bg-primary font-semibold hover:bg-primary transition-all duration-500 ease-in-out hover:text-secondary md:">
                  5 jam = Rp, 200.000
                </h1>
                <h1 className="text-slate-50 mt-2 inline-block px-5 shadow-md py-2 bg-primary font-semibold hover:bg-primary transition-all duration-500 ease-in-out hover:text-secondary md:">
                  1 Bulan = Rp, 1.500.000
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
