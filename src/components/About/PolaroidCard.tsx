"use client";
import cx from "classnames";
import { CldImage } from "next-cloudinary";
import FadeInSection from "../General/FadeInSection";
import style from "./PolaroidCard.module.css";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

interface PolaroidCardProps {
  customDivClass?: string;
  customCardClass?: string;
  imageUrl: string;
  onClick?: () => void;
  text?: string;
}

const PolaroidCard = (props: PolaroidCardProps) => {
  const { customDivClass, customCardClass, imageUrl, onClick, text } = props;

  return (
    <div
      className={cx(
        onClick && "cursor-pointer",
        customDivClass && customDivClass
      )}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <FadeInSection>
        <Card
          className={cx(
            "rounded w-full",
            style.polaroid,
            customCardClass && customCardClass
          )}
        >
          <CardHeader className="h-80 rounded" floated={false} shadow>
            <CldImage
              className="h-full object-center object-cover w-full"
              alt="image"
              height={600}
              loading="lazy"
              priority={false}
              src={imageUrl}
              width={600}
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="font-handwriting font-normal mb-2 text-gray-900 text-3xl"
            >
              {text}
            </Typography>
          </CardBody>
        </Card>
      </FadeInSection>
    </div>
  );
};

export default PolaroidCard;
