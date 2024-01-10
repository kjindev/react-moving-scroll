import React from "react";
import { useScroll } from "./module";

export default function Function() {
  const { handleScroll, ref } = useScroll();
  const list = ["name1", "name2", "name3"];

  return (
    <div>
      <div onClick={(event) => handleScroll(event, list)}>
        {list.map((value: string, index: number) => (
          <div key={index}>{value}</div>
        ))}
      </div>
      <div>
        <div
          ref={ref(0)}
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
          ref={ref(1)}
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
          ref={ref(2)}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          it's three
        </div>
      </div>
    </div>
  );
}
