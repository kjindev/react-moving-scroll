import React from "react";
import { robotoBold } from "../../../util/font";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-white w-full h-[60px] shadow-md fixed flex justify-between items-center px-6">
      <Link href="/" className={`${robotoBold.className}`}>
        SCROLL MOVING
      </Link>
      <div className="text-sm">
        <Link href="/doc" className="px-2 mx-1">
          Doc
        </Link>
        <a href="/" className="px-2 mx-1">
          Github
        </a>
      </div>
    </div>
  );
}
