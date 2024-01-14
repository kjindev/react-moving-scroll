import { RefCallback } from "react";
export default function useScroll(): {
    ref: (i: number) => RefCallback<HTMLElement>;
    handleScroll: (event: React.MouseEvent<HTMLElement>, list: string[]) => void;
};
