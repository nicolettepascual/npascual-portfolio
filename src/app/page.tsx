import cx from "classnames";
import LandingContent from "@/components/Home/LandingContent";
import styles from "@/css/Home.module.css";

export default function Home() {
  return (
    <div
      className={cx(
        "min-h-screen flex items-center justify-center py-10 px-3 sm:px-5",
        styles.backgroundGradient
      )}
    >
      <LandingContent />
    </div>
  );
}
