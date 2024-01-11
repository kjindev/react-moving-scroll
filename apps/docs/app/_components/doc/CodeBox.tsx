export default function CodeBox() {
  return (
    <div>
      <pre className="text-sm bg-zinc-800 text-zinc-100 font-light px-5 py-4 rounded-xl leading-7 overflow-x-scroll">
        <div>
          <span className="text-cyan-300 italic">{`import `}</span>
          <span className="text-yellow-300">{`{ `}</span>
          <span>{`useScroll `}</span>
          <span className="text-yellow-300">{`} `}</span>
          <span className="text-cyan-300 italic">{`from `}</span>
          <span className="text-cyan-300">{`"`}</span>
          <span className="text-lime-400">{`scroll-moving`}</span>
          <span className="text-cyan-300">{`"; `}</span>
        </div>
        <div>
          <span className="text-cyan-300 italic">{`export default `}</span>
          <span className="text-purple-400">{`function `}</span>
          <span className="text-blue-400">{`App`}</span>
          <span className="text-yellow-300">{`() {`}</span>
        </div>

        <div>
          <span className="text-purple-400">{`  const {`}</span>
          <span className="text-red-400">{` handleScroll, ref `}</span>
          <span className="text-purple-400">{`} =`}</span>
          <span className="text-blue-400">{` useScroll`}</span>
          <span className="text-purple-400">{`()`}</span>
          <span className="text-cyan-300">{`;`}</span>
        </div>

        <div>
          <span className="text-purple-400">{`  const `}</span>
          <span className="text-red-400">{` list `}</span>
          <span className="text-purple-400">{` = [`}</span>
          <span className="text-cyan-300">{`"`}</span>
          <span className="text-lime-400">{`Click Me 1`}</span>
          <span className="text-cyan-300">{`", `}</span>
          <span className="text-cyan-300">{`"`}</span>
          <span className="text-lime-400">{`Click Me 2`}</span>
          <span className="text-cyan-300">{`" `}</span>
          <span className="text-purple-400">{`]`}</span>
          <span className="text-cyan-300">{`;`}</span>
        </div>

        <div>
          <span className="text-cyan-300">{`    return `}</span>
          <span className="text-purple-300">{`(`}</span>
        </div>

        <div>
          <span className="text-cyan-300">{`        <`}</span>
          <span className="text-red-400">{`div`}</span>
          <span className="text-cyan-300">{`>`}</span>
        </div>

        <div>
          <span className="text-cyan-300">{`           <`}</span>
          <span className="text-red-400">{`div`}</span>
          <span className="text-purple-400 italic">{` onClick=`}</span>
          <span className="text-blue-300">{`{`}</span>
          <span className="text-yellow-300">{`(`}</span>
          <span className="text-red-400">{`event`}</span>
          <span className="text-yellow-300">{`)`}</span>
          <span className="text-purple-300">{` => `}</span>
          <span className="text-blue-300">{`handleScroll`}</span>
          <span className="text-yellow-300">{`(`}</span>
          <span>{`event`}</span>
          <span className="text-cyan-400">{`, `}</span>
          <span>{`list`}</span>
          <span className="text-yellow-300">{`)`}</span>
          <span className="text-blue-300">{`}`}</span>
          <span className="text-cyan-300">{`>`}</span>
        </div>

        <div>
          <span className="text-cyan-300">{`              <`}</span>
          <span className="text-red-400">{`button`}</span>
          <span className="text-cyan-300">{`>`}</span>
          <span>{`Click Me 1`}</span>
          <span className="text-cyan-300">{`</`}</span>
          <span className="text-red-400">{`button`}</span>
          <span className="text-cyan-300">{`>`}</span>
        </div>

        <div>
          <span className="text-cyan-300">{`              <`}</span>
          <span className="text-red-400">{`button`}</span>
          <span className="text-cyan-300">{`>`}</span>
          <span>{`Click Me 2`}</span>
          <span className="text-cyan-300">{`</`}</span>
          <span className="text-red-400">{`button`}</span>
        </div>

        <div>
          <span className="text-cyan-300">{`           </`}</span>
          <span className="text-red-400">{`div`}</span>
          <span className="text-cyan-300">{`>`}</span>
        </div>

        <div>
          <span className="text-cyan-300">{`           <`}</span>
          <span className="text-red-400">{`div`}</span>
          <span className="text-purple-400 italic">{` ref=`}</span>
          <span className="text-blue-300">{`{`}</span>
          <span className="text-blue-300">{`ref`}</span>
          <span className="text-yellow-300">{`(`}</span>
          <span className="text-orange-400">{`0`}</span>
          <span className="text-yellow-300">{`)`}</span>
          <span className="text-blue-300">{`}`}</span>
          <span className="text-purple-400 italic">{` style=`}</span>
          <span className="text-blue-300">{`{`}</span>
          <span className="text-yellow-300">{`{`}</span>
          <span>{`  height:  `}</span>
          <span className="text-cyan-300">{`"`}</span>
          <span className="text-lime-400">{`100vh`}</span>
          <span className="text-cyan-300">{`"  `}</span>
          <span className="text-yellow-300">{`}`}</span>
          <span className="text-blue-300">{`}`}</span>

          <span className="text-cyan-300">{`>`}</span>
          <span>{`Content 1`}</span>
          <span className="text-cyan-300">{`</`}</span>
          <span className="text-red-400">{`div`}</span>
          <span className="text-cyan-300">{`>`}</span>
        </div>

        <div>
          <span className="text-cyan-300">{`           <`}</span>
          <span className="text-red-400">{`div`}</span>
          <span className="text-purple-400 italic">{` ref=`}</span>
          <span className="text-blue-300">{`{`}</span>
          <span className="text-blue-300">{`ref`}</span>
          <span className="text-yellow-300">{`(`}</span>
          <span className="text-orange-400">{`1`}</span>
          <span className="text-yellow-300">{`)`}</span>
          <span className="text-blue-300">{`}`}</span>

          <span className="text-purple-400 italic">{` style=`}</span>
          <span className="text-blue-300">{`{`}</span>
          <span className="text-yellow-300">{`{`}</span>
          <span>{`  height:  `}</span>
          <span className="text-cyan-300">{`"`}</span>
          <span className="text-lime-400">{`100vh`}</span>
          <span className="text-cyan-300">{`"  `}</span>
          <span className="text-yellow-300">{`}`}</span>
          <span className="text-blue-300">{`}`}</span>

          <span className="text-cyan-300">{`>`}</span>
          <span>{`Content 2`}</span>
          <span className="text-cyan-300">{`</`}</span>
          <span className="text-red-400">{`div`}</span>
          <span className="text-cyan-300">{`>`}</span>
        </div>

        <div>
          <span className="text-cyan-300">{`        </`}</span>
          <span className="text-red-400">{`div`}</span>
          <span className="text-cyan-300">{`>`}</span>
        </div>

        <div>
          <span className="text-purple-300">{`    )`}</span>
          <span className="text-cyan-300">{`;`}</span>
        </div>

        <div>
          <span className="text-yellow-300">{`}`}</span>
        </div>
      </pre>
    </div>
  );
}
