import { Suspense } from "react";
import { LottieAnimation } from "./LottieAnimation";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-8">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold">
          Hey there 👋🏼 <br />
          I'm <span className="text-indigo-700">Jay Prakash Pathak</span>
        </h1>
        <p className="text-gray-600 mt-12 max-w-2xl md:text-xl">
          I'm a full stack engineer with 5+ years of experience and a passion
          for building scalable web apps and mobile apps. I've scaled startups
          from 0 users to more than 200k active users.
        </p>
        <div className="mt-12 flex items-center justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-800 transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-indigo-700 text-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-indigo-50 transition-colors duration-300"
          >
            View my work
          </a>
        </div>
      </div>
      <div className="md:w-1/2 h-[300px] md:h-auto w-full hidden md:block">
        <Suspense fallback={<div>Loading...</div>}>
          <LottieAnimation />
        </Suspense>
      </div>
    </div>
  );
};
