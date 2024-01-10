"use client";

import { MouseEvent, ReactNode } from "react";
import { robotoBold } from "../../../util/font";
import { useScroll } from "scroll-moving";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="w-full">
      <Intro1 />
    </div>
  );
}

function Intro1() {
  const { handleScroll, ref } = useScroll();
  const list = ["What is SCROLL MOVING?", "Learn More?"];

  return (
    <>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <div className={`${robotoBold.className} text-5xl mb-8`}>
          Scrolling Hook for React.
        </div>
        <Button onClick={(event) => handleScroll(event, list)}>
          What is SCROLL MOVING?
        </Button>
      </div>
      <div
        ref={ref(0)}
        className="w-full h-[100vh] flex flex-col justify-center items-center"
      >
        <div className={`${robotoBold.className} text-5xl mb-8 text-center`}>
          You can scroll smooth,
          <br /> anywhere you wanna go.
        </div>
        <Button onClick={(event) => handleScroll(event, list)}>
          Learn More?
        </Button>
      </div>
      <div
        ref={ref(1)}
        className="w-full h-[100vh] flex flex-col justify-center items-center"
      >
        <div className={`${robotoBold.className} text-5xl mb-8 text-center`}>
          Let's Check Document!
        </div>
        <Link href="/doc">
          <Button>Get Started</Button>
        </Link>
      </div>
    </>
  );
}

function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-sky-600 text-white text-sm px-3 py-2 rounded-xl hover:scale-105"
    >
      {children}
    </button>
  );
}
