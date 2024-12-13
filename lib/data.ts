import React from "react";

import codeCampusImg from "@/public/codeCampus.png";
import beCalmImg from "@/public/beCalm.png"
import aiBlogImg from "@/public/AIBlog.png"

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
      "Application to generate a blog post from a youtube link thank to AI",
    tags: ["Django", "Postgres", "AWS", "OpenAI"],
    imageUrl: aiBlogImg,
    url: "https://github.com/marcornc/AI_Blog_App.git",
  },
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
  "Python",
  "Django",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Express",
  "PostgreSQL",
  "NoSQL",
] as const;
