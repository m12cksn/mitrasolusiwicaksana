import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const page = () => {
  return (
    <div>
      <div className="w-full ">
        <FAQ />
      </div>
    </div>
  );
};

export default page;
