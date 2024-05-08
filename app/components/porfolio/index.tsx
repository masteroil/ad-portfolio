import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";

const Portfolio = () => {
  return (
    <section className="flex mt-12 gap-5 lg:flex-row sm:flex-col xm">
      <div className="p-5 hover:shadow-xl">
        <div className="text-5xl mb-4 mt-3">
          <h3>Wordpress Project</h3>
        </div>
        <div className="">
          <Image
            src="/wordpress.jpg"
            alt="Hero Image"
            width={350}
            height={100}
          />
          <p className="text-lg mb-3">Lovelyn Travel and Tours</p>
          <button className="w-[150px] py-2 bg-gray-400 rounded-lg hover:bg-indigo-400">
            <Link href="https://lovelyntravelandtours.com/">Details</Link>
          </button>
        </div>
      </div>
      <div className="p-5 hover:shadow-xl">
        <div className="text-5xl mb-4">
          <h3>React Project</h3>
        </div>
        <div>
          <Image
            src="/react-project.jpg"
            alt="Hero Image"
            width={350}
            height={100}
          />
          <p className="mb-3 mt-3">Evently</p>
          <button className="w-[150px] py-2 bg-gray-400 rounded-lg hover:bg-indigo-400">
            <Link href="https://tegingl.vercel.app/">Details</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
