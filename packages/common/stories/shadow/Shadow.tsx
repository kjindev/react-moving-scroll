interface Props {
  type: string;
  colored: boolean;
}

export const Shadow = ({ type, colored }: Props) => {
  const shadowType = (type: string) => {
    if (type === "Default") {
      if (colored) {
        return "shadow-md-color";
      } else {
        return "shadow-md";
      }
    } else if (type === "Large") {
      if (colored) {
        return "shadow-lg-color";
      } else {
        return "shadow-lg";
      }
    }
  };
  return (
    <div
      className={`w-[120px] h-[120px] bg-white rounded-xl ${shadowType(type)}`}
    ></div>
  );
};
