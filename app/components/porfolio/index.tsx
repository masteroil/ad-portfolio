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

const Portfolio = () => {
  return (
    <section className="mt-12">
      <div className="text-5xl mb-4 mt-3 text-center">
        <h3>Portfolio Projects</h3>
      </div>
      <div className="grid gap-5 lg:grid-cols-4 sm:grid-cols-2">
        <div className="p-5 shadow-md hover:shadow-xl flex flex-col items-center">
          <Image
            src="/wordpress.jpg"
            alt="Lovelyn Travel and Tours"
            width={350}
            height={100}
          />
          <p className="text-lg mb-3">Lovelyn Travel and Tours</p>
          <div className="max-w-[350px]">
            <p>Technology Stack:</p>
            <div className="max-w-[350px] mb-5">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>CMS</AccordionTrigger>
                  <AccordionContent>
                    WordPress, offering a robust and flexible foundation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Builder:</AccordionTrigger>
                  <AccordionContent>
                    Elementor, utilized for designing aesthetically pleasing and
                    responsive layouts.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Booking Plugin:</AccordionTrigger>
                  <AccordionContent>
                    WooCommerce Bookings, enabling efficient handling of all
                    booking requirements directly on the website.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Languages:</AccordionTrigger>
                  <AccordionContent>
                    HTML, CSS, JavaScript, and PHP form the core technologies
                    driving the dynamic and interactive elements of the site.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <ShineButton>
            <Link href="https://lovelyntravelandtours.com/">Details</Link>
          </ShineButton>
        </div>
        <div className="p-5 shadow-md hover:shadow-xl flex flex-col items-center">
          <Image
            src="/cadlao.jpg"
            alt="Cadlao Travel and Tours"
            width={350}
            height={100}
          />
          <p className="text-lg mb-3">Cadlao Travel and Tours</p>
          <div className="max-w-[350px]">
            <p>Technology Stack:</p>
            <div className="max-w-[350px] mb-5">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>CMS</AccordionTrigger>
                  <AccordionContent>
                    WordPress, offering a robust and flexible foundation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Builder:</AccordionTrigger>
                  <AccordionContent>
                    Custom template and custom Header and footer
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Languages:</AccordionTrigger>
                  <AccordionContent>
                    HTML, CSS, JavaScript, and PHP form the core technologies
                    driving the dynamic and interactive elements of the site.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <ShineButton>
            <Link href="https://cadlaotravelandtours.com/">Details</Link>
          </ShineButton>
        </div>
        <div className="p-5 shadow-md hover:shadow-xl flex flex-col items-center">
          <Image
            src="/summerisland.jpg"
            alt="Summer Island Travel and Tours"
            width={350}
            height={100}
          />
          <p className="text-lg mb-3">Summer Island Travel and Tours</p>
          <div className="max-w-[350px]">
            <p>Technology Stack:</p>
            <div className="max-w-[350px] mb-5">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>CMS</AccordionTrigger>
                  <AccordionContent>
                    WordPress, offering a robust and flexible foundation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Builder:</AccordionTrigger>
                  <AccordionContent>
                    Custom template and custom Header and footer
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Languages:</AccordionTrigger>
                  <AccordionContent>
                    HTML, CSS, JavaScript, and PHP form the core technologies
                    driving the dynamic and interactive elements of the site.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <ShineButton>
            <Link href="https://summerislandtravelandtours.com/">Details</Link>
          </ShineButton>
        </div>
        <div className="p-5 shadow-md hover:shadow-xl flex flex-col items-center">
          <Image
            src="/react-project.jpg"
            alt="Evently"
            width={350}
            height={100}
          />
          <p className="text-lg mb-3">Evently</p>
          <div className="max-w-[350px]">
            <p>Technology Stack:</p>
            <div className="max-w-[350px] mb-5">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Web Frameworks: Next.js</AccordionTrigger>
                  <AccordionContent>
                    React and Next.js, used for building a dynamic and
                    interactive user interface.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>JavaScript Frameworks:</AccordionTrigger>
                  <AccordionContent>
                    React and Next.js, used for building a dynamic and
                    interactive user interface.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Programming Languages:</AccordionTrigger>
                  <AccordionContent>
                    Node.js, supporting server-side logic and API integration.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>UI Frameworks:</AccordionTrigger>
                  <AccordionContent>
                    Headless UI and Tailwind CSS, employed for crafting a sleek,
                    modern, and responsive design.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Platform as a Service (PaaS):
                  </AccordionTrigger>
                  <AccordionContent>
                    Vercel, hosting the React project to leverage global
                    distribution and effortless scaling.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <ShineButton>
            <Link href="https://tegingl.vercel.app/">Details</Link>
          </ShineButton>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
