import { useProgress } from "./useProgress";

export const ProgressBar = () => {
  const progress = useProgress();
  return (
    <div style={{ width: "100%", position: "sticky", top: "0" }}>
      <div
        style={{ width: `${progress}%`, height: "8px", background: "grey" }}
      ></div>
    </div>
  );
};
