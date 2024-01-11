"use client";

import { robotoBold } from "../../../util/font";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { mobileState } from "../../../util/store";

export default function NavBar() {
  const path = usePathname();
  const mobileMenu = useRecoilValue(mobileState);
  const setMobileMenu = useSetRecoilState(mobileState);

  const { slug } = useParams();

  const title = (slug: string) => {
    if (slug === "getting-started") {
      return "Getting Started";
    } else if (slug === "quick-start") {
      return "Quick Start";
    } else if (slug === "information") {
      return "Information";
    }
  };

  return (
    <div
      className={`z-[100] w-full h-[120px] tab:h-[60px] fixed flex flex-col justify-center items-center ${
        path === "/" ? "" : "bg-white shadow"
      }`}
    >
      <div className="px-5 pc:px-0 w-full pc:w-[1000px] h-[50%] flex justify-between items-center">
        <Link href="/" className={`${robotoBold.className}`}>
          React Moving Scroll
        </Link>
        <div className="text-sm">
          <Link href="/doc/getting-started" className=" hover:text-green-600">
            Doc
          </Link>
          <a
            href="https://github.com/kjindev/react-moving-scroll"
            target="_blank"
            className="hover:text-green-600 ml-5"
          >
            Github
          </a>
        </div>
      </div>
      {slug && (
        <div
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-sm tab:hidden w-full pc:w-[1000px] h-[50%] flex justify-between items-center bg-zinc-100 hover:cursor-pointer"
        >
          <div className="px-5">{title(slug as string)}</div>
          <div className="px-5">{mobileMenu ? "▲" : "▼"}</div>
        </div>
      )}
    </div>
  );
}
