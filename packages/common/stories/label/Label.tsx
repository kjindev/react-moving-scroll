import { AddCircle } from "../../assets/Icon";

interface Props {
  type: string;
  children?: string;
}

const Label: React.FC<Props> = ({ type, children }: Props) => {
  return (
    <div className="flex items-center text-sm px-2 py-1 rounded-xl bg-zinc-200">
      {type === "WithIcon" && (
        <AddCircle width="15" height="15" className="fill-black" />
      )}
      <div className={type === "WithIcon" ? "pl-1 pb-0.5" : "pb-0.5"}>
        {children}
      </div>
    </div>
  );
};

export default Label;
