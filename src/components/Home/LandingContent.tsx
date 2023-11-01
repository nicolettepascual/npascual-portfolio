"use client";
import cx from "classnames";
import { landingContentData } from "@/config/config";
import styles from "@/css/Home.module.css";

const LandingContent = () => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-4xl text-white">
        <p className="text-s text-center leading-relaxed">{`It's me. Hi, I'm`}</p>
        <p className="text-center font-handwriting text-8xl md:text-9xl">
          {landingContentData.title}
        </p>
        <h6 className="flex items-center text-white">
          <span className="relative flex h-6 w-full overflow-hidden text-center">
            {landingContentData.subtitles.map((subtitle, index) => (
              <span
                key={index}
                className={cx(
                  "absolute h-full w-full translate-y-full leading-4 text-white",
                  styles.subtitleTextSpan,
                )}
              >
                {subtitle}
              </span>
            ))}
          </span>
        </h6>
      </div>
    </div>
  );
};

export default LandingContent;
