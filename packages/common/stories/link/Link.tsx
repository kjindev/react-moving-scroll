interface Props {
  children?: string;
}

const Link: React.FC<Props> = ({ children }: Props) => {
  return <div className="cursor-pointer hover:text-main">{children}</div>;
};

export default Link;
