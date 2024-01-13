import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const CodeBox: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} font-light bg-zinc-800 text-zinc-100 text-sm px-5 py-4 rounded-xl`}
    >
      {children}
    </div>
  );
};

export default CodeBox;
