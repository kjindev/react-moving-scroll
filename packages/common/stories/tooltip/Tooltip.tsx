import { useState } from "react";

interface Props {
  children?: string;
}

const Tooltip: React.FC<Props> = ({ children }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="w-[300px] h-[100px] flex justify-center items-center relative cursor-default">
      <div
        className="test"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        Hover
      </div>
      <div
        className={
          isHover
            ? "translate-x-[60%] translate-y-[-80%] absolute px-3 py-2 rounded-xl bg-zinc-800 text-green-600 text-sm"
            : "hidden"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
