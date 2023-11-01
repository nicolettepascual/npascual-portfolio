import cx from "classnames";
import LandingContent from "@/components/Home/LandingContent";
import styles from "./LandingContainer.module.css";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";
import { ParticleBackgroundConfig } from "@/config/particleBgConfig";

const LandingContainer = () => {
  const particlesInit = async (main: Engine) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div id="top" className={cx("flex min-h-screen flex-col items-center")}>
      <Particles
        id="particles-here"
        init={particlesInit}
        options={ParticleBackgroundConfig as ISourceOptions}
      />
      <div className={styles.backgroundGradient} />
      <LandingContent />
    </div>
  );
};

export default LandingContainer;
