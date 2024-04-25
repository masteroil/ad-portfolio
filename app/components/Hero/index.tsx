import Image from "next/image";
import React from "react";
import "./style.css";
const HeroContainer = () => {
  return (
    <section className="w-full flex justify-around max-width xxm">
      <div className="mt-4">
        <h1>Hero Container</h1>
        <p>Hero Description</p>
      </div>
      <div className="flex relative sm:justify-center">
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
