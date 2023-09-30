import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center w-full h-screen justify-center">
        <h1>Virtual Office</h1>
      </div>
      <Footer />
    </div>
  );
};

export default page;
