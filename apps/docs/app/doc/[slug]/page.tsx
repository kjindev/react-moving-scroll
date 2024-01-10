"use client";

import { useParams } from "next/navigation";
import { robotoBold } from "../../../util/font";
import GettingStarted from "../../_components/doc/GettingStarted";
import QuickStart from "../../_components/doc/QuickStart";
import Information from "../../_components/doc/Information";

export default function Page() {
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

  const category = (slug: string) => {
    if (slug === "getting-started") {
      return "Introduction";
    } else {
      return "Tutorials";
    }
  };

  const content = (slug: string) => {
    if (slug === "getting-started") {
      return <GettingStarted />;
    } else if (slug === "quick-start") {
      return <QuickStart />;
    } else if (slug === "information") {
      return <Information />;
    }
  };

  return (
    <div className="w-[1000px] pt-[60px] pl-[270px]">
      <div className="px-10 py-9">
        <div className="text-sm">{category(slug as string)}</div>
        <div className={`${robotoBold.className} text-4xl`}>
          {title(slug as string)}
        </div>
        <div>{content(slug as string)}</div>
      </div>
    </div>
  );
}
