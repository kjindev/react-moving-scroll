import React from "react";
import { robotoBold } from "../../../util/font";
import CodeBlock from "./CodeBlock";
import { CodeBox } from "@repo/common";

export default function GettingStarted() {
  return (
    <div className="w-full pt-6">
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ What is React Moving Scroll?
        </div>
        <div className="text-sm py-3 text-justify leading-7">
          It's <span className="font-bold">React Hook</span> for making it easy
          to scroll to some specific contents that you wanna go. You can use it
          for Navigation Bar, Buttons, or anything you want, for adding smooth
          scrolling. It would help you as it give you the efficiently function,{" "}
          <span className="font-bold">React Moving Scroll.</span>
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>✅ Installation</div>
        <div className="text-sm py-3 leading-7">
          <span>React Moving Scroll is available as a package on npm.</span>
          <CodeBox className="my-3">npm i react-moving-scroll</CodeBox>
          <span>Or if you are using yarn:</span>
          <CodeBox className="my-3">yarn add react-moving-scroll</CodeBox>
          <span>Or if you are using pnpm:</span>
          <CodeBox className="my-3">pnpm add react-moving-scroll</CodeBox>
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
        <CodeBlock />
        <div className="text-sm py-3 leading-7">
          Let's check <span className="font-bold">Quick Start</span> for more
          information that how to use.
        </div>
      </div>
    </div>
  );
}
