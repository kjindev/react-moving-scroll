import AddCircle from "../assets/Icon";

interface Props {
  type?: string;
  Destructive?: boolean;
  size: "small" | "medium" | "large";
  children?: string;
}

export const Button = ({ type, size, Destructive, children }: Props) => {
  const fontSize = {
    small: "text-xs",
    medium: "text-base",
    large: "text-xl",
  };

  const svgSize = {
    small: "12",
    medium: "14",
    large: "18",
  };

  const defaultStyle = "flex items-center px-3 py-2 rounded-xl";
  const bgColor = Destructive ? "bg-gray-1" : "bg-main";
  const color = Destructive ? "text-gray-2" : "text-white";
  const cursor = Destructive ? "cursor-default" : "cursor-pointer";
  const iconColor = Destructive ? "fill-gray-2" : "fill-white";

  return (
    <div
      className={`${defaultStyle} ${bgColor} ${color} ${fontSize[size]} ${cursor}`}
    >
      {(type === "WithIcon" || type === "IconOnly") && (
        <AddCircle
          width={svgSize[size]}
          height={svgSize[size]}
          fill={iconColor}
        />
      )}
      {type !== "IconOnly" && (
        <span className={type === "WithIcon" ? "pl-1" : ""}>{children}</span>
      )}
    </div>
  );
  // }
};
