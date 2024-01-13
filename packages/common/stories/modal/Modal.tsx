import { Info } from "../../assets/Icon";

interface Props {
  withIcon: boolean;
  withButton: boolean;
  children?: string;
}

const Modal: React.FC<Props> = ({ children, withIcon, withButton }: Props) => {
  return (
    <div className="w-[270px] flex flex-col px-7 py-5 rounded-xl bg-white shadow-md">
      {withIcon && <Info width="50" height="50" className="fill-main" />}
      <div className="mt-4 text-xl font-bold">Modal Title</div>
      <div className="text-gray-2 leading-6 my-5 font-extralight">
        {children}
      </div>
      {withButton && <Button />}
    </div>
  );
};

const Button = () => {
  const defaultStyle = "self-center px-3 py-2 rounded-xl text-sm";
  const bgColor = "bg-main";
  const color = "text-white";
  const cursor = "cursor-pointer";

  return (
    <div className={`${defaultStyle} ${bgColor} ${color} ${cursor}`}>Check</div>
  );
};

export default Modal;
