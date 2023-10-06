import React from "react";
import Image from "next/image";
import Link from "next/link";

const Discuss = () => {
  return (
    <div className="bg-primary px-4 py-10 xl:p-12">
      <div className="bg-white shadow-md gap-5 xl:gap-8 items-center md:flex ring-4 ring-inset ring-slate-100 max-w-sm sm:max-w-xl md:max-w-3xl container mx-auto px-4 py-6 lg:max-w-5xl lg:p-8 xl:max-w-7xl ">
        <Image
          className="w-full md:w-80 lg:w-[28rem] xl:w-[32rem] mb-2 object-center object-cover"
          src="/imagesmsw/relasi.jpg"
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <div className="">
          <h1 className="text-lg mb-2 lg:text-4xl font-semibold md:text-2xl xl:text-3xl text-slate-900 ">
            Discuss with Us
          </h1>
          <p className="text-slate-700 md:text-lg lg:text-xl lg:leading-normal lg:mb-3 l xl:leading-relaxed xl:mt-3 tracking-wider mb-5">
            Let’s discuss your business and investment opportunities in
            Indonesia. We will assist you in navigating your business with the
            most recent regulatory updates.
          </p>
          <div className=" mt-5 xl:mt-10">
            <Link
              href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
              className="px-5 py-2 lg:px-10 lg:py-3 bg-primary md:text-lg lg:text-xl  text-teks tracking-wide font-semibold mt-6 rounded shadow lg:tracking-wider "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
