import SideMenu from "../_components/doc/SideMenu";

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1000px]">
        <SideMenu />
        {children}
      </div>
    </div>
  );
}
