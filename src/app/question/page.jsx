import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full ">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default page;
