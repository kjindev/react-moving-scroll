interface Props {
  children?: string;
}

export const Link: React.FC<Props> = ({ children }: Props) => {
  return <div className="cursor-pointer hover:text-main">{children}</div>;
};
