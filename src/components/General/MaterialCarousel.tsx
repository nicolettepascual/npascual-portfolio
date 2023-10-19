import { Carousel } from "@material-tailwind/react";
import { CldImage } from "next-cloudinary";
import cx from "classnames";
import style from "./MaterialCarousel.module.css";
import CarouselButton from "./CarouselButton";

interface MaterialCarouselProps {
  images: string[];
}

const MaterialCarousel = (props: MaterialCarouselProps) => {
  const { images } = props;
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
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
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
      {images.map((image, index) => (
        <CldImage
          key={`${image}_${index}`}
          className={cx("min-h-96 w-full object-contain", style.carouselImage)}
          alt={`${image}_${index}`}
          height={600}
          loading="lazy"
          priority={false}
          src={image}
          width={600}
        />
      ))}
    </Carousel>
  );
};

export default MaterialCarousel;
