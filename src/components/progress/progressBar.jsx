import classNames from "classnames";
import { useProgress } from "./useProgress";
import styles from "./progressBar.module.css";

export const ProgressBar = () => {
  const progress = useProgress();
  return (
    <div className={styles.progressBarContainer}>
      <div
        className={classNames(styles.progressBar, {
          [styles.progressBar_full]: progress === 100,
        })}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
