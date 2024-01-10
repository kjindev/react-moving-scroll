"use client";

import { robotoBold } from "../../../util/font";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();

  return (
    <div
      className={`z-[100] w-full h-[120px] tab:h-[60px] fixed flex flex-col justify-center items-center ${
        path === "/" ? "" : "bg-white shadow"
      }`}
    >
      <div className="w-full pc:w-[1000px] h-[50%] flex justify-between items-center">
        <Link href="/" className={`${robotoBold.className} pl-5 text-lg`}>
          Basic Scroll
        </Link>
        <div className="text-sm">
          <Link
            href="/doc/getting-started"
            className="px-3 hover:text-green-600"
          >
            Doc
          </Link>
          <a href="/" className="px-3 mr-2 hover:text-green-600">
            Github
          </a>
        </div>
      </div>
      <div className="text-sm tab:hidden w-full pc:w-[1000px] h-[50%] flex justify-between items-center bg-zinc-100 hover:cursor-pointer">
        <div className="px-5">Getting Started</div>
        <div className="px-5">▼</div>
      </div>
    </div>
  );
}
