import { AddCircle } from "../../assets/Icon";

interface Props {
  type: string;
  withButton: boolean;
  children?: string;
}

export const Alert = ({ type, withButton, children }: Props) => {
  const defaultStyle =
    "w-[300px] flex justify-between items-center px-4 py-3 rounded-lg";

  const color = (type: string) => {
    if (type === "Default") return "bg-sub-2 text-main";
    else if (type === "Error") return "bg-red-1 text-red-2";
    else return "";
  };

  const iconColor = (type: string) => {
    if (type === "Default") return "fill-main";
    else if (type === "Error") return "fill-red-2";
    else return "";
  };

  return (
    <div className={`${defaultStyle} ${color(type)}`}>
      {children}
      {withButton && (
        <AddCircle width="15" height="15" className={iconColor(type)} />
      )}
    </div>
  );
};
