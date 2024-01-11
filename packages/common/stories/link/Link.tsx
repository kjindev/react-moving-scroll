interface Props {
  children?: string;
}

export const Link = ({ children }: Props) => {
  return <div className="cursor-pointer   hover:text-main">{children}</div>;
};
