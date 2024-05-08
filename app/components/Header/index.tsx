"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { Menu } from "@headlessui/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" text-white p-4 border-b drop-shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Link href="/" className="hover:text-gray-300">
              <Image
                src="/logo/logo-black.png"
                alt="Logo"
                objectFit="cover"
                width="150"
                height="150"
              />
            </Link>
          </div>
        </div>
        <nav className="hidden sm:flex space-x-4">
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

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <Menu as="div">
            <Menu.Button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/"
                      className={`block px-4 py-2 text-sm text-gray-900 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Home
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/projects"
                      className={`block px-4 py-2 text-sm text-gray-900 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Projects
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about"
                      className={`block px-4 py-2 text-sm text-gray-900 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      About
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
