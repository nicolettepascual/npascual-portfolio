import { Carousel } from "@material-tailwind/react";
import { CldImage } from "next-cloudinary";
import cx from "classnames";
import CarouselButton from "./CarouselButton";

interface MaterialCarouselProps {
  images: string[];
  overlayContent?: React.ReactNode;
}

const CarouselImage = ({ image }: { image: string }) => (
  <CldImage
    className={cx(
      "min-h-96 max-h-[50vh] w-full object-contain md:max-h-[70vh]",
    )}
    alt={image}
    height={600}
    loading="lazy"
    priority={false}
    src={image}
    width={600}
  />
);

const MaterialCarousel = (props: MaterialCarouselProps) => {
  const { images, overlayContent } = props;
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => {
        if (length === 1) return null;
        return (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] focus:outline-none ${
                  activeIndex === i ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        );
      }}
      nextArrow={({ loop, handleNext, lastIndex }) => (
        <CarouselButton
          direction={"right"}
          disabled={!loop && lastIndex}
          onClick={handleNext}
          singleItemCarousel={images.length === 1}
        />
      )}
      prevArrow={({ loop, handlePrev, firstIndex }) => (
        <CarouselButton
          direction={"left"}
          disabled={!loop && firstIndex}
          onClick={handlePrev}
          singleItemCarousel={images.length === 1}
        />
      )}
    >
      {overlayContent ? (
        <div className="relative w-full">
          {images.map((image, index) => (
            <CarouselImage key={`${image}_${index}`} image={image} />
          ))}
          {overlayContent && (
            <div className="absolute inset-0 grid w-full place-items-center bg-black/75">
              {overlayContent}
            </div>
          )}
        </div>
      ) : (
        images.map((image, index) => (
          <CarouselImage key={`${image}_${index}`} image={image} />
        ))
      )}
    </Carousel>
  );
};

export default MaterialCarousel;
