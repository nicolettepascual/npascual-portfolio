"use client";

import { info } from "@/config/config";
import { Icon } from "@iconify/react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="w-full bg-white md:p-8">
      <hr className="my-2 border-blue-gray-50" />
      <div className="my-6 md:mb-0 md:mt-6">
        <div className="flex items-center justify-center">
          <Typography color="blue-gray" className="text-center font-normal">
            Made with
          </Typography>
          <span className="ml-2 flex items-center justify-center gap-1">
            <Icon className="text-xl" icon="skill-icons:react-dark" />
            <Icon className="text-xl" icon="devicon:nextjs" />
            <Icon className="text-lg" icon="logos:tailwindcss-icon" />
          </span>
        </div>
        <div className="flex items-center justify-center">
          <Typography
            color="blue-gray"
            className="text-center font-normal leading-none"
          >
            Made by
          </Typography>
          <a href={info.footerLink} target="_blank">
            <Typography
              color="blue-gray"
              className="ml-1 rounded-md bg-main-blue px-1 text-center font-normal text-white"
            >
              {info.name}
            </Typography>
          </a>
          <Typography color="blue-gray" className="text-center font-normal">
            . All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
