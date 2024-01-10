import React from "react";
import { robotoBold } from "../../../util/font";
import CodeBox from "./CodeBox";
import Link from "next/link";

export default function GettingStarted() {
  return (
    <div className="pt-6">
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ What is Basic Scroll?
        </div>
        <div className="text-sm py-3 text-justify leading-7">
          It's <span className="font-bold">React Hook</span> for making it easy
          to scroll to some specific contents that you wanna go. You can use it
          for Navigation Bar, Buttons, or anything you want, for adding smooth
          scrolling. It would help you as it give you the efficiently function,{" "}
          <span className="font-bold">Basic Scroll.</span>
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>✅ Installation</div>
        <div className="text-sm py-3 leading-7">
          <span>Basic Scroll is available as a package on npm.</span>
          <Box>npm i scroll-moving</Box>
          <span>Or if you are using yarn:</span>
          <Box>yarn add scroll-moving</Box>
          <span>Or if you are using pnpm:</span>
          <Box>pnpm add scroll-moving</Box>
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ Getting Started
        </div>
        <div className="text-sm py-3 leading-7">
          If you finished to install, then you could import{" "}
          <span className="font-bold">useScroll</span> in your project.
        </div>
        <CodeBox />
        <div className="text-sm py-3 leading-7">
          Let's check{" "}
          <Link
            href="/doc/quick-start"
            className="font-bold hover:text-green-600"
          >
            Quick Start
          </Link>{" "}
          for more information that how to use.
        </div>
      </div>
    </div>
  );
}

function Box({ children }: { children: string }) {
  return (
    <div className="my-3 font-light bg-zinc-800 text-zinc-100 text-sm px-5 py-4 rounded-xl">
      {children}
    </div>
  );
}
