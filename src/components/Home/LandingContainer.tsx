import cx from "classnames";
import Navbar from "@/components/Home/Navbar";
import LandingContent from "@/components/Home/LandingContent";
import styles from "@/css/Home.module.css";

const LandingContainer = () => (
  <div
    className={cx(
      "min-h-screen flex flex-col items-center",
      styles.backgroundGradient
    )}
  >
    <Navbar />
    <LandingContent />
  </div>
);

export default LandingContainer;
