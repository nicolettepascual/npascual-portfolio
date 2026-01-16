"use client";
import cx from "classnames";
import { landingContentData } from "@/config/config";
import styles from "./LandingContainer.module.css";

const LandingContent = () => {
  return (
    <div className="container relative z-10 mx-auto px-6 text-center">
      <p className="animate-fade-up text-muted-foreground mb-4 text-sm uppercase tracking-[0.3em]">
        {"It's me. Hi, I'm"}
      </p>
      <h1 className="animate-fade-up-delay-1 mb-6 font-serif text-5xl font-medium md:text-7xl lg:text-8xl">
        <span className="text-gradient-ocean">Nicolette</span>
        <br />
        <span className="text-foreground">Pascual</span>
      </h1>
      <h6 className="animate-fade-up-delay-2 text-muted-foreground mx-auto mb-12 max-w-xl text-lg font-light tracking-[0.2em] md:text-xl">
        <span className="relative flex h-6 w-full overflow-hidden text-center">
          {landingContentData.subtitles.map((subtitle, index) => (
            <span
              key={index}
              className={cx(
                "absolute h-full w-full translate-y-full font-sans leading-4 text-black",
                styles.subtitleTextSpan,
              )}
            >
              {subtitle}
            </span>
          ))}
        </span>
      </h6>
    </div>
  );
};

export default LandingContent;
