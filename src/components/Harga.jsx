import React from "react";
import Title from "./Title";
import Image from "next/image";

const Harga = () => {
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
    <div className="w-full bg-primary">
      <div className="w-full ">
        <div className="pt-8 pb-5">
          <h1 className="text-center text-2xl md:text-3xl xl:text-4xl md:leading-normal text-teks font-semibold xl:max-w-3xl xl:mx-auto xl:leading-snug">
            Paket Harga dan Benefit Mitra Solusi Wicaksana
          </h1>
        </div>

        <div className="mt-5 pb-28  relative z-30 md:container grid mx-auto gap-5 grid-flow-col-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 lg:container lg:mx-auto place-content-center  lg:flex lg:pb-10 flex-wrap justify-center  ">
          <div className="w-full max-w-sm p-4  border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs  ">
            <h5 className="mb-4 text-xl   text-primary font-bold ">
              Paket Silver
            </h5>
            <div className="flex justify-center items-baseline text-gray-900 ">
              <span className="text-3xl xl:text-2xl font-semibold">Rp</span>
              <span className="text-5xl ml-2 font-extrabold tracking-wide">
                1,2 Juta
              </span>
            </div>
            <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
              <h1>/ Tahun</h1>
            </span>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3 items-center">
                {yes}
                <span className="text-base  leading-tight  text-gray-800 font-semibold">
                  Alamat Virtual Office
                </span>
              </li>
              <li className="flex space-x-3">
                {no}
                <span className="text-base font-normal line-through leading-tight text-gray-500 ">
                  Nomer Telepon Virtual
                </span>
              </li>

              <li className="flex space-x-3 line-through decoration-gray-500">
                {no}
                <span className="text-base font-normal leading-tight text-gray-500">
                  Meeting Room 4 jam / bulan
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                {no}
                <span className="text-base font-normal leading-tight text-gray-500">
                  Papan Nama Usaha
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div className="w-full max-w-xs p-4  border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs   ">
            <h5 className="mb-4 text-xl font-bold  text-primary ">
              Paket Gold
            </h5>
            <div className="flex justify-center items-baseline text-gray-900 ">
              <span className="text-3xl xl:text-2xl font-semibold">Rp</span>
              <span className="text-5xl tracking-wide ml-2 font-extrabold ">
                1,5 Juta
              </span>
            </div>
            <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
              <h1>/ Tahun</h1>
            </span>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3 items-center">
                {yes}
                <span className="text-base  leading-tight  text-gray-800 font-bold">
                  Alamat Virtual Office
                </span>
              </li>
              <li className="flex space-x-3">
                {yes}
                <span className="text-base font-bold  leading-tight text-gray-800 ">
                  Nomer Telepon Virtual
                </span>
              </li>
              <li className="flex space-x-3">
                {yes}
                <span className="text-base font-bold  leading-tight text-gray-700 ">
                  Meeting Room 1 jam / bulan
                </span>
              </li>

              <li className="flex space-x-3 line-through decoration-gray-500">
                {no}
                <span className="text-base font-normal leading-tight text-gray-500">
                  Papan Nama Usaha
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div className="w-full max-w-xs p-4  border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs   ">
            <h5 className="mb-4 text-xl font-bold text-primary ">
              Paket Platinum
            </h5>
            <div className="flex justify-center items-baseline text-gray-900 ">
              <span className="text-3xl xl:text-2xl font-semibold">Rp</span>
              <span className="text-5xl ml-2 font-extrabold tracking-wide">
                1,8 Juta
              </span>
            </div>
            <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
              <h1>/ Tahun</h1>
            </span>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3 items-center">
                {yes}
                <span className="text-base font-bold leading-tight  text-gray-700">
                  Alamat Virtual Office
                </span>
              </li>
              <li className="flex space-x-3">
                {yes}
                <span className="text-base font-bold  leading-tight text-gray-700 ">
                  Nomer Telepon Virtual
                </span>
              </li>

              <li className="flex space-x-3  decoration-gray-500">
                {yes}
                <span className="text-base font-bold leading-tight text-gray-700">
                  Meeting Room 4 jam / bulan
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                {no}
                <span className="text-base font-normal leading-tight text-gray-500">
                  Papan Nama Usaha
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div className="w-full max-w-xs p-4  border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs   ">
            <h5 className="mb-4 text-xl font-bold  text-primary  ">
              Paket Platinum VIP
            </h5>
            <div className="flex justify-center items-baseline text-gray-900 ">
              <span className="text-3xl xl:text-2xl font-semibold">Rp</span>
              <span className="text-5xl ml-2 font-extrabold tracking-wide">
                2 Juta
              </span>
            </div>
            <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
              <h1>/ Tahun</h1>
            </span>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3 items-center">
                {yes}
                <span className="text-base font-bold leading-tight  text-gray-700">
                  Alamat Virtual Office
                </span>
              </li>
              <li className="flex space-x-3">
                {yes}
                <span className="text-base font-bold  leading-tight text-gray-700 ">
                  Nomer Telepon Virtual
                </span>
              </li>

              <li className="flex space-x-3  decoration-gray-500">
                {yes}
                <span className="text-base font-bold leading-tight text-gray-470">
                  Meeting Room 4 jam / bulan
                </span>
              </li>
              <li className="flex space-x-3  decoration-gray-500">
                {yes}
                <span className="text-base font-bold leading-tight text-gray-470">
                  Papan Nama Usaha
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div className="w-full max-w-sm p-4  border bg-teks rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs  ">
            <h5 className="mb-4 text-xl   text-primary font-bold ">
              Working Space
            </h5>
            <div className="flex justify-center items-baseline text-gray-900 ">
              <span className="text-3xl xl:text-2xl font-semibold">Mulai</span>
              <span className="text-5xl ml-2 font-extrabold tracking-wide">
                55.000
              </span>
            </div>
            <span className="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-700 ">
              <h1>/ Jam</h1>
            </span>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3 items-center">
                {yes}
                <span className="text-base font-bold leading-tight  text-gray-700">
                  1 Jam Rp, 55.000
                </span>
              </li>
              <li className="flex space-x-3">
                {yes}
                <span className="text-base font-bold  leading-tight text-gray-700 ">
                  5 Jam Rp, 200.000
                </span>
              </li>

              <li className="flex space-x-3  decoration-gray-500">
                {yes}
                <span className="text-base font-bold leading-tight text-gray-470">
                  1 hari Rp,
                </span>
              </li>
              <li className="flex space-x-3  decoration-gray-500">
                {yes}
                <span className="text-base font-bold leading-tight text-gray-470">
                  1 Bulan Rp, 1.500.000
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harga;
