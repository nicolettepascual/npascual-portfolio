"use client";
import { CldImage } from "next-cloudinary";

const PolaroidCard = ({
  imageUrl,
  text,
}: {
  imageUrl: string;
  text?: string;
}) => {
  return (
    <div className="flex">
      <div
        className={`flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl p-5 polaroid animate-fade-up`}
      >
        <div className="">
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
  );
};

export default PolaroidCard;
