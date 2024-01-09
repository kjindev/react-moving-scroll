import { useScrollRef } from "./moving";

export default function Function() {
  const { handleScrollView, ref } = useScrollRef();
  const list = ["name1", "name2", "name3"];

  return (
    <>
      <div onClick={(event) => handleScrollView(event, list)}>
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
    </>
  );
}
