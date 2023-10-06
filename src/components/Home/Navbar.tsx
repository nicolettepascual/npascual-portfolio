"use client";
import { useState } from "react";
import cx from "classnames";
import Link from "next/link";

const Navbar = () => {
  const [showMenuNavbar, setShowMenuNavbar] = useState<boolean>(false);

  const menu = [
    { name: "About", url: "/" },
    { name: "Projects", url: "/" },
    { name: "Skills", url: "/" },
    { name: "Experience", url: "/" },
    { name: "Contact", url: "/" },
  ];

  return (
    <nav
      className={cx(
        "w-full absolute text-gray md:bg-transparent md:text-white transition-all",
        showMenuNavbar ? "bg-gray-100" : "bg-transparent"
      )}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 transition-all">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* Main Icon */}
            <a href="#" className="">
              <div className="avatar">
                <div className="w-16 rounded">
                  {/* <img src="" /> */}
                  <h1 className="text-xl text-white font-bold">N</h1>
                </div>
              </div>
            </a>
            {/* Menu button */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-500 rounded-md outline-none"
                onClick={() => setShowMenuNavbar(!showMenuNavbar)}
              >
                {showMenuNavbar ? (
                  <i
                    className={cx(
                      "fa-solid fa-xmark",
                      showMenuNavbar ? "text-gray-500" : "text-white"
                    )}
                  />
                ) : (
                  <i
                    className={cx(
                      "fa-solid fa-bars",
                      showMenuNavbar ? "text-gray-500" : "text-white"
                    )}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Menu */}
        <div>
          <div
            className={cx(
              "flex-1 justify-self-center pb-3 mt-8 md:h-full md:opacity-100 md:pb-0 md:mt-0 transition-all duration-500 ease-out",
              showMenuNavbar
                ? "h-full opacity-100"
                : "h-0 opacity-0 overflow-hidden"
            )}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menu.map(({ name, url }, index) => (
                <li key={index}>
                  <Link href={url}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
