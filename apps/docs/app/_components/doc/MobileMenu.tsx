import Link from "next/link";

export default function MobileMenu() {
  const title = "font-bold mt-2";
  const content = "pl-2 my-1 py-1 hover:cursor-pointer";

  return (
    <div className="bg-zinc-100 w-full h-screen fixed pt-[120px] text-sm">
      <div className="px-8 py-6">
        <div className={title}>Introduction</div>
        <Link href="/doc/getting-started">
          <div className={content}>Getting Started</div>
        </Link>
        <div className={title}>Tutorials</div>
        <Link href="/doc/quick-start">
          <div className={content}>Quick Start</div>
        </Link>
        <Link href="/doc/information">
          <div className={content}>Information</div>
        </Link>
      </div>
    </div>
  );
}
