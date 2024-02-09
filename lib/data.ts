import React from "react";

import codeCampusImg from "@/public/codeCampus.png";

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
    tags: ["JavaScript", "PostgreSQL", "NodeJS", "ExpressJS", "Vitest"],
    imageUrl: codeCampusImg,
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
  "Php",
  "Tailwind",
  "Express",
  "PostgreSQL",
] as const;
