import React from "react";
import Image from "next/image";
import Title from "./Title";
import Link from "next/link";

const Contents = () => {
  const dataCard = [
    {
      imgUrl: "/imagesmsw/1.png",
      title: "Lokasi Strategis dan Mudah Di Akses",
      desc: "Alamat perkantoran berada di lokasi yang bergengsi, mudah diakses, yang akan meningkatkan kredibilitas usaha Anda.",
    },
    {
      imgUrl: "/imagesmsw/image2.jpg",
      title: "Berada di 5 Kota Besar Di Indonesia  ",
      desc: "Saat ini,Mitra Solusi Wicaksana memiliki layanan perkantoran di 5 kota besar, yaitu: Bandung, Jakarta, Bekasi, Bogor, dan Tangerang.",
    },
    {
      imgUrl: "/imagesmsw/3.png",
      title: "Fasilitas Terbaik dengan Harga Terjangkau",
      desc: "Mitra Solusi Wicaksana menawarkan layanan Virtual Office dengan harga termurah, dengan banyak fasilitas yang terjangkau setiap bulannya",
    },
    {
      imgUrl: "/imagesmsw/4.png",
      title: "Terpercaya 100% Kepuasan Client",
      desc: "Mitra Solusi Wicaksana telah berpengalaman, dan tersertifikasi untuk menjamin kepuasan pelanggan 100%.",
    },
  ];
  return (
    <div className="w-full mt-40 md:mt-[24.7rem] lg:mt-[26rem] bg-slate-100">
      <div className="relative px-5 pt-12  container mx-auto">
        <Title
          img="/MSW/content.svg"
          title="Solusi untuk anda yang sedang atau akan menjalankan usaha"
        />
        <p className="text-primary text-center mt-5  md:text-lg lg:text-xl">
          Cari kantor privat dengan banyak fasilitas menarik? PT. Mitra Solusi
          Wicaksana Solusinya
        </p>
        <div className="mt-5 pb-28 px-3 relative z-30 md:container grid mx-auto gap-5 grid-flow-col-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 place-content-center ">
          {dataCard.map((data, index) => (
            <div
              key={index}
              className="max-w-xs md:max-w-sm lg:max-w-xs bg-white  rounded-lg shadow mt-5  overflow-hidden"
            >
              <Link href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A">
                <Image
                  className="w-full h-56 object-center object-cover"
                  src={data.imgUrl}
                  width={1000}
                  height={1000}
                  alt="Cruise"
                  priority={true}
                />
              </Link>
              <div className="p-5  ">
                <Link href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary ">
                    {data.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-500 ">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Image
          className="absolute w-auto h-auto bottom-0 left-0 z-10"
          src="/icons/13.png"
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Contents;
