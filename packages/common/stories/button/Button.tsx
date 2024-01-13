import { MouseEvent, ReactNode } from "react";
import { AddCircle } from "../../assets/Icon";

interface Props {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  type?: string;
  size?: "small" | "medium" | "large";
}

const Button: React.FC<Props> = ({ children, onClick, type, size }: Props) => {
  const fontSize = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-xl",
  };

  const svgSize = {
    small: "12",
    medium: "14",
    large: "18",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-zinc-800 text-white ${
        fontSize[size || "medium"]
      } tab:text-sm px-3 py-2 rounded hover:bg-green-600 transition-colors flex items-center`}
    >
      {(type === "WithIcon" || type === "IconOnly") && (
        <AddCircle
          width={svgSize[size || "medium"]}
          height={svgSize[size || "medium"]}
          className={`fill-white ${type === "WithIcon" ? "mr-1" : ""}`}
        />
      )}
      {type !== "IconOnly" && children}
    </button>
  );
};

export default Button;
