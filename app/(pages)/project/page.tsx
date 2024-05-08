import Portfolio from "@/app/components/porfolio";
import React from "react";

const Project = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-40">
      <div className="bg-gray-300 w-screen flex items-center justify-center h-[210px]">
        <h1 className="text-5xl text-center">Projects</h1>
      </div>

      <Portfolio />
    </section>
  );
};

export default Project;
