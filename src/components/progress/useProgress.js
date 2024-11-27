import { useEffect, useState } from "react";

// https://javascript.info/size-and-scroll-window#width-height-of-the-document
const getScrollHeight = () =>
  Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

const getScrollPercentage = () =>
  Math.round(
    (100 * window.scrollY) /
      (getScrollHeight() - document.documentElement.clientHeight)
  );

export const useProgress = () => {
  const [progress, setProgress] = useState(() => getScrollPercentage());

  useEffect(() => {
    const onWindowScroll = () => {
      setProgress(getScrollPercentage);
    };

    window.addEventListener("scroll", onWindowScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  return progress;
};
