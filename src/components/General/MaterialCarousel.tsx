import { Carousel } from "@material-tailwind/react";
import { CldImage } from "next-cloudinary";
import cx from "classnames";
import style from "./MaterialCarousel.module.css";

interface MaterialCarouselProps {
  images: string[];
}

const MaterialCarousel = (props: MaterialCarouselProps) => {
  const { images } = props;
  return (
    <Carousel className="rounded-xl">
      {images.map((image, index) => (
        <CldImage
          key={`${image}_${index}`}
          className={cx("object-contain w-full min-h-96", style.carouselImage)}
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
