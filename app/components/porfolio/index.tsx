import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ShineButton from "../magicui/shineButton";

// PortfolioItem component
const PortfolioItem = ({ image, title, techStack, link }) => (
  <div className="p-5 shadow-md hover:shadow-xl flex flex-col items-center">
    <Image
      src={image.src}
      alt={title}
      width={image.width}
      height={image.height}
    />
    <p className="text-lg mb-3">{title}</p>
    <div className="max-w-[350px]">
      <p>Technology Stack:</p>
      <div className="max-w-[350px] mb-5">
        <Accordion type="single" collapsible defaultValue="item-1">
          {techStack.map((tech, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{tech.title}</AccordionTrigger>
              <AccordionContent>{tech.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
    <ShineButton>
      <Link href={link}>Details</Link>
    </ShineButton>
  </div>
);

// Main Portfolio component
const Portfolio = () => {
  const portfolioItems = [
    {
      image: { src: "/wordpress.jpg", width: 350, height: 100 },
      title: "Lovelyn Travel and Tours",
      techStack: [
        { title: "CMS", content: "WordPress, offering a robust and flexible foundation." },
        { title: "Builder", content: "Elementor, utilized for designing aesthetically pleasing and responsive layouts." },
        { title: "Booking Plugin", content: "WooCommerce Bookings, enabling efficient handling of all booking requirements directly on the website." },
        { title: "Languages", content: "HTML, CSS, JavaScript, and PHP form the core technologies driving the dynamic and interactive elements of the site." },
      ],
      link: "https://lovelyntravelandtours.com/",
    },
    {
      image: { src: "/cadlao.jpg", width: 350, height: 100 },
      title: "Cadlao Travel and Tours",
      techStack: [
        { title: "CMS", content: "WordPress, offering a robust and flexible foundation." },
        { title: "Builder", content: "Custom template and custom Header and footer" },
        { title: "Languages", content: "HTML, CSS, JavaScript, and PHP form the core technologies driving the dynamic and interactive elements of the site." },
      ],
      link: "https://cadlaotravelandtours.com/",
    },
    {
      image: { src: "/summerisland.jpg", width: 350, height: 100 },
      title: "Summer Island Travel and Tours",
      techStack: [
        { title: "CMS", content: "WordPress, offering a robust and flexible foundation." },
        { title: "Builder", content: "Custom template and custom Header and footer" },
        { title: "Languages", content: "HTML, CSS, JavaScript, and PHP form the core technologies driving the dynamic and interactive elements of the site." },
      ],
      link: "https://summerislandtravelandtours.com/",
    },
    {
      image: { src: "/react-project.jpg", width: 350, height: 100 },
      title: "Evently",
      techStack: [
        { title: "Web Frameworks", content: "React and Next.js, used for building a dynamic and interactive user interface." },
        { title: "JavaScript Frameworks", content: "React and Next.js, used for building a dynamic and interactive user interface." },
        { title: "Programming Languages", content: "Node.js, supporting server-side logic and API integration." },
        { title: "UI Frameworks", content: "Headless UI and Tailwind CSS, employed for crafting a sleek, modern, and responsive design." },
        { title: "Platform as a Service (PaaS)", content: "Vercel, hosting the React project to leverage global distribution and effortless scaling." },
      ],
      link: "https://tegingl.vercel.app/",
    },
    {
      image: { src: "/beachfronttravelandtours.png", width: 350, height: 100 },
      title: "Beachfront Travel and Tours",
      techStack: [
        { title: "CMS", content: "WordPress, offering a robust and flexible foundation." },
        { title: "Builder", content: "Custom template and custom Header and footer" },
        { title: "Languages", content: "HTML, CSS, JavaScript, and PHP form the core technologies driving the dynamic and interactive elements of the site." },
      ],
      link: "https://beachfronttravelandtours.com/",
    },
        {
      image: { src: "/kuberatravelandtours.png", width: 350, height: 100 },
      title: "Kubera Travel and Tours",
      techStack: [
        { title: "CMS", content: "WordPress, offering a robust and flexible foundation." },
        { title: "Builder", content: "Custom template and custom Header and footer" },
        { title: "Languages", content: "HTML, CSS, JavaScript, and PHP form the core technologies driving the dynamic and interactive elements of the site." },
      ],
      link: "https://kuberatravelandtours.com/",
    },
            {
      image: { src: "/cincotravelandtours.png", width: 350, height: 100 },
      title: "Cinco Travel and Tours",
      techStack: [
        { title: "CMS", content: "WordPress, offering a robust and flexible foundation." },
        { title: "Builder", content: "Custom template and custom Header and footer" },
        { title: "Languages", content: "HTML, CSS, JavaScript, and PHP form the core technologies driving the dynamic and interactive elements of the site." },
      ],
      link: "https://cincotravelandtours.com/",
    },
  ];

  return (
    <section className="mt-12 mb-32">
      <div className="text-5xl mb-4 mt-3 text-center">
        <h3>Portfolio Projects</h3>
      </div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;