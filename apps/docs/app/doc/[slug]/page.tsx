"use client";

import { useParams } from "next/navigation";
import { robotoBold } from "../../../util/font";

export default function Page() {
  const { slug } = useParams();

  const title = (slug: string) => {
    if (slug === "getting-started") {
      return "Getting Started";
    } else if (slug === "quick-start") {
      return "Quick Start";
    }
  };

  const category = (slug: string) => {
    if (slug === "getting-started") {
      return "Introduction";
    } else if (slug === "quick-start") {
      return "Tutorials";
    }
  };

  return (
    <div className="w-[1000px] pt-[60px] pl-[270px]">
      <div className="px-10 py-9">
        <div>{category(slug as string)}</div>
        <div className={`${robotoBold.className} text-4xl`}>
          {title(slug as string)}
        </div>
        <div className={`${robotoBold.className}`}>
          ✅ What is SCROLL MOVING?
        </div>
        <div className={`${robotoBold.className}`}>✅ Installation</div>
        <div className="text-sm my-3">
          <span>Scroll Moving is available as a package on NPM.</span>
          <Box>npm i scroll-moving</Box>
          <span>Or if you are using yarn:</span>
          <Box>yarn add scroll-moving</Box>
          <span>Or if you are using pnpm:</span>
          <Box>pnpm add scroll-moving</Box>
        </div>
        <div className={`${robotoBold.className}`}>✅ Getting Started!</div>
        <div className="text-sm my-3">
          If you finished to install, then you could import{" "}
          <span className="font-bold">useScroll</span> in your project.
        </div>
      </div>
    </div>
  );
}

function Box({ children }: { children: string }) {
  return (
    <div className="my-3 bg-zinc-800 text-zinc-100 text-sm px-5 py-4 rounded-xl">
      {children}
    </div>
  );
}
