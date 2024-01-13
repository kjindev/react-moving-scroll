import { AddCircle } from "../../assets/Icon";

interface Props {
  type: string;
  children?: string;
}

export const Label: React.FC<Props> = ({ type, children }: Props) => {
  return (
    <div className="flex items-center text-sm px-3 py-2 rounded-xl bg-sub-2 text-main">
      {type === "WithIcon" && (
        <AddCircle width="15" height="15" className="fill-main" />
      )}
      <div className={type === "WithIcon" ? "pl-1 pb-0.5" : "pb-0.5"}>
        {children}
      </div>
    </div>
  );
};
