import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-[40rem]">
        <h1 className="max-w-xl text-2xl font-bold ">Contact</h1>
      </div>
      <Footer />
    </div>
  );
};

export default page;
