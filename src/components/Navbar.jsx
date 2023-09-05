"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallerScreenNavigation = () => {
    setMenuIcon(!menuIcon);
  };
  return (
    <header className=" shadow bg-teks w-full ease-in-out duration-500  z-50">
      <nav className="max-w-[1366px] mx-auto  flex justify-between items-center py-3 px-4">
        <div className="flex items-center">
          <Link className="flex items-center gap-3" href="/">
            <Image
              className=" md:w-14 w-12 object-center object-cover"
              src={"/imagesmsw/logomsw.jpg"}
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />
            <h1 className="xl:text-xl text-primary hidden md:block md:text-lg font-semibold ">
              Mitra Solusi Wicaksana
            </h1>
          </Link>
        </div>
        <h1 className="xl:text-xl text-primary md:hidden md:text-base font-semibold">
          Mitra Solusi Wicaksana
        </h1>
        <div className="md:flex gap-10 hidden items-center">
          <Link
            className="font-semibold text-primary hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-lg"
            href="/"
          >
            <h1>Beranda</h1>
          </Link>
          <Link
            className="font-semibold text-primary hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-lg"
            href="/tentang"
          >
            <h1>Tentang Kami</h1>
          </Link>
          <Link
            className="font-semibold text-primary hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-lg"
            href="/layanan"
          >
            <h1>Layanan</h1>
          </Link>
          <Link
            className="font-semibold text-primary hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-lg"
            href="question"
          >
            <h1>FAQ</h1>
          </Link>
          <Link
            className="font-semibold text-primary hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-lg"
            href="kontak"
          >
            <h1>Kontak</h1>
          </Link>
        </div>
        <div className="flex md:hidden" onClick={handleSmallerScreenNavigation}>
          {/* {openIndexes.includes(index) ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-primary" />
          ) : (
            <AiOutlineMenu size={25} className="text-primary" />
          )}
        </div>
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[72px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white ease-in-out duration-500"
              : "md:hidden absolute top-[72px] right-0  left-[100%] flex justify-center items-center w-full h-screen text-center g-slate-800 text-white ease-in-out duration-500"
          }
        >
          <div className="w-full">
            <ul className="uppercase font-bold text-2xl flex flex-col justify-center items-center gap-10">
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link href="/visi">Visi Misi</Link>
              </li>
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link href="/legalitas">Legalitas</Link>
              </li>
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link href="https://smartofficevo.com/">Order VO</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
