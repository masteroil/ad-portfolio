import Image from "next/image";
import React from "react";
import "./style.css";
const HeroContainer = () => {
  return (
    <section className="w-full flex justify-around max-width xxm">
      <div className="mt-4  max-w-2xl">
        <h1 className="text-5xl font-bold p-5 text-smd">
          Elevating Web Presence with Expert Wordpress & React Development
        </h1>
        <p className="mt-8 text-xl text-smd-p">
          AD Tech - Your destination for bespoke Wordpress and React
          development. I'm Aizem Dairo, here to elevate your web presence with
          tailored, modern solutions that captivate and engage.
        </p>
        <button className="bg-indigo-500 p-3 rounded-3xl cursor-pointer mt-10">
          Contact Me
        </button>
      </div>
      <div className="flex relative sm:justify-center mb-44">
        <div>
          <Image
            src="/Gradient_blob.svg"
            alt="Hero Image"
            width={750}
            height={100}
          />
        </div>
        <div className="absolute right-0 lg:right-0">
          <Image
            src="/character.svg"
            alt="Hero Image"
            width={550}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
