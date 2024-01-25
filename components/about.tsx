import React from "react";
import SectionHeading from "./section-heading";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  //   const { ref } = useSectionInView("About");

  return (
    <section
      //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      In both my personal and professional journey, I have consistently  pursued challenging experiences that contribute to the ongoing development of my potential. <br /> From achieving a BEng to relocating to the UK, and from leading both small and large teams to evolving into a full-stack developer, I find fulfillment in cultivating personal and professional growth through continuous learning and diverse experiences.
      </p>

      <p>
      As a web developer, my passion for crafting engaging and innovative projects propels me to consistently refine my skills. What I cherish most about being part of this dynamic industry is the inherent enthusiasm for continuous growth and learning. I am eager to perpetuate my journey, contributing to and making a significant impact within a high-growth company.
      </p>
    </section>
  );
}
