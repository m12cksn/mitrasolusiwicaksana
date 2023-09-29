import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-teks md:p-5">
      <div className="mx-auto container w-full max-w-screen-xl p-6 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-start ">
          <div>
            <div className="mb-7 md:mb-3">
              <a href="https://flowbite.com/" className="flex items-center">
                <Image
                  className="h-8 w-8 mr-3 "
                  src={"/imagesmsw/logomsw.jpg"}
                  width={1000}
                  height={1000}
                  alt="Cruise"
                  priority={true}
                />
                {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="FlowBite Logo"
            /> */}
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                  Mitra Solusi Wicaksana
                </span>
              </a>
            </div>
            <div className="mt-7 md:mt-0">
              <h1 className="text-xl font-semibold border-b-4 inline-block border-slate-800 text-slate-900">
                Contact
              </h1>
              <ul className="flex flex-col mt-2">
                <li className="text-lg text-slate-700">Whatsapp</li>
                <li className="text-lg text-slate-700">Email</li>
                <li className="text-lg text-slate-700">Alamat</li>
                <li className="text-lg text-slate-700">Instagram</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-xl font-semibold border-b-4 inline-block border-slate-800 text-slate-900">
              Layanan
            </h1>
            <ul className="flex flex-col mt-2">
              <li className="text-lg text-slate-700">Pendirian Badan Hukum</li>
              <li className="text-lg text-slate-700">Layanan Hukum</li>
              <li className="text-lg text-slate-700">
                Layanan Penasehat Hukum
              </li>
              <li className="text-lg text-slate-700">Layanan HAKI</li>
              <li className="text-lg text-slate-700">Layanan Pajak</li>
              <li className="text-lg text-slate-700">Layanan Virtual Office</li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center">
          <span className="text-sm text-gray-700 sm:text-center ">
            © 2023{" "}
            <a
              href="https://flowbite.com/"
              className="text-center hover:underline"
            >
              Mitra Solusi Wicaksana™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
