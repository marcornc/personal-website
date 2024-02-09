import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin} from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section id="home" className="scroll-mt-[100rem] pb-8">
      <div className="flex items-center justify-center">
        <div className="relative ">
          <Image
            src="/profile-img.jpg"
            alt="profile picture of Marco"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-44 w-44 rounded-full object-cover shadow-xl border-4 border-solid border-white"
          />
          {/* <span className="text-4xl absolute bottom-0 right-0">🌞</span> */}
        </div>
      </div>

      <h1 className="mb-10 mt-4 px-4 text-2xl text-center font-medium !leading-[1.5] sm:text-4xl">
        Hello, I&apos;m Marco. <br />
        I&apos;m a full-stack developer.
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
      {/* <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link> */}

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/Resume-Marco_Ronchi.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://linkedin.com/in/mrc-rnc"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/marcornc"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>
 </section>
  );
}
