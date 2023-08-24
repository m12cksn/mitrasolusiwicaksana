import React from "react";
import Image from "next/image";

const Title = (props) => {
  return (
    <div className="pt-8 pb-5">
      <Image
        className="w-24 mx-auto mb-5 text-primary"
        src={props.img}
        width={1000}
        height={1000}
        alt="Cruise"
        priority={true}
      />
      <h1 className="text-center text-2xl md:text-3xl xl:text-4xl md:leading-normal text-third font-semibold ">
        {props.title}
      </h1>
    </div>
  );
};

export default Title;
