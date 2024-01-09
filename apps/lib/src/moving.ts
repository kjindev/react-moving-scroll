import { RefCallback, useRef } from "react";

export const useScrollRef = () => {
  const scrollRef = useRef<HTMLElement[]>([]);

  const ref = (i: number): RefCallback<HTMLElement> => {
    return (el: HTMLElement) => {
      if (el) {
        scrollRef.current[i] = el as HTMLElement;
      }
    };
  };

  const handleScrollView = (
    event: React.MouseEvent<HTMLElement>,
    list: string[]
  ) => {
    const target = event.target as HTMLElement;
    const name = target.innerText;
    const category: Record<string, number> = {};
    list.map((value: string, index: number) => {
      return (category[value] = index);
    });
    scrollRef.current[category[name]]?.scrollIntoView({ behavior: "smooth" });
  };

  return { scrollRef, ref, handleScrollView };
};
