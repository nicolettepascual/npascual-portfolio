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
        customDivClass && customDivClass,
      )}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <FadeInSection>
        <Card
          className={cx(
            "w-full rounded",
            style.polaroid,
            customCardClass && customCardClass,
          )}
        >
          <CardHeader className="h-80 rounded" floated={false} shadow>
            <CldImage
              className="h-full w-full object-cover object-center"
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
              className="mb-2 font-handwriting text-3xl font-normal text-gray-900"
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
