import React from "react";
import Title from "./Title";
import Image from "next/image";

const Msw = () => {
  return (
    <div className="relative ">
      <div className="container max-w-sm md:max-w-2xl xl:max-w-5xl">
        <Title
          img="/MSW/content.svg"
          title="PT. Mitra Solusi Wicaksana menawarkan berbagai Layanan Perkantoran sesuai kebutuhan
            usaha Anda."
        />
        <p className=" text-lg text-slate-600 pb-8 md:text-xl md:text-center xl:text-2xl xl:leading-normal ">
          Sesuai untuk Freelancer, UKM, Startup, atau apapun usaha Anda. Untuk
          Anda yang telah menjalankan usaha,dan membutuhkan kantor privat, atau
          untuk Anda yang baru memulai usaha, membutuhkan alamat usaha yang
          strategis, serta untuk Anda yang membutuhkan tempat kerja yang
          fleksibel.
        </p>
      </div>
      <Image
        className="absolute md:w-36 xl:w-48 top-0 w-24 object-center object-cover"
        src={"/MSW/fill1.svg"}
        width={1000}
        height={1000}
        alt="Cruise"
        priority={true}
      />
      <Image
        className="absolute md:w-28 xl:w-52 bottom-0 right-0 w-24 object-center object-cover rotate-180"
        src={"/MSW/fill1.svg"}
        width={1000}
        height={1000}
        alt="Cruise"
        priority={true}
      />
    </div>
  );
};

export default Msw;
