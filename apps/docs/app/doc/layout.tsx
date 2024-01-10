"use client";

import { useRecoilValue, useSetRecoilState } from "recoil";
import MobileMenu from "../_components/doc/MobileMenu";
import SideMenu from "../_components/doc/SideMenu";
import { mobileState } from "../../util/store";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DocLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useRecoilValue(mobileState);
  const pathname = usePathname();
  const setMobileMenu = useSetRecoilState(mobileState);

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full pc:w-[1000px] bg-white shadow-md">
        <SideMenu />
        {isMobile && <MobileMenu />}
        {children}
        <footer className="ml-0 tab:ml-[270px] h-[120px] px-10">
          <p className="border-t text-sm flex justify-center items-center h-[120px] text-zinc-500">
            Basic Scroll
          </p>
        </footer>
      </div>
    </div>
  );
}
