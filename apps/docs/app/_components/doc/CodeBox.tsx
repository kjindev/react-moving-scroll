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
        <code className="text-zinc-500 italic">{`  // your code`}</code>
        <div></div>
        <code className="text-yellow-300">{`}`}</code>
      </pre>
    </div>
  );
}
