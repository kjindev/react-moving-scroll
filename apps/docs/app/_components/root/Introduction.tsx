"use client";

import { Button } from "@repo/ui/button";
import { robotoBold } from "../../../util/font";
import { useScroll } from "scroll-moving";

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
        Like This, You can scroll smooth as you wanna go.
        <Button onClick={(event) => handleScroll(event, list)}>
          Learn More?
        </Button>
      </div>
      <div
        ref={ref(1)}
        className="w-full h-[100vh] flex flex-col justify-center items-center"
      >
        Good. Let's Check Documents Page!
      </div>
    </>
  );
}
