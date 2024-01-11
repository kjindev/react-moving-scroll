"use client";

import { MouseEvent, ReactNode } from "react";
import { robotoBold } from "../../../util/font";
import Link from "next/link";
import { useScroll } from "react-moving-scroll";

export default function Main() {
  return (
    <div className="w-full">
      <Intro1 />
    </div>
  );
}

function Intro1() {
  const { handleScroll, ref } = useScroll();
  const list = ["What is React Moving Scroll?", "Learn More?"];

  return (
    <>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <div
          className={`${robotoBold.className} text-4xl tab:text-5xl pc:text-6xl text-center mb-8 p-5`}
        >
          React Moving Scroll,
          <br /> Scrolling Hook for React.
        </div>
        <Button onClick={(event) => handleScroll(event, list)}>
          What is React Moving Scroll?
        </Button>
      </div>
      <div
        ref={ref(0)}
        className="w-full h-[100vh] flex flex-col justify-center items-center"
      >
        <div
          className={`${robotoBold.className} text-4xl tab:text-5xl pc:text-6xl mb-8 p-5 text-center`}
        >
          You can scroll on smoothly,
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
        <div
          className={`${robotoBold.className} text-4xl tab:text-5xl pc:text-6xl mb-8 p-5 text-center`}
        >
          You like it?
          <br />
          Let's get started.
        </div>
        <Link href="/doc/getting-started">
          <Button>Go to Introduction Page</Button>
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
      className="bg-zinc-800 text-white text-xs tab:text-sm px-3 py-2 rounded hover:bg-green-600 transition-colors"
    >
      {children}
    </button>
  );
}
