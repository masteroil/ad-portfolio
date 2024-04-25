import React from "react";
import { FaWordpress, FaNode, FaReact } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { FaElementor, FaPhp } from "react-icons/fa6";
import { SiFrontendmentor, SiOxygen, SiTypescript } from "react-icons/si";
import { BsPlugin } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <section>
      <div>
        <h2> Skills & Expertise</h2>
      </div>
      <div>
        <p>Specializing in WordPress and React Development</p>
      </div>
      <div>
        <div>
          <h3>
            <FaWordpress />
            WordPress Development
          </h3>
          <p>
            <FaWordpress />
            Custom Templates
          </p>
          <p>
            <AiFillApi />
            API Integration
          </p>
          <p>
            (<FaElementor />
            Elementor, <SiOxygen />
            Oxygen) Builder
          </p>
          <p>
            <FaPhp />
            PHP Programming
          </p>
          <p>
            <BsPlugin />
            Plugin Integration
          </p>
        </div>
        <div>
          <h3>
            <FaReact />
            React Development{" "}
          </h3>
          <p>
            <TbBrandNextjs />
            Nextjs
          </p>
          <p>
            <SiTypescript />
            TypeScript
          </p>
          <p>
            <FaNode />
            Node.js
          </p>
          <p>
            <SiFrontendmentor />
            Front-End Technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
