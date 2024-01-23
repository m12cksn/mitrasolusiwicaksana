import React from "react";

const Maps = () => {
  return (
    <div className="w-full flex items-center flex-col py-5">
      <div className="flex items-center gap-4 pt-2   "></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.729103329691!2d106.87368187498988!3d-6.167019693820243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5672c2d3655%3A0xe7b6ca00bc106817!2sLippo%20Tower%20Holland%20Village!5e0!3m2!1sen!2sid!4v1692778553759!5m2!1sen!2sid"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className=" max-w-sm sm:max-w-xl md:max-w-sm md:h-64 h-64 sm:h-80  lg:max-w-lg  mb-10 bg-slate-100 p-5  "
      ></iframe>
    </div>
  );
};

export default Maps;
