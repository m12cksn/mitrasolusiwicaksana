import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import React from "react";
// import Link from "next/link";
// import Harga from "@/components/Harga";

const page = () => {
  const yes = (
    <svg
      className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
  const no = (
    <svg
      className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
  return (
    <div>
      <Navbar />

      <div className="w-full bg-primary">
        <div className="w-full ">
          <div className="pt-8 pb-5">
            <h1 className=" text-xl px-5 text-justify md:text-3xl xl:text-4xl md:leading-normal text-teks font-semibold xl:max-w-3xl xl:mx-auto xl:leading-snug sm:text-center sm:leading-normal sm:text-2xl">
              PT. Mitra Solusi Wicaksana Menyediakan layanan Pendirian PT dan
              CV. Untuk Pendirian PT kami memiliki beberapa paket antara lain
            </h1>
          </div>

          <div className="container mx-auto px-7 lg:px-0  md:flex flex-wrap gap-5 lg:gap-0 lg:container-off xl:grid xl:grid-cols-3 lg-px-5 ">
            <div className="max-w-sm mb-5 md:mb-0 lg:mb-5 p-4 mx-auto border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs xl:max-w-3xl gap-5  ">
              <h5 className="mb-4 text-xl   text-primary font-bold ">
                Paket A
              </h5>
              <div className="mx-auto w-full  ">
                <h1 className="ml-5 mb-1">Modal Usaha </h1>
                <h2 className="text-center text-3xl">Di bawah 1 Milyar</h2>
              </div>
              <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
                <h1> / Tahun</h1>
              </span>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  {yes}
                  <span className="text-base  leading-tight  text-gray-800 font-semibold">
                    Akta Pendirian
                  </span>
                </li>
                <li className="flex space-x-3">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800 ">
                    SK Kemenkumham
                  </span>
                </li>

                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Pengecekan nama Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NPWP (Nomor Pokok Wajib Pajak)
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NIB & Sertifikat Standard
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {no}
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Penyewaan Alamat VO 1 Tahun
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {no}
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Nomer Telepon Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {no}
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Meeting Room 4 jam perbulan
                  </span>
                </li>
              </ul>
              <Link
                href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </Link>
            </div>
            <div className="max-w-sm mb-5 md:mb-0 lg:mb-5  p-4 mx-auto border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs xl:max-w-3xl gap-5  ">
              <h5 className="mb-4 text-xl   text-primary font-bold ">
                Paket B
              </h5>
              <div className="mx-auto w-full  ">
                <h1 className="ml-5 mb-1">Modal Usaha </h1>
                <h2 className="text-center text-3xl">Di bawah 1 Milyar</h2>
              </div>
              <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
                <h1>/ Tahun</h1>
              </span>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  {yes}
                  <span className="text-base  leading-tight  text-gray-800 font-semibold">
                    Akta Pendirian
                  </span>
                </li>
                <li className="flex space-x-3">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800 ">
                    SK Kemenkumham
                  </span>
                </li>

                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Pengecekan nama Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NPWP (Nomor Pokok Wajib Pajak)
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NIB & Sertifikat Standard
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Penyewaan Alamat VO 1 Tahun
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {no}
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Nomer Telepon Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {no}
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Meeting Room 4 jam perbulan
                  </span>
                </li>
              </ul>
              <Link
                href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </Link>
            </div>
            <div className="max-w-sm mb-5 md:mb-0 lg:mb-5 p-4 mx-auto border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs xl:max-w-3xl gap-5  ">
              <h5 className="mb-4 text-xl   text-primary font-bold ">
                Paket C
              </h5>
              <div className="mx-auto w-full  ">
                <h1 className="ml-5 mb-1">Modal Usaha </h1>
                <h2 className="text-center text-3xl">Di bawah 1 Milyar</h2>
              </div>
              <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
                <h1>/ Tahun</h1>
              </span>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  {yes}
                  <span className="text-base  leading-tight  text-gray-800 font-semibold">
                    Akta Pendirian
                  </span>
                </li>
                <li className="flex space-x-3">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800 ">
                    SK Kemenkumham
                  </span>
                </li>

                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Pengecekan nama Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NPWP (Nomor Pokok Wajib Pajak)
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NIB & Sertifikat Standard
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Penyewaan Alamat VO 1 Tahun
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Nomer Telepon Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Meeting Room 4 jam perbulan
                  </span>
                </li>
              </ul>
              <Link
                href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </Link>
            </div>
            <div className="max-w-sm mb-5 md:mb-0 lg:mb-5 p-4 mx-auto border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs xl:max-w-3xl gap-5  ">
              <h5 className="mb-4 text-xl   text-primary font-bold ">
                Paket D
              </h5>
              <div className="mx-auto w-full  ">
                <h1 className="ml-5 mb-1">Modal Usaha </h1>
                <h2 className="text-center text-3xl">Di atas 1 Milyar</h2>
              </div>
              <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
                <h1> / Tahun</h1>
              </span>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  {yes}
                  <span className="text-base  leading-tight  text-gray-800 font-semibold">
                    Akta Pendirian
                  </span>
                </li>
                <li className="flex space-x-3">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800 ">
                    SK Kemenkumham
                  </span>
                </li>

                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Pengecekan nama Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NPWP (Nomor Pokok Wajib Pajak)
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NIB & Sertifikat Standard
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {no}
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Penyewaan Alamat VO 1 Tahun
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {no}
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Nomer Telepon Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {no}
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Meeting Room 4 jam perbulan
                  </span>
                </li>
              </ul>
              <Link
                href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </Link>
            </div>
            <div className="max-w-sm mb-5 md:mb-0 lg:mb-5 p-4 mx-auto border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs xl:max-w-3xl gap-5  ">
              <h5 className="mb-4 text-xl   text-primary font-bold ">
                Paket E
              </h5>
              <div className="mx-auto w-full  ">
                <h1 className="ml-5 mb-1">Modal Usaha </h1>
                <h2 className="text-center text-3xl">Di atas 1 Milyar</h2>
              </div>
              <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
                <h1>/ Tahun</h1>
              </span>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  {yes}
                  <span className="text-base  leading-tight  text-gray-800 font-semibold">
                    Akta Pendirian
                  </span>
                </li>
                <li className="flex space-x-3">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800 ">
                    SK Kemenkumham
                  </span>
                </li>

                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Pengecekan nama Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NPWP (Nomor Pokok Wajib Pajak)
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NIB & Sertifikat Standard
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Penyewaan Alamat VO 1 Tahun
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {no}
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Nomer Telepon Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {no}
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Meeting Room 4 jam perbulan
                  </span>
                </li>
              </ul>
              <Link
                href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </Link>
            </div>
            <div className="max-w-sm mb-5 md:mb-0 lg:mb-5 p-4 mx-auto border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs xl:max-w-3xl gap-5  ">
              <h5 className="mb-4 text-xl   text-primary font-bold ">
                Paket F
              </h5>
              <div className="mx-auto w-full  ">
                <h1 className="ml-5 mb-1">Modal Usaha </h1>
                <h2 className="text-center text-3xl">Di atas 1 Milyar</h2>
              </div>
              <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
                <h1>/ Tahun</h1>
              </span>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  {yes}
                  <span className="text-base  leading-tight  text-gray-800 font-semibold">
                    Akta Pendirian
                  </span>
                </li>
                <li className="flex space-x-3">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800 ">
                    SK Kemenkumham
                  </span>
                </li>

                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Pengecekan nama Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NPWP (Nomor Pokok Wajib Pajak)
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    NIB & Sertifikat Standard
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Penyewaan Alamat VO 1 Tahun
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Nomer Telepon Perusahaan
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  {yes}
                  <span className="text-base font-semibold  leading-tight text-gray-800">
                    Meeting Room 4 jam perbulan
                  </span>
                </li>
              </ul>
              <Link
                href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
