import React from "react";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <Link
      href="https://wa.me/6282210200085?text=Hello%20PT.%20Mitra%20Solusi%20Wicaksana%0A"
      className="fixed bottom-5 right-5 text-5xl lg:text-7xl bg-white rounded-md text-green-500 "
    >
      <FaWhatsappSquare />
    </Link>
  );
};

export default Whatsapp;
