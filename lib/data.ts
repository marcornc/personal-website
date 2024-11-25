import React from "react";

import codeCampusImg from "@/public/codeCampus.png";
import beCalmImg from "@/public/beCalm.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

] as const;


export const projectsData = [
  {
    title: "codeCampus",
    description:
      "Responsive full stack application that allowed bootcampers to organize networking and social events.",
    tags: ["Next.js", "NoSQL", "MongoDB"],
    imageUrl: codeCampusImg,
    url: "https://code-campus-nextjs.vercel.app/",
  },
  {
    title: "beCalm",
    description: "Responsive full stack application that allowed people with anxiety to relax and find a safe space.",
    tags: ["JavaScript", "Supabase", "Node.js", "Vitest", "Playwright"],
    imageUrl: beCalmImg,
    url: "https://github.com/marcornc/beCalm-final-project",
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind",
  "Express",
  "PostgreSQL",
  "NoSQL",
] as const;
