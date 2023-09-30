import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex w-full h-screen items-center justify-center">
        <h1>HAKI</h1>
      </div>
      <Footer />
    </div>
  );
};

export default page;
