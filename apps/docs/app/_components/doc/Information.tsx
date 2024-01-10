import React from "react";
import { robotoBold } from "../../../util/font";

export default function Information() {
  return (
    <div className="pt-6">
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ What does Scroll Moving support?
        </div>
        <div className="text-sm py-3 text-justify leading-7">
          Scroll Moving supports <span className="font-bold">TypeScript</span>.
          You can use it in <span className="font-bold">React</span> and{" "}
          <span className="font-bold">Next.js</span>, and also, it supports{" "}
          <span className="font-bold">CommonJS</span> and{" "}
          <span className="font-bold">ESModule</span>. So, don't hesitate to add
          Scroll Moving in your project!
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ Lastest Version?
        </div>
        <div className="text-sm py-3 text-justify leading-7">
          The lastest version is 1.0.1.
        </div>
      </div>
    </div>
  );
}
