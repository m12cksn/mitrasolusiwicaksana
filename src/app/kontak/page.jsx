"use client";
import React, { useState } from "react";
import {
  AiFillCustomerService,
  AiTwotoneMail,
  AiFillWechat,
} from "react-icons/ai";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  const contacts = [
    {
      icons: AiFillCustomerService,
      title: "Melalui Telepon",
      desc: "Anda dapat menghubungi kami kapan saja di +xxxx xxxx xxxx selama jam kerja. Customer Service kami akan siap membantu Anda.",
    },
    {
      icons: AiTwotoneMail,
      title: "Melalui Email",
      desc: "Anda juga bisa mengirimkan email ke mitrasolusiwicaksana@gmail.com Kami akan membalas email Anda secepatnya.",
    },
    {
      icons: AiFillWechat,
      title: "Melalui Live Chat",
      desc: "Gunakan tombol bergambar logo whatsapp di kanan bawah layar untuk di arahkan langsung ke whatsapp .",
    },
  ];

  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="lg:flex lg:container">
        <div className="basis-2/3 flex justify-center  p-3 ">
          <form action="" className=" w-full pt-8 pb-10 px-5 bg-white">
            <h1 className="text-xl lg:text-2xl xl:text-3xl text-slate-900 md:text-3xl">
              Anda Punya Pertanyaan ?
            </h1>
            <h2 className="text-slate-700 mt-3 md:text-xl tracking-wider leading-snug text-justify lg:text-lg xl:text-xl xl:leading-normal xl:tracking-wider">
              Anda hanya perlu mengisi formulir di bawah ini jika memiliki
              pertanyaan atau ingin menggunakan layanan kami. Jika terjadi
              kesalahan pada formulir, atau Anda tidak ingin mengisi formulir,
              silakan hubungi kami menggunakan rincian kontak.
            </h2>
            <div>
              <div className="mb-3 mt-5">
                <label htmlFor="name" className="block mb-2 text-slate-900">
                  Name
                </label>
                <input
                  id="name"
                  className="bg-slate-100 w-full h-10 p-3   shadow"
                  placeholder="Enter Your Name"
                  type="text"
                  name="name"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="" className="block mb-2 text-slate-900">
                  Email
                </label>
                <input
                  className="bg-slate-100 w-full h-10 p-3 shadow"
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="" className="block mb-2 text-slate-900">
                  Subject
                </label>
                <input
                  className="bg-slate-100 w-full h-10 p-3 shadow"
                  placeholder="Enter Your Subject"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="" className="block mb-2 text-slate-900">
                  Message
                </label>
                <textarea
                  className="bg-slate-100 w-full h-28 p-3 shadow"
                  placeholder="Enter Your Message"
                  type="text"
                  name="message"
                />
              </div>
              <button
                // onClick={onSubmit}
                type="submit"
                className="bg-blue-500 text-slate-50 font-semibold tracking-wider w-28 h-9 shadow "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="basis-1/3 mx-auto p-3 sm:max-w-5xl  ">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white mx-auto mb-5 py-3 px-8 sm:max-w-4xl sm:px-12 sm:py-7"
            >
              <contact.icons className="text-primary xl:text-9xl lg:text-8xl text-8xl text-center md:text-9xl w-full" />
              <h1 className="text-2xl text-center lg:text-2xl xl:text-3xl mt-3 text-slate-900 md:text-4xl">
                {contact.title}
              </h1>
              <p className="text-center text-lg md:text-2xl md:mt-3 md:leading-relaxed text-slate-700 mt-1 tracking-wide leading-normal lg:text-base xl:text-xl ">
                {contact.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
