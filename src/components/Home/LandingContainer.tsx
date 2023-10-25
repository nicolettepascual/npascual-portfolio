import cx from "classnames";
import LandingContent from "@/components/Home/LandingContent";
import styles from "@/css/Home.module.css";

const LandingContainer = () => (
  <div
    id="top"
    className={cx(
      "flex min-h-screen flex-col items-center",
      styles.backgroundGradient,
    )}
  >
    <LandingContent />
  </div>
);

export default LandingContainer;
