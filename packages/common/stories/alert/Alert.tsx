import AddCircle from "../assets/Icon";

interface Props {
  type?: string;
  children?: string;
  withButton?: boolean;
}

export const Alert = ({ type, withButton, children }: Props) => {
  const style =
    "w-[300px] flex justify-between items-center px-4 py-3 rounded-lg";

  if (type === "Error") {
    return (
      <div className={`${style} bg-red-1 text-red-2`}>
        {children}
        {withButton && <AddCircle width="15" height="15" fill="fill-red-2" />}
      </div>
    );
  } else {
    return (
      <div className={`${style} bg-sub-2 text-main`}>
        {children}
        {withButton && <AddCircle width="15" height="15" fill="fill-main" />}
      </div>
    );
  }
};
