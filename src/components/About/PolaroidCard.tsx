"use client";
import { useRef } from "react";
import cx from "classnames";
import { CldImage } from "next-cloudinary";
import FadeInSection from "../General/FadeInSection";
import style from "./PolaroidCard.module.css";

interface PolaroidCardProps {
  imageUrl: string;
  onClick?: () => void;
  text?: string;
}

const PolaroidCard = (props: PolaroidCardProps) => {
  const { imageUrl, onClick, text } = props;
  const aboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={`${onClick && "cursor-pointer"}`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <FadeInSection>
        <div className="flex">
          <div
            ref={aboutRef}
            className={cx(
              "flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl p-5",
              style.polaroid
            )}
          >
            <div className="w-full h-auto">
              <CldImage
                alt="image"
                height="600"
                loading="lazy"
                priority={false}
                src={imageUrl}
                width="600"
              />
            </div>
            <div className="text-center mt-5">
              {text && (
                <p className="text-xl sm:text-2xl font-semibold font-handwriting text-gray-900">
                  {text}
                </p>
              )}
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default PolaroidCard;
