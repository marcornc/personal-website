import React from "react";

import { BsEnvelopeAt } from "react-icons/bs";

import { links } from "@/lib/data";
import Link from "next/link";

function Header() {
  return (
    <header className="z-[999] relative">
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none borderBlack bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
         sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
          "
      ></div>
      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 
        sm:top-[1.7rem] sm:h-[initial] sm:py-0  "
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 
        sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative hover:bg-green-100 hover:rounded-full"
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition
                "
                href={link.hash}
              >
                {link.name}
              </Link>
            </li>
          ))}
                      <li
              key="contact"
              className="h-3/4 flex items-center justify-center relative hover:bg-green-100 hover:rounded-full"
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition "
                href="mailto:mrc.ronchi@gmail.com"
              >
                <BsEnvelopeAt className="text-[1.35rem]"/>
              </Link>
            </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
