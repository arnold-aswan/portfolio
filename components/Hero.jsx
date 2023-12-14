"use client";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="grid grids-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-4xl lg:text-6xl sm:text-5xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Hello i am {""}
            </span>
            <br />
            <TypeAnimation
              sequence={["Arnold Aswani", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <h3 className="text-4xl py-4 font-extrabold">
            Turning Vision Into Reality With Code.{" "}
          </h3>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
            As a skilled frontend developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects
            showcasing my expertise in React.js an d web development.
          </p>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black font-semibold">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-semibold  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 mb-6 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate -x-1/2 -translate-y-1/2 top-1/2 left-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
