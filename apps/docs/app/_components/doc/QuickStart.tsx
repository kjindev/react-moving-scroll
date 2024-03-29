import React from "react";
import { robotoBold } from "../../../util/font";
import CodeBlock from "./CodeBlock";

export default function QuickStart() {
  return (
    <div className="pt-6">
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ How to start?
        </div>
        <div className="text-sm py-3 text-justify">
          <CodeBlock />
          <div className="py-3 leading-7">
            Import<span className="font-bold"> useScroll</span> and get
            <span className="font-bold"> handleScroll</span> and
            <span className="font-bold"> ref.</span> The handleScroll is a
            function that provides scrolling and the ref is useRef for deciding
            where scroll should go. The function handleScroll would look for
            innerText that matches the text contained in the list.
          </div>
          <div className="py-2 leading-7">
            If you clicked <TextBox>Click Me 1</TextBox>, the scroll would move
            to <TextBox>Content 1</TextBox>. Also, if you clicked{" "}
            <TextBox>Click Me 2</TextBox>, the scroll would move to{" "}
            <TextBox>Content 2</TextBox>. The string array, list, correspond to
            ref. The list[0] correspond to ref(0), and list[1] correspond to
            ref(1).
          </div>
          <div className="py-2 leading-7">
            <span className="font-bold">Note:</span> If you used Next.js App
            Router, you should put 'use client' for using ref.
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>✅ handleScroll</div>
        <div className="text-sm py-3 leading-7">
          It's a function to provide smooth scrolling to specific contents. It
          has two props, <span className="font-bold">event</span> and{" "}
          <span className="font-bold">list</span>.
          <div className="flex w-full justify-between text-center bg-zinc-200 p-2 rounded-xl my-2 text-xs font-bold">
            <div className="w-[20%]">name</div>
            <div className="w-[40%]">type</div>
            <div className="w-[40%]">description</div>
          </div>
          <div className="flex w-full justify-between items-center text-center bg-zinc-100 p-2 rounded-xl my-2 text-xs">
            <div className="w-[20%]">event</div>
            <div className="w-[40%]">{`React.MouseEvent<HTMLElement>`}</div>
            <div className="w-[40%] text-start">
              The function, handleScroll, should make click event. Therefore,
              MouseEvent should be prop of handleScroll.
            </div>
          </div>
          <div className="flex w-full justify-between items-center text-center bg-zinc-100 p-2 rounded-xl my-2 text-xs">
            <div className="w-[20%]">list</div>
            <div className="w-[40%]">string array</div>
            <div className="w-[40%] text-start">
              It would be button list. You can decide what button would trigger
              scrolling event by this list.
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>✅ ref</div>
        <div className="text-sm py-3 leading-7">
          It's a reference that decide where scroll would go. You can use it the
          same way that using useRef. It has one parameter,{" "}
          <span className="font-bold">index.</span>
          <div className="flex w-full justify-between text-center bg-zinc-200 p-2 rounded-xl my-2 text-xs font-bold">
            <div className="w-[20%]">name</div>
            <div className="w-[40%]">type</div>
            <div className="w-[40%]">description</div>
          </div>
          <div className="flex w-full justify-between items-center text-center bg-zinc-100 p-2 rounded-xl my-2 text-xs">
            <div className="w-[20%]">index</div>
            <div className="w-[40%]">number</div>
            <div className="w-[40%] text-start">
              The ref would determine where scroll go. You can put index on ref
              on html tag, like {`<div>`} or something.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextBox({ children }: { children: string }) {
  return <span className="bg-zinc-200 p-1 rounded-lg text-xs">{children}</span>;
}
