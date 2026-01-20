"use client";

import { info } from "@/config/config";
import { Icon } from "@iconify/react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // <footer className="w-full bg-white py-8 md:p-8">
    //   <hr className="my-2 border-blue-gray-50" />
    //   <div className="my-6 md:mb-0 md:mt-6">
    //     <div className="flex items-center justify-center">
    //       <Typography color="blue-gray" className="text-center font-normal">
    //         Made with
    //       </Typography>
    //       <span className="ml-2 flex items-center justify-center gap-1">
    //         <Icon className="text-xl" icon="skill-icons:react-dark" />
    //         <Icon className="text-xl" icon="devicon:nextjs" />
    //         <Icon className="text-lg" icon="logos:tailwindcss-icon" />
    //       </span>
    //     </div>
    //     <div className="flex items-center justify-center">
    //       <Typography
    //         color="blue-gray"
    //         className="text-center font-normal leading-none"
    //       >
    //         Made by
    //       </Typography>
    //       <a href={info.footerLink} target="_blank">
    //         <Typography
    //           color="blue-gray"
    //           className="ml-1 rounded-md bg-main-blue px-1 text-center font-normal text-white"
    //         >
    //           {info.name}
    //         </Typography>
    //       </a>
    //       <Typography color="blue-gray" className="text-center font-normal">
    //         . All rights reserved.
    //       </Typography>
    //     </div>
    //   </div>
    // </footer>
    <footer className="border-t border-border bg-secondary/50 p-12">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          <span className="ml-2 flex items-center justify-center gap-1">
            © {currentYear} Portfolio. Crafted with{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              aria-label="React"
            >
              <Icon className="text-xl" icon="skill-icons:react-dark" />
            </a>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              aria-label="Next JS"
            >
              <Icon className="text-xl" icon="devicon:nextjs" />
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              aria-label="Tailwind CSS"
            >
              <Icon className="text-lg" icon="logos:tailwindcss-icon" />
            </a>
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              aria-label="Lovable"
            >
              <Icon className="text-lg" icon="fluent-color:heart-20" />
            </a>
          </span>
        </p>
        <span className="flex items-center text-sm italic text-muted-foreground">
          <p
            color="blue-gray"
            className="text-center text-sm font-normal leading-none"
          >
            Made by
          </p>
          <a href={info.footerLink} target="_blank">
            <p
              color="blue-gray"
              className="ml-1 rounded-md bg-main-blue px-1 text-center text-sm font-normal text-white transition-opacity hover:opacity-60"
            >
              {info.name}
            </p>
          </a>
          <p color="blue-gray" className="text-center text-sm font-normal">
            . All rights reserved.
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
