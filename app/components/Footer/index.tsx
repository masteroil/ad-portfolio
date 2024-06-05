import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-[100%]">
      <div className="flex justify-around p-5 border">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo/logo-black.png"
              alt="Logo"
              width={150}
              height={150}
              className="flex justify-center"
            />
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="text-center text-base font-semibold mb-5 border-b-2">
            About Me
          </p>
          <nav className="flex flex-col gap-3">
            <Link href="/" className="text-gray-600 hover:text-gray-900 px-3">
              Home
            </Link>
            <Link
              href="/project"
              className="	text-gray-600 hover:text-gray-900 px-3"
            >
              Projects
            </Link>
            {/* <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 px-3"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 px-3"
            >
              Contact
            </Link> */}
          </nav>
        </div>
      </div>
      <div className="flex justify-around items-center h-[60px] bg-gray-900">
        <div>
          <p className="text-white p-2 sm:text-xs sm:p-1">
            AD Tech @All right Reserved 2024
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://www.facebook.com/Aizem.Dairo">
            <FaFacebook
              size={30}
              className="text-white hover:text-purple-300 transition-colors"
            />
          </Link>
          <Link href="https://twitter.com/AizemD">
            <BsTwitterX
              size={30}
              className="text-white hover:text-purple-300 transition-colors"
            />
          </Link>
          <Link href="https://www.instagram.com/aizem005/">
            <AiFillInstagram
              size={30}
              className="text-white hover:text-purple-300 transition-colors"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
