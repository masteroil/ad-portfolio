"use client";
import React, { useState } from "react";
import {
  FaWordpress,
  FaNode,
  FaReact,
  FaElementor,
  FaPhp,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import {
  SiFrontendmentor,
  SiOxygen,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { BsPlugin } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { CgTemplate } from "react-icons/cg";
import "./style.css";
import TypingAnimation from "../magicui/typing-animation";

const StarRating = ({ level }) => {
  const levels = {
    Beginner: 1,
    Intermediate: 3,
    Expert: 4,
    Advanced: 5,
  };

  const numberOfStars = levels[level] || 0;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numberOfStars) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }

  return <div className="flex flex-row">{stars}</div>;
};

interface Skill {
  id: string;
  name: string;
  icon: JSX.Element;
  rating?: string;
  description?: string;
  iconRating?: JSX.Element;
}

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const wordpressSkills: Skill[] = [
    {
      id: "customTemplates",
      name: "Custom Templates",
      icon: <CgTemplate className="text-3xl mr-2" />,
      rating: "Advanced",
      iconRating: <FaStar />,
    },
    {
      id: "apiIntegration",
      name: "API Integration",
      icon: <AiFillApi className="text-3xl mr-2" />,
      rating: "Intermediate",
    },
    {
      id: "elementor",
      name: "Elementor",
      icon: <FaElementor className="mr-2" />,
      rating: "Advanced",
    },
    {
      id: "oxygenBuilder",
      name: "Oxygen Builder",
      icon: <SiOxygen className="mr-2" />,
      rating: "Advanced",
    },
    {
      id: "phpProgramming",
      name: "PHP Programming",
      icon: <FaPhp className="mr-2" />,
      rating: "Advanced",
    },
    {
      id: "pluginIntegration",
      name: "Plugin Integration",
      icon: <BsPlugin className="mr-2" />,
      rating: "Advanced",
    },
  ];

  const reactSkills: Skill[] = [
    {
      id: "nextjs",
      name: "Next.js",
      icon: <TbBrandNextjs className="mr-2" />,
      description: "Intermediate",
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: <SiTypescript className="mr-2" />,
      description: "Intermediate",
    },
    {
      id: "nodejs",
      name: "Node.js",
      icon: <FaNode className="mr-2" />,
      description: "Beginner",
    },
    {
      id: "frontendTech",
      name: "Tailwindcss",
      icon: <SiTailwindcss className="mr-2" />,
      description: "Beginner",
    },
  ];

  return (
    <section className="flex justify-center text-center w-full">
      <div className="w-full">
        <div className="w-full border-b-2 border-t-2 border-r-0 border-l-0 py-10 mb-10">
          <TypingAnimation
            className="text-5xl font-semibold"
            text="Skills & Expertise"
          />
          <p className="text-3xl m-5">
            Specializing in WordPress and React Development
          </p>
        </div>
        <div className="flex justify-center gap-12 xsm sm:flex-col sm:gap-3 md:flex-row md:gap-10 lg:gap-12">
          <div className="border p-10 relative xsmsp font-xsm">
            <h3 className="text-3xl flex items-center">
              <FaWordpress className="text-3xl mr-2" />
              WordPress Development
            </h3>
            <ul>
              {wordpressSkills.map((skill) => (
                <li
                  key={skill.id}
                  className="text-2xl flex items-center text-center justify-center mt-6 cursor-pointer "
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill.icon}
                  {skill.name}
                  {hoveredSkill?.id === skill.id && (
                    <div className="absolute bg-white border p-2 mt-2 rounded shadow-lg flex items-center flex-col">
                      <span className="mr-2">
                        Skill Rating: {hoveredSkill.rating}
                      </span>
                      <span className="flex items-center">
                        <StarRating level={hoveredSkill.rating} />
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="border p-10 relative xsmsp font-xsm">
            <h3 className="text-3xl flex items-center">
              <FaReact className="text-3xl mr-2" />
              React Development
            </h3>
            <ul>
              {reactSkills.map((skill) => (
                <li
                  key={skill.id}
                  className="text-2xl flex items-center text-center justify-center mt-5 cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill.icon}
                  {skill.name}
                  {hoveredSkill?.id === skill.id && (
                    <div className="absolute bg-white border p-2 mt-2 rounded shadow-lg flex flex-col items-center">
                      <span className="mr-2">
                        Skill Level: {skill.description}
                      </span>
                      <span className="flex items-center">
                        <StarRating level={skill.description} />
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
