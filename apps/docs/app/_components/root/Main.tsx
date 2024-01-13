"use client";

import Link from "next/link";
import { robotoBold } from "../../../util/font";
import { useScroll } from "react-moving-scroll";
import { Button } from "@repo/common";

export default function Main() {
  const { handleScroll, ref } = useScroll();
  const list = ["What is React Moving Scroll?", "Learn More?"];

  return (
    <div className="w-full">
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
    </div>
  );
}
