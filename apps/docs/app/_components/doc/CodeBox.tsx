export default function CodeBox() {
  return (
    <div>
      <pre className="text-sm bg-zinc-800 text-zinc-100 font-light px-5 py-4 rounded-xl leading-7">
        <code>
          <span className="text-cyan-300 italic">{`import `}</span>
          <span className="text-yellow-300">{`{ `}</span>
          <span>{`useScroll `}</span>
          <span className="text-yellow-300">{`} `}</span>
          <span className="text-cyan-300 italic">{`from `}</span>
          <span className="text-cyan-300">{`"`}</span>
          <span className="text-lime-400">{`scroll-moving`}</span>
          <span className="text-cyan-300">{`"; `}</span>
        </code>
        <div></div>
        <code className="text-cyan-300 italic">{`export default `}</code>
        <code className="text-purple-400">{`function `}</code>
        <code className="text-blue-400">{`App`}</code>
        <code className="text-yellow-300">{`() {`}</code>
        <div></div>
        <code className="text-purple-400">{`  const {`}</code>
        <code className="text-red-400">{` handleScroll, ref `}</code>
        <code className="text-purple-400">{`} =`}</code>
        <code className="text-blue-400">{` useScroll`}</code>
        <code className="text-purple-400">{`()`}</code>
        <code className="text-cyan-300">{`;`}</code>
        <div></div>
        <code className="text-purple-400">{`  const `}</code>
        <code className="text-red-400">{` list `}</code>
        <code className="text-purple-400">{` = [`}</code>
        <code className="text-cyan-300">{`"`}</code>
        <code className="text-lime-400">{`Click Me 1`}</code>
        <code className="text-cyan-300">{`", `}</code>
        <code className="text-cyan-300">{`"`}</code>
        <code className="text-lime-400">{`Click Me 2`}</code>
        <code className="text-cyan-300">{`" `}</code>
        <code className="text-purple-400">{`]`}</code>
        <code className="text-cyan-300">{`;`}</code>
        <div></div>
        <code className="text-cyan-300">{`    return `}</code>
        <code className="text-purple-300">{`(`}</code>
        <div></div>
        <code className="text-cyan-300">{`        <`}</code>
        <code className="text-red-400">{`div`}</code>
        <code className="text-cyan-300">{`>`}</code>
        <div></div>

        <code className="text-cyan-300">{`           <`}</code>
        <code className="text-red-400">{`button`}</code>
        <code className="text-purple-400 italic">{` onClick=`}</code>
        <code className="text-blue-300">{`{`}</code>
        <code className="text-yellow-300">{`(`}</code>
        <code className="text-red-400">{`event`}</code>
        <code className="text-yellow-300">{`)`}</code>
        <code className="text-purple-300">{` => `}</code>
        <code className="text-blue-300">{`handleScroll`}</code>
        <code className="text-yellow-300">{`(`}</code>
        <code>{`event`}</code>
        <code className="text-cyan-400">{`, `}</code>
        <code>{`list`}</code>
        <code className="text-yellow-300">{`)`}</code>
        <code className="text-blue-300">{`}`}</code>
        <code className="text-cyan-300">{`>`}</code>
        <code>{`Click Me 1`}</code>
        <code className="text-cyan-300">{`</`}</code>
        <code className="text-red-400">{`button`}</code>
        <code className="text-cyan-300">{`>`}</code>

        <div></div>

        <code className="text-cyan-300">{`           <`}</code>
        <code className="text-red-400">{`button`}</code>
        <code className="text-purple-400 italic">{` onClick=`}</code>
        <code className="text-blue-300">{`{`}</code>
        <code className="text-yellow-300">{`(`}</code>
        <code className="text-red-400">{`event`}</code>
        <code className="text-yellow-300">{`)`}</code>
        <code className="text-purple-300">{` => `}</code>
        <code className="text-blue-300">{`handleScroll`}</code>
        <code className="text-yellow-300">{`(`}</code>
        <code>{`event`}</code>
        <code className="text-cyan-400">{`, `}</code>
        <code>{`list`}</code>
        <code className="text-yellow-300">{`)`}</code>
        <code className="text-blue-300">{`}`}</code>
        <code className="text-cyan-300">{`>`}</code>
        <code>{`Click Me 2`}</code>
        <code className="text-cyan-300">{`</`}</code>
        <code className="text-red-400">{`button`}</code>
        <code className="text-cyan-300">{`>`}</code>

        <div></div>

        <code className="text-cyan-300">{`           <`}</code>
        <code className="text-red-400">{`div`}</code>
        <code className="text-purple-400 italic">{` ref=`}</code>
        <code className="text-blue-300">{`{`}</code>
        <code className="text-blue-300">{`ref`}</code>
        <code className="text-yellow-300">{`(`}</code>
        <code className="text-orange-400">{`0`}</code>
        <code className="text-yellow-300">{`)`}</code>
        <code className="text-blue-300">{`}`}</code>

        <code className="text-purple-400 italic">{` style=`}</code>
        <code className="text-blue-300">{`{`}</code>
        <code className="text-yellow-300">{`{`}</code>
        <code>{`  height:  `}</code>
        <code className="text-cyan-300">{`"`}</code>
        <code className="text-lime-400">{`100vh`}</code>
        <code className="text-cyan-300">{`"  `}</code>
        <code className="text-yellow-300">{`}`}</code>
        <code className="text-blue-300">{`}`}</code>

        <code className="text-cyan-300">{`>`}</code>
        <code>{`Content 1`}</code>
        <code className="text-cyan-300">{`</`}</code>
        <code className="text-red-400">{`div`}</code>
        <code className="text-cyan-300">{`>`}</code>

        <div></div>
        {/* <div style={{ height: "100vh" }}></div> */}

        <code className="text-cyan-300">{`           <`}</code>
        <code className="text-red-400">{`div`}</code>
        <code className="text-purple-400 italic">{` ref=`}</code>
        <code className="text-blue-300">{`{`}</code>
        <code className="text-blue-300">{`ref`}</code>
        <code className="text-yellow-300">{`(`}</code>
        <code className="text-orange-400">{`1`}</code>
        <code className="text-yellow-300">{`)`}</code>
        <code className="text-blue-300">{`}`}</code>

        <code className="text-purple-400 italic">{` style=`}</code>
        <code className="text-blue-300">{`{`}</code>
        <code className="text-yellow-300">{`{`}</code>
        <code>{`  height:  `}</code>
        <code className="text-cyan-300">{`"`}</code>
        <code className="text-lime-400">{`100vh`}</code>
        <code className="text-cyan-300">{`"  `}</code>
        <code className="text-yellow-300">{`}`}</code>
        <code className="text-blue-300">{`}`}</code>

        <code className="text-cyan-300">{`>`}</code>
        <code>{`Content 2`}</code>
        <code className="text-cyan-300">{`</`}</code>
        <code className="text-red-400">{`div`}</code>
        <code className="text-cyan-300">{`>`}</code>

        <div></div>

        <code className="text-cyan-300">{`        </`}</code>
        <code className="text-red-400">{`div`}</code>
        <code className="text-cyan-300">{`>`}</code>
        <div></div>
        <code className="text-purple-300">{`    )`}</code>
        <code className="text-cyan-300">{`;`}</code>
        <div></div>
        <code className="text-yellow-300">{`}`}</code>
      </pre>
    </div>
  );
}
