"use client";

import { IconButton } from "@material-tailwind/react";

interface CarouselButtonProps {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
  singleItemCarousel: boolean;
}

const CarouselButton = (props: CarouselButtonProps) => {
  const { direction, disabled, onClick, singleItemCarousel } = props;

  if (singleItemCarousel) return null;
  return (
    <IconButton
      variant="text"
      size="lg"
      onClick={onClick}
      disabled={disabled}
      className={`!absolute !${direction}-4 top-2/4 -translate-y-2/4 rounded-full bg-gray-900/10 text-white hover:bg-gray-900/20`}
    >
      <i className={`fa-solid fa-chevron-${direction} cursor-pointer`} />
    </IconButton>
  );
};

export default CarouselButton;
