interface Props {
  type: string;
  colored: boolean;
}

const Shadow: React.FC<Props> = ({ type, colored }: Props) => {
  const shadowType = (type: string) => {
    if (type === "Default") {
      if (colored) {
        return "shadow-color";
      } else {
        return "shadow";
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

export default Shadow;
