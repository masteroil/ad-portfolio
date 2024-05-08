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
          <div className="max-w-[350px]">
            <p>Technology Stack:</p>
            <ul className="list-disc">
              <li>
                CMS: WordPress, offering a robust and flexible foundation.
              </li>
              <li>
                Builder: Elementor, utilized for designing aesthetically
                pleasing and responsive layouts.
              </li>
              <li>
                Booking Plugin: WooCommerce Bookings, enabling efficient
                handling of all booking requirements directly on the website.
              </li>
              <li>
                Languages: HTML, CSS, JavaScript, and PHP form the core
                technologies driving the dynamic and interactive elements of the
                site.
              </li>
            </ul>
          </div>
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
          <div className="max-w-[350px]">
            <p>Technology Stack:</p>
            <ul className="list-disc">
              <li>
                Web Frameworks: Next.js, providing server-side rendering and
                static site generation to ensure optimal performance and SEO
                benefits.
              </li>
              <li>
                JavaScript Frameworks: React and Next.js, used for building a
                dynamic and interactive user interface.
              </li>
              <li>
                Programming Languages: Node.js, supporting server-side logic and
                API integration.
              </li>
              <li>
                UI Frameworks: Headless UI and Tailwind CSS, employed for
                crafting a sleek, modern, and responsive design.
              </li>
              <li>
                Platform as a Service (PaaS): Vercel, hosting the React project
                to leverage global distribution and effortless scaling.
              </li>
            </ul>
          </div>
          <button className="w-[150px] py-2 bg-gray-400 rounded-lg hover:bg-indigo-400">
            <Link href="https://tegingl.vercel.app/">Details</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
