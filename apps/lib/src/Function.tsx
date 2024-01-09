import React, { RefCallback, useRef } from "react";

export default function Function() {
  const scrollRef = useRef<HTMLElement[]>([]);

  const index = (i: number): RefCallback<HTMLElement> => {
    return (el: HTMLElement) => {
      if (el) {
        scrollRef.current[i] = el as HTMLElement;
      }
    };
  };

  const handleScrollView = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const name = target.innerText;
    const category: Record<string, number> = {
      One: 0,
      Two: 1,
      Three: 2,
    };
    scrollRef.current[category[name]]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div onClick={handleScrollView}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </div>
      <div>
        <div
          ref={index(0)}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          hello...
        </div>
        <div
          ref={index(1)}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          hihi
        </div>
        <div
          ref={index(2)}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          it's three lol
        </div>
      </div>
    </>
  );
}
