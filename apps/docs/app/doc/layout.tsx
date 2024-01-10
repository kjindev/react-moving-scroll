import MobileMenu from "../_components/doc/MobileMenu";
import SideMenu from "../_components/doc/SideMenu";

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full pc:w-[1000px] bg-white shadow-md">
        <SideMenu />
        <MobileMenu />
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
