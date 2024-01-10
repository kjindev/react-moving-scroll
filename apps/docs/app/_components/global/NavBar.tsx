"use client";
import { robotoBold } from "../../../util/font";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();
  console.log(path);
  return (
    <div
      className={`z-[100] w-full fixed px-6 flex justify-center items-center ${
        path === "/" ? "" : "bg-white shadow"
      }`}
    >
      <div className="w-[1000px] h-[60px] flex justify-between items-center">
        <Link href="/" className={`${robotoBold.className} pl-3 text-lg`}>
          Basic Scroll
        </Link>
        <div className="text-sm">
          <Link
            href="/doc/getting-started"
            className="px-2 mx-1 hover:text-green-600"
          >
            Doc
          </Link>
          <a href="/" className="px-2 mx-1 hover:text-green-600">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
