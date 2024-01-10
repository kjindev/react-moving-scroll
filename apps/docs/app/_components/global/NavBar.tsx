import React from "react";
import { robotoBold } from "../../../util/font";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="z-[100] bg-white w-full shadow-md fixed px-6 flex justify-center items-center">
      <div className="w-[1000px] h-[60px] flex justify-between items-center">
        <Link href="/" className={`${robotoBold.className}`}>
          SCROLL MOVING
        </Link>
        <div className="text-sm">
          <Link href="/doc/getting-started" className="px-2 mx-1">
            Doc
          </Link>
          <a href="/" className="px-2 mx-1">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
