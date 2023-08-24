import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <div className="w-full md:container ">
        <Navbar />
        <div className="px-5 pt-20 pb-5 md:pt-32 md:pb-10 md:px-10">
          <Image
            className="object-contain drop-shadow-lg object-center  w-full lg:mt-0 mt-8 h-72 md:h-[27rem] lg:h-[58rem] lg:rounded-none rounded-xl  md:h-[28rem"
            src="/imagesmsw/legalitas.jpg"
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
