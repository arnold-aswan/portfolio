"use client";

import Image from "next/image";
import { useState, useTransition } from "react";

import TabButton from "./TabButton";
import { TabData } from "./index";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="comp image"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDB,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>

          <div className="flex flex-row mt-8 gap-3">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>

          <div className="mt-8 ">
            {TabData.find((tabData) => tabData.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
